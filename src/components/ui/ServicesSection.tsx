import { motion } from 'framer-motion';

const services = [
  {
    title: 'Design',
    desc: 'Minimal, beautiful, and user-focused web design with a futuristic edge.',
    icon: '🖌️',
    accent: 'from-[#00f0ff] to-[#00ffb3]',
  },
  {
    title: 'Hosting',
    desc: 'Lightning-fast, secure, and scalable hosting for modern businesses.',
    icon: '🌐',
    accent: 'from-[#ff00ea] to-[#00f0ff]',
  },
  {
    title: 'AI-powered Solutions',
    desc: 'Smart automations and AI tools to help your site thrive and grow.',
    icon: '🤖',
    accent: 'from-[#00ffb3] to-[#ff00ea]',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-black flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-10 drop-shadow-[0_0_8px_#00f0ff]">
        Our Services
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        {services.map((s) => (
          <motion.div
            key={s.title}
            whileHover={{ scale: 1.04, boxShadow: `0 0 24px #00f0ff` }}
            className={`flex-1 bg-gradient-to-br ${s.accent} rounded-2xl shadow-xl p-8 min-w-[260px] max-w-sm mx-auto text-center transition-all duration-200 hover:shadow-2xl hover:from-[#ff00ea] hover:to-[#00f0ff]`}
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">
              {s.title}
            </h3>
            <p className="text-gray-200 font-inter">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
