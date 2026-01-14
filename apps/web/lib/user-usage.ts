import { prisma } from "./prisma"
import { Plan } from "../prisma/generated/client"

export type FeatureType =
    | "EXPLANATION"
    | "REFACTORING"
    | "ERROR_ANALYSIS"
    | "SECURITY_SCAN"

const PLAN_LIMITS = {
    [Plan.FREE]: {
        EXPLANATION: 10, // / day
        REFACTORING: 5,  // / day
        ERROR_ANALYSIS: 10, // / day
        SECURITY_SCAN: 3,   // / week
        MAX_LINES: 100,
        API_REQUESTS_PER_MIN: 30,
    },
    [Plan.PRO]: {
        EXPLANATION: Infinity,
        REFACTORING: Infinity,
        ERROR_ANALYSIS: Infinity,
        SECURITY_SCAN: Infinity,
        MAX_LINES: 500,
        API_REQUESTS_PER_MIN: 120,
    },
}

export async function checkLimit(userId: string, feature: FeatureType): Promise<{ allowed: boolean; limit?: number; usage?: number }> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { plan: true },
    })

    if (!user) return { allowed: false }

    const limits = PLAN_LIMITS[user.plan]
    const limit = limits[feature]

    if (limit === Infinity) return { allowed: true }

    let userUsage = await prisma.userUsage.findUnique({
        where: { userId },
    })

    if (!userUsage) {
        userUsage = await prisma.userUsage.create({
            data: { userId },
        })
    }

    // Check resets
    const now = new Date()
    const lastDaily = new Date(userUsage.lastDailyReset)
    const lastWeekly = new Date(userUsage.lastWeeklyReset)

    let shouldUpdate = false
    const updateData: any = {}

    // Daily reset check (simple 24h check or calendar day? Assuming 24h rolling or start of day. 
    // Code implies comparing dates. Let's do simple "is different day" check for simplicity/robustness)
    if (now.getDate() !== lastDaily.getDate() || now.getMonth() !== lastDaily.getMonth() || now.getFullYear() !== lastDaily.getFullYear()) {
        updateData.explanationsCount = 0
        updateData.refactoringCount = 0
        updateData.errorAnalysisCount = 0
        updateData.lastDailyReset = now
        shouldUpdate = true
    }

    // Weekly reset check (7 days)
    const daysDiff = (now.getTime() - lastWeekly.getTime()) / (1000 * 3600 * 24)
    if (daysDiff >= 7) {
        updateData.securityScanCount = 0
        updateData.lastWeeklyReset = now
        shouldUpdate = true
    }

    if (shouldUpdate) {
        userUsage = await prisma.userUsage.update({
            where: { userId },
            data: updateData,
        })
    }

    let usageCount = 0
    switch (feature) {
        case "EXPLANATION": usageCount = userUsage.explanationsCount; break;
        case "REFACTORING": usageCount = userUsage.refactoringCount; break;
        case "ERROR_ANALYSIS": usageCount = userUsage.errorAnalysisCount; break;
        case "SECURITY_SCAN": usageCount = userUsage.securityScanCount; break;
    }

    return {
        allowed: usageCount < limit,
        limit,
        usage: usageCount
    }
}

export async function incrementUsage(userId: string, feature: FeatureType): Promise<void> {
    const map: Record<FeatureType, string> = {
        EXPLANATION: "explanationsCount",
        REFACTORING: "refactoringCount",
        ERROR_ANALYSIS: "errorAnalysisCount",
        SECURITY_SCAN: "securityScanCount",
    }

    const field = map[feature]

    // Ensure record exists (race condition handling ideally, but simple upsert works)
    await prisma.userUsage.upsert({
        where: { userId },
        create: {
            userId,
            [field]: 1,
        },
        update: {
            [field]: { increment: 1 }
        }
    })
}

export async function checkLineCountLimit(userId: string, lineCount: number): Promise<{ allowed: boolean; limit: number }> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { plan: true },
    })

    // Default to FREE if user not found, or block? Let's default to FREE limits for safety.
    const plan = user?.plan || Plan.FREE
    const limit = PLAN_LIMITS[plan].MAX_LINES

    return {
        allowed: lineCount <= limit,
        limit
    }
}


export async function checkRateLimit(userId: string): Promise<{ allowed: boolean; limit: number; remaining: number }> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { plan: true },
    })

    const plan = user?.plan || Plan.FREE
    const limit = PLAN_LIMITS[plan].API_REQUESTS_PER_MIN

    let userUsage = await prisma.userUsage.findUnique({
        where: { userId },
    })

    if (!userUsage) {
        userUsage = await prisma.userUsage.create({
            data: { userId },
        })
    }

    const now = new Date()
    const windowStart = new Date(userUsage.currentWindowStart)
    const timeDiff = now.getTime() - windowStart.getTime()

    if (timeDiff > 60000) { // 1 minute passed
        // Reset window
        await prisma.userUsage.update({
            where: { userId },
            data: {
                currentWindowStart: now,
                apiRequestsCount: 1 // Count this request
            }
        })
        return { allowed: true, limit, remaining: limit - 1 }
    }

    if (userUsage.apiRequestsCount >= limit) {
        return { allowed: false, limit, remaining: 0 }
    }

    // Increment
    await prisma.userUsage.update({
        where: { userId },
        data: {
            apiRequestsCount: { increment: 1 }
        }
    })

    return { allowed: true, limit, remaining: limit - (userUsage.apiRequestsCount + 1) }
}
