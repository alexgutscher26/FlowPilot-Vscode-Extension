import { prisma } from "../lib/db"
import { checkLimit, incrementUsage, checkRateLimit, checkLineCountLimit } from "../lib/user-usage"
import { Plan } from "../prisma/generated/client"

async function runTest() {
    console.log("Starting Feature Gating Verification...")

    // 1. Create Test User
    const email = `test-user-${Date.now()}@example.com`
    const user = await prisma.user.create({
        data: {
            email,
            plan: "FREE",
        },
    })
    console.log(`Created test user: ${user.id} (${user.email}) with plan FREE`)

    // 2. Test Explanations Limit (10)
    console.log("\nTesting Explanation Limit (10)...")
    for (let i = 0; i < 10; i++) {
        const check = await checkLimit(user.id, "EXPLANATION")
        if (!check.allowed) {
            console.error(`ERROR: Blocked at request ${i + 1} unexpectedly.`)
            return
        }
        await incrementUsage(user.id, "EXPLANATION")
    }

    const checkAfter10 = await checkLimit(user.id, "EXPLANATION")
    if (checkAfter10.allowed) {
        console.error("ERROR: Allowed 11th request (should be blocked)")
    } else {
        console.log("SUCCESS: Blocked 11th request correctly.")
    }

    // 3. Test Line Count Limit (100)
    console.log("\nTesting Line Count Limit (100)...")
    const lineCheck = await checkLineCountLimit(user.id, 150)
    if (lineCheck.allowed) {
        console.error("ERROR: Allowed 150 lines on FREE plan (limit 100)")
    } else {
        console.log("SUCCESS: Blocked 150 lines correctly.")
    }

    // 4. Upgrade to PRO
    console.log("\nUpgrading to PRO...")
    await prisma.user.update({
        where: { id: user.id },
        data: { plan: "PRO" }
    })

    // 5. Test Limits on PRO
    const checkPro = await checkLimit(user.id, "EXPLANATION")
    if (!checkPro.allowed) {
        console.error("ERROR: Blocked on PRO plan unexpectedly")
    } else {
        console.log("SUCCESS: Allowed request on PRO plan (Unlimited).")
    }

    const lineCheckPro = await checkLineCountLimit(user.id, 150)
    if (!lineCheckPro.allowed) {
        console.error("ERROR: Blocked 150 lines on PRO plan (limit 500)")
    } else {
        console.log("SUCCESS: Allowed 150 lines on PRO plan.")
    }

    console.log("\nCleaning up...")
    await prisma.user.delete({ where: { id: user.id } })
    console.log("Done.")
}

runTest().catch(console.error)
