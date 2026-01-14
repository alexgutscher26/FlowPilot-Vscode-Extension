
"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle, Loader2, X } from "lucide-react"
import { useRouter } from "next/navigation"

interface JiraConnectModalProps {
    onClose: () => void
    onConnect: () => void
}

export function JiraConnectModal({ onClose, onConnect }: JiraConnectModalProps) {
    const [domain, setDomain] = useState("")
    const [email, setEmail] = useState("")
    const [apiToken, setApiToken] = useState("")
    const [defaultProject, setDefaultProject] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const res = await fetch("/api/integrations/jira", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ domain, email, apiToken, defaultProject }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Failed to connect to Jira")
            }

            onConnect()
            onClose()
            router.refresh()
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-xl border border-muted/40 shadow-2xl max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                >
                    <X size={20} />
                </button>

                <div className="p-6 border-b border-muted/40">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                            J
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Connect Jira</h2>
                            <p className="text-sm text-muted-foreground">Link your learning progress to tickets.</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg p-3 flex items-start gap-2">
                            <AlertTriangle className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" size={16} />
                            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-1.5">Jira Domain</label>
                        <input
                            type="text"
                            placeholder="your-domain.atlassian.net"
                            className="w-full px-3 py-2 border border-muted/40 rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            required
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            The URL of your Jira instance (e.g., https://company.atlassian.net)
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1.5">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className="w-full px-3 py-2 border border-muted/40 rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1.5">API Token</label>
                        <input
                            type="password"
                            placeholder="••••••••••••••••••••••••"
                            className="w-full px-3 py-2 border border-muted/40 rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                            value={apiToken}
                            onChange={(e) => setApiToken(e.target.value)}
                            required
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            Generate an API token in your{" "}
                            <a
                                href="https://id.atlassian.com/manage-profile/security/api-tokens"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:underline"
                            >
                                Atlassian Account Settings
                            </a>
                            .
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1.5">
                            Default Project Key <span className="text-muted-foreground font-normal">(Optional)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. PROJ"
                            className="w-full px-3 py-2 border border-muted/40 rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50 uppercase"
                            value={defaultProject}
                            onChange={(e) => setDefaultProject(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            Used for creating new tickets if no issue key is found in the session description.
                        </p>
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg text-sm font-medium transition-colors"
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            disabled={loading}
                        >
                            {loading && <Loader2 className="animate-spin" size={16} />}
                            {loading ? "Verifying..." : "Connect Jira"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
