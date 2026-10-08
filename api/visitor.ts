export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const botToken = (process.env.TELEGRAM_BOT_TOKEN ?? '').trim()
    const chatId = (process.env.TELEGRAM_CHAT_ID ?? '').trim()

    console.log('Telegram config:', {
      hasBotToken: !!botToken,
      hasChatId: !!chatId,
    })

    const missingEnvVars = [
      !botToken ? 'TELEGRAM_BOT_TOKEN' : null,
      !chatId ? 'TELEGRAM_CHAT_ID' : null,
    ].filter(Boolean) as string[]

    if (missingEnvVars.length > 0) {
      return res.status(500).json({
        message:
          'Telegram environment variables are missing. Add TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in your Vercel project settings.',
        missing: missingEnvVars,
      })
    }

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: "🚀 Test: quelqu'un vient de visiter mon portfolio !",
      }),
    })

    const telegramData = await telegramResponse.json()

    console.log('Telegram response:', telegramData)

    if (!telegramResponse.ok) {
      return res.status(500).json({
        message: 'Telegram error',
        telegram: telegramData,
      })
    }

    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    console.error('API ERROR:', error)

    return res.status(500).json({
      message: 'Server error',
    })
  }
}
