import { prisma } from "@/lib/db"

/**
 * Skill Processor Utility
 * Handles concept extraction, skill creation/updates, and confidence calculations
 */

export interface ConceptData {
  concept: string
  language?: string
  sessionId?: string
}

/**
 * Normalize concept names for consistency
 */
export function normalizeConcept(concept: string): string {
  return concept
    .trim()
    .replace(/\s+/g, " ") // Normalize whitespace
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

/**
 * Calculate confidence score based on skill metrics
 * Algorithm:
 * - Base confidence starts at 20
 * - +5 for each explanation (capped at +40)
 * - +3 for each session (capped at +30)
 * - Recency bonus: +10 if seen in last 7 days, +5 if last 14 days
 * - Maximum confidence: 100
 */
export function calculateConfidence(
  totalExplanations: number,
  sessionsCount: number,
  lastSeenAt: Date
): number {
  let confidence = 20 // Base confidence

  // Explanation bonus (max +40)
  const explanationBonus = Math.min(totalExplanations * 5, 40)
  confidence += explanationBonus

  // Session bonus (max +30)
  const sessionBonus = Math.min(sessionsCount * 3, 30)
  confidence += sessionBonus

  // Recency bonus
  const daysSinceLastSeen = Math.floor((Date.now() - lastSeenAt.getTime()) / (1000 * 60 * 60 * 24))
  if (daysSinceLastSeen <= 7) {
    confidence += 10
  } else if (daysSinceLastSeen <= 14) {
    confidence += 5
  }

  return Math.min(confidence, 100)
}

/**
 * Process concepts and update skill records
 * Creates new skills or updates existing ones
 */
export async function processConceptsForUser(
  userId: string,
  concepts: ConceptData[]
): Promise<void> {
  for (const conceptData of concepts) {
    const normalizedConcept = normalizeConcept(conceptData.concept)

    // Find or create skill
    const existingSkill = await prisma.skill.findUnique({
      where: {
        userId_concept: {
          userId,
          concept: normalizedConcept,
        },
      },
    })

    if (existingSkill) {
      // Update existing skill
      const newTotalExplanations = existingSkill.totalExplanations + 1
      const newSessionsCount = conceptData.sessionId
        ? existingSkill.sessionsCount + 1
        : existingSkill.sessionsCount

      const newConfidence = calculateConfidence(newTotalExplanations, newSessionsCount, new Date())

      await prisma.skill.update({
        where: { id: existingSkill.id },
        data: {
          totalExplanations: newTotalExplanations,
          sessionsCount: newSessionsCount,
          confidence: newConfidence,
          lastSeenAt: new Date(),
          language: conceptData.language || existingSkill.language,
        },
      })

      // Update related goals progress
      await updateGoalProgress(userId, normalizedConcept, newConfidence)
    } else {
      // Create new skill
      const initialConfidence = calculateConfidence(1, 1, new Date())

      await prisma.skill.create({
        data: {
          userId,
          concept: normalizedConcept,
          language: conceptData.language,
          totalExplanations: 1,
          sessionsCount: 1,
          confidence: initialConfidence,
          lastSeenAt: new Date(),
        },
      })

      // Check if there's a goal for this concept
      await updateGoalProgress(userId, normalizedConcept, initialConfidence)
    }
  }
}

/**
 * Update goal progress when skill confidence changes
 */
async function updateGoalProgress(
  userId: string,
  concept: string,
  currentConfidence: number
): Promise<void> {
  const goals = await prisma.skillGoal.findMany({
    where: {
      userId,
      conceptName: concept,
      status: "active",
    },
  })

  for (const goal of goals) {
    const progress = Math.min(Math.round((currentConfidence / goal.targetConfidence) * 100), 100)

    const newStatus = currentConfidence >= goal.targetConfidence ? "completed" : "active"

    await prisma.skillGoal.update({
      where: { id: goal.id },
      data: {
        currentProgress: progress,
        status: newStatus,
      },
    })
  }
}

/**
 * Apply confidence decay for stale skills
 * Called periodically or on-demand
 */
export async function applyConfidenceDecay(userId: string): Promise<void> {
  const fourteenDaysAgo = new Date()
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14)

  const staleSkills = await prisma.skill.findMany({
    where: {
      userId,
      lastSeenAt: {
        lt: fourteenDaysAgo,
      },
      confidence: {
        gt: 0,
      },
    },
  })

  for (const skill of staleSkills) {
    const daysSinceLastSeen = Math.floor(
      (Date.now() - skill.lastSeenAt.getTime()) / (1000 * 60 * 60 * 24)
    )

    // Decay rate: -1 point per week after 14 days
    const weeksStale = Math.floor((daysSinceLastSeen - 14) / 7)
    const decayAmount = weeksStale * 1

    const newConfidence = Math.max(0, skill.confidence - decayAmount)

    if (newConfidence !== skill.confidence) {
      await prisma.skill.update({
        where: { id: skill.id },
        data: { confidence: newConfidence },
      })

      // Update related goals
      await updateGoalProgress(userId, skill.concept, newConfidence)
    }
  }
}
