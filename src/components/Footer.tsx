import { motion } from "motion/react";

export function Footer() {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-24 md:py-32 px-6 bg-[#050505] overflow-hidden z-20">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.04] blur-[120px] rounded-full pointer-events-none z-10 opacity-60"></div>
      <div className="noise-overlay z-10"></div>
      
      <div className="max-w-4xl mx-auto relative z-20 text-center space-y-12">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-full border border-dashed border-white/40 animate-[spin_20s_linear_infinite] flex items-center justify-center mb-8">
            <div className="w-5 h-5 rounded-full border border-white"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
            Kelajagingizni <span className="font-semibold text-white/90">bugun yarating.</span>
          </h2>
          
          <p className="text-white/50 font-light mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            Hozirdayoq ro'yxatdan o'ting va o'zgarishlar sari tashlanadigan ilk jiddiy qadamingizni boshlang.
          </p>
          
          <button 
            onClick={scrollToHero}
            className="bg-white text-black px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gray-100 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.4)] active:scale-95"
          >
            Ro'yxatga qo'shilish
          </button>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2 }}
           className="flex flex-col md:flex-row justify-between items-center pt-16 mt-16 border-t border-white/5 text-xs text-white/40 space-y-4 md:space-y-0 tracking-wide font-light"
        >
          <p>&copy; {new Date().getFullYear()} Silvia Meditation. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white transition-colors">Foydalanish shartlari</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
