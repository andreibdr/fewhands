import { Metadata } from "next";
import Link from "next/link";
import { Layout, ShoppingBag, Cpu, Zap, Shield, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Создание сайтов на Next.js | Лендинги, каталоги и корпоративные платформы — Few Hands",
  description:
    "Профессиональная веб-разработка на Next.js 14: высокая скорость загрузки (100/100 PageSpeed), чистый код, адаптивный дизайн и максимальная конверсия в заявки.",
};

export default function DevelopmentPage() {
  const services = [
    {
      icon: Layout,
      title: "Продающие лендинги",
      desc: "Идеально выверенная структура блоков, акцент на УТП, триггеры доверия и мгновенная отправка лидов на почту и в CRM.",
      specs: ["Загрузка < 0.8 сек", "Идеальный мобильный UX", "A/B тестирование"],
    },
    {
      icon: ShoppingBag,
      title: "Каталоги и витрины",
      desc: "Быстрые интернет-магазины без тяжелых неповоротливых CMS. Мгновенная фильтрация и покупка в 1 клик.",
      specs: ["Поиск без перезагрузки", "Любые эквайринги", "Оптимизация под SEO"],
    },
    {
      icon: Cpu,
      title: "Корпоративные порталы",
      desc: "Представительские сайты для международных и технологических брендов. Высочайший инженерный уровень и безопасность.",
      specs: ["Мультиязычность (i18n)", "Edge CDN доставка", "Чистый TypeScript"],
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
          <span className="text-sky-400">Разработка</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Кастомная веб-инженерия</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Создание сайтов на современном стеке Next.js
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Разрабатываем сайты с чистого листа: от концепции и вёрстки до интеграции форм и выкатки на глобальный Edge CDN. Никаких шаблонных компромиссов — только чистый код, безопасность и максимальная конверсия.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all"
            >
              <span>Рассчитать стоимость сайта</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 hover:text-white font-semibold text-sm transition-all"
            >
              <span>Смотреть примеры работ</span>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl border border-slate-800 bg-slate-900/70 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-2.5 border-t border-slate-800 pt-5">
                    {item.specs.map((spec, si) => (
                      <li key={si} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Next.js & Edge Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/50">
          <h2 className="text-2xl font-bold text-white mb-6">Почему бизнес выбирает Next.js вместо устаревших CMS</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-2xl font-black text-sky-400">100/100</div>
              <h4 className="font-bold text-white mt-1">Google PageSpeed</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Поисковые роботы ставят быстрые сайты на первые позиции, а пользователи не закрывают страницу из-за долгой загрузки.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-2xl font-black text-emerald-400">0 $</div>
              <h4 className="font-bold text-white mt-1">За хостинг и плагины</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Сайты работают на бесплатной инфраструктуре Vercel/Cloudflare Edge, не требуя аренды серверов и платных модулей.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-2xl font-black text-violet-400">0 рисков</div>
              <h4 className="font-bold text-white mt-1">Безупречная безопасность</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Нет открытых баз данных и уязвимых PHP-скриптов. Сайт невозможно взломать через классические инъекции.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
