"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"
import { ArrowLeft, Calendar, Code2, Clock, FileText, Terminal, Loader2 } from "lucide-react"

interface CodingSession {
  id: string
  description: string
  interactionType: string
  language: string
  codeSnippet: string
  explanation: string
  startedAt: string
  metadata: any
}

export default function SessionDetailsPage() {
  const router = useRouter()
  const { id } = useParams()
  const { data: session, isPending } = authClient.useSession()
  const [codingSession, setCodingSession] = useState<CodingSession | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login")
    }
  }, [isPending, session, router])

  useEffect(() => {
    async function fetchSessionDetails() {
      if (session && id) {
        try {
          const res = await fetch(`/api/sessions/${id}`)
          if (res.ok) {
            const data = await res.json()
            setCodingSession(data)
          } else {
            console.error("Failed to fetch session")
          }
        } catch (error) {
          console.error("Error fetching session:", error)
        } finally {
          setIsLoading(false)
        }
      }
    }
    fetchSessionDetails()
  }, [session, id])

  if (isPending || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary mb-4" />
          <p className="text-muted-foreground">Loading session details...</p>
        </div>
      </div>
    )
  }

  if (!codingSession) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 className="text-2xl font-bold mb-2">Session Not Found</h1>
        <Link href="/sessions" className="text-primary hover:underline">
          Back to Sessions
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-background min-h-screen text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/sessions"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Sessions
        </Link>

        <div className="bg-card border border-muted/40 rounded-xl overflow-hidden shadow-sm">
          {/* Header */}
          <div className="p-6 border-b border-muted/40 bg-muted/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight mb-2">
                  {codingSession.description || "Coding Session"}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Code2 size={14} />
                    <span className="font-medium text-foreground">{codingSession.language}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileText size={14} />
                    <span>{codingSession.interactionType}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{new Date(codingSession.startedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{new Date(codingSession.startedAt).toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {codingSession.interactionType}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Explanation Section */}
            {codingSession.explanation && (
              <div>
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Terminal size={18} className="text-primary" />
                  AI Explanation
                </h2>
                <div className="bg-muted/50 rounded-lg p-4 text-sm leading-relaxed whitespace-pre-wrap border border-muted/40 font-mono">
                  {codingSession.explanation}
                </div>
              </div>
            )}

            {/* Code Snippet Section */}
            {codingSession.codeSnippet && (
              <div>
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Code2 size={18} className="text-primary" />
                  Referenced Code
                </h2>
                <div className="rounded-lg overflow-hidden border border-muted/40">
                  <div className="bg-muted px-4 py-2 border-b border-muted/40 text-xs text-muted-foreground font-mono flex justify-between">
                    <span>{codingSession.language}</span>
                    <span>Read-only</span>
                  </div>
                  <div className="bg-[#1e1e1e] p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                      <code>{codingSession.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* JSON Metadata (optional, for debugging/advanced view) */}
            <div>
              <details className="text-xs text-muted-foreground cursor-pointer">
                <summary className="hover:text-foreground transition-colors">
                  View Raw Metadata
                </summary>
                <pre className="mt-2 p-4 bg-muted rounded-lg overflow-x-auto border border-muted/40">
                  {JSON.stringify(codingSession.metadata, null, 2)}
                </pre>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
