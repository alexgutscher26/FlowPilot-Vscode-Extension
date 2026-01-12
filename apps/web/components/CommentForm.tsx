"use client"

import { Send, X } from "lucide-react"
import { useState } from "react"

interface CommentFormProps {
  onSubmit: (body: string) => Promise<void>
  placeholder?: string
  onCancel?: () => void
}

export function CommentForm({
  onSubmit,
  placeholder = "Add a comment...",
  onCancel,
}: CommentFormProps) {
  const [body, setBody] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!body.trim()) {
      setError("Comment cannot be empty")
      return
    }

    if (body.length > 500) {
      setError("Comment must be 500 characters or less")
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit(body)
      setBody("")
    } catch (err) {
      setError("Failed to post comment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="relative">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={placeholder}
          maxLength={500}
          rows={3}
          disabled={isSubmitting}
          className="w-full px-3 py-2 bg-background border border-muted/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none disabled:opacity-50 text-sm"
        />
        <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
          {body.length}/500
        </div>
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <div className="flex justify-end gap-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-muted-foreground rounded-lg text-sm font-medium transition-colors"
          >
            <X size={14} />
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting || !body.trim()}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Posting...
            </>
          ) : (
            <>
              <Send size={14} />
              {onCancel ? "Reply" : "Post Comment"}
            </>
          )}
        </button>
      </div>
    </form>
  )
}
