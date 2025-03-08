import React, { useState, useEffect } from 'react';
import { motion } from 'lucide-react';

const HomePage = () => {
  // State for animation triggers
  const [animate, setAnimate] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Navigation handler
  const handleNavigation = (path) => {
    // In a real app, use proper routing
    console.log(`Navigating to ${path}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900">Animal Trust</div>
            <div className="flex space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#impact" className="hover:text-blue-600 transition-colors">Impact</a>
              <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
              <button 
                onClick={() => handleNavigation('/donate')}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Donate
              </button>
              <button 
                onClick={() => handleNavigation('/blog')}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Blog
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            Help Us Save Lives
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your support helps us rescue, rehabilitate, and rehome animals in need.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => handleNavigation('/donate')}
              className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Donate Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Rescue</h3>
                <p className="text-gray-700">We rescue animals from dangerous situations and provide immediate care.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Rehabilitate</h3>
                <p className="text-gray-700">Our team provides medical care and training to help animals recover.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Rehome</h3>
                <p className="text-gray-700">We find loving forever homes where animals can thrive.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-2">1,200+</div>
                <div className="text-gray-600">Animals Rescued</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-2">850+</div>
                <div className="text-gray-600">Adoptions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
                <div className="text-gray-600">Emergency Care</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-2">5,000+</div>
                <div className="text-gray-600">Volunteers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative overflow-hidden rounded-lg group">
                  <img 
                    src={`/api/placeholder/400/300`}
                    alt={`Gallery ${item}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: info@animaltrust.org</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/donate" className="hover:text-blue-300">Donate</a></li>
                <li><a href="/volunteer" className="hover:text-blue-300">Volunteer</a></li>
                <li><a href="/adopt" className="hover:text-blue-300">Adopt</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">Facebook</a>
                <a href="#" className="hover:text-blue-300">Twitter</a>
                <a href="#" className="hover:text-blue-300">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2025 Animal Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;