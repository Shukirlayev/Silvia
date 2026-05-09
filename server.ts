import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import compression from "compression";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add gzip compression for all responses
  app.use(compression());

  // URL-encoded and JSON body parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Waitlist endpoint
  app.post("/api/waitlist", async (req, res) => {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Elektron pochta manzili kiritilishi shart" });
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.warn("Missing Telegram Token or Chat ID in environment variables.");
      return res.status(500).json({ error: "Telegram bot sozlanmagan. Iltimos, server sozlamalarida bot qismini to'g'irlang." });
    }

    try {
      const text = `🎉 Yangi foydalanuvchi Silvia kutish ro'yxatiga qo'shildi!\n\n📧 Email: ${email}`;
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to send message: ${await response.text()}`);
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Telegram API Exception:", error);
      res.status(500).json({ error: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring." });
    }
  });

  // Contact endpoint
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Barcha maydonlarni to'ldirish shart" });
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.warn("Missing Telegram Token or Chat ID in environment variables.");
      return res.status(500).json({ error: "Telegram bot sozlanmagan. Iltimos, server sozlamalarida bot qismini to'g'irlang." });
    }

    try {
      const text = `✉️ Yangi xabar keldi (Silvia saytidan)!\n\n👤 Ism: ${name}\n📧 Email: ${email}\n📝 Xabar/Taklif: ${message}`;
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to send message: ${await response.text()}`);
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Telegram API Exception:", error);
      res.status(500).json({ error: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
