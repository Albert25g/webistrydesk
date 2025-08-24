'use client';

import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section
      id="get-started"
      className="py-12 bg-gradient-to-r from-[#0a1837] to-black flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-orbitron text-[#00f0ff] mb-6 animate-pulse"
      >
        🚀 Your Website. Smarter. Faster. Future-Ready.
      </motion.div>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.08, boxShadow: '0 0 16px #ff00ea' }}
        className="inline-block px-8 py-3 rounded-full bg-[#ff00ea] text-white font-bold text-lg shadow-lg transition-all duration-200 hover:bg-[#00f0ff] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#ff00ea] focus:ring-offset-2"
      >
        👉 Get Started Today
      </motion.a>
    </section>
  );
}
