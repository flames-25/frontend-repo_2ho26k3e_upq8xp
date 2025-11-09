import { motion } from 'framer-motion';
import { Home, Settings, User, Headphones } from 'lucide-react';

const items = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: Headphones, label: 'Voices', href: '#voices' },
  { icon: Settings, label: 'Features', href: '#features' },
  { icon: User, label: 'Account', href: '#' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-4 top-1/2 z-30 -translate-y-1/2">
      <nav className="flex flex-col gap-3">
        {items.map(({ icon: Icon, label, href }, idx) => (
          <a key={label} href={href} className="group">
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80 backdrop-blur-md"
            >
              <div className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-white group-hover:text-white">
                <Icon className="transition-transform duration-300 group-hover:scale-110" size={16} />
              </div>
              <span className="text-sm">{label}</span>
              <span className="ml-2 h-px flex-1 bg-gradient-to-r from-[#9B5CFF] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          </a>
        ))}
      </nav>
    </aside>
  );
}
