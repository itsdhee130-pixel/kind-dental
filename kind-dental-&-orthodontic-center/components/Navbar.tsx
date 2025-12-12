import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

interface NavbarProps {
  onBookVisit: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Technology', href: '#technology' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className={`rounded-2xl transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/20 p-4' 
              : 'bg-transparent p-0'
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-gradient-to-tr from-medical-dark to-medical-light rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
                  K
                </div>
                <span className="font-display font-bold text-xl text-medical-dark tracking-tight">
                  Kind <span className="text-medical-light">Dental</span>
                </span>
              </a>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-sm font-medium text-gray-600 hover:text-medical-dark relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-light transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-3">
                <a 
                  href="tel:+919876543210"
                  className="w-10 h-10 rounded-full border border-medical-dark/10 flex items-center justify-center text-medical-dark hover:bg-medical-dark hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Call Us"
                >
                  <Phone size={18} />
                </a>
                <AnimatedButton 
                  variant={isScrolled ? 'primary' : 'primary'} 
                  className="!px-6 !py-2 !text-xs"
                  onClick={onBookVisit}
                >
                  Book Visit
                </AnimatedButton>
              </div>

              {/* Mobile Toggle */}
              <button 
                className="md:hidden text-medical-dark"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="font-display font-bold text-xl text-medical-dark">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-3xl font-display font-bold text-medical-dark"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 p-6 bg-gray-50 rounded-2xl"
              >
                <p className="text-gray-500 text-sm mb-4">Emergency?</p>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-xl font-bold text-medical-dark">
                  <div className="w-10 h-10 bg-accent-coral rounded-full flex items-center justify-center text-white">
                    <Phone size={18} />
                  </div>
                  +91 987 654 3210
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;