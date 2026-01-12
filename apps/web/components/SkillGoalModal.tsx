"use client"
import { useState } from "react"
import { X, Calendar, Target } from "lucide-react"

type SkillGoalModalProps = {
    isOpen: boolean
    onClose: () => void
    onSubmit: (goal: {
        conceptName: string
        targetConfidence: number
        deadline?: string
    }) => Promise<void>
    existingConcepts?: string[]
}

export default function SkillGoalModal({
    isOpen,
    onClose,
    onSubmit,
    existingConcepts = [],
}: SkillGoalModalProps) {
    const [conceptName, setConceptName] = useState("")
    const [targetConfidence, setTargetConfidence] = useState(80)
    const [deadline, setDeadline] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [showSuggestions, setShowSuggestions] = useState(false)

    const filteredConcepts = existingConcepts.filter((concept) =>
        concept.toLowerCase().includes(conceptName.toLowerCase())
    )

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!conceptName.trim()) {
            setError("Concept name is required")
            return
        }

        if (targetConfidence < 1 || targetConfidence > 100) {
            setError("Target confidence must be between 1 and 100")
            return
        }

        setIsSubmitting(true)
        try {
            await onSubmit({
                conceptName: conceptName.trim(),
                targetConfidence,
                deadline: deadline || undefined,
            })
            // Reset form
            setConceptName("")
            setTargetConfidence(80)
            setDeadline("")
            onClose()
        } catch (err: any) {
            setError(err.message || "Failed to create goal")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-xl shadow-2xl max-w-md w-full border border-muted/40">
                <div className="flex items-center justify-between p-6 border-b border-muted/40">
                    <h2 className="text-xl font-bold">Create Skill Goal</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {error && (
                        <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <div className="relative">
                        <label className="block text-sm font-medium mb-2">
                            Concept Name
                        </label>
                        <input
                            type="text"
                            value={conceptName}
                            onChange={(e) => {
                                setConceptName(e.target.value)
                                setShowSuggestions(true)
                            }}
                            onFocus={() => setShowSuggestions(true)}
                            placeholder="e.g., React Hooks, TypeScript Generics"
                            className="w-full px-4 py-2 bg-background border border-muted/40 rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none"
                            required
                        />
                        {showSuggestions && filteredConcepts.length > 0 && conceptName && (
                            <div className="absolute z-10 w-full mt-1 bg-card border border-muted/40 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                                {filteredConcepts.slice(0, 5).map((concept) => (
                                    <button
                                        key={concept}
                                        type="button"
                                        onClick={() => {
                                            setConceptName(concept)
                                            setShowSuggestions(false)
                                        }}
                                        className="w-full px-4 py-2 text-left hover:bg-muted transition-colors text-sm"
                                    >
                                        {concept}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                            <Target size={16} />
                            Target Confidence: {targetConfidence}%
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={targetConfidence}
                            onChange={(e) => setTargetConfidence(Number(e.target.value))}
                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Beginner (1%)</span>
                            <span>Expert (100%)</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                            <Calendar size={16} />
                            Deadline (Optional)
                        </label>
                        <input
                            type="date"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full px-4 py-2 bg-background border border-muted/40 rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none"
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 bg-muted hover:bg-muted/70 rounded-lg font-medium transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Creating..." : "Create Goal"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
