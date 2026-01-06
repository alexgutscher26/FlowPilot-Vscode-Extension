import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, ShieldCheck, GaugeCircle, LineChart, Sparkles, Quote } from "lucide-react"

function Nav() {
  return (
    <div className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-primary"></div>
          <span className="text-lg font-semibold">Code Coach</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#features">Features</a>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#how">How it works</a>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#pricing">Pricing</a>
        </div>
        <Button>Install Free</Button>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-gradient border-b">
      <div className="container py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-[11px] font-semibold text-primary">
            NOW IN BETA
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Your AI Senior Developer,{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              right inside VS Code.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Stop getting stuck on tutorials. Get instant feedback, refactoring tips, and mentorship directly in your IDE while you code.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl items-center justify-between rounded-xl border bg-card p-2 shadow-sm">
            <input
              type="text"
              inputMode="email"
              placeholder="Enter your email address"
              className="w-full appearance-none rounded-lg bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="ml-2 h-11 px-6">Join Waitlist</Button>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">
            Join 2,000+ developers on the waitlist.
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0f172a] relative">
          <div
            className="w-full aspect-[16/9] bg-cover bg-center bg-no-repeat relative"
            data-alt="VS Code interface showing code suggestions and AI chat panel"
            style={{ backgroundImage: "linear-gradient(to bottom right, #1e293b, #0f172a)" }}
          >
            <div className="absolute top-0 w-full h-8 bg-[#1e293b] flex items-center px-4 gap-2 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="absolute inset-0 top-8 flex">
              <div className="w-16 h-full border-r border-gray-700 bg-[#1e293b] hidden sm:block"></div>
              <div className="flex-1 p-8 font-mono text-sm text-blue-300 opacity-80 leading-loose">
                {"import "} <span className="text-purple-400">React</span> {" from "} <span className="text-green-400">'react'</span>;<br />
                <br />
                <span className="text-purple-400">const</span> <span className="text-yellow-300">App</span> {" = () => {"}<br />
                &nbsp;&nbsp;<span className="text-gray-400">// Code Coach Suggestion: Consider memoizing this value</span><br />
                &nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-blue-200">value</span> {" = "}{"expensiveCalculation();"}<br />
                &nbsp;&nbsp;{"return "} <span className="text-blue-200">&lt;div&gt;</span>{"Hello World"}<span className="text-blue-200">&lt;/div&gt;</span>;<br />
                {"}"}
              </div>
              <div className="w-80 h-full border-l border-gray-700 bg-[#1e293b] p-4 hidden md:flex flex-col gap-4">
                <div className="bg-blue-900/20 border border-blue-500/30 p-3 rounded text-xs text-blue-200">
                  <strong>Code Coach:</strong> {"You're re-calculating `value` on every render. Use `useMemo` here to improve performance."}
                </div>
                <div className="h-2 w-3/4 bg-gray-700 rounded opacity-20"></div>
                <div className="h-2 w-1/2 bg-gray-700 rounded opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureBlocks() {
  return (
    <section id="features" className="container space-y-16 py-16">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">Catch bad habits before they stick.</h3>
          <p className="mt-2 text-muted-foreground">Actionable reviews on performance, readability, and style.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Instant reviews</li>
            <li className="flex items-center gap-2"><GaugeCircle className="h-4 w-4 text-blue-600" /> Performance tips</li>
            <li className="flex items-center gap-2"><LineChart className="h-4 w-4 text-emerald-600" /> Progress tracking</li>
          </ul>
        </div>
        <Card className="bg-secondary">
          <CardContent className="p-6"> 
            <div className="h-40 rounded-lg border bg-card" />
          </CardContent>
        </Card>
      </div>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <Card className="order-2 bg-secondary md:order-1">
          <CardContent className="p-6"> 
            <div className="h-40 rounded-lg border bg-card" />
          </CardContent>
        </Card>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold">Understand the ‘Why’, not just the ‘How’.</h3>
          <p className="mt-2 text-muted-foreground">Short, clear explanations with reflection prompts.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Beginner and intermediate modes</li>
            <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-pink-600" /> Guided learning</li>
          </ul>
        </div>
      </div>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">Refactor like a Senior Engineer.</h3>
          <p className="mt-2 text-muted-foreground">Smarter suggestions to improve structure and clarity.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Safe change proposals</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-sky-600" /> Privacy-conscious</li>
          </ul>
        </div>
        <Card className="bg-secondary">
          <CardContent className="p-6"> 
            <div className="h-40 rounded-lg border bg-card" />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="border-y bg-secondary/50">
      <div className="container py-16">
        <h2 className="text-center text-3xl font-semibold">How Code Coach works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Install Extension</CardTitle>
              <CardDescription>Add the VS Code extension in one click.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Connect Account</CardTitle>
              <CardDescription>Sign in and set your learning level.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Start Coding</CardTitle>
              <CardDescription>Ask for explanations, reviews, and fixes anytime.</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-auto mt-8 max-w-xl">
          <Card>
            <CardContent className="flex items-center gap-3 p-4 text-sm">
              <Quote className="h-5 w-5 text-primary" />
              We help devs solve their own problems with clear, actionable guidance.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold">Simple, transparent pricing</h2>
        <p className="mt-2 text-muted-foreground">Monthly or yearly. Start free, upgrade when ready.</p>
        <div className="mx-auto mt-6 inline-flex rounded-md border bg-muted p-1 text-sm">
          <button className="rounded-sm bg-card px-3 py-1">Monthly</button>
          <button className="rounded-sm px-3 py-1 text-muted-foreground">Yearly</button>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Free Tier</CardTitle>
            <CardDescription>Core features to get started.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Limited daily usage</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Explanations and reviews</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Privacy-friendly telemetry</div>
          </CardContent>
          <CardContent>
            <Button variant="secondary" className="w-full">Download Free</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pro Coach</CardTitle>
            <CardDescription>More history, faster responses, priority support.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Unlimited explanations</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Team features</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Billing portal</div>
          </CardContent>
          <CardContent>
            <Button className="w-full">Get Pro</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="mt-6 w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Does Code Coach store my code?</AccordionTrigger>
          <AccordionContent>
            Explanations are generated with privacy-first processing. Sensitive snippets can be excluded. Telemetry is opt-in.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is there a student discount?</AccordionTrigger>
          <AccordionContent>
            Yes. Students and educators can contact support to receive a discount for Pro.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do upgrades work?</AccordionTrigger>
          <AccordionContent>
            Upgrade or downgrade anytime. Billing proration is handled automatically.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeatureBlocks />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <footer className="border-t">
        <div className="container flex items-center justify-between py-8">
          <div className="text-sm text-muted-foreground">© Code Coach</div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#status">Status</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
