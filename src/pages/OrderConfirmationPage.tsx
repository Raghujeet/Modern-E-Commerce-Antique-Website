import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function OrderConfirmationPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        <h1 className="text-3xl font-serif text-gray-900 mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. We'll send you an email confirmation with tracking details shortly.
        </p>
        <Button as={Link} to="/catalog">
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}