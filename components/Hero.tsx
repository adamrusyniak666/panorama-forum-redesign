'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/panorama_krakowa-1-scaled.jpg')`,
            filter: 'brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          // Pre-calculated random values to avoid hydration mismatch
          const xPos = (i * 97) % 100; // Pseudo-random 0-100
          const yPos = (i * 73) % 100; // Pseudo-random 0-100
          const duration = 2 + (i % 3); // 2-4 seconds
          const delay = (i % 4) * 0.5; // 0-1.5 seconds
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              style={{
                left: `${xPos}%`,
                top: `${yPos}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                y: [-20, -150],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <motion.img
            src="/logo.png"
            alt="Panorama Forum Kraków"
            className="h-40 md:h-56 lg:h-64 mx-auto mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-[0.2em] uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Kraków
          </motion.h1>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Zapierające dech w piersiach widoki na 360° 
          <br />
          i wyśmienita kuchnia w sercu Krakowa
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 mt-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="group relative bg-gradient-to-r from-gold via-gold-light to-gold text-black px-24 py-8 rounded-lg font-bold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">&nbsp;Zarezerwuj stolik&nbsp;</span>
            <motion.div 
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#menu"
            className="glass text-white px-24 py-8 rounded-lg font-bold text-lg border border-gold/30 hover:border-gold transition-all"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            &nbsp;Zobacz menu&nbsp;
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-30" />
    </section>
  );
};
