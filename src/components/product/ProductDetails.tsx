import { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import Button from '../ui/Button';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const { dispatch } = useCart();
  const images = [product.image]; // In a real app, you'd have multiple images

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <TransformWrapper>
            <TransformComponent>
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="flex gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square w-20 rounded-lg border-2 ${
                selectedImage === index ? 'border-amber-800' : 'border-transparent'
              }`}
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-serif text-gray-900">{product.name}</h1>
        <p className="mt-2 text-xl font-medium text-amber-800">
          ${product.price.toLocaleString()}
        </p>
        <p className="mt-2 text-gray-600">{product.era}</p>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Details</h2>
            <dl className="mt-2 space-y-2">
              <div className="flex justify-between">
                <dt className="text-gray-600">Category</dt>
                <dd className="font-medium text-gray-900">{product.category}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Era</dt>
                <dd className="font-medium text-gray-900">{product.era}</dd>
              </div>
            </dl>
          </div>

          <div className="flex gap-4">
            <Button
              className="flex-1"
              onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" className="px-4">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}