"use client"

import { useState } from "react"

const EMOJIS = [
    { emoji: "👍", label: "Thumbs up" },
    { emoji: "❤️", label: "Heart" },
    { emoji: "😄", label: "Smile" },
    { emoji: "🎉", label: "Party" },
    { emoji: "🚀", label: "Rocket" },
]

interface ReactionPickerProps {
    onSelect: (emoji: string) => void
    onClose: () => void
}

export function ReactionPicker({ onSelect, onClose }: ReactionPickerProps) {
    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40"
                onClick={onClose}
            />

            {/* Picker */}
            <div className="absolute bottom-full mb-2 left-0 z-50 bg-card border border-muted rounded-lg shadow-lg p-2 flex gap-1">
                {EMOJIS.map(({ emoji, label }) => (
                    <button
                        key={emoji}
                        onClick={() => {
                            onSelect(emoji)
                            onClose()
                        }}
                        className="p-2 hover:bg-muted rounded transition-colors text-xl"
                        title={label}
                    >
                        {emoji}
                    </button>
                ))}
            </div>
        </>
    )
}

interface ReactionDisplayProps {
    reactions: Array<{ emoji: string; count: number; userReacted: boolean }>
    onToggle: (emoji: string) => void
    onPickerOpen: () => void
    showPicker: boolean
}

export function ReactionDisplay({
    reactions,
    onToggle,
    onPickerOpen,
    showPicker,
}: ReactionDisplayProps) {
    return (
        <div className="flex items-center gap-1 flex-wrap relative">
            {reactions.map(({ emoji, count, userReacted }) => (
                <button
                    key={emoji}
                    onClick={() => onToggle(emoji)}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs transition-colors ${userReacted
                            ? "bg-primary/20 text-primary border border-primary/40"
                            : "bg-muted text-muted-foreground hover:bg-muted/80 border border-transparent"
                        }`}
                >
                    <span>{emoji}</span>
                    <span className="font-medium">{count}</span>
                </button>
            ))}

            <div className="relative">
                <button
                    onClick={onPickerOpen}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
                    title="Add reaction"
                >
                    <span>+</span>
                </button>
                {showPicker && (
                    <ReactionPicker onSelect={onToggle} onClose={() => { }} />
                )}
            </div>
        </div>
    )
}
