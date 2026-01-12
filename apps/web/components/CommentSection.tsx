"use client"

import { useEffect, useState } from "react"
import { CommentItem } from "./CommentItem"
import { CommentForm } from "./CommentForm"
import { MessageSquare, ChevronDown } from "lucide-react"

interface Comment {
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
    replies?: Comment[]
}

interface CommentSectionProps {
    featureId: string
    currentUserId?: string
}

export function CommentSection({ featureId, currentUserId }: CommentSectionProps) {
    const [comments, setComments] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [nextCursor, setNextCursor] = useState<string | null>(null)
    const [total, setTotal] = useState(0)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [replyingTo, setReplyingTo] = useState<string | null>(null)

    useEffect(() => {
        fetchComments()
    }, [featureId])

    const fetchComments = async (cursor?: string) => {
        try {
            if (!cursor) setIsLoading(true)
            else setIsLoadingMore(true)

            const url = new URL(`/api/features/${featureId}/comments`, window.location.origin)
            if (cursor) url.searchParams.set("cursor", cursor)

            const response = await fetch(url.toString())
            if (!response.ok) throw new Error("Failed to fetch comments")

            const data = await response.json()

            if (cursor) {
                setComments((prev) => [...prev, ...data.comments])
            } else {
                setComments(data.comments)
            }

            setNextCursor(data.nextCursor)
            setTotal(data.total)
        } catch (err) {
            setError("Failed to load comments")
            console.error(err)
        } finally {
            setIsLoading(false)
            setIsLoadingMore(false)
        }
    }

    const handleSubmitComment = async (body: string, parentCommentId?: string) => {
        const response = await fetch(`/api/features/${featureId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ body, parentCommentId }),
        })

        if (!response.ok) {
            throw new Error("Failed to post comment")
        }

        const newComment = await response.json()

        if (parentCommentId) {
            // Add reply to parent comment
            setComments((prev) =>
                prev.map((c) => {
                    if (c.id === parentCommentId) {
                        return {
                            ...c,
                            replies: [...(c.replies || []), newComment],
                            replyCount: c.replyCount + 1,
                        }
                    }
                    return c
                })
            )
            setReplyingTo(null)
        } else {
            // Add top-level comment
            setComments([newComment, ...comments])
            setTotal(total + 1)
        }
    }

    const handleEditComment = async (commentId: string, newBody: string) => {
        const response = await fetch(`/api/features/${featureId}/comments/${commentId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ body: newBody }),
        })

        if (!response.ok) {
            throw new Error("Failed to edit comment")
        }

        const updatedComment = await response.json()

        // Update comment in state
        setComments((prev) =>
            prev.map((c) => {
                if (c.id === commentId) {
                    return { ...c, body: updatedComment.body, updatedAt: updatedComment.updatedAt, isEdited: true }
                }
                // Check replies
                if (c.replies) {
                    return {
                        ...c,
                        replies: c.replies.map((r) =>
                            r.id === commentId
                                ? { ...r, body: updatedComment.body, updatedAt: updatedComment.updatedAt, isEdited: true }
                                : r
                        ),
                    }
                }
                return c
            })
        )
    }

    const handleDeleteComment = async (commentId: string) => {
        const response = await fetch(`/api/features/${featureId}/comments/${commentId}`, {
            method: "DELETE",
        })

        if (!response.ok) {
            throw new Error("Failed to delete comment")
        }

        // Remove comment from state
        setComments((prev) => {
            const filtered = prev.filter((c) => c.id !== commentId)
            return filtered.map((c) => ({
                ...c,
                replies: c.replies?.filter((r) => r.id !== commentId),
                replyCount: c.replies?.filter((r) => r.id !== commentId).length || 0,
            }))
        })
    }

    const handleReact = async (commentId: string, emoji: string) => {
        const response = await fetch(`/api/features/${featureId}/comments/${commentId}/reactions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emoji }),
        })

        if (!response.ok) {
            throw new Error("Failed to toggle reaction")
        }

        const { reactions } = await response.json()

        // Update reactions in state
        setComments((prev) =>
            prev.map((c) => {
                if (c.id === commentId) {
                    return { ...c, reactions }
                }
                // Check replies
                if (c.replies) {
                    return {
                        ...c,
                        replies: c.replies.map((r) => (r.id === commentId ? { ...r, reactions } : r)),
                    }
                }
                return c
            })
        )
    }

    if (isLoading) {
        return (
            <div className="p-4 text-center text-sm text-muted-foreground">
                Loading comments...
            </div>
        )
    }

    if (error) {
        return (
            <div className="p-4 text-center text-sm text-red-500">
                {error}
            </div>
        )
    }

    return (
        <div className="space-y-4 pt-4 border-t border-muted/40">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium">
                    <MessageSquare size={16} />
                    <span>
                        Comments ({total})
                    </span>
                </div>
            </div>

            <CommentForm onSubmit={(body) => handleSubmitComment(body)} />

            {comments.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                    No comments yet. Be the first to comment!
                </p>
            ) : (
                <div className="space-y-3">
                    {comments.map((comment) => (
                        <div key={comment.id}>
                            <CommentItem
                                {...comment}
                                currentUserId={currentUserId}
                                featureId={featureId}
                                onDelete={handleDeleteComment}
                                onEdit={handleEditComment}
                                onReact={handleReact}
                                onReply={(id) => setReplyingTo(id)}
                            />

                            {/* Replies */}
                            {comment.replies && comment.replies.length > 0 && (
                                <div className="ml-8 mt-2 space-y-2 border-l-2 border-muted/40 pl-3">
                                    {comment.replies.map((reply) => (
                                        <CommentItem
                                            key={reply.id}
                                            {...reply}
                                            currentUserId={currentUserId}
                                            featureId={featureId}
                                            onDelete={handleDeleteComment}
                                            onEdit={handleEditComment}
                                            onReact={handleReact}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Reply form */}
                            {replyingTo === comment.id && (
                                <div className="ml-8 mt-2">
                                    <div className="text-xs text-muted-foreground mb-2">
                                        Replying to {comment.user.name}
                                    </div>
                                    <CommentForm
                                        onSubmit={(body) => handleSubmitComment(body, comment.id)}
                                        placeholder="Write a reply..."
                                        onCancel={() => setReplyingTo(null)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Load More */}
                    {nextCursor && (
                        <button
                            onClick={() => fetchComments(nextCursor)}
                            disabled={isLoadingMore}
                            className="w-full py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isLoadingMore ? (
                                <>
                                    <div className="h-4 w-4 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
                                    Loading...
                                </>
                            ) : (
                                <>
                                    <ChevronDown size={16} />
                                    Load More Comments
                                </>
                            )}
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}
