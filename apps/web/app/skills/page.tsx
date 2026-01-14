"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"
import {
  Menu,
  LayoutDashboard,
  History,
  BarChart3,
  Map,
  Settings,
  HelpCircle,
  Rocket,
  Search,
  Bell,
  CalendarDays,
  Plus,
  TrendingUp,
  Lightbulb,
  Star,
  Code2,
  Sparkles,
  Database,
} from "lucide-react"
import SkillGoalModal from "@/components/SkillGoalModal"
import GoalsSection from "@/components/GoalsSection"
import ExploreSkillsModal from "@/components/ExploreSkillsModal"

type DailyActivity = {
  day: string
  count: number
}

type Skill = {
  id: string
  concept: string
  language: string | null
  totalExplanations: number
  sessionsCount: number
  confidence: number
  lastSeenAt: Date
}

type SkillsSummary = {
  learningMomentum: {
    dailyActivity: DailyActivity[]
    totalExplanations: number
    activeSkills: number
    currentStreak: number
  }
  skills: Skill[]
}

type Recommendation = {
  concept: string
  title: string
  duration?: string
  snippets?: number
}

type SkillGoal = {
  id: string
  conceptName: string
  targetConfidence: number
  currentProgress: number
  deadline: Date | null
  status: "active" | "completed" | "abandoned"
  createdAt: Date
  updatedAt: Date
  skill?: {
    id: string
    concept: string
    confidence: number
    language: string | null
  }
}

export default function SkillsPage() {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const [summary, setSummary] = useState<SkillsSummary | null>(null)
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [goals, setGoals] = useState<SkillGoal[]>([])
  const [loading, setLoading] = useState(true)
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("confidence")
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false)
  const [isExploreModalOpen, setIsExploreModalOpen] = useState(false)
  const [selectedConcept, setSelectedConcept] = useState("")

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login")
    }
  }, [isPending, session, router])

  useEffect(() => {
    if (session) {
      // Fetch skills summary
      fetch("/api/skills/summary")
        .then((res) => res.json())
        .then((data) => {
          setSummary(data)
        })
        .catch((err) => console.error("Failed to fetch skills summary:", err))

      // Fetch recommendations
      fetch("/api/skills/recommendation")
        .then((res) => res.json())
        .then((data) => {
          setRecommendations(data.focus || [])
        })
        .catch((err) => console.error("Failed to fetch recommendations:", err))

      // Fetch goals
      fetch("/api/skills/goals")
        .then((res) => res.json())
        .then((data) => {
          setGoals(data.goals || [])
        })
        .catch((err) => console.error("Failed to fetch goals:", err))
        .finally(() => setLoading(false))
    }
  }, [session])

  if (isPending || loading) {
    return <div className="container py-12">Loading...</div>
  }
  if (!session) return null

  // Helper to get intensity class for heatmap
  const getIntensityClass = (count: number) => {
    if (count === 0) return "bg-muted"
    if (count <= 2) return "bg-primary/20"
    if (count <= 4) return "bg-primary/40"
    if (count <= 6) return "bg-primary/70"
    return "bg-primary"
  }

  // Helper to colorize language badge
  const getLangColor = (lang: string | null) => {
    const l = (lang || "").toLowerCase()
    if (l.includes("type") || l === "ts") return "bg-blue-100 text-blue-600"
    if (l.includes("java") || l === "js") return "bg-yellow-100 text-yellow-700"
    if (l.includes("py")) return "bg-green-100 text-green-700"
    if (l.includes("c#") || l === "cs") return "bg-purple-100 text-purple-700"
    if (l.includes("react")) return "bg-sky-100 text-sky-500"
    return "bg-gray-100 text-gray-600"
  }

  const getLangShort = (lang: string | null) => {
    const l = (lang || "??").toUpperCase().substring(0, 2)
    return l
  }

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 70) return { label: "High Confidence", class: "bg-green-100 text-green-700" }
    if (confidence >= 40) return { label: "Learning", class: "bg-yellow-100 text-yellow-700" }
    return { label: "Needs Practice", class: "bg-muted text-foreground" }
  }

  // Filter and sort skills
  let filteredSkills = summary?.skills || []

  if (categoryFilter !== "all") {
    filteredSkills = filteredSkills.filter((skill) => {
      const lang = (skill.language || "").toLowerCase()
      if (categoryFilter === "languages") {
        return ["python", "javascript", "typescript", "java", "c#", "go", "rust"].some((l) =>
          lang.includes(l)
        )
      }
      if (categoryFilter === "frameworks") {
        return ["react", "vue", "angular", "next", "express", "django"].some((f) =>
          lang.includes(f)
        )
      }
      if (categoryFilter === "tools") {
        return ["git", "docker", "sql", "mongodb"].some((t) => lang.includes(t))
      }
      return true
    })
  }

  if (sortBy === "confidence") {
    filteredSkills = [...filteredSkills].sort((a, b) => b.confidence - a.confidence)
  } else if (sortBy === "active") {
    filteredSkills = [...filteredSkills].sort((a, b) => b.totalExplanations - a.totalExplanations)
  } else if (sortBy === "name") {
    filteredSkills = [...filteredSkills].sort((a, b) => a.concept.localeCompare(b.concept))
  }

  // Goal handlers
  const handleCreateGoal = async (goalData: {
    conceptName: string
    targetConfidence: number
    deadline?: string
  }) => {
    try {
      const response = await fetch("/api/skills/goals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(goalData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to create goal")
      }

      const { goal } = await response.json()
      setGoals([...goals, goal])
    } catch (error: any) {
      console.error("Failed to create goal:", error)
      throw error
    }
  }

  const handleCompleteGoal = async (goalId: string) => {
    try {
      const response = await fetch(`/api/skills/goals`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goalId, status: "completed" }),
      })

      if (!response.ok) throw new Error("Failed to complete goal")

      const { goal } = await response.json()
      setGoals(goals.map((g) => (g.id === goalId ? goal : g)))
    } catch (error) {
      console.error("Failed to complete goal:", error)
    }
  }

  const handleDeleteGoal = async (goalId: string) => {
    try {
      const response = await fetch(`/api/skills/goals?id=${goalId}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to delete goal")

      setGoals(goals.filter((g) => g.id !== goalId))
    } catch (error) {
      console.error("Failed to delete goal:", error)
    }
  }

  const handleExploreSelect = (skill: string) => {
    setSelectedConcept(skill)
    setIsExploreModalOpen(false)
    setIsGoalModalOpen(true)
  }

  const existingConcepts = summary?.skills.map((s) => s.concept) || []

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="flex h-screen w-full">
        <aside className="hidden md:flex flex-col w-64 bg-card border-r border-muted/40 h-full flex-shrink-0">
          <div className="p-6 flex items-center gap-3">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              <Code2 size={18} />
            </div>
            <h1 className="text-lg font-bold tracking-tight">FlowPilot</h1>
          </div>
          <nav className="flex-1 flex flex-col px-4 gap-1 overflow-y-auto">
            <Link
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              href="/dashboard"
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              href="/sessions"
            >
              <History size={18} />
              <span>My Sessions</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium"
              href="/skills"
            >
              <BarChart3 size={18} />
              <span>Skills</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              href="/roadmap"
            >
              <Map size={18} />
              <span>Roadmap</span>
            </Link>
            <div className="my-4 border-t border-muted/40" />
            <Link
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              href="/settings"
            >
              <Settings size={18} />
              <span>Settings</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              href="/help"
            >
              <HelpCircle size={18} />
              <span>Help & Feedback</span>
            </Link>
          </nav>
          <div className="p-4 border-t border-muted/40">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="font-bold text-sm mb-1">Go Pro</p>
                <p className="text-xs text-indigo-100 mb-3">
                  Unlock advanced analytics and AI insights.
                </p>
                <button className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold py-1.5 px-3 rounded transition-colors">
                  Upgrade
                </button>
              </div>
              <div className="absolute -bottom-4 -right-4 text-white/20">
                <Rocket size={80} />
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background">
          <header className="h-16 flex items-center justify-between px-6 bg-card border-b border-muted/40 flex-shrink-0 z-20">
            <button className="md:hidden p-2 text-muted-foreground hover:text-foreground">
              <Menu />
            </button>
            <div className="flex items-center gap-6 flex-1">
              <nav className="hidden md:flex text-sm font-medium text-muted-foreground">
                <a className="hover:text-primary transition-colors" href="#">
                  Home
                </a>
                <span className="mx-2">/</span>
                <span>Skills</span>
              </nav>
              <div className="relative w-full max-w-md hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-muted-foreground" size={18} />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-muted text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm transition-all"
                  placeholder="Search skills, tags..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <button className="relative p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors">
                <Bell />
                <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-muted/40">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium">{session.user.name || session.user.email}</p>
                  <p className="text-xs text-muted-foreground">Pro Plan</p>
                </div>
                <div
                  className="h-10 w-10 rounded-full bg-muted overflow-hidden ring-2 ring-background cursor-pointer"
                  style={{
                    backgroundImage: `url('${session.user.image || ""}')`,
                    backgroundSize: "cover",
                  }}
                />
                <button
                  className="text-xs font-semibold px-3 py-1.5 rounded bg-muted hover:bg-muted/70"
                  onClick={() => authClient.signOut()}
                >
                  Sign out
                </button>
              </div>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Skills & Mastery</h1>
                  <p className="text-muted-foreground mt-1">
                    Visualize your knowledge growth and active learning patterns.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/sessions"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-muted/40 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <CalendarDays className="h-4 w-4" />
                    History
                  </Link>
                  <button
                    onClick={() => setIsGoalModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium shadow-sm transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    Add Skill Goal
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-card rounded-xl border border-muted/40 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        <TrendingUp className="text-primary" />
                        Learning Momentum
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {summary?.learningMomentum.dailyActivity.filter((d) => d.count > 0)
                          .length || 0}{" "}
                        active days in the last 30 days
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-muted" />
                      <span className="text-xs text-muted-foreground">Less</span>
                      <span className="flex h-2 w-2 rounded-full bg-primary" />
                      <span className="text-xs text-muted-foreground">More</span>
                    </div>
                  </div>
                  <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(14, 1fr)" }}>
                    {summary?.learningMomentum.dailyActivity.slice(-29).map((activity, i) => {
                      const isToday = i === 28
                      return (
                        <div
                          key={i}
                          className={`aspect-square rounded ${getIntensityClass(activity.count)} ${isToday ? "border-2 border-muted-foreground" : ""}`}
                          title={`${activity.day}: ${activity.count} explanations`}
                        />
                      )
                    })}
                    {/* Placeholder for future days */}
                    {Array.from({
                      length: 29 - (summary?.learningMomentum.dailyActivity.length || 0),
                    }).map((_, i) => (
                      <div
                        key={`placeholder-${i}`}
                        className="aspect-square rounded bg-transparent opacity-60 border border-dashed border-muted"
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex gap-8 border-t border-muted/40 pt-4">
                    <div>
                      <p className="text-2xl font-bold">
                        {summary?.learningMomentum.totalExplanations || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Total Explanations</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">
                        {summary?.learningMomentum.activeSkills || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Active Skills</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        {summary?.learningMomentum.currentStreak || 0} Days
                      </p>
                      <p className="text-xs text-muted-foreground">Current Streak</p>
                    </div>
                  </div>
                </div>
                {recommendations.length > 0 && (
                  <div className="lg:col-span-1 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Lightbulb size={120} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-white/20 p-1.5 rounded-lg">
                          <Sparkles className="text-white" size={16} />
                        </span>
                        <h3 className="font-bold text-lg">Recommended Focus</h3>
                      </div>
                      <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                        We've noticed you're looking up{" "}
                        <strong>{recommendations[0]?.concept}</strong> frequently. Solidify your
                        knowledge with a quick review.
                      </p>
                      <div className="space-y-3">
                        {recommendations.map((rec, i) => (
                          <div
                            key={i}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-start gap-3 border border-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                          >
                            {i === 0 ? (
                              <Star className="text-yellow-300" size={18} />
                            ) : (
                              <Code2 className="text-green-300" size={18} />
                            )}
                            <div>
                              <p className="text-sm font-semibold">{rec.title}</p>
                              <p className="text-xs text-indigo-200 mt-0.5">
                                {rec.duration
                                  ? `${rec.duration} explanation review`
                                  : `Practice with ${rec.snippets} snippets`}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="relative z-10 mt-6 w-full py-2 bg-white text-indigo-600 font-semibold rounded-lg text-sm hover:bg-indigo-50 transition-colors shadow-sm">
                      Start Learning Session
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
                <h2 className="text-lg font-bold">Learning Goals</h2>
              </div>
              <GoalsSection
                goals={goals}
                onComplete={handleCompleteGoal}
                onDelete={handleDeleteGoal}
              />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8">
                <h2 className="text-lg font-bold">Your Skills</h2>
                <div className="flex items-center gap-3">
                  <select
                    className="block w-40 pl-3 pr-10 py-2 text-sm border-muted/40 bg-card text-foreground rounded-lg focus:ring-primary/50 shadow-sm"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="languages">Languages</option>
                    <option value="frameworks">Frameworks</option>
                    <option value="tools">Tools</option>
                  </select>
                  <select
                    className="block w-40 pl-3 pr-10 py-2 text-sm border-muted/40 bg-card text-foreground rounded-lg focus:ring-primary/50 shadow-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="confidence">Sort by Confidence</option>
                    <option value="active">Most Active</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
                {filteredSkills.length === 0 ? (
                  <div className="col-span-full text-center py-12 text-muted-foreground">
                    No skills tracked yet. Start using FlowPilot in VS Code to build your skill
                    profile!
                  </div>
                ) : (
                  filteredSkills.map((skill) => {
                    const badge = getConfidenceBadge(skill.confidence)
                    return (
                      <div
                        key={skill.id}
                        className="bg-card rounded-xl border border-muted/40 p-5 hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div
                            className={`h-10 w-10 rounded-lg flex items-center justify-center font-bold text-xs border ${getLangColor(skill.language)}`}
                          >
                            {getLangShort(skill.language)}
                          </div>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium ${badge.class}`}
                          >
                            {badge.label}
                          </span>
                        </div>
                        <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">
                          {skill.concept}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-4">
                          {skill.totalExplanations} explanations • {skill.sessionsCount} sessions
                        </p>
                        <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${skill.confidence >= 70 ? "bg-primary" : skill.confidence >= 40 ? "bg-yellow-500" : "bg-orange-400"}`}
                            style={{ width: `${skill.confidence}%` }}
                          />
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] font-medium text-muted-foreground">
                          <span>Proficiency</span>
                          <span className="text-foreground">{skill.confidence}%</span>
                        </div>
                      </div>
                    )
                  })
                )}
                <div
                  className="bg-muted rounded-xl border border-dashed border-muted/40 p-5 flex flex-col items-center justify-center text-center hover:bg-card transition-colors cursor-pointer group"
                  onClick={() => setIsExploreModalOpen(true)}
                >
                  <div className="h-12 w-12 rounded-full bg-card shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Plus className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">Explore New Skill</h3>
                  <p className="text-xs text-muted-foreground mt-1 px-4">
                    Browse our library to start learning something new
                  </p>
                </div>
              </div>
              <footer className="mt-auto py-4 text-center text-xs text-muted-foreground bg-background">
                <p>© 2026 FlowPilot Inc. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </main>
      </div>
      <SkillGoalModal
        isOpen={isGoalModalOpen}
        onClose={() => {
          setIsGoalModalOpen(false)
          setSelectedConcept("")
        }}
        onSubmit={handleCreateGoal}
        existingConcepts={existingConcepts}
        initialConcept={selectedConcept}
      />
      <ExploreSkillsModal
        isOpen={isExploreModalOpen}
        onClose={() => setIsExploreModalOpen(false)}
        onSelectSkill={handleExploreSelect}
      />
    </div>
  )
}
