import { prisma } from "@/lib/prisma"
import { startOfDay, endOfDay, subDays, startOfWeek, endOfWeek, subWeeks, differenceInMinutes, isSameDay, getDayOfYear } from "date-fns"

export type DashboardStats = {
    streak: number
    dailyGoal: {
        minutesCoded: number
        snippetsAnalyzed: number
        xpGained: number
        progressPercentage: number
    }
    weeklyStats: {
        hoursCoded: number
        percentChange: number
        snippetsAnalyzed: number
        efficiencyGain: number
    }
    topLanguage: {
        language: string
        percentage: number
        mostActivePath: string
    } | null
    focusedGoal: {
        title: string
        progress: number
        target: number
    } | null
}

const DAILY_GOAL_MINUTES = 60

export async function getDashboardStats(userId: string): Promise<DashboardStats> {
    const now = new Date()

    // 1. Calculate Streak
    // Get all session dates, distinct, ordered desc
    const sessions = await prisma.codingSession.findMany({
        where: { userId },
        select: { startedAt: true, endedAt: true, language: true },
        orderBy: { startedAt: "desc" },
    })

    let streak = 0
    if (sessions.length > 0) {
        // Check if coded today
        const codedToday = isSameDay(sessions[0].startedAt, now)

        // Simplistic streak calculation:
        // Gather unique days
        const uniqueDays = new Set<string>()
        sessions.forEach(s => uniqueDays.add(startOfDay(s.startedAt).toISOString()))

        let currentDay = startOfDay(now)
        // If not coded today, check if coded yesterday to see if streak is alive
        if (!uniqueDays.has(currentDay.toISOString())) {
            const yesterday = subDays(currentDay, 1)
            if (uniqueDays.has(yesterday.toISOString())) {
                currentDay = yesterday
            } else {
                streak = 0
            }
        }

        if (uniqueDays.has(currentDay.toISOString())) {
            streak = 1
            let checkDay = subDays(currentDay, 1)
            while (uniqueDays.has(checkDay.toISOString())) {
                streak++
                checkDay = subDays(checkDay, 1)
            }
        }
    }

    // 2. Daily Stats
    const todayStart = startOfDay(now)
    const todayEnd = endOfDay(now)

    const todaysSessions = sessions.filter(s => s.startedAt >= todayStart && s.startedAt <= todayEnd)

    let minutesCodedToday = 0
    todaysSessions.forEach(s => {
        if (s.endedAt) {
            minutesCodedToday += differenceInMinutes(s.endedAt, s.startedAt)
        } else {
            minutesCodedToday += 5
        }
    })

    const snippetsAnalyzedToday = todaysSessions.length
    const xpGained = (snippetsAnalyzedToday * 10) + (minutesCodedToday * 1)
    const progressPercentage = Math.min(100, Math.round((minutesCodedToday / DAILY_GOAL_MINUTES) * 100))

    // 3. Weekly Stats
    const startThisWeek = startOfWeek(now, { weekStartsOn: 1 })
    const startLastWeek = subWeeks(startThisWeek, 1)
    const endLastWeek = endOfWeek(startLastWeek, { weekStartsOn: 1 })

    const thisWeekSessions = sessions.filter(s => s.startedAt >= startThisWeek)
    const lastWeekSessions = sessions.filter(s => s.startedAt >= startLastWeek && s.startedAt <= endLastWeek)

    let minutesThisWeek = 0
    thisWeekSessions.forEach(s => {
        minutesThisWeek += s.endedAt ? differenceInMinutes(s.endedAt, s.startedAt) : 5
    })

    let minutesLastWeek = 0
    lastWeekSessions.forEach(s => {
        minutesLastWeek += s.endedAt ? differenceInMinutes(s.endedAt, s.startedAt) : 5
    })

    const hoursCodedThisWeek = Math.round((minutesThisWeek / 60) * 10) / 10

    let percentChange = 0
    if (minutesLastWeek > 0) {
        percentChange = Math.round(((minutesThisWeek - minutesLastWeek) / minutesLastWeek) * 100)
    } else if (minutesThisWeek > 0) {
        percentChange = 100
    }

    // Calculate efficiency (Snippets per Hour)
    const efficiencyThisWeek = hoursCodedThisWeek > 0 ? (thisWeekSessions.length / hoursCodedThisWeek) : 0
    const hoursLastWeek = minutesLastWeek / 60
    const efficiencyLastWeek = hoursLastWeek > 0 ? (lastWeekSessions.length / hoursLastWeek) : 0

    let efficiencyGain = 0
    if (efficiencyLastWeek > 0) {
        efficiencyGain = Math.round(((efficiencyThisWeek - efficiencyLastWeek) / efficiencyLastWeek) * 100)
    } else if (efficiencyThisWeek > 0) {
        efficiencyGain = 100
    }

    // 4. Top Language
    const languageCounts: Record<string, number> = {}
    let totalLanguages = 0

    sessions.forEach(s => {
        if (s.language) {
            const lang = s.language.toLowerCase()
            languageCounts[lang] = (languageCounts[lang] || 0) + 1
            totalLanguages++
        }
    })

    let topLangName = "N/A"
    let topLangCount = 0

    Object.entries(languageCounts).forEach(([lang, count]) => {
        if (count > topLangCount) {
            topLangCount = count
            topLangName = lang
        }
    })

    const formatLang = (l: string) => {
        if (l === "typescript" || l === "ts") return "TypeScript"
        if (l === "javascript" || l === "js") return "JavaScript"
        if (l === "python" || l === "py") return "Python"
        return l.charAt(0).toUpperCase() + l.slice(1)
    }

    const topLanguage = totalLanguages > 0 ? {
        language: formatLang(topLangName),
        percentage: Math.round((topLangCount / totalLanguages) * 100),
        mostActivePath: "workspace"
    } : null

    // 5. Daily Focus Goal
    let focusedGoal = null
    const goals = await prisma.skillGoal.findMany({
        where: { userId, status: "active" },
    })

    if (goals.length > 0) {
        const dayOfYear = getDayOfYear(now)
        const index = dayOfYear % goals.length
        const goal = goals[index]
        focusedGoal = {
            title: goal.conceptName,
            progress: goal.currentProgress,
            target: goal.targetConfidence
        }
    }

    return {
        streak,
        dailyGoal: {
            minutesCoded: minutesCodedToday,
            snippetsAnalyzed: snippetsAnalyzedToday,
            xpGained,
            progressPercentage
        },
        weeklyStats: {
            hoursCoded: hoursCodedThisWeek,
            percentChange,
            snippetsAnalyzed: thisWeekSessions.length,
            efficiencyGain
        },
        topLanguage,
        focusedGoal
    }
}
