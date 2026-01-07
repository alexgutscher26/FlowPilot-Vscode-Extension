"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"
import {
  Menu,
  LayoutDashboard,
  History,
  BarChart3,
  Map,
  Settings as SettingsIcon,
  HelpCircle,
  Search,
  Bell,
  Code2,
  User,
  Palette,
  Shield,
  Puzzle,
  ExternalLink,
  Github,
  Slack,
  AlertTriangle,
  CheckCircle
} from "lucide-react"

export default function SettingsPage() {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login")
    }
  }, [isPending, session, router])

  if (isPending) {
    return <div className="container py-12">Loading...</div>
  }
  if (!session) {
    return null
  }

  const userName = session.user.name || "Alex Developer"
  const firstName = userName.split(" ")[0] || "Alex"
  const lastName = userName.split(" ").slice(1).join(" ") || "Developer"

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="flex h-screen w-full">
        <aside className="hidden md:flex flex-col w-64 bg-card border-r border-muted/40 h-full flex-shrink-0">
          <div className="p-6 flex items-center gap-3">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              <Code2 size={18} />
            </div>
            <h1 className="text-lg font-bold tracking-tight">Code Coach</h1>
          </div>
          <nav className="flex-1 flex flex-col px-4 gap-1 overflow-y-auto">
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors" href="/dashboard">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors" href="/sessions">
              <History size={18} />
              <span>My Sessions</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors" href="/skills">
              <BarChart3 size={18} />
              <span>Skills</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors" href="/roadmap">
              <Map size={18} />
              <span>Roadmap</span>
            </Link>
            <div className="my-4 border-t border-muted/40" />
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium transition-colors" href="/settings">
              <SettingsIcon size={18} />
              <span>Settings</span>
            </Link>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors" href="#">
              <HelpCircle size={18} />
              <span>Help & Feedback</span>
            </a>
          </nav>
          <div className="p-4 border-t border-muted/40">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="font-bold text-sm mb-1">Go Pro</p>
                <p className="text-xs text-indigo-100 mb-3">Unlock advanced analytics and AI insights.</p>
                <button className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold py-1.5 px-3 rounded transition-colors">
                  Upgrade
                </button>
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
                <a className="hover:text-primary transition-colors" href="#">Home</a>
                <span className="mx-2">/</span>
                <span>Settings</span>
              </nav>
              <div className="relative w-full max-w-md hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-muted-foreground" size={18} />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-muted text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm transition-all"
                  placeholder="Search settings..."
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
                  <p className="text-sm font-medium">{userName}</p>
                  <p className="text-xs text-muted-foreground">Pro Plan</p>
                </div>
                <div
                  className="h-10 w-10 rounded-full bg-muted overflow-hidden ring-2 ring-background cursor-pointer"
                  style={{ backgroundImage: `url('${session.user.image || ""}')`, backgroundSize: "cover" }}
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
            <div className="max-w-4xl mx-auto flex flex-col gap-8">
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                  <p className="text-muted-foreground mt-1">Manage your account settings and preferences.</p>
                </div>
                <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium shadow-sm transition-colors">
                  Save Changes
                </button>
              </div>

              <section className="bg-card rounded-xl border border-muted/40 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-muted/40">
                  <div className="flex items-center gap-2">
                    <User className="text-muted-foreground" size={18} />
                    <h2 className="text-lg font-semibold">Profile</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 pl-8">Update your photo and personal details.</p>
                </div>
                <div className="p-6 md:flex gap-8">
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <label className="block text-sm font-medium mb-2">Avatar</label>
                    <div className="relative group cursor-pointer w-24 h-24">
                      <div
                        className="h-24 w-24 rounded-full bg-muted overflow-hidden ring-4 ring-background"
                        style={{ backgroundImage: `url('${session.user.image || ""}')`, backgroundSize: "cover" }}
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Search className="text-white" size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label className="block text-sm font-medium mb-1.5">First Name</label>
                      <input className="w-full px-3 py-2 border border-muted/40 rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="text" defaultValue={firstName} />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-medium mb-1.5">Last Name</label>
                      <input className="w-full px-3 py-2 border border-muted/40 rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="text" defaultValue={lastName} />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-medium mb-1.5">Email Address</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
                          <Search size={18} />
                        </span>
                        <input className="w-full pl-10 px-3 py-2 border border-muted/40 rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="email" defaultValue={session.user.email || ""} />
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-medium mb-1.5">Bio</label>
                      <textarea className="w-full px-3 py-2 border border-muted/40 rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" rows={3} defaultValue="Frontend enthusiast, currently mastering React and Tailwind CSS." />
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-xl border border-muted/40 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-muted/40">
                  <div className="flex items-center gap-2">
                    <Palette className="text-muted-foreground" size={18} />
                    <h2 className="text-lg font-semibold">Appearance</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 pl-8">Customize the look and feel of your dashboard.</p>
                </div>
                <div className="p-6">
                  <label className="block text-sm font-medium mb-4">Interface Theme</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-muted/40 hover:border-muted bg-muted transition-all">
                      <div className="h-20 w-full bg-card rounded-lg border border-muted/40 shadow-sm flex flex-col overflow-hidden">
                        <div className="h-3 w-full bg-muted border-b border-muted/40"></div>
                        <div className="flex-1 p-2">
                          <div className="h-2 w-16 bg-muted rounded mb-1"></div>
                          <div className="h-2 w-10 bg-muted rounded"></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium">Light</span>
                    </button>
                    <button className="relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-primary bg-primary/5 transition-all">
                      <div className="absolute top-2 right-2 text-primary">
                        <CheckCircle className="text-primary" size={18} />
                      </div>
                      <div className="h-20 w-full bg-foreground/90 rounded-lg border border-foreground/50 shadow-sm flex flex-col overflow-hidden">
                        <div className="h-3 w-full bg-foreground/80 border-b border-foreground/60"></div>
                        <div className="flex-1 p-2">
                          <div className="h-2 w-16 bg-foreground/70 rounded mb-1"></div>
                          <div className="h-2 w-10 bg-foreground/70 rounded"></div>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-primary">System</span>
                    </button>
                    <button className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-muted/40 hover:border-muted bg-muted transition-all">
                      <div className="h-20 w-full bg-[#0f172a] rounded-lg border border-muted/40 shadow-sm flex flex-col overflow-hidden">
                        <div className="h-3 w-full bg-muted border-b border-muted/40"></div>
                        <div className="flex-1 p-2">
                          <div className="h-2 w-16 bg-muted rounded mb-1"></div>
                          <div className="h-2 w-10 bg-muted rounded"></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium">Dark</span>
                    </button>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section className="bg-card rounded-xl border border-muted/40 shadow-sm overflow-hidden h-full">
                  <div className="p-6 border-b border-muted/40">
                    <div className="flex items-center gap-2">
                      <Bell className="text-muted-foreground" size={18} />
                      <h2 className="text-lg font-semibold">Notifications</h2>
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Email Digest</p>
                        <p className="text-xs text-muted-foreground">Receive a weekly summary of your progress.</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-5 w-5 rounded bg-card border-2 border-muted/60 text-primary" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Product Updates</p>
                        <p className="text-xs text-muted-foreground">News about new features and improvements.</p>
                      </div>
                      <input type="checkbox" className="h-5 w-5 rounded bg-card border-2 border-muted/60 text-primary" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Session Reminders</p>
                        <p className="text-xs text-muted-foreground">Get notified if you haven't coded in 3 days.</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-5 w-5 rounded bg-card border-2 border-muted/60 text-primary" />
                    </div>
                  </div>
                </section>

                <section className="bg-card rounded-xl border border-muted/40 shadow-sm overflow-hidden h-full">
                  <div className="p-6 border-b border-muted/40">
                    <div className="flex items-center gap-2">
                      <Shield className="text-muted-foreground" size={18} />
                      <h2 className="text-lg font-semibold">Privacy & AI</h2>
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="pr-4">
                        <p className="text-sm font-medium">Anonymous Usage Data</p>
                        <p className="text-xs text-muted-foreground">Share anonymous statistics to help us improve.</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-5 w-5 rounded bg-card border-2 border-muted/60 text-primary" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="pr-4">
                        <p className="text-sm font-medium">Private Repo Analysis</p>
                        <p className="text-xs text-muted-foreground">Allow AI to analyze private repositories for personalized tips.</p>
                      </div>
                      <input type="checkbox" className="h-5 w-5 rounded bg-card border-2 border-muted/60 text-primary" />
                    </div>
                    <div>
                      <a className="text-xs text-primary hover:underline inline-flex items-center gap-1" href="#">
                        Read our Privacy Policy
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </section>
              </div>

              <section className="bg-card rounded-xl border border-muted/40 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-muted/40">
                  <div className="flex items-center gap-2">
                    <Puzzle className="text-muted-foreground" size={18} />
                    <h2 className="text-lg font-semibold">Integrations</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 pl-8">Connect external tools to enhance your workflow.</p>
                </div>
                <div className="divide-y divide-muted/40">
                  <div className="p-6 flex items-center justify-between hover:bg-muted transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-foreground text-background flex items-center justify-center">
                        <Github className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">GitHub</h3>
                        <p className="text-xs text-muted-foreground">Sync repositories and contribution stats.</p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 rounded-lg border border-red-200 transition-colors">
                      Disconnect
                    </button>
                  </div>
                  <div className="p-6 flex items-center justify-between hover:bg-muted transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                        J
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Jira</h3>
                        <p className="text-xs text-muted-foreground">Link learning progress to tickets.</p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 text-xs font-medium bg-card text-foreground hover:bg-muted rounded-lg border border-muted/40 transition-colors">
                      Connect
                    </button>
                  </div>
                  <div className="p-6 flex items-center justify-between hover:bg-muted transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-[#4A154B] text-white flex items-center justify-center p-2">
                        <Slack className="w-full h-full" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Slack</h3>
                        <p className="text-xs text-muted-foreground">Share achievements with your team.</p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 text-xs font-medium bg-card text-foreground hover:bg-muted rounded-lg border border-muted/40 transition-colors">
                      Connect
                    </button>
                  </div>
                </div>
              </section>

              <section className="bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-900/30 shadow-sm overflow-hidden mb-12">
                <div className="p-6 border-b border-red-200 dark:border-red-900/30">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="text-red-600 dark:text-red-400" size={18} />
                    <h2 className="text-lg font-semibold text-red-900 dark:text-red-200">Danger Zone</h2>
                  </div>
                </div>
                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-red-900 dark:text-red-200">Delete Account</h3>
                    <p className="text-xs text-red-700 dark:text-red-300 mt-1">Permanently delete your account and all associated data.</p>
                  </div>
                  <button className="px-4 py-2 bg-card border border-red-300 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium shadow-sm transition-colors dark:bg-red-900/20 dark:border-red-800 dark:text-red-200 dark:hover:bg-red-900/40">
                    Delete Account
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
