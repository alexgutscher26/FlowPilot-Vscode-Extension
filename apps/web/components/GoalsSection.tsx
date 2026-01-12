"use client"
import { Target, TrendingUp, CheckCircle } from "lucide-react"
import SkillGoalCard from "./SkillGoalCard"

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

type GoalsSectionProps = {
    goals: SkillGoal[]
    onComplete: (id: string) => void
    onDelete: (id: string) => void
}

export default function GoalsSection({
    goals,
    onComplete,
    onDelete,
}: GoalsSectionProps) {
    const activeGoals = goals.filter((g) => g.status === "active")
    const completedGoals = goals.filter((g) => g.status === "completed")

    const completedThisMonth = completedGoals.filter((g) => {
        const completedDate = new Date(g.updatedAt || g.createdAt)
        const now = new Date()
        return (
            completedDate.getMonth() === now.getMonth() &&
            completedDate.getFullYear() === now.getFullYear()
        )
    }).length

    if (goals.length === 0) {
        return (
            <div className="bg-card rounded-xl border border-muted/40 p-12 text-center">
                <div className="max-w-md mx-auto">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">No Goals Yet</h3>
                    <p className="text-muted-foreground mb-6">
                        Set your first learning goal to track your progress and stay
                        motivated on your coding journey.
                    </p>
                    <div className="flex gap-4 justify-center text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <TrendingUp size={16} />
                            <span>Track Progress</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} />
                            <span>Stay Motivated</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg border border-muted/40 p-4">
                    <p className="text-sm text-muted-foreground mb-1">Active Goals</p>
                    <p className="text-2xl font-bold">{activeGoals.length}</p>
                </div>
                <div className="bg-card rounded-lg border border-muted/40 p-4">
                    <p className="text-sm text-muted-foreground mb-1">
                        Completed This Month
                    </p>
                    <p className="text-2xl font-bold text-green-600">
                        {completedThisMonth}
                    </p>
                </div>
                <div className="bg-card rounded-lg border border-muted/40 p-4">
                    <p className="text-sm text-muted-foreground mb-1">Total Completed</p>
                    <p className="text-2xl font-bold">{completedGoals.length}</p>
                </div>
            </div>

            {/* Active Goals */}
            {activeGoals.length > 0 && (
                <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Target className="text-primary" size={20} />
                        Active Goals
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activeGoals.map((goal) => (
                            <SkillGoalCard
                                key={goal.id}
                                goal={goal}
                                onComplete={onComplete}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Completed Goals */}
            {completedGoals.length > 0 && (
                <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={20} />
                        Completed Goals
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {completedGoals.slice(0, 6).map((goal) => (
                            <SkillGoalCard
                                key={goal.id}
                                goal={goal}
                                onComplete={onComplete}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
