import { useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SearchFilters from './SearchFilters';

export default function SearchContainer() {
  const { query, setQuery, results, isSearching } = useSearch();
  const [showResults, setShowResults] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setShowResults(true);
  };

  const handleFilterChange = (filters: any) => {
    // Update search with filters
    setQuery((prev) => ({ ...prev, ...filters }));
  };

  return (
    <div className="relative">
      <SearchBar
        onSearch={handleSearch}
        className="mb-4"
      />
      
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="text-sm text-amber-800 hover:text-amber-900 mb-4"
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      {showFilters && (
        <SearchFilters onFilterChange={handleFilterChange} />
      )}

      <SearchResults
        results={results}
        isVisible={showResults && (query !== '' || isSearching)}
      />
    </div>
  );
}