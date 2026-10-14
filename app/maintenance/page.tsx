import { Metadata } from "next";
import Link from "next/link";
import { Headphones, GraduationCap, Clock, ShieldCheck, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Абонентская техподдержка и обучение персонала — Few Hands",
  description:
    "Ежемесячное техническое сопровождение сайтов на абонплате: обучение контент-менеджеров, регулярные доработки, мониторинг 24/7 и медиа-поддержка от Few Hands.",
};

export default function MaintenancePage() {
  const plans = [
    {
      name: "Старт (Контроль & Бэкапы)",
      price: "$190",
      period: "/ месяц",
      desc: "Для сайтов-визиток и небольших проектов, которым нужен постоянный контроль без сюрпризов.",
      features: [
        "Мониторинг доступности сайта 24/7 (Uptime)",
        "Регулярные резервные копии и аудит безопасности",
        "Обновление пакетов и серверных зависимостей",
        "До 3 часов мелких контентных правок в месяц",
        "Поддержка в Telegram с ответом до 4 часов",
      ],
      popular: false,
    },
    {
      name: "Бизнес Retainer",
      price: "$450",
      period: "/ месяц",
      desc: "Оптимально для перенесённых сайтов и растущего бизнеса, где постоянно обновляется контент и витрина.",
      features: [
        "Всё из тарифа «Старт»",
        "Обучение и онбординг сотрудников (видео-инструкции)",
        "До 10 часов верстки, доработок и новых блоков",
        "Публикация контента, акций, товаров и баннеров",
        "Приоритетный саппорт в Telegram (ответ до 1 часа)",
        "Контроль скорости Google PageSpeed (держим 95-100)",
      ],
      popular: true,
    },
    {
      name: "Pro & Media Retainer",
      price: "$950",
      period: "/ месяц",
      desc: "Комплексное ведение сайта и видеопродакшна: регулярные доработки, видеомонтаж и AI-аватары.",
      features: [
        "Всё из тарифа «Бизнес»",
        "До 25 часов технической разработки и доработок",
        "Монтаж 4 YouTube-выпусков или 10 Shorts/Reels в месяц",
        "Генерация и интеграция AI-видеоаватаров под акции",
        "Персональный менеджер и еженедельный созвон",
        "Непрерывный A/B аудит конверсий и воронок",
      ],
      popular: false,
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Главная
          </Link>
          <span>/</span>
          <span className="text-sky-400">Поддержка & Обучение</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
            <Headphones className="w-3.5 h-3.5" />
            <span>Ежемесячный Retainer</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Техподдержка сайтов и обучение персонала по абонплате
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            После миграции или разработки сайта самое важное — не бросать бизнес на произвол судьбы. Few Hands берёт на себя обучение вашей команды, регулярное обновление контента, защиту и доработку новых фич по фиксированной ежемесячной подписке.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/60">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white">Обучение персонала</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Записываем наглядные видео-инструкции для ваших контент-менеджеров и проводим Zoom-онбординг.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/60">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white">Быстрые доработки</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Нужно добавить новый блок, форму, акционный баннер или страницу? Вносим правки в течение 24 часов.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/60">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white">24/7 Мониторинг</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Автоматический мониторинг доступности и скорости, еженедельные бэкапы и обновление системных модулей.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/60">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white">Прямой чат в Telegram</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Выделенный канал связи без тикетов и бюрократии. Задачи ставятся голосовыми или текстом.
            </p>
          </div>
        </div>

        {/* Retainer Pricing Cards */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Тарифные планы сопровождения
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Прозрачные условия без скрытых доплат. Возможность менять тариф в зависимости от нагрузки.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                  plan.popular
                    ? "border-sky-500 bg-slate-900 shadow-xl shadow-sky-500/10 ring-1 ring-sky-500"
                    : "border-slate-800 bg-slate-900/60"
                }`}
              >
                <div>
                  {plan.popular && (
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-400 font-bold mb-4 inline-block">
                      Рекомендуемый выбор
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-sm text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                    {plan.desc}
                  </p>

                  <ul className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6">
                  <a
                    href={`https://t.me/Strashilamudry?text=${encodeURIComponent(
                      `Привет! Интересует тариф техподдержки Few Hands: ${plan.name} (${plan.price}). Расскажите подробнее!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition ${
                      plan.popular
                        ? "bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-500/25"
                        : "border border-slate-700 bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700"
                    }`}
                  >
                    <span>Выбрать тариф</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
