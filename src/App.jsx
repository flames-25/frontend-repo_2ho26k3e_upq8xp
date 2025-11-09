import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import VoicesCarousel from './components/VoicesCarousel';
import CTASection from './components/CTASection';
import Sidebar from './components/Sidebar';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-[#0B0B0B] font-inter text-white">
      {/* Top scroll progress bar */}
      {mounted && (
        <motion.div
          style={{ scaleX, transformOrigin: '0% 50%' }}
          className="fixed left-0 top-0 z-40 h-1 w-full bg-gradient-to-r from-[#9B5CFF] via-white to-[#9B5CFF]"
        />
      )}

      <Sidebar />

      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="voices">
          <VoicesCarousel />
        </div>
        <CTASection />
      </main>

      {/* Background animated blur overlays for depth */}
      <div className="pointer-events-none fixed right-[-20%] top-[10%] h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-[#9B5CFF]/20 to-white/5 blur-3xl" />
      <div className="pointer-events-none fixed left-[-10%] bottom-[10%] h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-white/10 to-[#9B5CFF]/10 blur-3xl" />
    </div>
  );
}
