'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Facebook, Instagram, Mail } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Strona główna' },
    { href: '#about', label: 'O nas' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-2xl shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        {/* Top bar - Social & Phone */}
        <div className={`border-b border-white/10 transition-all duration-300 ${
          isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6 text-sm">
            <a href="tel:572036584" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
              <Phone className="w-4 h-4" />
              <span>572 036 584</span>
            </a>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/ForumPanorama/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/forumpanorama/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:info@forumpanorama.pl" className="text-white/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className=""
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/logo.png" alt="Panorama Forum" className="h-10 md:h-12" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gold transition-colors text-sm font-medium tracking-wide"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-gold via-gold-light to-gold bg-size-200 bg-pos-0 hover:bg-pos-100 text-black px-16 py-4 rounded-lg font-semibold text-base transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundSize: '200% 100%', backgroundPosition: '0% 0%' }}
              >
                &nbsp;Rezerwuj&nbsp;
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
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
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-2xl text-white/80 hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="bg-gradient-to-r from-gold to-gold-light text-black px-8 py-4 rounded-full font-semibold text-lg mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Rezerwuj
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
