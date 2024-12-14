import Stripe from 'stripe';
import { adminDb } from './firebase-admin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function createStripeCheckoutSession(userId: string, items: any[]) {
  // Get user's data from Firestore
  const userDoc = await adminDb.collection('users').doc(userId).get();
  const userData = userDoc.data();

  // Create line items for Stripe
  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.price * 100, // Convert to cents
    },
    quantity: item.quantity,
  }));

  // Create Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
    customer_email: userData?.email,
    metadata: {
      userId,
    },
  });

  return session;
}