import { motion } from 'framer-motion';
import { Clock, Award, Shield } from 'lucide-react';

const milestones = [
  {
    year: '1924',
    title: 'Our Beginning',
    description: 'Founded as a small antique shop in London\'s historic district.',
    icon: Clock,
  },
  {
    year: '1950',
    title: 'International Expansion',
    description: 'Opened our first international gallery in Paris.',
    icon: Award,
  },
  {
    year: '2024',
    title: 'Digital Evolution',
    description: 'Launched our online platform to reach collectors worldwide.',
    icon: Shield,
  },
];

export default function History() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif text-gray-900">Our Journey Through Time</h2>
          <p className="mt-4 text-xl text-gray-600">A century of preserving history's finest pieces</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-amber-800/30" />
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'pr-8 lg:ml-auto lg:mr-[50%]' : 'pl-8 lg:ml-[50%]'}`}
              >
                <div className="flex items-center">
                  <div className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center`}>
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <span className="text-amber-800 text-xl font-bold">{milestone.year}</span>
                    <h3 className="text-xl font-medium text-gray-900 mt-2">{milestone.title}</h3>
                    <p className="mt-2 text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}