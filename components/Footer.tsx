import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-white text-lg mb-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-sm">
                FH
              </div>
              <span>Few Hands</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Веб-инженерия, миграция с устаревших CMS, техническая поддержка по абонплате и AI-видеопродакшн.
            </p>
            <div className="text-xs text-slate-500">
              © 2008–{new Date().getFullYear()} Few Hands Studio.
            </div>
          </div>

          {/* Col 2: Migration Hub */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Миграция CMS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/migrate/wordpress" className="hover:text-white transition">
                  WordPress / WooCommerce
                </Link>
              </li>
              <li>
                <Link href="/migrate/tilda" className="hover:text-white transition">
                  Tilda Publishing
                </Link>
              </li>
              <li>
                <Link href="/migrate/webflow" className="hover:text-white transition">
                  Webflow
                </Link>
              </li>
              <li>
                <Link href="/migrate/bitrix" className="hover:text-white transition">
                  1C-Битрикс
                </Link>
              </li>
              <li>
                <Link href="/migrate/insales" className="hover:text-white transition">
                  InSales / OpenCart
                </Link>
              </li>
              <li>
                <Link href="/migrate" className="text-sky-400 font-semibold hover:underline">
                  Все платформы →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Услуги
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/development" className="hover:text-white transition">
                  Создание сайтов с нуля
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="hover:text-white transition">
                  Абонентская техподдержка
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="hover:text-white transition">
                  Обучение персонала
                </Link>
              </li>
              <li>
                <Link href="/ai-video" className="hover:text-white transition">
                  AI Видео-аватары (9:16)
                </Link>
              </li>
              <li>
                <Link href="/ai-video" className="hover:text-white transition">
                  Монтаж YouTube (16:9)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Partner */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Связь & Партнёр
            </h4>
            <ul className="space-y-2 text-xs mb-4">
              <li>
                <a
                  href="https://wa.me/+79611809004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  WhatsApp: +7 (961) 180-90-04
                </a>
              </li>
              <li>
                <a href="mailto:web@fewhands.com" className="hover:text-sky-400 transition">
                  web@fewhands.com
                </a>
              </li>
              <li>
                <Link href="/estimate" className="hover:text-sky-400 transition">
                  Калькулятор проекта
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Портфолио кейсов
                </Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800">
              <a
                href="https://gomvp.dev/en/migrate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400 transition"
              >
                <span>Инженерный партнёр GoMVP</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
