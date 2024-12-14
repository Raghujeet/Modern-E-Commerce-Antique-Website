import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Product } from '../../types';
import { Heart } from 'lucide-react';
import ProductCard from '../catalog/ProductCard';

export default function Favorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch favorites from Firebase
    setLoading(false);
  }, [user]);

  if (loading) {
    return <div>Loading favorites...</div>;
  }

  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
        <p className="text-gray-500">Save items you love to your favorites list.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}