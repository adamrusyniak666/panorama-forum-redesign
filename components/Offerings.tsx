'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getAssetPath } from '@/lib/utils';

export const Offerings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Offerings data with images
  const offerings = [
    {
      id: 1,
      title: 'Menu degustacyjne',
      category: 'Restauracja',
      image: getAssetPath('/images-1.jpeg')
    },
    {
      id: 2,
      title: 'Wesela',
      category: 'Bankiety',
      image: getAssetPath('/images-4.jpeg')
    },
    {
      id: 3,
      title: 'Konferencje',
      category: 'Biznes',
      image: getAssetPath('/images-5.jpeg')
    },
    {
      id: 4,
      title: 'Degustacja cygar',
      category: 'Royal Cigar Lounge',
      image: getAssetPath('/royal.jpg')
    },
    {
      id: 5,
      title: 'Imprezy firmowe',
      category: 'Wydarzenia',
      image: getAssetPath('/images-6-1.jpeg')
    },
    {
      id: 6,
      title: 'Catering',
      category: 'Na zamówienie',
      image: getAssetPath('/images-7-1.jpeg')
    }
  ];

  return (
    <section id="menu" className="relative py-40 bg-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="mb-6"
          >
            <span className="text-gold/60 text-xs font-light tracking-[0.3em] uppercase">
              Oferta
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
            <span className="text-white">Każda</span>
            <br />
            <span className="gradient-text font-extralight italic">okazja</span>
          </h2>
        </motion.div>

        {/* Offerings Grid - Gallery Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-64">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                className={`w-full bg-cover bg-center ${
                  index === 0 || index === 3 ? 'aspect-[16/10]' : 'aspect-square'
                }`}
                style={{ backgroundImage: `url('${offering.image}')` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay - Always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-xs text-gold mb-2 font-semibold tracking-wider uppercase">
                    {offering.category}
                  </span>
                  <h3 className="text-white font-light text-2xl md:text-3xl">
                    {offering.title}
                  </h3>
                </div>
              </div>

              {/* Hover effect - darkens more */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
