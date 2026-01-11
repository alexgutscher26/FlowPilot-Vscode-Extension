"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Code2, ArrowRight, Loader2, Key } from "lucide-react"
import { authClient } from "@/lib/auth-client"

export default function ConnectExtensionPage() {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const [isGenerating, setIsGenerating] = useState(false)
  const [apiKey, setApiKey] = useState<string | null>(null)

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="animate-spin text-primary" size={24} />
      </div>
    )
  }

  if (!session) {
    router.replace("/login?callbackUrl=/settings/connect")
    return null
  }

  const generateKey = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch("/api/auth/api-key", { method: "POST" })
      const data = await response.json()
      if (data.apiKey) {
        setApiKey(data.apiKey)
        // Automatically redirect to VS Code
        window.location.href = `vscode://flowpilot.flowpilot/auth?key=${data.apiKey}`
      }
    } catch (error) {
      console.error("Failed to generate key", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="h-16 flex items-center px-6 border-b border-muted/40">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
            <Code2 size={18} />
          </div>
          <h1 className="text-lg font-bold tracking-tight">FlowPilot</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-card border border-muted/40 rounded-xl p-8 shadow-sm">
          <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Key size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Connect VS Code</h2>
          <p className="text-muted-foreground mb-8">
            Generate an API key to securely connect your VS Code extension to your dashboard. This
            enables session tracking, history, and AI insights.
          </p>

          {!apiKey ? (
            <button
              onClick={generateKey}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg transition-all"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Generating Key...
                </>
              ) : (
                <>
                  Connect Extension <ArrowRight size={18} />
                </>
              )}
            </button>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 mb-6">
                <p className="font-medium">Key Generated Successfully!</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                If VS Code didn't open automatically, copy this key:
              </p>
              <code className="block w-full text-center bg-muted p-3 rounded border border-muted/40 font-mono text-sm mb-6 break-all">
                {apiKey}
              </code>
              <button
                onClick={() =>
                  (window.location.href = `vscode://flowpilot.flowpilot/auth?key=${apiKey}`)
                }
                className="text-primary hover:underline text-sm font-medium"
              >
                Click to open VS Code
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
