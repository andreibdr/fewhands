import { NextResponse } from "next/server";

function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, message } = body;

    const dateStr = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      dateStyle: "medium",
      timeStyle: "short",
    });

    console.log("New FewHands Lead Received:", {
      timestamp: new Date().toISOString(),
      name,
      contact,
      message,
    });

    // Sanitize credentials from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim().replace(/^["']|["']$/g, "");
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim().replace(/^["']|["']$/g, "");

    if (botToken && chatId) {
      const htmlText = [
        `⚡ <b>Новая заявка с сайта fewhands.com</b>`,
        ``,
        `👤 <b>Имя:</b> ${escapeHtml(name || "Не указано")}`,
        `📞 <b>Контакт:</b> <code>${escapeHtml(contact || "Не указан")}</code>`,
        `🕒 <b>Время:</b> ${dateStr}`,
        ``,
        `📝 <b>Детали проекта:</b>\n${escapeHtml(message || "Без комментария")}`,
      ].join("\n");

      const tgRes = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: htmlText,
            parse_mode: "HTML",
          }),
        }
      );

      // Safe fallback to plain text if HTML parsing fails on Telegram side
      if (!tgRes.ok) {
        const tgErr = await tgRes.text();
        console.error("Telegram HTML dispatch failed, trying plain text fallback:", tgErr);

        const plainText = `⚡ Новая заявка с сайта fewhands.com\n\nИмя: ${name || "Не указано"}\nКонтакт: ${contact || "Не указан"}\nВремя: ${dateStr}\n\nДетали проекта:\n${message || "Без комментария"}`;

        await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: plainText,
            }),
          }
        );
      }
    } else {
      console.warn("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing on the server.");
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
