import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../types';
import ProductCard from '../catalog/ProductCard';

interface SearchResultsProps {
  results: Product[];
  isVisible: boolean;
}

export default function SearchResults({ results, isVisible }: SearchResultsProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50 max-h-[80vh] overflow-y-auto"
        >
          {results.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No results found
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}