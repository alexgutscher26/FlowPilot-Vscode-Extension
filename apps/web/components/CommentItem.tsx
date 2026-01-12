"use client"

import { Trash2, X, Check, Edit2, MessageSquare, Smile } from "lucide-react"
import { useState } from "react"
import { ReactionDisplay } from "./ReactionPicker"

interface CommentItemProps {
  id: string
  body: string
  createdAt: Date
  updatedAt: Date
  isEdited: boolean
  user: {
    id: string
    name: string | null
    image: string | null
  }
  reactions: Array<{ emoji: string; count: number; userReacted: boolean }>
  replyCount: number
  currentUserId?: string
  featureId: string
  onDelete: (commentId: string) => void
  onEdit: (commentId: string, newBody: string) => void
  onReact: (commentId: string, emoji: string) => void
  onReply?: (commentId: string) => void
}

export function CommentItem({
  id,
  body,
  createdAt,
  updatedAt,
  isEdited,
  user,
  reactions,
  replyCount,
  currentUserId,
  featureId,
  onDelete,
  onEdit,
  onReact,
  onReply,
}: CommentItemProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editBody, setEditBody] = useState(body)
  const [showReactionPicker, setShowReactionPicker] = useState(false)
  const isOwner = currentUserId === user.id

  const handleDelete = async () => {
    setIsDeleting(true)
    setShowConfirm(false)
    try {
      await onDelete(id)
    } catch (error) {
      console.error("Failed to delete comment:", error)
      setIsDeleting(false)
    }
  }

  const handleSaveEdit = async () => {
    if (editBody.trim() === body) {
      setIsEditing(false)
      return
    }

    if (!editBody.trim() || editBody.length > 500) return

    try {
      await onEdit(id, editBody.trim())
      setIsEditing(false)
    } catch (error) {
      console.error("Failed to edit comment:", error)
    }
  }

  const handleCancelEdit = () => {
    setEditBody(body)
    setIsEditing(false)
  }

  const getRelativeTime = (date: Date) => {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000)

    if (diffInSeconds < 60) return "just now"
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`
    return new Date(date).toLocaleDateString()
  }

  return (
    <div className="flex gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
      <div
        className="h-8 w-8 rounded-full bg-muted flex-shrink-0 overflow-hidden"
        style={{
          backgroundImage: user.image ? `url('${user.image}')` : undefined,
          backgroundSize: "cover",
        }}
      >
        {!user.image && (
          <div className="h-full w-full flex items-center justify-center text-xs font-semibold text-muted-foreground">
            {user.name?.[0]?.toUpperCase() || "?"}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium">{user.name || "Anonymous"}</span>
          <span className="text-xs text-muted-foreground">{getRelativeTime(createdAt)}</span>
          {isEdited && (
            <span className="text-xs text-muted-foreground italic">(edited)</span>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-2">
            <div className="relative">
              <textarea
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                maxLength={500}
                rows={3}
                className="w-full px-2 py-1 bg-background border border-muted/40 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <div className="absolute bottom-1 right-2 text-xs text-muted-foreground">
                {editBody.length}/500
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSaveEdit}
                disabled={!editBody.trim() || editBody.length > 500}
                className="px-3 py-1 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 disabled:opacity-50"
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="px-3 py-1 bg-muted text-muted-foreground rounded text-xs font-medium hover:bg-muted/80"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <p className="text-sm text-foreground whitespace-pre-wrap break-words mb-2">
              {body}
            </p>

            {/* Reactions */}
            {(reactions.length > 0 || currentUserId) && (
              <div className="mb-2">
                <ReactionDisplay
                  reactions={reactions}
                  onToggle={(emoji) => onReact(id, emoji)}
                  onPickerOpen={() => setShowReactionPicker(!showReactionPicker)}
                  showPicker={showReactionPicker}
                />
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              {onReply && (
                <button
                  onClick={() => onReply(id)}
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <MessageSquare size={12} />
                  <span>Reply</span>
                  {replyCount > 0 && <span>({replyCount})</span>}
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {isOwner && !isEditing && (
        <div className="flex-shrink-0 flex gap-1">
          <button
            onClick={() => setIsEditing(true)}
            className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded transition-colors"
            title="Edit comment"
          >
            <Edit2 size={14} />
          </button>
          {showConfirm ? (
            <div className="flex items-center gap-1 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-lg">
              <span className="text-xs text-red-600 dark:text-red-400 font-medium mr-1">Delete?</span>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="p-1 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 rounded transition-colors disabled:opacity-50"
                title="Confirm delete"
              >
                <Check size={14} />
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                disabled={isDeleting}
                className="p-1 text-muted-foreground hover:bg-muted rounded transition-colors disabled:opacity-50"
                title="Cancel"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              disabled={isDeleting}
              className="p-1.5 text-muted-foreground hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-colors disabled:opacity-50"
              title="Delete comment"
            >
              <Trash2 size={14} />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
