export default async function handler(req: any, res: any) {
  // CORS sozlamalari
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Barcha maydonlarni to'ldirish shart" });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn("Vercel'da Telegram Token yoki Chat ID topilmadi.");
    return res.status(500).json({ error: "Telegram bot sozlanmagan. Iltimos, Vercel sozlamalariga kiriting." });
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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Telegram API Exception:", error);
    return res.status(500).json({ error: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring." });
  }
}
