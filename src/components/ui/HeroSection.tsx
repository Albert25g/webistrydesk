import { motion } from 'framer-motion';
import '@fontsource/orbitron/700.css';
import '@fontsource/inter/400.css';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0a1837] to-black overflow-hidden">
      {/* Digital grid/lines background (SVG or CSS) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Placeholder for grid/lines background */}
        <svg width="100%" height="100%" className="w-full h-full opacity-30">
          <defs>
            <linearGradient id="grid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#ff00ea" />
            </linearGradient>
          </defs>
          <g stroke="url(#grid)" strokeWidth="0.5">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="1000" />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={i} y1={i * 40} x1="0" y2={i * 40} x2="2000" />
            ))}
          </g>
        </svg>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-4xl md:text-6xl font-orbitron font-bold text-white drop-shadow-[0_0_12px_#00f0ff] mb-4"
      >
        ✨ Build your digital presence with{' '}
        <span className="text-[#00f0ff]">Living Digital Architecture</span>.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="z-10 text-lg md:text-2xl text-gray-200 max-w-2xl mb-8 font-inter"
      >
        At WebistryDesk, we design, host, and power websites that don’t just
        exist online — they thrive. From sleek design to seamless performance,
        our sites are crafted to inspire trust, attract customers, and scale
        with your vision.
      </motion.p>
      <motion.a
        href="#get-started"
        whileHover={{ scale: 1.08, boxShadow: '0 0 16px #00f0ff' }}
        className="z-10 inline-block px-8 py-3 rounded-full bg-[#00f0ff] text-black font-bold text-lg shadow-lg transition-all duration-200 hover:bg-[#ff00ea] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:ring-offset-2"
      >
        👉 Get Started Today
      </motion.a>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="z-10 mt-8 text-[#ff00ea] text-xl font-orbitron drop-shadow-[0_0_8px_#ff00ea]"
      >
        🚀 Your Website. Smarter. Faster. Future-Ready.
      </motion.div>
    </section>
  );
}
