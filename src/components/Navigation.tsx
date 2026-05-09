import { motion } from "motion/react";

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-black/10 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-dashed border-white/40 animate-[spin_20s_linear_infinite] flex items-center justify-center">
          <div className="w-4 h-4 rounded-full border border-white"></div>
        </div>
        <span className="text-xl font-medium tracking-tight">Silvia</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-light text-white/70 tracking-wide">
        <button className="hover:text-white transition-colors">Qanday ishlaydi</button>
        <button className="flex items-center gap-1 hover:text-white transition-colors">
          Amaliyot 
          <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <button className="flex items-center gap-1 hover:text-white transition-colors">
          Kutubxona 
          <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <button className="hover:text-white transition-colors">Hamjamiyat</button>
      </div>

      <button className="glass-pill px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide hover:bg-white/20 transition-all">
        <span className="sm:hidden">Qo'shilish</span>
        <span className="hidden sm:inline">Kutish ro'yxatiga qo'shilish</span>
      </button>
    </motion.nav>
  );
}
