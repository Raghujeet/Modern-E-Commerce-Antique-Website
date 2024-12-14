import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/Map';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Antique Row, London, UK',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+44 (0) 20 7123 4567',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@antiquetreatures.com',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    content: 'Mon-Sat: 10am - 6pm',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-600">We'd love to hear from you</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-amber-800" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </motion.div>
              ))}
            </div>

            <Map />
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}