import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Repeat,
  Headphones,
  Sparkles,
  ShieldCheck,
  Globe,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const featuredCases = [
    {
      title: "Elena Stazhkova",
      tag: "Real Estate Broker",
      image: "/stazhkova.webp",
      desc: "Персональный сайт и портфолио агента по элитной недвижимости.",
      url: "https://stazhkova.com",
    },
    {
      title: "Impact Windows & Doors",
      tag: "USA / Florida",
      image: "/windoor.webp",
      desc: "Корпоративный сайт производителя ударопрочных окон и дверей.",
      url: "https://iwdsolutions.com",
    },
    {
      title: "MIPT Global",
      tag: "Alumni Network",
      image: "/mipt.webp",
      desc: "Международный портал сообщества выпускников МФТИ.",
      url: "https://miptglobal.com",
    },
  ];

  return (
    <div>
      {/* 1. Hero Portal Header */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-24 sm:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>Веб-инженерия · Миграция CMS · AI Видеопродакшн</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] max-w-4xl mx-auto">
            Освобождаем сайты от{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              устаревших CMS
            </span>{" "}
            и создаём конверсионные веб-продукты
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Инженерная миграция с WordPress, Tilda, Webflow и Битрикс на чистый Next.js совместно с партнёром <strong>GoMVP</strong>. Обучение персонала, ежемесячная поддержка по абонплате и фотореалистичные AI-аватары.
          </p>

          {/* Quick Action CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Оценить стоимость проекта</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/migrate"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 hover:text-white font-bold text-sm sm:text-base transition-all"
            >
              <span>Хаб миграции CMS</span>
            </Link>
          </div>

          {/* Key Trust Metrics */}
          <div className="mt-14 pt-10 border-t border-slate-800/80 max-w-4xl mx-auto grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">16+ лет</div>
              <div className="text-xs text-slate-400 mt-1">Опыт разработки (с 2008 г.)</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">50+</div>
              <div className="text-xs text-slate-400 mt-1">Проектов в США, ЕС и СНГ</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-sky-400">100/100</div>
              <div className="text-xs text-slate-400 mt-1">Google PageSpeed рейтинг</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Four Doors Funnel (4 направления) */}
      <section className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Выберите интересующее направление
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Каждое направление решает конкретную бизнес-задачу без лишних компромиссов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Door 1: Migration */}
            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/80 hover:border-sky-500/50 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                    <Repeat className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 font-bold">
                    GoMVP Партнёрство
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  Миграция с CMS на Next.js
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Перенос сайтов с <strong>WordPress, Tilda, Webflow, Битрикс, InSales</strong> на чистый современный код. Ускорение в 5 раз, избавление от уязвимостей плагинов и сохранение 100% SEO-позиций.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href="/migrate"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300"
                >
                  <span>Перейти в хаб миграции</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] text-slate-500 font-mono">9 платформ</span>
              </div>
            </div>

            {/* Door 2: Custom Development */}
            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/80 hover:border-indigo-500/50 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold">
                    Next.js 14
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Создание сайтов с нуля
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Продающие лендинги, интернет-витрины и представительские корпоративные платформы. Адаптивная вёрстка под все устройства, интеграция Telegram/CRM и идеальный мобильный отклик.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href="/development"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300"
                >
                  <span>Подробнее о разработке</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] text-slate-500 font-mono">100% PageSpeed</span>
              </div>
            </div>

            {/* Door 3: Retainer Maintenance */}
            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                    Retainer от $190/мес
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Поддержка & Обучение по абонплате
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Обучаем ваших сотрудников управлению сайтом (видеоуроки, Zoom-онбординг), регулярно обновляем контент, мониторим 24/7 и внедряем новые фичи по фиксированной ежемесячной подписке.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href="/maintenance"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Тарифные планы поддержки</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] text-slate-500 font-mono">Саппорт 24/7</span>
              </div>
            </div>

            {/* Door 4: AI Avatars & Video */}
            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/80 hover:border-violet-500/50 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 font-bold">
                    Neural Tech
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                  AI-Видеоаватары & YouTube
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Говорящие цифровые персонажи для сайтов и рекламы (9:16 Shorts) на 30+ языках мира без студии и актеров. Профессиональный монтаж и оформление YouTube-выпусков.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href="/ai-video"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 hover:text-violet-300"
                >
                  <span>Смотреть примеры аватаров</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] text-slate-500 font-mono">Shorts & 16:9</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Featured Works Preview */}
      <section className="py-16 sm:py-24 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                Избранные проекты
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                Кейсы клиентов Few Hands
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 self-start sm:self-end"
            >
              <span>Смотреть всё портфолио</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {featuredCases.map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-slate-700 transition-all hover:-translate-y-1 block shadow-md"
              >
                <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-mono text-sky-400 font-semibold">{c.tag}</span>
                  <h3 className="text-lg font-bold text-white mt-1 flex items-center justify-between">
                    <span>{c.title}</span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400" />
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Final CTA Box */}
      <section className="py-16 border-t border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Готовы модернизировать ваш сайт или запустить новый?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Оставьте заявку на бесплатный аудит текущей платформы или напишите нам в Telegram для быстрого старта.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/estimate"
              className="px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 transition-all"
            >
              Калькулятор стоимости
            </Link>
            <a
              href="https://t.me/Strashilamudry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 hover:text-white font-bold text-sm sm:text-base transition-all"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
