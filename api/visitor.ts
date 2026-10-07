export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return res.status(500).json({
        message: "Telegram variables are missing",
      });
    }

    const message = `🚀 Nouvelle visite sur ton portfolio !

🌐 Site: ${req.headers.referer || "Inconnu"}
📱 User-Agent: ${req.headers["user-agent"] || "Inconnu"}
🕐 Date: ${new Date().toLocaleString("fr-FR", {
      timeZone: "Africa/Casablanca",
    })}`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    if (!telegramResponse.ok) {
      return res.status(500).json({
        message: "Telegram notification failed",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}
