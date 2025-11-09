import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Mic2, Play } from 'lucide-react';
import { useRef, useState } from 'react';

const voices = [
  {
    name: 'Professional Sarah',
    tag: 'Best for professional settings',
  },
  {
    name: 'Friendly Alex',
    tag: 'Casual tone for friendly calls',
  },
  {
    name: 'Expert Marcus',
    tag: 'Great for technical support',
  },
];

export default function VoicesCarousel() {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const [active, setActive] = useState(null);
  const scale = useTransform(x, [-200, 0, 200], [0.98, 1, 0.98]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#101010] to-[#0B0B0B] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30rem_30rem_at_50%_50%,rgba(155,92,255,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Choose Your Voice</h2>
        <p className="mt-3 text-center text-white/60">Craft the tone that matches your brand.</p>

        <div ref={constraintsRef} className="mt-10 overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            style={{ x, scale }}
            dragTransition={{ power: 0.2, timeConstant: 200 }}
            className="flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {voices.map((v, idx) => (
              <motion.div
                key={v.name}
                whileHover={{ y: -6 }}
                className="relative min-w-[280px] max-w-sm flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{v.name}</h3>
                    <span className="mt-1 inline-block rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">
                      Voice profile
                    </span>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#9B5CFF]/15 text-[#9B5CFF] ring-1 ring-[#9B5CFF]/30">
                    <Mic2 className="animate-pulse" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70">{v.tag}</p>
                <div className="mt-5 flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActive(active === idx ? null : idx)}
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#9B5CFF] to-white px-4 py-2 font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
                  >
                    <Play size={16} /> Play Sample
                  </motion.button>
                </div>

                <AnimatePresence>
                  {active === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 54 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4"
                    >
                      {/* Equalizer pulse */}
                      <div className="flex h-12 items-end gap-1">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <motion.span
                            key={i}
                            animate={{ height: [6, 36, 10, 28, 14][i % 5] }}
                            transition={{ duration: 0.8 + (i % 5) * 0.08, repeat: Infinity, repeatType: 'mirror' }}
                            className="w-1 rounded-full bg-gradient-to-b from-white to-[#9B5CFF]"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
