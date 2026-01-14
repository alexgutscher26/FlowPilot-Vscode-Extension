
import { prisma } from "../lib/db"

async function main() {
    try {
        console.log("Checking database schema...")
        // Attempt to select the 'plan' field. If it doesn't exist, this might throw or return undefined depending on client generation.
        // But if the column is missing in DB, Prisma usually throws on findFirst if it tries to select it.
        const user = await prisma.user.findFirst({
            select: {
                id: true,
                plan: true
            }
        })
        console.log("Database check successful.")
        console.log("User found:", user)
    } catch (e) {
        console.error("Database check failed:", e)
    } finally {
        await prisma.$disconnect()
    }
}

main()
