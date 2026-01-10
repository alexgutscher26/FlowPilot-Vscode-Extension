"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

type CodingSession = {
    id: string
    description: string | null
    interactionType: string
    language: string | null
    startedAt: string
}

function timeAgo(dateString: string) {
    const date = new Date(dateString)
    const now = new Date()
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    let interval = seconds / 31536000
    if (interval > 1) {
        return Math.floor(interval) + " years ago"
    }
    interval = seconds / 2592000
    if (interval > 1) {
        return Math.floor(interval) + " months ago"
    }
    interval = seconds / 604800 // weeks
    if (interval > 1) {
        return Math.floor(interval) + " weeks ago"
    }
    interval = seconds / 86400
    if (interval > 1) {
        return Math.floor(interval) + " days ago"
    }
    interval = seconds / 3600
    if (interval > 1) {
        return Math.floor(interval) + " hours ago"
    }
    interval = seconds / 60
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago"
    }
    return "just now"
}

export function RecentSessions() {
    const [sessions, setSessions] = useState<CodingSession[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/api/sessions")
            .then((res) => {
                if (res.ok) return res.json()
                throw new Error("Failed to fetch")
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setSessions(data.slice(0, 5))
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <div className="bg-card rounded-xl border border-muted/40 shadow-sm flex flex-col h-full min-h-[300px]">
                <div className="p-6 border-b border-muted/40">
                    <h2 className="text-lg font-bold">Recent Sessions</h2>
                </div>
                <div className="p-8 text-center text-muted-foreground">Loading sessions...</div>
            </div>
        )
    }

    // Helper to colorize language badge
    const getLangColor = (lang: string | null) => {
        const l = (lang || "").toLowerCase()
        if (l.includes("type") || l === "ts") return "bg-blue-100 text-blue-600"
        if (l.includes("java") || l === "js") return "bg-yellow-100 text-yellow-700"
        if (l.includes("py")) return "bg-green-100 text-green-700"
        if (l.includes("c#") || l === "cs") return "bg-purple-100 text-purple-700"
        return "bg-gray-100 text-gray-600"
    }

    const getLangShort = (lang: string | null) => {
        const l = (lang || "??").toUpperCase().substring(0, 2);
        return l;
    }

    return (
        <div className="bg-card rounded-xl border border-muted/40 shadow-sm flex flex-col h-full">
            <div className="p-6 border-b border-muted/40">
                <h2 className="text-lg font-bold">Recent Sessions</h2>
            </div>
            <div className="p-0 overflow-y-auto max-h-[400px]">
                {sessions.length === 0 ? (
                    <div className="p-8 text-center text-muted-foreground">
                        No sessions yet. Start coding in VS Code!
                    </div>
                ) : (
                    sessions.map((session) => (
                        <div
                            key={session.id}
                            className="p-4 hover:bg-muted transition-colors border-b border-muted/40 cursor-pointer group"
                        >
                            <div className="flex gap-4">
                                <div
                                    className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getLangColor(
                                        session.language
                                    )}`}
                                >
                                    <span className="font-bold text-xs">{getLangShort(session.language)}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
                                        {session.description || "Untitled Session"}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {session.interactionType} • {timeAgo(session.startedAt)}
                                    </p>
                                </div>
                                <div className="flex items-center text-muted-foreground group-hover:text-primary">
                                    <ChevronRight size={18} />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="p-4 border-t border-muted/40 mt-auto">
                <Link
                    href="/sessions"
                    className="block w-full text-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                    View All History
                </Link>
            </div>
        </div>
    )
}
