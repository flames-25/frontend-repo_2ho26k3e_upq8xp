import { motion, useInView } from 'framer-motion';
import { Database, History, Waveform, BarChart3 } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: History,
    title: 'Call History Tracking',
    desc: 'Every interaction is logged with sentiment and key moments for instant QA.',
  },
  {
    icon: Database,
    title: 'Knowledge Base Integration',
    desc: 'Connect your docs and APIs to ground conversations in your data.',
  },
  {
    icon: Waveform,
    title: 'Natural Voice Synthesis',
    desc: 'Expressive prosody, pauses, and emphasis for human-like delivery.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    desc: 'Real-time dashboards to track conversions, CSAT, and handle time.',
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-[#0B0B0B] to-[#101010] py-20">
      {/* Parallax glow strips */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        style={{
          background:
            'radial-gradient(40rem 20rem at 10% 10%, rgba(155,92,255,0.15), transparent), radial-gradient(30rem 15rem at 90% 80%, rgba(255,255,255,0.06), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          Advanced Voice AI Capabilities
        </motion.h2>
        <p className="mt-3 text-center text-white/60">
          Built for production — secure, scalable, and deeply customizable.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-5 backdrop-blur-xl"
            >
              {/* Gradient border sheen */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-[#9B5CFF]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-[#9B5CFF] ring-1 ring-white/10">
                    <Icon className="transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-white/50 to-[#9B5CFF]" />
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="text-sm text-white/70"
                >
                  {desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
