import { NextResponse } from "next/server";
import { isValidEmailOrPhone, isLikelyBotSubmission } from "@/lib/validation";

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
    const { calculator, result, clientName, contact, lang, honeypot, formLoadedAt } = body;

    // Multi-layer anti-bot validation (honeypot, sub-second submission, dot-trick alias spam, gibberish)
    const botCheck = isLikelyBotSubmission({
      name: clientName,
      contact,
      honeypot,
      formLoadedAt,
    });

    if (botCheck.isBot) {
      console.warn("Automated bot estimate submission suppressed:", {
        reason: botCheck.reason,
        clientName,
        contact,
        timestamp: new Date().toISOString(),
      });
      // Return 200 OK so bots think submission was delivered and stop retrying
      return NextResponse.json({ success: true, message: "Estimate received" });
    }

    const safeClientName = typeof clientName === "string" ? clientName.slice(0, 150) : "";
    const safeContact = typeof contact === "string" ? contact.slice(0, 150) : "";

    if (!isValidEmailOrPhone(safeContact)) {
      return NextResponse.json(
        { error: "Invalid contact: please provide a valid email or phone number" },
        { status: 400 }
      );
    }

    const dateStr = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      dateStyle: "medium",
      timeStyle: "short",
    });

    console.log("New FewHands Estimate Request:", {
      timestamp: new Date().toISOString(),
      calculator,
      result,
      clientName: safeClientName,
      contact: safeContact,
      lang,
    });

    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim().replace(/^["']|["']$/g, "");
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim().replace(/^["']|["']$/g, "");

    if (botToken && chatId) {
      let detailsHtml = "";
      let detailsPlain = "";

      const price = result?.price || result?.priceRu || result?.priceEn || "-";
      const timeline = result?.timeline || result?.timeRu || result?.timeEn || "-";
      const summary = result?.detailsRu || result?.detailsEn || result?.detailsSr || "-";

      let categoryName = "Калькулятор сметы";

      if (calculator === "migration") {
        categoryName = "Миграция и поддержка";
        const platform = result?.platform || "-";
        const scale = result?.scale || "-";
        const support = result?.support || "-";

        detailsHtml = [
          `📦 <b>Платформа:</b> ${escapeHtml(platform)}`,
          `📊 <b>Масштаб:</b> ${escapeHtml(scale)}`,
          `🛡 <b>Поддержка:</b> ${escapeHtml(support)}`,
          `💰 <b>Оценка:</b> <b>${escapeHtml(price)}</b>`,
          `⏱ <b>Сроки:</b> ${escapeHtml(timeline)}`,
          `📝 <b>Конфигурация:</b> ${escapeHtml(summary)}`,
        ].join("\n");

        detailsPlain = `Платформа: ${platform}\nМасштаб: ${scale}\nПоддержка: ${support}\nОценка: ${price}\nСроки: ${timeline}\nКонфигурация: ${summary}`;
      } else if (calculator === "development") {
        categoryName = "Кастомная веб-разработка";
        const type = result?.type || "-";
        const design = result?.design || "-";
        const multiLang = typeof result?.multiLang === "boolean" ? (result.multiLang ? "Да" : "Нет") : (result?.multiLang || "Нет");
        const payment = typeof result?.payment === "boolean" ? (result.payment ? "Да" : "Нет") : (result?.payment || "Нет");

        detailsHtml = [
          `🛠 <b>Тип проекта:</b> ${escapeHtml(type)}`,
          `🎨 <b>Дизайн:</b> ${escapeHtml(design)}`,
          `🌐 <b>Мультиязычность:</b> ${escapeHtml(multiLang)}`,
          `💳 <b>Эквайринг:</b> ${escapeHtml(payment)}`,
          `💰 <b>Оценка:</b> <b>${escapeHtml(price)}</b>`,
          `⏱ <b>Сроки:</b> ${escapeHtml(timeline)}`,
          `📝 <b>Конфигурация:</b> ${escapeHtml(summary)}`,
        ].join("\n");

        detailsPlain = `Тип проекта: ${type}\nДизайн: ${design}\nМультиязычность: ${multiLang}\nЭквайринг: ${payment}\nОценка: ${price}\nСроки: ${timeline}\nКонфигурация: ${summary}`;
      } else {
        categoryName = "AI Видео и YouTube продакшн";
        const format = result?.format || "-";
        const count = result?.count || "-";
        const languages = result?.languages || "-";
        const script = result?.script || "-";

        detailsHtml = [
          `🎬 <b>Формат видео:</b> ${escapeHtml(format)}`,
          `📦 <b>Объем:</b> ${escapeHtml(count)}`,
          `🌍 <b>Языки:</b> ${escapeHtml(languages)}`,
          `✍ <b>Сценарий:</b> ${escapeHtml(script)}`,
          `💰 <b>Оценка:</b> <b>${escapeHtml(price)}</b>`,
          `⏱ <b>Сроки:</b> ${escapeHtml(timeline)}`,
          `📝 <b>Конфигурация:</b> ${escapeHtml(summary)}`,
        ].join("\n");

        detailsPlain = `Формат видео: ${format}\nОбъем: ${count}\nЯзыки: ${languages}\nСценарий: ${script}\nОценка: ${price}\nСроки: ${timeline}\nКонфигурация: ${summary}`;
      }

      const htmlText = [
        `📊 <b>Новый расчет сметы с сайта fewhands.com</b>`,
        ``,
        `👤 <b>Имя:</b> ${escapeHtml(safeClientName || "Не указано")}`,
        `📞 <b>Контакт:</b> <code>${escapeHtml(safeContact || "Не указан")}</code>`,
        `🕒 <b>Время:</b> ${dateStr}`,
        `📁 <b>Направление:</b> ${escapeHtml(categoryName)}`,
        ``,
        `⚙️ <b>Параметры сметы:</b>`,
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

        const plainText = `📊 Новый расчет сметы с сайта fewhands.com\n\nИмя: ${clientName || "Не указано"}\nКонтакт: ${contact || "Не указан"}\nВремя: ${dateStr}\nНаправление: ${categoryName}\n\nПараметры сметы:\n${detailsPlain}`;

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
