import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Lock, Database, Eye, Server, FileCode } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">
              FlowPilot
            </Link>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your code, your data, your privacy. Here's exactly how FlowPilot handles your
              information.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: January 11, 2026</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Quick Summary */}
            <div className="mb-12 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <Eye className="h-6 w-6 text-primary" />
                TL;DR - The Important Stuff
              </h2>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong>Your code stays on your machine</strong> for basic features like syntax
                    checking and linting.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong>Small code snippets are sent to our servers</strong> only when you
                    explicitly request AI explanations or refactoring suggestions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong>We never store your code permanently.</strong> Snippets are processed in
                    memory and discarded immediately after analysis.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong>All data in transit is encrypted</strong> using industry-standard
                    TLS/SSL protocols.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong>We collect anonymous usage analytics</strong> to improve the product,
                    but never tie them to your actual code.
                  </span>
                </li>
              </ul>
            </div>

            {/* Detailed Sections */}
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-12">
              {/* Section 1 */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <FileCode className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="m-0 text-2xl font-bold">What Code Data We Collect</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    FlowPilot is designed with a <strong>privacy-first architecture</strong>. We
                    distinguish between two types of processing:
                  </p>

                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      Local Processing (Never Leaves Your Machine)
                    </h3>
                    <ul className="ml-4 space-y-2">
                      <li>Basic syntax validation and linting</li>
                      <li>Code formatting checks</li>
                      <li>Simple pattern matching for common mistakes</li>
                      <li>File structure analysis</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      Cloud Processing (Sent to Our Servers)
                    </h3>
                    <p className="mb-2 text-sm">Only when you explicitly trigger these features:</p>
                    <ul className="ml-4 space-y-2">
                      <li>
                        <strong>Code Explanations:</strong> The selected code snippet (typically
                        10-50 lines)
                      </li>
                      <li>
                        <strong>Refactoring Suggestions:</strong> The function or block you've
                        highlighted
                      </li>
                      <li>
                        <strong>Error Analysis:</strong> The error message and surrounding context
                        (5-10 lines)
                      </li>
                      <li>
                        <strong>Security Scans:</strong> Specific code patterns that match
                        vulnerability signatures
                      </li>
                    </ul>
                  </div>

                  <p>
                    <strong>Important:</strong> We never scan your entire codebase or access files
                    you haven't explicitly interacted with through FlowPilot features.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <Server className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="m-0 text-2xl font-bold">How We Process Your Code</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>When you request an AI-powered feature, here's exactly what happens:</p>

                  <ol className="ml-4 space-y-3">
                    <li>
                      <strong>1. Snippet Extraction:</strong> The VS Code extension extracts only
                      the relevant code snippet (the selection or surrounding context).
                    </li>
                    <li>
                      <strong>2. Encrypted Transmission:</strong> The snippet is encrypted using TLS
                      1.3 and sent to our API servers.
                    </li>
                    <li>
                      <strong>3. In-Memory Processing:</strong> Our servers process the code
                      entirely in memory using our AI models. No disk writes occur.
                    </li>
                    <li>
                      <strong>4. Response Generation:</strong> The explanation or suggestion is
                      generated and sent back to your extension.
                    </li>
                    <li>
                      <strong>5. Immediate Deletion:</strong> The code snippet is immediately purged
                      from memory. We retain zero copies.
                    </li>
                  </ol>

                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 p-4">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                      ✓ Your code is never written to our databases
                    </p>
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                      ✓ Your code is never used to train our AI models
                    </p>
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                      ✓ Your code is never shared with third parties
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Database className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="m-0 text-2xl font-bold">What We DO Store</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    While we don't store your code, we do collect the following data to provide and
                    improve our service:
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        Account Information
                      </h3>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>Email address</li>
                        <li>GitHub username (if you sign in with GitHub)</li>
                        <li>Account creation date</li>
                        <li>Subscription tier</li>
                      </ul>
                    </div>

                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        Usage Analytics (Anonymous)
                      </h3>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>Number of explanations requested per day</li>
                        <li>Programming languages you work with</li>
                        <li>Feature usage patterns (which features you use most)</li>
                        <li>Session duration and frequency</li>
                        <li>Error rates and performance metrics</li>
                      </ul>
                      <p className="mt-2 text-xs italic">
                        Note: These metrics are aggregated and anonymized. We cannot trace them back
                        to specific code or projects.
                      </p>
                    </div>

                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        Learning Progress (Optional)
                      </h3>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>Skills you're working on (e.g., "React Hooks", "Python async")</li>
                        <li>Completed learning milestones</li>
                        <li>Custom learning path preferences</li>
                      </ul>
                      <p className="mt-2 text-xs italic">
                        You can disable learning progress tracking in Settings → Privacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30">
                    <Lock className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="m-0 text-2xl font-bold">Security Measures</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>We take security seriously. Here's how we protect your data:</p>

                  <ul className="ml-4 space-y-3">
                    <li>
                      <strong>Encryption in Transit:</strong> All communication between your VS Code
                      extension and our servers uses TLS 1.3 encryption.
                    </li>
                    <li>
                      <strong>Encryption at Rest:</strong> Account data and analytics are encrypted
                      using AES-256 in our databases.
                    </li>
                    <li>
                      <strong>API Key Authentication:</strong> Your extension uses a unique,
                      revocable API key that you can regenerate at any time.
                    </li>
                    <li>
                      <strong>No Third-Party AI Training:</strong> We use our own infrastructure and
                      do not send your code to third-party AI providers for training purposes.
                    </li>
                    <li>
                      <strong>Regular Security Audits:</strong> We conduct quarterly security
                      assessments and penetration testing.
                    </li>
                    <li>
                      <strong>SOC 2 Type II Compliance:</strong> We are working towards SOC 2
                      certification (expected Q2 2026).
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                    <Shield className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="m-0 text-2xl font-bold">Your Rights & Controls</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have complete control over your data:</p>

                  <div className="space-y-3">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-1 font-semibold text-foreground">Disable Cloud Features</h3>
                      <p className="text-sm">
                        You can disable all cloud-based AI features in Settings and use only local
                        analysis.
                      </p>
                    </div>

                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-1 font-semibold text-foreground">Export Your Data</h3>
                      <p className="text-sm">
                        Request a complete export of your account data and analytics at any time
                        from your dashboard.
                      </p>
                    </div>

                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-1 font-semibold text-foreground">Delete Your Account</h3>
                      <p className="text-sm">
                        Permanently delete your account and all associated data from Settings →
                        Account → Delete Account.
                      </p>
                    </div>

                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-1 font-semibold text-foreground">Revoke API Access</h3>
                      <p className="text-sm">
                        Instantly revoke your extension's API key to prevent any further data
                        transmission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <FileCode className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <h2 className="m-0 text-2xl font-bold">Third-Party Services</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>FlowPilot integrates with the following third-party services:</p>

                  <ul className="ml-4 space-y-2">
                    <li>
                      <strong>GitHub OAuth:</strong> For authentication (we only access your public
                      profile and email).
                    </li>
                    <li>
                      <strong>Stripe:</strong> For payment processing (we never see or store your
                      credit card details).
                    </li>
                    <li>
                      <strong>PostHog:</strong> For anonymous product analytics (IP addresses are
                      anonymized).
                    </li>
                  </ul>

                  <p className="text-sm">
                    Each of these services has their own privacy policies, which we encourage you to
                    review.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="m-0 text-2xl font-bold">Changes to This Policy</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>We may update this privacy policy from time to time. When we do:</p>

                  <ul className="ml-4 space-y-2">
                    <li>We'll update the "Last updated" date at the top of this page</li>
                    <li>We'll notify you via email if the changes are significant</li>
                    <li>We'll display an in-app notification in the VS Code extension</li>
                    <li>You'll have 30 days to review changes before they take effect</li>
                  </ul>
                </div>
              </div>

              {/* Contact Section */}
              <div className="rounded-2xl border-2 bg-muted/30 p-6 md:p-8">
                <h2 className="mb-4 text-2xl font-bold">Questions or Concerns?</h2>
                <p className="mb-4 text-muted-foreground">
                  We're committed to transparency. If you have any questions about how we handle
                  your data, please don't hesitate to reach out.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:privacy@flowpilot.dev" className="text-primary hover:underline">
                      privacy@flowpilot.dev
                    </a>
                  </p>
                  <p>
                    <strong>Data Protection Officer:</strong>{" "}
                    <a href="mailto:dpo@flowpilot.dev" className="text-primary hover:underline">
                      dpo@flowpilot.dev
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center text-sm text-muted-foreground">
            <p>© 2026 FlowPilot. All rights reserved.</p>
            <div className="mt-4 flex justify-center gap-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
