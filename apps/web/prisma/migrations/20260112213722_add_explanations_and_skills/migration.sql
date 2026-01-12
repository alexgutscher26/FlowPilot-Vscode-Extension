-- CreateEnum
CREATE TYPE "FeatureStatus" AS ENUM ('now', 'in_progress', 'next', 'planned', 'later', 'considering');

-- CreateEnum
CREATE TYPE "FeatureTag" AS ENUM ('feature', 'improvement', 'integration', 'platform', 'ai', 'export');

-- CreateTable
CREATE TABLE "api_key" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT,
    "lastUsed" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "api_key_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coding_session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT,
    "interactionType" TEXT NOT NULL,
    "language" TEXT,
    "codeSnippet" TEXT,
    "explanation" TEXT,
    "metadata" JSONB,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "coding_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tip" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "title" TEXT,
    "explanation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "FeatureStatus" NOT NULL DEFAULT 'considering',
    "tag" "FeatureTag" NOT NULL DEFAULT 'feature',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdByUserId" TEXT,

    CONSTRAINT "feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature_vote" (
    "id" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feature_vote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature_comment" (
    "id" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "parentCommentId" TEXT,

    CONSTRAINT "feature_comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment_reaction" (
    "id" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comment_reaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "explanation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sessionId" TEXT,
    "language" TEXT,
    "concepts" TEXT[],
    "interactionType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "explanation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "concept" TEXT NOT NULL,
    "language" TEXT,
    "totalExplanations" INTEGER NOT NULL DEFAULT 0,
    "sessionsCount" INTEGER NOT NULL DEFAULT 0,
    "confidence" INTEGER NOT NULL DEFAULT 20,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "api_key_key_key" ON "api_key"("key");

-- CreateIndex
CREATE INDEX "tip_userId_createdAt_idx" ON "tip"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "feature_status_idx" ON "feature"("status");

-- CreateIndex
CREATE INDEX "feature_createdByUserId_idx" ON "feature"("createdByUserId");

-- CreateIndex
CREATE INDEX "feature_vote_userId_idx" ON "feature_vote"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "feature_vote_featureId_userId_key" ON "feature_vote"("featureId", "userId");

-- CreateIndex
CREATE INDEX "feature_comment_featureId_idx" ON "feature_comment"("featureId");

-- CreateIndex
CREATE INDEX "feature_comment_userId_idx" ON "feature_comment"("userId");

-- CreateIndex
CREATE INDEX "feature_comment_parentCommentId_idx" ON "feature_comment"("parentCommentId");

-- CreateIndex
CREATE INDEX "comment_reaction_commentId_idx" ON "comment_reaction"("commentId");

-- CreateIndex
CREATE UNIQUE INDEX "comment_reaction_commentId_userId_emoji_key" ON "comment_reaction"("commentId", "userId", "emoji");

-- CreateIndex
CREATE INDEX "explanation_userId_createdAt_idx" ON "explanation"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "skill_userId_idx" ON "skill"("userId");

-- CreateIndex
CREATE INDEX "skill_userId_confidence_idx" ON "skill"("userId", "confidence");

-- CreateIndex
CREATE INDEX "skill_lastSeenAt_idx" ON "skill"("lastSeenAt");

-- CreateIndex
CREATE UNIQUE INDEX "skill_userId_concept_key" ON "skill"("userId", "concept");

-- AddForeignKey
ALTER TABLE "api_key" ADD CONSTRAINT "api_key_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coding_session" ADD CONSTRAINT "coding_session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tip" ADD CONSTRAINT "tip_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature" ADD CONSTRAINT "feature_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature_vote" ADD CONSTRAINT "feature_vote_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "feature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature_vote" ADD CONSTRAINT "feature_vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature_comment" ADD CONSTRAINT "feature_comment_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "feature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature_comment" ADD CONSTRAINT "feature_comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature_comment" ADD CONSTRAINT "feature_comment_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES "feature_comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_reaction" ADD CONSTRAINT "comment_reaction_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "feature_comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_reaction" ADD CONSTRAINT "comment_reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "explanation" ADD CONSTRAINT "explanation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skill" ADD CONSTRAINT "skill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
