'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <motion.h3 
              className="text-3xl font-light gradient-text tracking-tight"
              whileHover={{ opacity: 0.8 }}
            >
              PANORAMA
              <br />
              FORUM
            </motion.h3>
            <p className="text-white/40 font-light leading-relaxed text-sm max-w-xs">
              360° widoków na Kraków i wyśmienita kuchnia na dachu legendarnego Hotelu Forum.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-gold/40 text-xs uppercase tracking-[0.3em] font-light mb-6">Menu</div>
              {['Strona główna', 'O nas', 'Menu', 'Galeria', 'Kontakt'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-white/60 hover:text-gold transition-colors text-sm font-light"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>

            <div className="space-y-4">
              <div className="text-gold/40 text-xs uppercase tracking-[0.3em] font-light mb-6">Kontakt</div>
              <div className="space-y-3 text-sm font-light text-white/60">
                <div>ul. Marii Konopnickiej 28</div>
                <div>30-302 Kraków</div>
                <a href="tel:572036584" className="block hover:text-gold transition-colors">
                  572 036 584
                </a>
                <a href="mailto:info@forumpanorama.pl" className="block hover:text-gold transition-colors">
                  info@forumpanorama.pl
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <div className="text-gold/40 text-xs uppercase tracking-[0.3em] font-light mb-6">Social</div>
            <div className="flex gap-4">
              {[
                { name: 'Facebook', href: 'https://www.facebook.com/ForumPanorama/' },
                { name: 'Instagram', href: 'https://www.instagram.com/forumpanorama/' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 hover:border-gold/30 flex items-center justify-center text-white/60 hover:text-gold transition-all text-xs font-light"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name[0]}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/30 text-xs font-light">
            © {currentYear} Panorama Forum. Wszystkie prawa zastrzeżone.
          </div>
          <div className="flex gap-6 text-xs font-light text-white/30">
            <a href="#" className="hover:text-gold transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-gold transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
