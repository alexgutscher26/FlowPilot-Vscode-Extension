import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import { prisma } from "@/lib/db"
import { Plan } from "../../../../prisma/generated/client"

export async function POST(req: Request) {
    const body = await req.text()
    const signature = (await headers()).get("Stripe-Signature") as string

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (error: any) {
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session

    if (event.type === "checkout.session.completed") {
        console.log("Processing checkout.session.completed")
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
        )
        console.log("Retrieved subscription object:", JSON.stringify(subscription, null, 2))

        const currentPeriodEnd = (subscription as any).current_period_end
        console.log("Details:", {
            id: subscription.id,
            customer: subscription.customer,
            items: subscription.items?.data?.length,
            currentPeriodEnd
        })

        if (!session?.metadata?.userId) {
            console.error("User id is required in metadata")
            return new NextResponse("User id is required", { status: 400 })
        }

        console.log("Updating user:", session.metadata.userId)

        let periodEnd = new Date()
        if (currentPeriodEnd) {
            periodEnd = new Date(currentPeriodEnd * 1000)
        } else {
            // Fallback to 30 days from now if missing
            periodEnd.setDate(periodEnd.getDate() + 30)
            console.warn("current_period_end missing, defaulting to 30 days from now")
        }

        await prisma.user.update({
            where: {
                id: session.metadata.userId,
            },
            data: {
                stripeSubscriptionId: subscription.id,
                stripeCustomerId: subscription.customer as string,
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: periodEnd,
                plan: Plan.PRO
            },
        })
        console.log("User updated to PRO")
    }

    if (event.type === "invoice.payment_succeeded") {
        console.log("Processing invoice.payment_succeeded")
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
        )

        const currentPeriodEnd = (subscription as any).current_period_end
        let periodEnd = new Date()
        if (currentPeriodEnd) {
            periodEnd = new Date(currentPeriodEnd * 1000)
        } else {
            periodEnd.setDate(periodEnd.getDate() + 30)
        }

        await prisma.user.update({
            where: {
                stripeSubscriptionId: subscription.id,
            },
            data: {
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: periodEnd,
            },
        })
    }

    if (event.type === "customer.subscription.deleted" || event.type === "customer.subscription.updated") {
        console.log("Processing flow for:", event.type)
        const subscription = event.data.object as Stripe.Subscription
        const status = subscription.status
        console.log("Subscription status:", status)

        if (status !== 'active' && status !== 'trialing') {
            // If subscription is not active, downgrade to free
            const user = await prisma.user.findFirst({
                where: {
                    stripeSubscriptionId: subscription.id
                }
            })

            if (user) {
                console.log("Downgrading user to FREE")
                await prisma.user.update({
                    where: { id: user.id },
                    data: { plan: Plan.FREE }
                })
            }
        } else {
            // Ensure logic for active subscription (re-upgrade if needed or update period)
            console.log("Updating active subscription details")
            const currentPeriodEnd = (subscription as any).current_period_end
            let periodEnd = new Date()
            if (currentPeriodEnd) {
                periodEnd = new Date(currentPeriodEnd * 1000)
            } else {
                periodEnd.setDate(periodEnd.getDate() + 30)
            }

            await prisma.user.update({
                where: { stripeSubscriptionId: subscription.id },
                data: {
                    plan: Plan.PRO,
                    stripeCurrentPeriodEnd: periodEnd,
                }
            })
        }
    }

    return new NextResponse(null, { status: 200 })
}
