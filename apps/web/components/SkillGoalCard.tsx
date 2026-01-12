"use client"
import { CheckCircle2, Clock, Target, Trash2, Edit } from "lucide-react"

type SkillGoal = {
    id: string
    conceptName: string
    targetConfidence: number
    currentProgress: number
    deadline: Date | null
    status: "active" | "completed" | "abandoned"
    skill?: {
        confidence: number
        language: string | null
    }
}

type SkillGoalCardProps = {
    goal: SkillGoal
    onComplete: (id: string) => void
    onDelete: (id: string) => void
}

export default function SkillGoalCard({
    goal,
    onComplete,
    onDelete,
}: SkillGoalCardProps) {
    const currentConfidence = goal.skill?.confidence || 0
    const progress = Math.min(
        Math.round((currentConfidence / goal.targetConfidence) * 100),
        100
    )
    const isCompleted = goal.status === "completed"
    const isOverdue =
        goal.deadline && new Date(goal.deadline) < new Date() && !isCompleted

    const getDaysRemaining = () => {
        if (!goal.deadline) return null
        const days = Math.ceil(
            (new Date(goal.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
        )
        return days
    }

    const daysRemaining = getDaysRemaining()

    return (
        <div
            className={`bg-card rounded-xl border p-5 hover:shadow-md transition-all ${isCompleted
                    ? "border-green-500/50 bg-green-50/5"
                    : isOverdue
                        ? "border-red-500/50"
                        : "border-muted/40"
                }`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                        {goal.conceptName}
                        {isCompleted && (
                            <CheckCircle2 className="text-green-500" size={18} />
                        )}
                    </h3>
                    {goal.skill?.language && (
                        <span className="text-xs text-muted-foreground">
                            {goal.skill.language}
                        </span>
                    )}
                </div>
                <div className="flex gap-2">
                    {!isCompleted && currentConfidence >= goal.targetConfidence && (
                        <button
                            onClick={() => onComplete(goal.id)}
                            className="p-2 hover:bg-green-100 dark:hover:bg-green-900/20 text-green-600 rounded-lg transition-colors"
                            title="Mark as complete"
                        >
                            <CheckCircle2 size={18} />
                        </button>
                    )}
                    <button
                        onClick={() => onDelete(goal.id)}
                        className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 rounded-lg transition-colors"
                        title="Delete goal"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            <div className="space-y-3">
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">
                            {currentConfidence}% / {goal.targetConfidence}%
                        </span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all duration-500 ${isCompleted
                                    ? "bg-green-500"
                                    : progress >= 75
                                        ? "bg-primary"
                                        : progress >= 50
                                            ? "bg-yellow-500"
                                            : "bg-orange-400"
                                }`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {goal.deadline && (
                    <div
                        className={`flex items-center gap-2 text-sm ${isOverdue
                                ? "text-red-600"
                                : daysRemaining && daysRemaining <= 7
                                    ? "text-yellow-600"
                                    : "text-muted-foreground"
                            }`}
                    >
                        <Clock size={14} />
                        <span>
                            {isOverdue
                                ? "Overdue"
                                : daysRemaining === 0
                                    ? "Due today"
                                    : daysRemaining === 1
                                        ? "Due tomorrow"
                                        : `${daysRemaining} days left`}
                        </span>
                    </div>
                )}

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target size={14} />
                    <span>
                        {progress}% complete
                        {isCompleted && " ✓"}
                    </span>
                </div>
            </div>
        </div>
    )
}
