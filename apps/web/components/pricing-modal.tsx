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
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        Upgrade to FlowPilot Pro
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 font-medium">
                        Unlock the full potential of AI-powered coding assistance.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <p>Unlimited AI Explanations</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <p>Unlimited Refactoring Suggestions</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <p>Unlimited Error Analysis</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <p>Unlimited Security Scans</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <p>Higher API Rate Limits (120/min)</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <p>Analyze files up to 500 lines</p>
                    </div>
                </div>
                <DialogFooter>
                    <Button disabled={isLoading} onClick={onUpgrade} className="w-full" size="lg">
                        {isLoading ? "Processing..." : "Upgrade for $9.99/mo"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
