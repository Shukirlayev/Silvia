import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      title: "Ilovani o'rnating",
      desc: "Kutish ro'yxatiga qo'shiling va eng birinchilar qatorida eksklyuziv tarzda dasturdan foydalanish imkonini qo'lga kiriting."
    },
    {
      title: "Maqsadingizni tanlang",
      desc: "Uyqu sifatini yaxshilash, diqqatni jamlash yoki stressdan xalos bo'lish – qanday natija xohlashingizni o'zingiz hal qilasiz."
    },
    {
      title: "O'zgarishni his qiling",
      desc: "Kuniga atigi 10 daqiqa yotganingizda yoki yo'lda ketayotganingizda ajratib, ichki xotirjamlik hamda mustahkam asablarga ega bo'ling."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 bg-[#050505] relative z-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-white/[0.04] via-[#050505]/20 to-[#050505] z-0"></div>
      <div className="noise-overlay z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Kichik lahzalar, <br/>
              <span className="font-semibold text-white/90">ulkan marralar.</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-md">
              Ajoyib natijalarga erishish uchun soatlab vaqt kerak emas.
              Bizning premium uskunalarimiz orqali har bir lahza sifatli va natijali o'tadi.
            </p>
          </motion.div>

          <div className="flex-1 space-y-12 w-full">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 relative"
              >
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-[-3rem] w-px bg-gradient-to-b from-white/20 to-transparent"></div>
                )}
                <div className="w-12 h-12 rounded-full glass-pill border border-white/20 flex items-center justify-center shrink-0 z-10 text-white font-medium tracking-widest text-sm shadow-lg tracking-widest">
                  0{index + 1}
                </div>
                <div className="space-y-3 pt-2">
                  <h3 className="text-xl font-medium text-white tracking-wide">{step.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
