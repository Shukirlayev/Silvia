import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Silvia qachon ishga tushadi?",
    answer: "Biz aylanma sinovlarni boshladik. Kutish ro'yxatiga yozilganlar birinchilardan bo'lib mualliflik imtiyozlariga ega bo'ladilar."
  },
  {
    question: "Meditatsiya amaliyotlari bepulmi?",
    answer: "Ha, asosiy amaliyotlar doimo bepul bo'ladi. Hozirda qo'shimcha imtiyozli premium xususiyatlar ustida ham ishlayapmiz."
  },
  {
    question: "Silvia boshqa ilovalardan nimasi bilan farq qiladi?",
    answer: "Silvia nafaqat meditatsiya, balki shaxsiy psixik holatingizni tahlil qilib, kunlik reja tuzuvchi vositalarni ham o'z ichiga oladi."
  },
  {
    question: "Kutish ro'yxatiga qo'shilganimdan so'ng nima bo'ladi?",
    answer: "Sizga eslatmalar va muhim yangiliklar haqida qisqa elektron xatlar yuborib turamiz. Barchasi tayyor bo'lganda birinchilardan bo'lib xabardor bo'lasiz."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-40 px-6 bg-[#030303] relative z-20 overflow-hidden border-t border-white/[0.02]">
      {/* Background gradients & Elements */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="noise-overlay z-10 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column (Sticky Title) */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Savollaringiz bormi?</h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                Biz eng ko'p berilgan savollarga javob tayyorladik. Agar boshqa savollaringiz bo'lsa, xursandchilik bilan javob beramiz.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-white/80 hover:text-white pb-1 border-b border-white/20 hover:border-white transition-all text-sm font-medium w-fit">
                Biz bilan bog'lanish
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>

          {/* Right Column (Accordions) */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className="glass-pill border border-white/[0.05] rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-300 bg-white/[0.01] hover:bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between p-6 sm:p-8 text-left gap-6 group"
                >
                  <span className="text-white font-medium text-lg sm:text-xl md:text-2xl pt-1 group-hover:text-white/90 transition-colors">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${openIndex === index ? "rotate-180 bg-white border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] text-black" : "bg-white/5 border-white/10 group-hover:border-white/30 group-hover:bg-white/10 text-white/60 group-hover:text-white"}`}>
                    <svg 
                      className="w-5 h-5 transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-white/50 text-base sm:text-lg font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
