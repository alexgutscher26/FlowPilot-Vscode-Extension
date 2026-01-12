import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, AlertTriangle, Scale, Clock, Ban, Shield } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
                            <Scale className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            Terms of Service
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            The legal agreement between you and FlowPilot. Please read carefully.
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Last updated: January 11, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-20">
                <div className="container">
                    <div className="mx-auto max-w-4xl">
                        {/* Quick Summary */}
                        <div className="mb-12 rounded-2xl border-2 border-yellow-500/20 bg-yellow-50 dark:bg-yellow-900/10 p-6 md:p-8">
                            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                                <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-500" />
                                Important Highlights
                            </h2>
                            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-yellow-600" />
                                    <span>By using FlowPilot, you agree to these terms and our Privacy Policy.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-yellow-600" />
                                    <span>Free tier users are limited to 10 AI explanations per day; Pro users get unlimited access.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-yellow-600" />
                                    <span>FlowPilot is provided "as-is" without warranties. We're not liable for code suggestions that cause issues.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-yellow-600" />
                                    <span>You retain all rights to your code. We claim no ownership over what you create.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-yellow-600" />
                                    <span>We may terminate accounts that violate these terms or engage in abusive behavior.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Detailed Sections */}
                        <div className="prose prose-gray dark:prose-invert max-w-none space-y-12">
                            {/* Section 1 */}
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                        <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h2 className="m-0 text-2xl font-bold">1. Acceptance of Terms</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        By accessing or using FlowPilot (the "Service"), including our VS Code extension, web dashboard, and related services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                                    </p>

                                    <p>
                                        These Terms apply to all users of the Service, including without limitation users who are browsers, customers, merchants, and/or contributors of content.
                                    </p>

                                    <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 p-4">
                                        <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                                            By creating an account or using FlowPilot, you represent that you are at least 13 years of age (or 16 in the EU) and have the legal capacity to enter into this agreement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 - Usage Limits */}
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                                        <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <h2 className="m-0 text-2xl font-bold">2. Usage Limits & Fair Use</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        FlowPilot offers different service tiers with specific usage limits designed to ensure fair access for all users:
                                    </p>

                                    <div className="space-y-4">
                                        <div className="rounded-lg border bg-card p-4">
                                            <h3 className="mb-3 text-lg font-semibold text-foreground">Free Tier Limits</h3>
                                            <ul className="ml-4 space-y-2 text-sm">
                                                <li><strong>AI Explanations:</strong> 10 requests per 24-hour period</li>
                                                <li><strong>Refactoring Suggestions:</strong> 5 requests per 24-hour period</li>
                                                <li><strong>Error Analysis:</strong> 10 requests per 24-hour period</li>
                                                <li><strong>Security Scans:</strong> 3 full scans per week</li>
                                                <li><strong>Code Snippet Size:</strong> Maximum 100 lines per request</li>
                                                <li><strong>API Rate Limit:</strong> 30 requests per minute</li>
                                            </ul>
                                        </div>

                                        <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
                                            <h3 className="mb-3 text-lg font-semibold text-foreground">Pro Tier Limits</h3>
                                            <ul className="ml-4 space-y-2 text-sm">
                                                <li><strong>AI Explanations:</strong> Unlimited</li>
                                                <li><strong>Refactoring Suggestions:</strong> Unlimited</li>
                                                <li><strong>Error Analysis:</strong> Unlimited</li>
                                                <li><strong>Security Scans:</strong> Unlimited</li>
                                                <li><strong>Code Snippet Size:</strong> Maximum 500 lines per request</li>
                                                <li><strong>API Rate Limit:</strong> 120 requests per minute</li>
                                                <li><strong>Priority Processing:</strong> Faster response times during peak hours</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10 p-4">
                                        <h3 className="mb-2 text-base font-semibold text-yellow-800 dark:text-yellow-300">
                                            Fair Use Policy
                                        </h3>
                                        <p className="text-sm text-yellow-800 dark:text-yellow-300">
                                            Even with unlimited Pro access, we reserve the right to throttle or suspend accounts that engage in abusive behavior, including:
                                        </p>
                                        <ul className="ml-4 mt-2 space-y-1 text-sm text-yellow-800 dark:text-yellow-300">
                                            <li>• Automated scraping or bulk processing beyond reasonable development use</li>
                                            <li>• Sharing API keys across multiple users or organizations</li>
                                            <li>• Using the service to train competing AI models</li>
                                            <li>• Excessive requests designed to degrade service performance</li>
                                        </ul>
                                    </div>

                                    <p className="text-sm">
                                        <strong>Rate Limit Handling:</strong> If you exceed your rate limits, you'll receive a 429 HTTP status code. Your limits reset every 24 hours at midnight UTC.
                                    </p>
                                </div>
                            </div>

                            {/* Section 3 - Liability Disclaimers */}
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30">
                                        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <h2 className="m-0 text-2xl font-bold">3. Disclaimers & Limitations of Liability</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <div className="rounded-lg border-2 border-red-500/30 bg-red-50 dark:bg-red-900/10 p-6">
                                        <h3 className="mb-3 text-lg font-bold text-red-800 dark:text-red-300">
                                            IMPORTANT: PLEASE READ CAREFULLY
                                        </h3>
                                        <p className="text-sm text-red-800 dark:text-red-300">
                                            FlowPilot is an AI-powered development tool designed to assist and educate developers. However, it is not infallible and should not be relied upon as the sole source of truth for production code.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="rounded-lg border bg-card p-4">
                                            <h3 className="mb-2 text-base font-semibold text-foreground">"AS-IS" Service</h3>
                                            <p className="text-sm">
                                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                                            </p>
                                        </div>

                                        <div className="rounded-lg border bg-card p-4">
                                            <h3 className="mb-2 text-base font-semibold text-foreground">No Guarantee of Accuracy</h3>
                                            <p className="text-sm">
                                                While we strive to provide accurate and helpful suggestions, FlowPilot's AI-generated recommendations may contain errors, bugs, or security vulnerabilities. <strong>You are solely responsible for reviewing, testing, and validating all code before deploying it to production.</strong>
                                            </p>
                                        </div>

                                        <div className="rounded-lg border bg-card p-4">
                                            <h3 className="mb-2 text-base font-semibold text-foreground">Limitation of Liability</h3>
                                            <p className="text-sm mb-2">
                                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLOWPILOT AND ITS AFFILIATES SHALL NOT BE LIABLE FOR:
                                            </p>
                                            <ul className="ml-4 space-y-1 text-sm">
                                                <li>• Any indirect, incidental, special, consequential, or punitive damages</li>
                                                <li>• Loss of profits, revenue, data, or business opportunities</li>
                                                <li>• Damages resulting from bugs, errors, or security vulnerabilities in suggested code</li>
                                                <li>• Service interruptions, downtime, or data loss</li>
                                                <li>• Unauthorized access to your account due to compromised credentials</li>
                                            </ul>
                                            <p className="mt-3 text-sm">
                                                <strong>Our total liability to you for any claims arising from your use of FlowPilot shall not exceed the amount you paid us in the 12 months preceding the claim, or $100 USD, whichever is greater.</strong>
                                            </p>
                                        </div>

                                        <div className="rounded-lg border bg-card p-4">
                                            <h3 className="mb-2 text-base font-semibold text-foreground">No Professional Advice</h3>
                                            <p className="text-sm">
                                                FlowPilot is an educational and productivity tool, not a substitute for professional software engineering expertise, code review, or security auditing. Always consult with qualified professionals for critical systems.
                                            </p>
                                        </div>

                                        <div className="rounded-lg border bg-card p-4">
                                            <h3 className="mb-2 text-base font-semibold text-foreground">Third-Party Dependencies</h3>
                                            <p className="text-sm">
                                                We are not responsible for issues caused by third-party services, libraries, or frameworks that FlowPilot may reference or suggest. You are responsible for verifying licenses and compatibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4 - Intellectual Property */}
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                                        <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h2 className="m-0 text-2xl font-bold">4. Intellectual Property Rights</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <div className="rounded-lg border bg-card p-4">
                                        <h3 className="mb-2 text-base font-semibold text-foreground">Your Code Remains Yours</h3>
                                        <p className="text-sm">
                                            You retain all intellectual property rights to the code you write. FlowPilot does not claim any ownership over your code, projects, or the output generated using our suggestions.
                                        </p>
                                    </div>

                                    <div className="rounded-lg border bg-card p-4">
                                        <h3 className="mb-2 text-base font-semibold text-foreground">FlowPilot's IP</h3>
                                        <p className="text-sm">
                                            The FlowPilot Service, including our AI models, algorithms, user interface, branding, and documentation, is owned by FlowPilot and protected by copyright, trademark, and other intellectual property laws.
                                        </p>
                                    </div>

                                    <div className="rounded-lg border bg-card p-4">
                                        <h3 className="mb-2 text-base font-semibold text-foreground">License to Use</h3>
                                        <p className="text-sm">
                                            We grant you a limited, non-exclusive, non-transferable, revocable license to use FlowPilot for your personal or commercial development work, subject to these Terms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 5 - Prohibited Uses */}
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30">
                                        <Ban className="h-5 w-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <h2 className="m-0 text-2xl font-bold">5. Prohibited Uses</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        You agree not to use FlowPilot for any of the following purposes:
                                    </p>

                                    <ul className="ml-4 space-y-2">
                                        <li>
                                            <strong>Illegal Activities:</strong> Developing malware, exploits, hacking tools, or any software intended to cause harm or violate laws.
                                        </li>
                                        <li>
                                            <strong>Reverse Engineering:</strong> Attempting to reverse engineer, decompile, or extract our AI models or proprietary algorithms.
                                        </li>
                                        <li>
                                            <strong>Competitive Use:</strong> Using FlowPilot to build a competing AI coding assistant or to train competing models.
                                        </li>
                                        <li>
                                            <strong>Account Sharing:</strong> Sharing your account credentials or API keys with others (except within your authorized organization for Pro team plans).
                                        </li>
                                        <li>
                                            <strong>Spam or Abuse:</strong> Sending excessive requests, creating fake accounts, or engaging in any behavior that degrades service quality.
                                        </li>
                                        <li>
                                            <strong>Circumventing Limits:</strong> Using technical means to bypass rate limits or usage restrictions.
                                        </li>
                                        <li>
                                            <strong>Harmful Content:</strong> Requesting assistance with code that discriminates, harasses, or violates others' rights.
                                        </li>
                                    </ul>

                                    <div className="rounded-lg border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 p-4">
                                        <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                                            Violation of these prohibitions may result in immediate account suspension or termination without refund.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 6 - Account Termination */}
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                        <AlertTriangle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                    </div>
                                    <h2 className="m-0 text-2xl font-bold">6. Account Termination</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <div className="rounded-lg border bg-card p-4">
                                        <h3 className="mb-2 text-base font-semibold text-foreground">Your Right to Terminate</h3>
                                        <p className="text-sm">
                                            You may cancel your account at any time from your dashboard settings. Upon cancellation, you'll retain access until the end of your current billing period. No refunds are provided for partial months.
                                        </p>
                                    </div>

                                    <div className="rounded-lg border bg-card p-4">
                                        <h3 className="mb-2 text-base font-semibold text-foreground">Our Right to Terminate</h3>
                                        <p className="text-sm mb-2">
                                            We reserve the right to suspend or terminate your account if:
                                        </p>
                                        <ul className="ml-4 space-y-1 text-sm">
                                            <li>• You violate these Terms of Service</li>
                                            <li>• Your payment method fails or you have outstanding charges</li>
                                            <li>• We detect fraudulent or abusive behavior</li>
                                            <li>• We discontinue the Service (with 30 days' notice and pro-rated refunds)</li>
                                        </ul>
                                    </div>

                                    <div className="rounded-lg border bg-card p-4">
                                        <h3 className="mb-2 text-base font-semibold text-foreground">Effect of Termination</h3>
                                        <p className="text-sm">
                                            Upon termination, your access to the Service will cease immediately. We will delete your account data within 30 days, except where required by law to retain it. You may request a data export before termination.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 7 - Payment Terms */}
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                        <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h2 className="m-0 text-2xl font-bold">7. Payment & Billing</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        If you subscribe to a paid plan:
                                    </p>

                                    <ul className="ml-4 space-y-2">
                                        <li>
                                            <strong>Billing Cycle:</strong> Subscriptions are billed monthly or annually, depending on your selected plan.
                                        </li>
                                        <li>
                                            <strong>Auto-Renewal:</strong> Your subscription automatically renews unless you cancel before the renewal date.
                                        </li>
                                        <li>
                                            <strong>Price Changes:</strong> We may change pricing with 30 days' notice. Changes apply to subsequent billing cycles, not your current one.
                                        </li>
                                        <li>
                                            <strong>Refunds:</strong> We offer a 14-day money-back guarantee for first-time subscribers. After that, no refunds are provided for partial periods.
                                        </li>
                                        <li>
                                            <strong>Failed Payments:</strong> If your payment fails, we'll retry up to 3 times. After that, your account may be downgraded to the free tier.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 8 - Changes to Terms */}
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                                        <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <h2 className="m-0 text-2xl font-bold">8. Changes to These Terms</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        We may update these Terms from time to time. When we do:
                                    </p>

                                    <ul className="ml-4 space-y-2">
                                        <li>We'll update the "Last updated" date at the top of this page</li>
                                        <li>We'll notify you via email for material changes</li>
                                        <li>Continued use of the Service after changes constitutes acceptance</li>
                                        <li>If you disagree with changes, you may terminate your account</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 9 - Governing Law */}
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                                        <Scale className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h2 className="m-0 text-2xl font-bold">9. Governing Law & Dispute Resolution</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                                    </p>

                                    <p>
                                        Any disputes arising from these Terms or your use of FlowPilot shall be resolved through binding arbitration in accordance with the American Arbitration Association's rules, except that you may assert claims in small claims court if they qualify.
                                    </p>

                                    <p className="text-sm">
                                        <strong>Class Action Waiver:</strong> You agree to resolve disputes individually and waive the right to participate in class actions or class arbitrations.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="rounded-2xl border-2 bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-2xl font-bold">Questions About These Terms?</h2>
                                <p className="mb-4 text-muted-foreground">
                                    If you have any questions or concerns about these Terms of Service, please contact us:
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p>
                                        <strong>Email:</strong>{" "}
                                        <a href="mailto:legal@flowpilot.dev" className="text-primary hover:underline">
                                            legal@flowpilot.dev
                                        </a>
                                    </p>
                                    <p>
                                        <strong>Support:</strong>{" "}
                                        <a href="mailto:support@flowpilot.dev" className="text-primary hover:underline">
                                            support@flowpilot.dev
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
