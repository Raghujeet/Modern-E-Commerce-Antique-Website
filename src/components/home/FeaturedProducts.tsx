import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const featuredProducts = [
  {
    id: 1,
    name: 'Victorian Mahogany Dresser',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80&w=800',
    era: '1850s',
  },
  {
    id: 2,
    name: 'Art Deco Table Lamp',
    price: 899,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    era: '1920s',
  },
  {
    id: 3,
    name: 'French Provincial Mirror',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800',
    era: '1780s',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-serif text-gray-900 mb-12">Featured Treasures</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link to={`/product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.era}</p>
                </div>
                <p className="text-lg font-medium text-gray-900">${product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button as={Link} to="/catalog">
            View All Antiques
          </Button>
        </div>
      </div>
    </section>
  );
}