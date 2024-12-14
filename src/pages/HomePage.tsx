import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import SearchContainer from '../components/search/SearchContainer';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchContainer />
      </div>
      <FeaturedProducts />
    </div>
  );
}