import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface SearchFiltersProps {
  onFilterChange: (filters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    era?: string;
  }) => void;
}

export default function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    era: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    
    onFilterChange({
      ...newFilters,
      minPrice: newFilters.minPrice ? Number(newFilters.minPrice) : undefined,
      maxPrice: newFilters.maxPrice ? Number(newFilters.maxPrice) : undefined,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg"
    >
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="rounded-md border-gray-300 focus:ring-amber-500 focus:border-amber-500"
      >
        <option value="">All Categories</option>
        <option value="Furniture">Furniture</option>
        <option value="Art">Art</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Decor">Decor</option>
      </select>

      <input
        type="number"
        name="minPrice"
        value={filters.minPrice}
        onChange={handleChange}
        placeholder="Min Price"
        className="rounded-md border-gray-300 focus:ring-amber-500 focus:border-amber-500"
      />

      <input
        type="number"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={handleChange}
        placeholder="Max Price"
        className="rounded-md border-gray-300 focus:ring-amber-500 focus:border-amber-500"
      />

      <select
        name="era"
        value={filters.era}
        onChange={handleChange}
        className="rounded-md border-gray-300 focus:ring-amber-500 focus:border-amber-500"
      >
        <option value="">All Eras</option>
        <option value="Victorian">Victorian</option>
        <option value="Art Deco">Art Deco</option>
        <option value="Mid-Century">Mid-Century</option>
        <option value="Renaissance">Renaissance</option>
      </select>

      <Button
        variant="secondary"
        onClick={() => {
          setFilters({
            category: '',
            minPrice: '',
            maxPrice: '',
            era: '',
          });
          onFilterChange({});
        }}
      >
        Clear Filters
      </Button>
    </motion.div>
  );
}