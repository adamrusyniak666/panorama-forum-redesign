'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-40 bg-black overflow-hidden">
      {/* Minimal background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="mb-6"
          >
            <span className="text-gold/60 text-xs font-light tracking-[0.3em] uppercase">
              Doświadczenie
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
            <span className="text-white">Kulinarny</span>
            <br />
            <span className="gradient-text font-extralight italic">Modernizm</span>
          </h2>
        </motion.div>

        {/* Two Column Layout - Image + Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-20 items-center mt-64"
        >
          {/* Image Side */}
          <div className="relative">
            <motion.div
              className="relative aspect-[3/4] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: "url('/04.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>
            
            {/* Floating Number */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -top-8 -right-8 text-[200px] font-bold text-gold/5 leading-none pointer-events-none"
            >
              360°
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                Ikona nad Wisłą
              </h3>
              
              <div className="w-12 h-[1px] bg-gradient-to-r from-gold to-transparent" />
              
              <p className="text-lg text-white/50 leading-relaxed font-light">
                Położona na dachu legendarnego Hotelu Forum, restauracja oferuje 
                niezrównane 360-stopniowe widoki na Kraków. Modernistyczna architektura 
                spotyka się z wyrafinowaną kuchnią.
              </p>
              
              <p className="text-lg text-white/50 leading-relaxed font-light">
                Z restauracji roztacza się spektakularna panorama: zakole Wisły, 
                Wawel, a w przejrzyste dni – Babia Góra i Tatry.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-3xl font-light text-gold mb-1">360°</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Panorama</div>
              </div>
              <div>
                <div className="text-3xl font-light text-gold mb-1">1989</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Założenie</div>
              </div>
              <div>
                <div className="text-3xl font-light text-gold mb-1">200+</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Gości</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm font-light tracking-wider uppercase group"
              >
                <span>Zarezerwuj wizytę</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
