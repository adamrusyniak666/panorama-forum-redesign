'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section id="contact" className="relative pt-56 pb-40 bg-black overflow-hidden">
      {/* Background */}
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
              Kontakt
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
            <span className="text-white">Zarezerwuj</span>
            <br />
            <span className="gradient-text font-extralight italic">wizytę</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 mt-64">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Address */}
            <div className="space-y-3">
              <div className="text-gold/40 text-xs uppercase tracking-[0.3em] font-light">Adres</div>
              <div className="text-white/80 text-lg font-light leading-relaxed">
                ul. Marii Konopnickiej 28<br />
                30-302 Kraków
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-3">
              <div className="text-gold/40 text-xs uppercase tracking-[0.3em] font-light">Telefon</div>
              <a href="tel:572036584" className="text-white/80 hover:text-gold transition-colors text-lg font-light">
                572 036 584
              </a>
            </div>

            {/* Email */}
            <div className="space-y-3">
              <div className="text-gold/40 text-xs uppercase tracking-[0.3em] font-light">Email</div>
              <a href="mailto:info@forumpanorama.pl" className="text-white/80 hover:text-gold transition-colors text-lg font-light">
                info@forumpanorama.pl
              </a>
            </div>

            {/* Hours */}
            <div className="space-y-3">
              <div className="text-gold/40 text-xs uppercase tracking-[0.3em] font-light">Godziny otwarcia</div>
              <div className="text-white/80 text-lg font-light">
                Pn-Nd: 12:00 - 23:00
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-gold/20 via-gold/40 to-transparent my-12" />

            {/* Map placeholder */}
            <div className="aspect-video bg-zinc-950/50 border border-white/5 flex items-center justify-center text-white/20 text-sm font-light tracking-wider">
              MAPA GOOGLE
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-white/40 mb-3 font-light text-xs uppercase tracking-wider">Imię i nazwisko</label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-gold transition-colors font-light"
                required
              />
            </div>

            <div>
              <label className="block text-white/40 mb-3 font-light text-xs uppercase tracking-wider">Email</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-gold transition-colors font-light"
                required
              />
            </div>

            <div>
              <label className="block text-white/40 mb-3 font-light text-xs uppercase tracking-wider">Telefon</label>
              <input
                type="tel"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-gold transition-colors font-light"
              />
            </div>

            <div>
              <label className="block text-white/40 mb-3 font-light text-xs uppercase tracking-wider">Wiadomość</label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-gold transition-colors resize-none font-light"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="mt-8 inline-flex items-center gap-4 text-white/60 hover:text-gold transition-colors text-sm font-light tracking-wider uppercase group"
              whileHover={{ x: 5 }}
            >
              <span>Wyślij wiadomość</span>
              <span>→</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
