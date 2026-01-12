"use client"

import { Heart, ExternalLink, MessageSquare, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { CommentSection } from "./CommentSection"

interface FeatureCardProps {
    id: string
    title: string
    description: string
    tag: string
    voteCount: number
    userHasVoted: boolean
    status: string
    commentCount?: number
    currentUserId?: string
    onVote: (id: string) => void
}

const tagColors: Record<string, string> = {
    feature: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
    improvement: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
    integration: "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300",
    platform: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300",
    ai: "bg-teal-100 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300",
    export: "bg-muted text-muted-foreground",
}

const statusBorderColors: Record<string, string> = {
    now: "border-emerald-500",
    in_progress: "border-emerald-500",
    next: "border-blue-500/50",
    planned: "border-blue-500/50",
    later: "border-muted-foreground/40",
    considering: "border-muted-foreground/40",
}

export function FeatureCard({
    id,
    title,
    description,
    tag,
    voteCount,
    userHasVoted,
    status,
    commentCount = 0,
    currentUserId,
    onVote,
}: FeatureCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const borderClass = statusBorderColors[status] || "border-muted/40"
    const tagClass = tagColors[tag] || tagColors.feature

    return (
        <div
            className={`bg-card p-5 rounded-xl border ${status === "now" ? `border-l-4 ${borderClass} border-y border-r border-muted/40` : `border ${borderClass}`
                } shadow-sm hover:shadow-md transition-all group`}
        >
            <div className="flex justify-between items-start mb-2">
                <span
                    className={`px-2 py-1 rounded ${tagClass} text-[10px] font-bold uppercase tracking-wide`}
                >
                    {tag}
                </span>
                {status === "now" && (
                    <ExternalLink
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                        size={18}
                    />
                )}
            </div>
            <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <div className="flex items-center justify-between pt-3 border-t border-muted/40">
                <div className="flex items-center gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            onVote(id)
                        }}
                        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all ${userHasVoted
                                ? "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                                : "bg-muted text-muted-foreground hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400"
                            }`}
                    >
                        <Heart
                            size={14}
                            className={userHasVoted ? "fill-current" : ""}
                        />
                        <span className="text-xs font-medium">{voteCount}</span>
                    </button>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                    >
                        <MessageSquare size={14} />
                        <span className="text-xs font-medium">{commentCount}</span>
                        {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>
                </div>
            </div>

            {isExpanded && (
                <CommentSection featureId={id} currentUserId={currentUserId} />
            )}
        </div>
    )
}
