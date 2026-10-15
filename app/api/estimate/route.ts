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
    const { calculator, result, clientName, contact } = body;

    const dateStr = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      dateStyle: "medium",
      timeStyle: "short",
    });

    console.log("New FewHands Estimate Request:", {
      timestamp: new Date().toISOString(),
      calculator,
      result,
      clientName,
      contact,
    });

    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim().replace(/^["']|["']$/g, "");
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim().replace(/^["']|["']$/g, "");

    if (botToken && chatId) {
      let detailsHtml = "";
      let detailsPlain = "";

      if (calculator === "migration") {
        detailsHtml = [
          `📦 <b>Платформа:</b> ${escapeHtml(result?.platform || "-")}`,
          `📊 <b>Масштаб:</b> ${escapeHtml(result?.scale || "-")}`,
          `🛡 <b>Поддержка:</b> ${escapeHtml(result?.support || "-")}`,
          `💰 <b>Оценка:</b> <b>$${result?.priceMin || 0} - $${result?.priceMax || 0}</b>`,
          `⏱ <b>Сроки:</b> ${result?.daysMin || 0}-${result?.daysMax || 0} раб. дней`,
        ].join("\n");

        detailsPlain = `Платформа: ${result?.platform || "-"}\nМасштаб: ${result?.scale || "-"}\nПоддержка: ${result?.support || "-"}\nОценка: $${result?.priceMin || 0} - $${result?.priceMax || 0}\nСроки: ${result?.daysMin || 0}-${result?.daysMax || 0} раб. дней`;
      } else if (calculator === "development") {
        detailsHtml = [
          `🛠 <b>Тип проекта:</b> ${escapeHtml(result?.type || "-")}`,
          `🎨 <b>Дизайн:</b> ${escapeHtml(result?.design || "-")}`,
          `🌐 <b>Мультиязычность:</b> ${result?.multiLang ? "Да" : "Нет"}`,
          `💳 <b>Эквайринг:</b> ${result?.payment ? "Да" : "Нет"}`,
          `💰 <b>Оценка:</b> <b>$${result?.priceMin || 0} - $${result?.priceMax || 0}</b>`,
          `⏱ <b>Сроки:</b> ${result?.daysMin || 0}-${result?.daysMax || 0} раб. дней`,
        ].join("\n");

        detailsPlain = `Тип проекта: ${result?.type || "-"}\nДизайн: ${result?.design || "-"}\nМультиязычность: ${result?.multiLang ? "Да" : "Нет"}\nЭквайринг: ${result?.payment ? "Да" : "Нет"}\nОценка: $${result?.priceMin || 0} - $${result?.priceMax || 0}\nСроки: ${result?.daysMin || 0}-${result?.daysMax || 0} раб. дней`;
      } else {
        detailsHtml = [
          `🎬 <b>Формат видео:</b> ${escapeHtml(result?.format || "-")}`,
          `📦 <b>Объем:</b> ${escapeHtml(result?.count || "-")}`,
          `🌍 <b>Языки:</b> ${escapeHtml(result?.languages || "-")}`,
          `✍ <b>Сценарий:</b> ${escapeHtml(result?.script || "-")}`,
          `💰 <b>Оценка:</b> <b>$${result?.priceMin || 0} - $${result?.priceMax || 0}</b>`,
          `⏱ <b>Сроки:</b> ${result?.daysMin || 0}-${result?.daysMax || 0} раб. дней`,
        ].join("\n");

        detailsPlain = `Формат видео: ${result?.format || "-"}\nОбъем: ${result?.count || "-"}\nЯзыки: ${result?.languages || "-"}\nСценарий: ${result?.script || "-"}\nОценка: $${result?.priceMin || 0} - $${result?.priceMax || 0}\nСроки: ${result?.daysMin || 0}-${result?.daysMax || 0} раб. дней`;
      }

      const htmlText = [
        `📊 <b>Новый расчет сметы с сайта fewhands.com</b>`,
        ``,
        `👤 <b>Имя:</b> ${escapeHtml(clientName || "Не указано")}`,
        `📞 <b>Контакт:</b> <code>${escapeHtml(contact || "Не указан")}</code>`,
        `🕒 <b>Время:</b> ${dateStr}`,
        ``,
        `⚙️ <b>Параметры сметы (${calculator}):</b>`,
        detailsHtml,
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

      // Fallback if HTML fails
      if (!tgRes.ok) {
        const tgErr = await tgRes.text();
        console.error("Telegram HTML estimate dispatch failed, trying plain text fallback:", tgErr);

        const plainText = `📊 Новый расчет сметы с сайта fewhands.com\n\nИмя: ${clientName || "Не указано"}\nКонтакт: ${contact || "Не указан"}\nВремя: ${dateStr}\n\nПараметры (${calculator}):\n${detailsPlain}`;

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

    return NextResponse.json({ success: true, message: "Estimate received" });
  } catch (error) {
    console.error("Error processing estimate submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process estimate" },
      { status: 500 }
    );
  }
}
