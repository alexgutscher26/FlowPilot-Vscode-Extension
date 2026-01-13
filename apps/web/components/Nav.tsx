"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"

export function Nav() {
    const { data: session } = authClient.useSession()

    return (
        <div className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <span className="text-lg font-semibold">FlowPilot</span>
                </Link>
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        className="text-sm text-muted-foreground hover:text-foreground"
                        href="/#features"
                    >
                        Features
                    </Link>
                    <Link
                        className="text-sm text-muted-foreground hover:text-foreground"
                        href="/#how-it-works"
                    >
                        How it works
                    </Link>
                    <Link
                        className="text-sm text-muted-foreground hover:text-foreground"
                        href="/#pricing"
                    >
                        Pricing
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    {session ? (
                        <Button asChild>
                            <Link href="/dashboard">Dashboard</Link>
                        </Button>
                    ) : (
                        <Button asChild>
                            <Link href="/login">Sign in</Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
