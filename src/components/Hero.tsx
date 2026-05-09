import { useState } from "react";
import { motion } from "motion/react";
import { CrossfadeVideo } from "./CrossfadeVideo";

export function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Xatolik");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden select-none">
      {/* Seamless Continuous Background Video */}
      <CrossfadeVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_30c6yRkxUog0TZ5432rCR7HN4Pe/hf_20260427_035806_c891b56e-6593-4352-91f8-da2f4a240dd6.mp4" />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.05)_0%,transparent_60%)] z-10"></div>
      <div className="noise-overlay z-20"></div>

      {/* UI Layer */}
      <div className="relative z-30 h-full flex flex-col justify-center px-6 md:px-12 pt-32 pb-8">
        

        {/* Main Hero */}
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10 flex-1 justify-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="glass-pill px-4 py-2 rounded-full flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border border-white/20 bg-zinc-800 flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="Avatar"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              ))}
            </div>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-white/80">
              Kutish ro'yxatida allaqachon 5,732 ta foydalanuvchi bor!
            </span>
          </motion.div>

          {/* Headlines */}
          <motion.div variants={itemVariants} className="space-y-0">
            <span className="hero-title-line font-semibold text-[clamp(2.1rem,5vw,6rem)]">
              O'zligingizni toping.
            </span>
            <span className="hero-title-line font-extralight text-white/80 text-[clamp(2.1rem,5vw,6rem)]">
              Hammasini o'zgartiring.
            </span>
          </motion.div>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl text-lg text-white/70 font-light leading-relaxed tracking-wide px-4"
          >
            Chuqurroq nafas oling, yengilroq his qiling va ongliroq yashang. Balans, xotirjamlik va ichki kuch yaratishingizga yordam beruvchi boshqariladigan meditatsiyalar, kundalik amaliyotlar va vositalar — istalgan vaqtda, istalgan joyda.
          </motion.p>

          {/* Opt-in Form */}
          <motion.div variants={itemVariants} className="w-full max-w-lg glass-pill p-1.5 rounded-full flex flex-col sm:flex-row items-center shadow-2xl transition-all hover:bg-white/10">
            {status === "success" ? (
              <div className="w-full text-center px-6 py-3 text-white font-medium flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Rahmat! Siz kutish ro'yxatiga qo'shildingiz.
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="flex w-full items-center"
              >
                <input
                  type="email"
                  placeholder="Elektron pochtangizni kiriting"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="flex-1 bg-transparent border-none px-6 py-3 sm:py-0 text-white placeholder:text-white/40 text-sm font-light focus:outline-none focus:ring-0 disabled:opacity-50"
                />
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-white text-black px-6 py-3 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg active:scale-95 w-full sm:w-auto mt-2 sm:mt-0 disabled:opacity-50"
                >
                  {status === "loading" ? "Yuborilmoqda..." : "Kutish ro'yxatiga qo'shilish"}
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </button>
              </form>
            )}
          </motion.div>
          {status === "error" && (
            <div className="text-red-400 text-sm mt-3 font-medium">Xatolik yuz berdi. Iltimos qayta urinib ko'ring.</div>
          )}
        </motion.main>

        {/* Footer Strip */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-full flex flex-col items-center gap-4 hidden sm:flex"
        >
          <div className="w-full h-[1px] bg-white/10 mb-2"></div>
          <p className="max-w-3xl text-center text-xs text-white/50 leading-relaxed font-light px-4">
            Biz onglilik majburiy emas, tabiiy bo'lishi kerakligiga ishonamiz. Sekinlashish, kuch yig'ish va o'zingiz bilan qayta bog'lanishingizga yordam berish uchun biz diqqat bilan ishlab chiqqan g'oyalar, xususiyatlar va kichik rituallarni kashf eting — istalgan vaqtda, istalgan joyda.
          </p>
          <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) }} className="text-xs font-semibold tracking-widest uppercase border-b border-white/30 pb-0.5 hover:border-white transition-colors cursor-pointer">
            Batafsil ma'lumot
          </a>
        </motion.footer>

      </div>
    </div>
  );
}
