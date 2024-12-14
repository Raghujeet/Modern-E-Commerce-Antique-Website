import { createStripeCheckoutSession } from '../lib/stripe-server';
import { adminAuth } from '../lib/firebase-admin';

export async function POST(req: Request) {
  try {
    // Verify Firebase auth token
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response('Unauthorized', { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userId = decodedToken.uid;

    // Get cart items from request body
    const { items } = await req.json();

    // Create Stripe checkout session
    const session = await createStripeCheckoutSession(userId, items);

    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}