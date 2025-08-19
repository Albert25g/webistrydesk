import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-[#0a1837] flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6 drop-shadow-[0_0_8px_#ff00ea]"
      >
        About WebistryDesk
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-2xl text-lg md:text-xl text-gray-200 text-center font-inter px-4 border-l-4 border-[#00f0ff] bg-black/60 rounded-lg shadow-lg"
      >
        Modern web services for entrepreneurs & SMBs. Built with precision.
        Backed by innovation.{' '}
        <span className="text-[#00f0ff] font-orbitron">Retro-futuristic</span>{' '}
        accents meet cutting-edge technology for a digital presence that stands
        out and scales up.
      </motion.p>
    </section>
  );
}
