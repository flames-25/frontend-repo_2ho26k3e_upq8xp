import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Sparkles, Waves } from 'lucide-react';

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hoverVoice, setHoverVoice] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0B0B0B] to-[#1A1A1A]"
    >
      {/* Spotlight gradient following cursor */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(155,92,255,0.18), rgba(0,0,0,0))`,
        }}
      />

      {/* Floating subtle particles */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            'radial-gradient(100px 100px at 20% 30%, rgba(155,92,255,0.10), transparent), radial-gradient(160px 160px at 80% 70%, rgba(255,255,255,0.05), transparent)',
            'radial-gradient(100px 100px at 25% 35%, rgba(155,92,255,0.08), transparent), radial-gradient(160px 160px at 75% 65%, rgba(255,255,255,0.06), transparent)',
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />

      {/* Spline 3D aura */}
      <div className="absolute inset-0" aria-hidden>
        <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 pb-24 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md"
        >
          <Sparkles size={16} className="text-[#9B5CFF]" />
          <span className="text-xs text-white/70">Spinabot • Next-gen conversational AI</span>
        </motion.div>

        <div className="relative mt-6">
          {/* Title lines with shimmer gradient */}
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                transition: { staggerChildren: 0.25 },
              },
            }}
            className="text-left text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {['AI Voice Agents', 'That Talk', 'Like Humans'].map((line, idx) => (
              <motion.span
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="block bg-gradient-to-r from-[#9B5CFF] via-white to-[#9B5CFF] bg-clip-text text-transparent"
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          {/* subtle shimmer overlay */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-white/70"
        >
          Launch lifelike conversations that convert. Real-time understanding, dynamic knowledge, and
          <span
            onMouseEnter={() => setHoverVoice(true)}
            onMouseLeave={() => setHoverVoice(false)}
            className="relative mx-2 inline-block cursor-default font-semibold text-white"
          >
            voice
            {/* Voice wave visualization on hover */}
            <span className="absolute -bottom-4 left-0 flex h-3 w-16 items-end gap-1">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-[#9B5CFF]/80"
                  style={{
                    height: hoverVoice ? `${6 + ((i % 3) + 1) * 4}px` : '4px',
                    transition: `height ${0.3 + i * 0.05}s ease-in-out`,
                  }}
                />
              ))}
            </span>
          </span>
          synthesis that feels natural.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(155,92,255,0.6)' }}
            whileTap={{ scale: 0.98 }}
            href="#get-started"
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#9B5CFF] to-white px-6 py-3 font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Get Started</span>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
          </motion.a>

          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 backdrop-blur-md">
            <Waves size={18} className="text-[#9B5CFF]" />
            Live demo call available
          </div>
        </motion.div>
      </div>
    </section>
  );
}
