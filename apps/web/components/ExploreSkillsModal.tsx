"use client"
import { X, Code2, Cpu, Wrench, Search, Star } from "lucide-react"
import { useState } from "react"

type ExploreSkillsModalProps = {
    isOpen: boolean
    onClose: () => void
    onSelectSkill: (skill: string) => void
}

const POPULAR_SKILLS = [
    {
        category: "Languages",
        icon: <Code2 className="text-blue-500" />,
        skills: ["TypeScript", "Python", "Rust", "Go", "JavaScript", "Java", "C++", "Swift"],
    },
    {
        category: "Frameworks & Libraries",
        icon: <Cpu className="text-purple-500" />,
        skills: [
            "React",
            "Next.js",
            "Vue.js",
            "Angular",
            "Tailwind CSS",
            "Node.js",
            "Django",
            "FastAPI",
        ],
    },
    {
        category: "Tools & DevOps",
        icon: <Wrench className="text-orange-500" />,
        skills: ["Git", "Docker", "Kubernetes", "AWS", "Linux", "PostgreSQL", "MongoDB", "Redis"],
    },
]

export default function ExploreSkillsModal({
    isOpen,
    onClose,
    onSelectSkill,
}: ExploreSkillsModalProps) {
    const [searchTerm, setSearchTerm] = useState("")

    if (!isOpen) return null

    const filteredCategories = POPULAR_SKILLS.map((cat) => ({
        ...cat,
        skills: cat.skills.filter((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
        ),
    })).filter((cat) => cat.skills.length > 0)

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-xl shadow-2xl max-w-2xl w-full border border-muted/40 flex flex-col max-h-[85vh]">
                <div className="flex items-center justify-between p-6 border-b border-muted/40">
                    <div>
                        <h2 className="text-xl font-bold">Explore Skills</h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Discover new technologies to add to your roadmap
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-4 border-b border-muted/40 bg-muted/20">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
                        <input
                            type="text"
                            placeholder="Search specific skills..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-background border border-muted/40 rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {filteredCategories.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground">
                            <p>No skills found matching "{searchTerm}"</p>
                        </div>
                    ) : (
                        filteredCategories.map((category) => (
                            <div key={category.category}>
                                <h3 className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                                    {category.icon}
                                    {category.category}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {category.skills.map((skill) => (
                                        <button
                                            key={skill}
                                            onClick={() => onSelectSkill(skill)}
                                            className="flex items-center gap-2 p-3 rounded-lg border border-muted/40 hover:border-primary/50 hover:bg-muted/50 transition-all text-sm font-medium text-left group"
                                        >
                                            <Star
                                                size={14}
                                                className="text-muted-foreground group-hover:text-yellow-500 transition-colors"
                                            />
                                            {skill}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
