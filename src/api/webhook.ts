import { stripe } from '../lib/stripe-server';
import { adminDb } from '../lib/firebase-admin';
import { buffer } from 'micro';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const buf = await buffer(req);
    const sig = req.headers.get('stripe-signature')!;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    let event;
    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return new Response('Webhook Error', { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const userId = session.metadata.userId;

        // Create order in Firestore
        await adminDb.collection('orders').add({
          userId,
          sessionId: session.id,
          amount: session.amount_total,
          status: 'paid',
          items: session.display_items,
          createdAt: new Date().toISOString(),
        });

        break;
      }
      // Add other event handlers as needed
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response('Webhook Error', { status: 400 });
  }
}