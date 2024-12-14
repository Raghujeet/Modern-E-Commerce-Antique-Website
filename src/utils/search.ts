import { Product } from '../types';
import { products } from '../data/products';

// Search criteria type
type SearchCriteria = {
  query: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  era?: string;
};

// Utility function to normalize text for search
const normalizeText = (text: string): string => {
  return text.toLowerCase().trim();
};

// Check if a product matches the search query
const matchesQuery = (product: Product, normalizedQuery: string): boolean => {
  return (
    normalizeText(product.name).includes(normalizedQuery) ||
    normalizeText(product.description).includes(normalizedQuery) ||
    normalizeText(product.category).includes(normalizedQuery) ||
    normalizeText(product.era).includes(normalizedQuery)
  );
};

// Filter products based on price range
const matchesPriceRange = (
  product: Product,
  minPrice?: number,
  maxPrice?: number
): boolean => {
  if (minPrice && product.price < minPrice) return false;
  if (maxPrice && product.price > maxPrice) return false;
  return true;
};

// Main search function
export async function searchProducts(
  criteria: string | SearchCriteria
): Promise<Product[]> {
  // Convert string criteria to SearchCriteria object
  const searchCriteria: SearchCriteria =
    typeof criteria === 'string' ? { query: criteria } : criteria;

  const normalizedQuery = normalizeText(searchCriteria.query);

  return products.filter((product) => {
    // Check if product matches the search query
    if (!matchesQuery(product, normalizedQuery)) return false;

    // Check category if specified
    if (
      searchCriteria.category &&
      normalizeText(product.category) !== normalizeText(searchCriteria.category)
    ) {
      return false;
    }

    // Check price range
    if (
      !matchesPriceRange(
        product,
        searchCriteria.minPrice,
        searchCriteria.maxPrice
      )
    ) {
      return false;
    }

    // Check era if specified
    if (
      searchCriteria.era &&
      normalizeText(product.era) !== normalizeText(searchCriteria.era)
    ) {
      return false;
    }

    return true;
  });
}