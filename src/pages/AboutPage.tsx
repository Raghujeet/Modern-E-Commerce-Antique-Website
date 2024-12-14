import { motion } from 'framer-motion';
import History from '../components/about/History';
import TeamMember from '../components/about/TeamMember';

const team = [
  {
    name: 'Victoria Clarke',
    role: 'Founder & Lead Curator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
    email: 'victoria@antiquetreatures.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'James Anderson',
    role: 'Head of Restoration',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    email: 'james@antiquetreatures.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sophie Laurent',
    role: 'Authentication Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800',
    email: 'sophie@antiquetreatures.com',
    linkedin: 'https://linkedin.com',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative h-[600px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&q=80&w=2000"
            alt="Our workshop"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </motion.div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-serif text-white mb-6">Our Story</h1>
            <p className="text-xl text-gray-300">
              For over a century, Antique Treasures has been a trusted name in the world of fine antiques. 
              Our passion for preserving history's finest pieces has made us a leading destination for collectors 
              and enthusiasts alike.
            </p>
          </motion.div>
        </div>
      </div>

      <History />

      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">Experts dedicated to preserving history</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={member.name} {...member} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}