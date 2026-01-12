"use client"

import { useState } from "react"
import { X, Sparkles } from "lucide-react"

interface SuggestFeatureModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (title: string, description: string) => Promise<void>
}

export function SuggestFeatureModal({
    isOpen,
    onClose,
    onSubmit,
}: SuggestFeatureModalProps) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")

    if (!isOpen) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!title.trim() || !description.trim()) {
            setError("Please fill in all fields")
            return
        }

        if (title.length > 100) {
            setError("Title must be 100 characters or less")
            return
        }

        if (description.length > 1000) {
            setError("Description must be 1000 characters or less")
            return
        }

        setIsSubmitting(true)
        try {
            await onSubmit(title, description)
            setTitle("")
            setDescription("")
            onClose()
        } catch (err) {
            setError("Failed to submit feature. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleClose = () => {
        if (!isSubmitting) {
            setTitle("")
            setDescription("")
            setError("")
            onClose()
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-card border border-muted/40 rounded-xl shadow-2xl max-w-lg w-full p-6 relative">
                <button
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors disabled:opacity-50"
                >
                    <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Sparkles className="text-primary" size={20} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Suggest a Feature</h2>
                        <p className="text-sm text-muted-foreground">
                            Help us build what you need
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium mb-2"
                        >
                            Feature Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g., Slack Integration"
                            maxLength={100}
                            disabled={isSubmitting}
                            className="w-full px-3 py-2 bg-background border border-muted/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            {title.length}/100 characters
                        </p>
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium mb-2"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe your feature idea in detail..."
                            maxLength={1000}
                            rows={5}
                            disabled={isSubmitting}
                            className="w-full px-3 py-2 bg-background border border-muted/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none disabled:opacity-50"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            {description.length}/1000 characters
                        </p>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                        </div>
                    )}

                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={handleClose}
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-2 bg-muted hover:bg-muted/70 text-foreground rounded-lg font-medium transition-colors disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium shadow-sm transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Sparkles size={16} />
                                    Submit Feature
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
