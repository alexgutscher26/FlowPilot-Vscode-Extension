import { PrismaClient } from "./generated/client"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding roadmap features...")

  // Seed features from the static roadmap page
  const features = [
    // Now / In Progress
    {
      title: "Context-Aware Suggestions",
      description:
        "Using active file context to suggest more relevant learning resources directly in the sidebar, filtering out noise from unrelated frameworks.",
      status: "now" as const,
      tag: "feature" as const,
      // We'll create 124 votes for this feature after creation
      voteCount: 124,
    },
    {
      title: "Dark Mode Refinement",
      description:
        "Fixing contrast issues in the dashboard charts and improving syntax highlighting themes for dark mode users.",
      status: "in_progress" as const,
      tag: "improvement" as const,
      voteCount: 45,
    },
    // Next / Planned
    {
      title: "Team Analytics Dashboard",
      description:
        "View aggregate learning stats for your entire team. Identify knowledge gaps and trending topics across the organization.",
      status: "next" as const,
      tag: "feature" as const,
      voteCount: 89,
    },
    {
      title: "Jira Integration",
      description:
        "Link learning sessions to Jira tickets to track research time and skill acquisition related to specific tasks.",
      status: "planned" as const,
      tag: "integration" as const,
      voteCount: 62,
    },
    {
      title: "Custom Learning Paths",
      description:
        "Create and share custom lists of skills and topics for onboarding new team members.",
      status: "planned" as const,
      tag: "feature" as const,
      voteCount: 156,
    },
    // Later / Considering
    {
      title: "Mobile Companion App",
      description:
        "Review flashcards and short explanations on the go. Sync progress perfectly with your desktop extension.",
      status: "later" as const,
      tag: "platform" as const,
      voteCount: 210,
    },
    {
      title: "Interactive AI Pair Programmer",
      description:
        "An AI that not only explains code but actively quizzes you on the logic you just wrote to ensure comprehension.",
      status: "considering" as const,
      tag: "ai" as const,
      voteCount: 342,
    },
    {
      title: "Certification Export",
      description:
        "Generate PDF certificates for skills you've mastered to share on LinkedIn or with your employer.",
      status: "considering" as const,
      tag: "export" as const,
      voteCount: 128,
    },
  ]

  for (const featureData of features) {
    const { voteCount, ...data } = featureData

    const feature = await prisma.feature.create({
      data: {
        ...data,
        createdByUserId: null, // Internal feature
      },
    })

    console.log(`✅ Created feature: ${feature.title}`)

    // Note: We're not creating actual votes here to keep the seed simple
    // The voteCount will be displayed based on actual user votes
    // If you want to seed votes, you'll need actual user IDs
  }

  console.log("✨ Seeding complete!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
