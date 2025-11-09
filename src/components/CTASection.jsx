import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="get-started" className="relative w-full bg-gradient-to-b from-[#0B0B0B] to-[#0B0B0B] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_30rem_at_50%_0%,rgba(155,92,255,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-8 backdrop-blur-xl">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-white md:text-3xl">Start Your Voice AI Journey</h3>
              <p className="mt-2 text-white/70">
                Spin up production-ready agents in minutes. Ship faster with beautiful defaults.
              </p>
              {/* Steps line */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
                {[
                  '1. Upload KB',
                  '2. Configure Voice',
                  '3. Go Live',
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full bg-white/10 px-2 py-1 text-xs">Step {i + 1}</span>
                    <span>{step}</span>
                    {i < 2 && <span className="mx-1 h-px w-6 bg-gradient-to-r from-[#9B5CFF] to-transparent" />}
                  </div>
                ))}
              </div>
            </div>

            <motion.a
              whileHover={{ x: 4 }}
              href="#"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#9B5CFF] to-white px-6 py-3 font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
            >
              <Rocket className="transition-transform duration-300 group-hover:rotate-12" />
              Get Started
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Sparkles className="pointer-events-none absolute -right-2 -top-2 text-[#9B5CFF]" size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
