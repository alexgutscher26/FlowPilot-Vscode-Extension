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
  Download,
  Plus,
  Eye,
  Code2,
  Bug,
  GraduationCap,
  Gauge,
  Shield,
  Loader2,
} from "lucide-react"

interface CodingSession {
  id: string;
  description: string;
  interactionType: string;
  language: string;
  codeSnippet: string;
  startedAt: string;
}

export default function SessionsPage() {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const [sessions, setSessions] = useState<CodingSession[]>([])
  const [isLoadingSessions, setIsLoadingSessions] = useState(true)

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login")
    }
  }, [isPending, session, router])

  useEffect(() => {
    async function fetchSessions() {
      if (session) {
        try {
          const res = await fetch('/api/sessions');
          if (res.ok) {
            const data = await res.json();
            setSessions(data);
          }
        } catch (error) {
          console.error("Failed to fetch sessions", error);
        } finally {
          setIsLoadingSessions(false);
        }
      }
    }
    fetchSessions();
  }, [session]);

  if (isPending) {
    return <div className="container py-12">Loading...</div>
  }
  if (!session) return null

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Debugging': return <Bug />;
      case 'Explanation': return <GraduationCap />;
      case 'Code Review': return <Code2 />;
      case 'Security Audit': return <Shield />;
      case 'Performance': return <Gauge />;
      default: return <Code2 />;
    }
  }

  const getColorForType = (type: string) => {
    switch (type) {
      case 'Debugging': return 'bg-red-100 text-red-700';
      case 'Explanation': return 'bg-sky-100 text-sky-700';
      case 'Code Review': return 'bg-purple-100 text-purple-700';
      case 'Security Audit': return 'bg-slate-100 text-slate-700';
      case 'Performance': return 'bg-green-100 text-green-700';
      default: return 'bg-blue-100 text-blue-700';
    }
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
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium"
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
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              href="#"
            >
              <Map size={18} />
              <span>Roadmap</span>
            </a>
            <div className="my-4 border-t border-muted/40" />
            <Link
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              href="/settings/connect"
            >
              <Settings size={18} />
              <span>Settings</span>
            </Link>
          </nav>
          <div className="p-4 border-t border-muted/40">
            <Link href="/settings/connect" className="flex items-center gap-2 p-2 bg-muted rounded-lg text-xs hover:bg-muted/80 transition-colors">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              Connect Extension
            </Link>
          </div>
        </aside>
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background">
          <header className="h-16 flex items-center justify-between px-6 bg-card border-b border-muted/40 flex-shrink-0 z-20">
            <div className="flex items-center gap-6 flex-1">
              <nav className="hidden md:flex text-sm font-medium text-muted-foreground">
                <a className="hover:text-primary transition-colors" href="#">
                  Home
                </a>
                <span className="mx-2">/</span>
                <span>My Sessions</span>
              </nav>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="flex items-center gap-3 pl-4 border-l border-muted/40">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium">{session.user.name || session.user.email}</p>
                </div>
                <div
                  className="h-10 w-10 rounded-full bg-muted overflow-hidden ring-2 ring-background cursor-pointer"
                  style={{
                    backgroundImage: `url('${session.user.image || ""}')`,
                    backgroundSize: "cover",
                  }}
                />
              </div>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Session History</h1>
                  <p className="text-muted-foreground mt-1">
                    Review your past coding interactions.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link href="/settings/connect" className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium shadow-sm transition-colors">
                    <Plus className="h-4 w-4" />
                    Connect Extension
                  </Link>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-muted/40 shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted border-b border-muted/40">
                      <tr>
                        <th className="px-6 py-4 font-semibold w-1/3">Session Description</th>
                        <th className="px-6 py-4 font-semibold">Interaction Type</th>
                        <th className="px-6 py-4 font-semibold">Language</th>
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-muted/40">
                      {isLoadingSessions ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                            <Loader2 className="animate-spin h-6 w-6 mx-auto mb-2" />
                            Loading sessions...
                          </td>
                        </tr>
                      ) : sessions.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                            No sessions found. Connect your extension and start coding!
                          </td>
                        </tr>
                      ) : (
                        sessions.map((s) => (
                          <tr key={s.id} className="hover:bg-muted transition-colors group">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                  {getIconForType(s.interactionType)}
                                </div>
                                <div>
                                  <p className="font-medium group-hover:text-primary transition-colors">
                                    {s.description || "Coding Session"}
                                  </p>
                                  <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                                    {s.codeSnippet ? s.codeSnippet.substring(0, 50) + "..." : "No snippet"}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getColorForType(s.interactionType)}`}>
                                {s.interactionType}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 flex items-center justify-center rounded bg-muted text-[10px] font-bold text-slate-600">
                                  {s.language ? s.language.slice(0, 2).toUpperCase() : '??'}
                                </span>
                                <span>{s.language}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-muted-foreground">
                              {new Date(s.startedAt).toLocaleDateString()} <span className="text-xs ml-1">{new Date(s.startedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <Link
                                href={`/sessions/${s.id}`}
                                className="inline-flex items-center justify-center h-8 w-8 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                              >
                                <Eye size={16} />
                              </Link>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
