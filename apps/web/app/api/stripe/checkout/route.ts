import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if (!session?.user) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const userId = session.user.id
        const userEmail = session.user.email

        const user = await prisma.user.findUnique({
            where: { id: userId }
        })

        if (!user) {
            return new NextResponse('User not found', { status: 404 })
        }

        const priceId = process.env.STRIPE_PRO_PRICE_ID

        if (!priceId) {
            return new NextResponse("Stripe Price ID missing", { status: 500 })
        }

        // If user already has a stripeCustomerId, reuse it
        let customerId = user.stripeCustomerId

        if (customerId) {
            // Double check if customer exists in stripe to avoid errors
            try {
                const customer = await stripe.customers.retrieve(customerId)
                if (customer.deleted) {
                    customerId = null // Re-create if deleted
                }
            } catch (e) {
                customerId = null
            }
        }

        if (!customerId) {
            const customer = await stripe.customers.create({
                email: userEmail,
                metadata: {
                    userId: userId
                }
            })
            customerId = customer.id

            await prisma.user.update({
                where: { id: userId },
                data: { stripeCustomerId: customerId }
            })
        }

        const stripeSession = await stripe.checkout.sessions.create({
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings?canceled=true`,
            payment_method_types: ['card'],
            mode: 'subscription',
            billing_address_collection: 'auto',
            customer: customerId,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            metadata: {
                userId: userId,
            },
        });

        return NextResponse.json({ url: stripeSession.url });
    } catch (error) {
        console.log('[STRIPE_GET]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
