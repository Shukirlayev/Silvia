import { motion } from "motion/react";
import { Wind, Moon, Sun, Sparkles } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-24 md:py-40 px-6 bg-[#030303] relative z-20 overflow-hidden">
      {/* Background texture & gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/50 to-[#030303] pointer-events-none"></div>
      <div className="noise-overlay z-10 opacity-70"></div>
      
      <div className="max-w-6xl mx-auto relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            Ongingizni <span className="font-semibold text-white/90">xotirjamlikka</span> o'rgating.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Zamonaviy hayotning shovqinidan qochib, o'z ichingizdagi xotirjamlikni toping.
            Siz uchun maxsus ishlab chiqilgan, ta'sirchan usullar to'plami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[320px]">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-2 glass-pill p-8 md:p-10 rounded-3xl flex flex-col justify-between group overflow-hidden relative min-h-[300px] bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-500">
              <Sun className="w-6 h-6 text-white/80 group-hover:text-indigo-300 transition-colors" />
            </div>
            <div className="relative z-10 flex-1 flex flex-col justify-end">
              <h3 className="text-2xl font-medium text-white mb-3 tracking-wide">Tonggi uyg'onish</h3>
              <p className="text-white/60 font-light leading-relaxed max-w-md text-base">
                Kuningizni sergak va ijobiy energiya bilan boshlash uchun qisqa va ta'sirchan tonggi meditatsiyalar to'plami.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-pill p-8 md:p-10 rounded-3xl flex flex-col justify-between group overflow-hidden relative min-h-[300px] bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(59,130,246,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
              <Moon className="w-6 h-6 text-white/80 group-hover:text-blue-300 transition-colors" />
            </div>
            <div className="relative z-10 flex-1 flex flex-col justify-end">
              <h3 className="text-2xl font-medium text-white mb-3 tracking-wide">Chuqur uyqu</h3>
              <p className="text-white/60 font-light leading-relaxed text-base">
                Sokin ritmlar va hikoyalar yordamida tez uxlash hamda chuqur dam olishni o'rganing.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-pill p-8 md:p-10 rounded-3xl flex flex-col justify-between group overflow-hidden relative min-h-[300px] bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(20,184,166,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all duration-500">
              <Wind className="w-6 h-6 text-white/80 group-hover:text-teal-300 transition-colors" />
            </div>
            <div className="relative z-10 flex-1 flex flex-col justify-end">
              <h3 className="text-2xl font-medium text-white mb-3 tracking-wide">Hissiy balans</h3>
              <p className="text-white/60 font-light leading-relaxed text-base">
                Stress va xavotirni yengish uchun maxsus nafas mashqlari qachonki kerak bo'lsa darhol yoningizda.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="md:col-span-2 glass-pill p-8 md:p-10 rounded-3xl flex flex-col justify-between group overflow-hidden relative min-h-[300px] bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-500">
              <Sparkles className="w-6 h-6 text-white/80 group-hover:text-purple-300 transition-colors" />
            </div>
            <div className="relative z-10 flex-1 flex flex-col justify-end">
              <h3 className="text-2xl font-medium text-white mb-3 tracking-wide">Shaxsiy rivojlanish</h3>
              <p className="text-white/60 font-light leading-relaxed max-w-md text-base">
                Kundalik holatingizni kuzatib boring, yangi maqsadlar qilib o'zingizning eng yaxshi versiyangizga aylaning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
