import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Xatolik yuz berdi");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-6 bg-[#030303] relative z-20 overflow-hidden border-t border-white/[0.02]">
      {/* Background gradients & Abstract 3D-like Orbs */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="noise-overlay z-10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Copy & Visuals */}
          <div className="lg:w-1/2 flex flex-col justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Fikr-mulohazangiz <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">biz uchun muhim.</span>
              </h2>
              <p className="text-white/60 text-lg sm:text-xl font-light leading-relaxed max-w-lg mb-10">
                Savollaringiz bormi yoki ilovamizni yanada yaxshilash uchun biron taklifingiz bormi? Har bir xabarni diqqat bilan o'qiymiz.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                    <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/40 mb-0.5">Javob vaqti</div>
                    <div className="text-sm text-white/90 font-medium">24 soat ichida</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-1/2 w-full max-w-xl mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-pill p-8 sm:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none"></div>
              
              {status === "success" ? (
                <div className="text-center py-12 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-8 border border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-medium text-white mb-4">Xabaringiz <br/> qabul qilindi</h3>
                  <p className="text-white/60 text-lg font-light max-w-sm mx-auto">E'tiboringiz va vaqtingiz uchun tashakkur. Tez orada siz bilan bog'lanamiz!</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-10 px-8 py-3.5 rounded-full bg-black border border-white/20 hover:bg-white/10 text-white font-medium transition-all shadow-lg hover:shadow-white/10"
                  >
                    Yangi xabar yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <label htmlFor="name" className="text-white/70 text-[13px] uppercase tracking-wider font-medium ml-1">Ism va Familiya</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        placeholder="Ismingiz va familiyangiz"
                        className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 text-[16px] sm:text-sm font-light focus:outline-none focus:ring-0 focus:border-white/30 hover:border-white/20 transition-all disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label htmlFor="email" className="text-white/70 text-[13px] uppercase tracking-wider font-medium ml-1">Elektron pochta</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        placeholder="Elektron pochtangiz"
                        className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 text-[16px] sm:text-sm font-light focus:outline-none focus:ring-0 focus:border-white/30 hover:border-white/20 transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    <label htmlFor="message" className="text-white/70 text-[13px] uppercase tracking-wider font-medium ml-1">Xabar yoki taklifingiz</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="Xabaringizni bu yerga yozing..."
                      rows={5}
                      className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 text-[16px] sm:text-sm font-light focus:outline-none focus:ring-0 focus:border-white/30 hover:border-white/20 transition-all disabled:opacity-50 resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="text-red-400 text-sm p-4 bg-red-400/10 rounded-2xl border border-red-400/20">
                      {errorMessage}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full bg-white text-black px-6 py-[18px] rounded-full flex items-center justify-center gap-3 text-sm font-semibold hover:bg-gray-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-[0.98] disabled:opacity-70 group mt-2"
                  >
                    {status === "loading" ? "Yuborilmoqda..." : "Xabarni yuborish"}
                    {(status === "idle" || status === "error") && (
                      <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
