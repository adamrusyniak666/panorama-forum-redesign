'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Anna Kowalska',
      text: 'Niesamowite doznania kulinarne połączone z zapierającym dech w piersiach widokiem. Prawdziwa uczta dla zmysłów.',
      rating: 5
    },
    {
      name: 'Michał Nowak',
      text: 'Panorama Forum to idealne miejsce na wesele. Widoki zapierają dech, obsługa perfekcyjna. Polecam z całego serca.',
      rating: 5
    },
    {
      name: 'Katarzyna Wiśniewska',
      text: 'Profesjonalizm, piękne wnętrza i wyjątkowa atmosfera sprawiły, że konferencja była niezapomniana.',
      rating: 5
    }
  ];

  return (
    <section className="relative pt-56 pb-40 bg-black overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100% 100px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-40"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="mb-6"
          >
            <span className="text-gold/60 text-xs font-light tracking-[0.3em] uppercase">
              Opinie
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
            <span className="text-white">Doświadczenia</span>
            <br />
            <span className="gradient-text font-extralight italic">naszych gości</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-64">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative h-full bg-zinc-950/30 backdrop-blur-sm p-10 border border-white/5 hover:border-gold/20 transition-all duration-500">
                {/* Quote marks */}
                <div className="absolute top-8 left-8 text-6xl text-gold/10 font-serif leading-none">"</div>
                
                <div className="relative z-10 flex flex-col h-full pt-12">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.1 }}
                        className="w-1 h-1 bg-gold"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white/60 leading-relaxed mb-8 flex-1 font-light">
                    {testimonial.text}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-gold/20 via-gold/40 to-transparent mb-6" />

                  {/* Author */}
                  <div className="text-white/80 font-light tracking-wide text-sm">
                    {testimonial.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
