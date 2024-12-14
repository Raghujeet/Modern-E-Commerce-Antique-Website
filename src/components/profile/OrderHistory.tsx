import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Order } from '../../types';
import { Package } from 'lucide-react';

export default function OrderHistory() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch orders from Firebase
    setLoading(false);
  }, [user]);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
        <p className="text-gray-500">When you make a purchase, it will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div key={order.id} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium">Order #{order.id}</h3>
              <p className="text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              {order.status}
            </span>
          </div>

          <div className="border-t border-b py-4 my-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between py-2">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium">${(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Total</span>
            <span className="font-medium">${order.total.toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}