import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, message } = body;

    // Log the inquiry for server logs / diagnostics
    console.log("New FewHands Lead Received:", {
      timestamp: new Date().toISOString(),
      name,
      contact,
      message,
    });

    // If Telegram bot credentials are set in environment variables, send notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const text = `🚀 *Новая заявка с сайта FewHands!*\n\n*Имя:* ${name}\n*Контакт:* ${contact}\n*Задача:* ${message}`;
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      });
    }

    return NextResponse.json({ success: true, message: "Inquiry received" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process message" },
      { status: 500 }
    );
  }
}
