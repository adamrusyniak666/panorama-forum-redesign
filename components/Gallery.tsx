'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Real images from the original site
  const images = [
    { id: 1, title: 'Panorama Krakowa', category: 'Widoki', src: '/panorama_krakowa-1-scaled.jpg' },
    { id: 2, title: 'Wnętrze restauracji', category: 'Wnętrza', src: '/people_02-1024x1024.jpg' },
    { id: 3, title: 'Dania', category: 'Kuchnia', src: '/MG_9045-scaled.jpg' },
    { id: 4, title: 'Zachód słońca', category: 'Widoki', src: '/panorama_krakowa-1-scaled.jpg' },
    { id: 5, title: 'Bar', category: 'Wnętrza', src: '/04.jpg' },
    { id: 6, title: 'Impreza', category: 'Wydarzenia', src: '/MG_9047-819x1024.jpg' },
    { id: 7, title: 'Wawel nocą', category: 'Widoki', src: '/IMG_4273-1024x768.jpg' },
    { id: 8, title: 'Menu degustacyjne', category: 'Kuchnia', src: '/people_02-1024x1024.jpg' },
  ];

  return (
    <section id="gallery" className="relative py-32 bg-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Galeria
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
            <span className="gradient-text">Zobacz</span>
            <br />
            <span className="text-white font-extralight italic">naszą przestrzeń</span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-64">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Image */}
              <motion.div
                className={`w-full bg-cover bg-center ${
                  index === 0 || index === 3 ? 'aspect-[16/10]' : 'aspect-square'
                }`}
                style={{ backgroundImage: `url('${image.src}')` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.span
                    className="inline-block text-xs text-gold mb-2 font-semibold tracking-wider uppercase"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {image.category}
                  </motion.span>
                  <motion.h3
                    className="text-white font-bold text-xl"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {image.title}
                  </motion.h3>
                </div>
              </motion.div>

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-8 h-8" />
          </motion.button>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 25 }}
            className="max-w-5xl w-full aspect-video bg-cover bg-center rounded-3xl"
            style={{ 
              backgroundImage: `url('${images.find(img => img.id === selectedImage)?.src}')` 
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};
