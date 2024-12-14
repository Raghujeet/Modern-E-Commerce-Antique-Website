import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin: string;
  delay: number;
}

export default function TeamMember({ name, role, image, email, linkedin, delay }: TeamMemberProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex space-x-4">
            <a href={`mailto:${email}`} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </motion.div>
  );
}