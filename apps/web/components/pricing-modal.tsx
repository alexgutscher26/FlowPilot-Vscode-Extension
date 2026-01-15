"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Check } from "lucide-react"
import { useState } from "react"

interface PricingModalProps {
    isOpen: boolean
    onClose: () => void
}

export const PricingModal = ({ isOpen, onClose }: PricingModalProps) => {
    const [isLoading, setIsLoading] = useState(false)

    const onUpgrade = async () => {
        try {
            setIsLoading(true)
            const response = await fetch("/api/stripe/checkout", {
                method: "POST",
            })

            if (!response.ok) {
                throw new Error("Failed to create checkout session")
            }

            const { url } = await response.json()
            window.location.href = url
        } catch (error: any) {
            console.log(error)
            alert("Checkout Error: " + (error.message || "Something went wrong"))
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex flex-col gap-y-1 pb-2">
                        <span className="text-xl font-bold">Pro Coach</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold">$9</span>
                            <span className="text-muted-foreground font-medium">/ month</span>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="pt-1 font-medium text-muted-foreground">
                        For serious learners who want to grow faster.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-500" />
                        <p className="font-medium">Unlimited AI Explanations</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-500" />
                        <p className="font-medium">Unlimited Refactoring Suggestions</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-500" />
                        <p className="font-medium">Unlimited Error Analysis</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-500" />
                        <p className="font-medium">Unlimited Security Scans</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-blue-500" />
                        <p className="font-medium">Priority Processing</p>
                    </div>
                    <div className="flex items-center gap-2 pl-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                        <p className="text-muted-foreground">Max 500 lines / request</p>
                    </div>
                    <div className="flex items-center gap-2 pl-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                        <p className="text-muted-foreground">120 API requests / min</p>
                    </div>
                </div>
                <DialogFooter>
                    <Button disabled={isLoading} onClick={onUpgrade} className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                        {isLoading ? "Processing..." : "Get Early Access"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
