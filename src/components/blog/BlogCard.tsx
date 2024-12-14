import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    category: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article 
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute top-4 right-4 bg-amber-800 text-white px-3 py-1 rounded-full text-sm">
          {post.category}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </span>
        </div>
        
        <h3 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-amber-800 transition-colors">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <Link 
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-amber-800 hover:text-amber-900 font-medium"
        >
          Read More
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}