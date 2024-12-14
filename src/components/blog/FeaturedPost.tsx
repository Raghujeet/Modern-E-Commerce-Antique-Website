import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FeaturedPost() {
  return (
    <motion.div 
      className="relative h-[500px] mb-16 rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&q=80&w=2000"
        alt="Featured post"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-amber-800 text-white px-4 py-2 rounded-full text-sm mb-4 inline-block">
            Featured Article
          </span>
          <h2 className="text-4xl font-serif mb-4">The Art of Antique Restoration</h2>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl">
            Discover the meticulous process of bringing centuries-old pieces back to their former glory.
          </p>
          <Link 
            to="/blog/restoration-art"
            className="inline-flex items-center bg-white text-amber-800 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors"
          >
            Read Article
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}