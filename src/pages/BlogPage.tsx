import { motion } from 'framer-motion';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogCard from '../components/blog/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Victorian Furniture',
    excerpt: 'Discover the intricate details and craftsmanship of Victorian-era furniture pieces...',
    date: 'March 15, 2024',
    author: 'Elizabeth Bennett',
    image: 'https://images.unsplash.com/photo-1592878940526-0214b0f374f6?auto=format&fit=crop&q=80&w=800',
    category: 'Furniture',
  },
  {
    id: 2,
    title: 'Caring for Antique Silver',
    excerpt: 'Learn the proper techniques for maintaining and preserving your antique silver collections...',
    date: 'March 10, 2024',
    author: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1574179528232-b3f7d88a9027?auto=format&fit=crop&q=80&w=800',
    category: 'Care Guide',
  },
  {
    id: 3,
    title: 'Understanding Art Deco',
    excerpt: 'Explore the distinctive characteristics of Art Deco design and its influence on decorative arts...',
    date: 'March 5, 2024',
    author: 'Sophie Laurent',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    category: 'History',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif text-gray-900">Antique Insights</h1>
          <p className="mt-4 text-xl text-gray-600">Discover stories behind timeless treasures</p>
        </motion.div>

        <FeaturedPost />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}