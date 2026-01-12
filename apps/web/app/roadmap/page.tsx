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
  Search,
  Bell,
  Code2,
  MessageSquare,
  Sparkles,
} from "lucide-react"
import { FeatureCard } from "@/components/FeatureCard"
import { SuggestFeatureModal } from "@/components/SuggestFeatureModal"

interface Feature {
  id: string
  title: string
  description: string
  status: string
  tag: string
  voteCount: number
  commentCount: number
  userHasVoted: boolean
}

interface RoadmapData {
  now: Feature[]
  in_progress: Feature[]
  next: Feature[]
  planned: Feature[]
  later: Feature[]
  considering: Feature[]
}

export default function RoadmapPage() {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const [roadmapData, setRoadmapData] = useState<RoadmapData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login")
    }
  }, [isPending, session, router])

  useEffect(() => {
    fetchRoadmap()
  }, [])

  const fetchRoadmap = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/roadmap")
      if (!response.ok) throw new Error("Failed to fetch roadmap")
      const data = await response.json()
      setRoadmapData(data)
    } catch (err) {
      setError("Failed to load roadmap. Please try again later.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleVote = async (featureId: string) => {
    if (!session) {
      router.push("/login")
      return
    }

    try {
      const response = await fetch(`/api/features/${featureId}/vote`, {
        method: "POST",
      })

      if (!response.ok) throw new Error("Failed to vote")

      const { voteCount, userHasVoted } = await response.json()

      // Update local state optimistically
      setRoadmapData((prev) => {
        if (!prev) return prev
        const updated = { ...prev }
        Object.keys(updated).forEach((status) => {
          updated[status as keyof RoadmapData] = updated[status as keyof RoadmapData].map(
            (feature) =>
              feature.id === featureId ? { ...feature, voteCount, userHasVoted } : feature
          )
        })
        return updated
      })
    } catch (err) {
      console.error("Failed to vote:", err)
    }
  }

  const handleSuggestFeature = async (title: string, description: string) => {
    const response = await fetch("/api/features", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })

    if (!response.ok) {
      throw new Error("Failed to create feature")
    }

    // Refresh roadmap data
    await fetchRoadmap()
  }

  if (isPending || isLoading) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading roadmap...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  if (error) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchRoadmap}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

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
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              href="/skills"
            >
              <BarChart3 size={18} />
              <span>Skills</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium transition-colors"
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
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              href="#"
            >
              <HelpCircle size={18} />
              <span>Help & Feedback</span>
            </a>
          </nav>
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
                <span>Roadmap</span>
              </nav>
              <div className="relative w-full max-w-md hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-muted-foreground" size={18} />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-muted text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm transition-all"
                  placeholder="Search features..."
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
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold tracking-tight">Public Roadmap</h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-semibold uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in building in public. Here's what we're working on, what's coming
                    next, and what we're considering for the future. Have an idea?
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-primary hover:underline font-medium ml-1"
                    >
                      Let us know
                    </button>
                    .
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-muted/40 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                    <MessageSquare size={16} />
                    Join Community
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium shadow-sm transition-colors"
                  >
                    <Sparkles size={16} />
                    Suggest Feature
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start pb-10">
                {/* Now Column */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-1 px-1">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                      <h2 className="font-bold">Now</h2>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      In Progress
                    </span>
                  </div>
                  {roadmapData?.now.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      {...feature}
                      currentUserId={session?.user?.id}
                      onVote={handleVote}
                    />
                  ))}
                  {roadmapData?.in_progress.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      {...feature}
                      currentUserId={session?.user?.id}
                      onVote={handleVote}
                    />
                  ))}
                </div>

                {/* Next Column */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-1 px-1">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                      <h2 className="font-bold">Next</h2>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      Planned
                    </span>
                  </div>
                  {roadmapData?.next.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      {...feature}
                      currentUserId={session?.user?.id}
                      onVote={handleVote}
                    />
                  ))}
                  {roadmapData?.planned.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      {...feature}
                      currentUserId={session?.user?.id}
                      onVote={handleVote}
                    />
                  ))}
                </div>

                {/* Later Column */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-1 px-1">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-muted-foreground/40"></span>
                      <h2 className="font-bold">Later</h2>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      Considering
                    </span>
                  </div>
                  {roadmapData?.later.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      {...feature}
                      currentUserId={session?.user?.id}
                      onVote={handleVote}
                    />
                  ))}
                  {roadmapData?.considering.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      {...feature}
                      currentUserId={session?.user?.id}
                      onVote={handleVote}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <SuggestFeatureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSuggestFeature}
      />
    </div>
  )
}
