import { Search } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&q=80&w=2000"
          alt="Antique collection"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-serif tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discover Timeless Treasures
          </h1>
          <p className="mt-6 max-w-xl text-xl text-gray-300">
            Explore our curated collection of authentic antiques, each piece telling its own unique story from the past.
          </p>
          
          <div className="mt-8 flex items-center">
            <div className="relative rounded-md shadow-sm flex-1 max-w-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-amber-800"
                placeholder="Search for antiques..."
              />
            </div>
            <Button className="ml-4" size="lg">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}