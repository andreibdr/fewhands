"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import {
  Layout,
  ShoppingBag,
  Cpu,
  Zap,
  Check,
  ArrowRight,
  ShieldCheck,
  Code2,
  ChevronDown,
  Layers,
  Sparkles,
  HelpCircle,
  Globe2,
} from "lucide-react";
import {
  CraftCard,
  CustomStampBadge,
  CustomPSCard,
  DoodlePointer,
} from "./HandDrawnDecorations";

export const DevelopmentView: React.FC = () => {
  const { lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: Layout,
      title: lang === "ru" ? "Продающие лендинги" : lang === "sr" ? "Konverzione landing stranice" : "High-Converting Landings",
      desc:
        lang === "ru"
          ? "Идеально выверенная структура блоков, акцент на УТП, триггеры доверия и мгновенная отправка лидов на почту и в CRM."
          : lang === "sr"
          ? "Precizno osmišljena struktura blokova, fokus na jedinstvenu ponudu (USP), elementi poverenja i trenutno prosleđivanje upita u CRM."
          : "Laser-focused narrative structure, crisp value propositions, social proof triggers, and instant CRM lead dispatch.",
      specs:
        lang === "ru"
          ? ["Загрузка < 0.8 сек", "Идеальный мобильный UX", "A/B тестирование"]
          : lang === "sr"
          ? ["Učitavanje < 0.8 sek", "Besprijekoran mobilni UX", "A/B testiranje"]
          : ["Sub-second TTFB", "Flawless mobile UX", "Conversion-focused analytics"],
    },
    {
      icon: ShoppingBag,
      title: lang === "ru" ? "Каталоги и витрины" : lang === "sr" ? "Digitalni katalozi i e-trgovina" : "E-Commerce & Digital Catalogs",
      desc:
        lang === "ru"
          ? "Быстрые интернет-магазины без тяжелых неповоротливых CMS. Мгновенная фильтрация и покупка в 1 клик."
          : lang === "sr"
          ? "Brze internet prodavnice bez preopterećenih i sporih CMS-ova. Trenutno filtriranje i kupovina u 1 kliku."
          : "Lightweight digital storefronts free from CMS bloat. Instant faceted search and streamlined one-page checkout.",
      specs:
        lang === "ru"
          ? ["Поиск без перезагрузки", "Любые эквайринги", "Оптимизация под SEO"]
          : lang === "sr"
          ? ["Pretraga bez osvežavanja", "Povezivanje svih plaćanja", "SEO optimizovano"]
          : ["Zero-reload filtering", "Custom payment gateways", "Technical SEO built-in"],
    },
    {
      icon: Cpu,
      title: lang === "ru" ? "Корпоративные порталы" : lang === "sr" ? "Korporativni portali" : "Corporate & Enterprise Hubs",
      desc:
        lang === "ru"
          ? "Представительские сайты для международных и технологических брендов. Высочайший инженерный уровень и безопасность."
          : lang === "sr"
          ? "Reprezentativni sajtovi za međunarodne i tehnološke brendove. Vrhunski nivo inženjeringa i bezbednosti."
          : "Flagship platforms for international brands, delivering technical excellence, strict compliance, and global Edge delivery.",
      specs:
        lang === "ru"
          ? ["Мультиязычность (i18n)", "Edge CDN доставка", "Чистый TypeScript"]
          : lang === "sr"
          ? ["Višejezičnost (i18n)", "Edge CDN isporuka", "Čist TypeScript"]
          : ["Full i18n localization", "Global Edge CDN routing", "Type-safe architecture"],
    },
  ];

  const devPhases = [
    {
      step: "01",
      title: lang === "ru" ? "Бизнес-анализ и проектирование" : lang === "sr" ? "Poslovna analiza i projektovanje" : "Discovery & Specification",
      desc:
        lang === "ru"
          ? "Детально изучаем продукт, целевую аудиторию и конкурентную среду. Формируем подробное ТЗ, информационную архитектуру и карту экранов."
          : lang === "sr"
          ? "Detaljno analiziramo proizvod, ciljnu publiku i konkurenciju. Kreiramo detaljnu specifikaciju, informacionu arhitekturu i mapu ekrana."
          : "Deep dive into your market, buyer personas, and competitors. Developing technical specifications, site maps, and wireframe blueprints.",
    },
    {
      step: "02",
      title: lang === "ru" ? "UI/UX дизайн и прототипирование" : lang === "sr" ? "UI/UX dizajn i prototip" : "UI/UX Design & Prototyping",
      desc:
        lang === "ru"
          ? "Создаём лаконичный эстетичный интерфейс в Figma. Продумываем адаптивность под смартфоны, планшеты и десктопы, визуальную иерархию и акценты."
          : lang === "sr"
          ? "Kreiramo moderan i pregledan interfejs u Figma alatu. Razrađujemo prilagodljivost za mobilne, tablete i desktop uređaje, vizuelnu hijerarhiju i akcente."
          : "Designing pixel-perfect, high-contrast layouts in Figma. Mobile-first ergonomics, micro-interactions, and conversion-focused typography.",
    },
    {
      step: "03",
      title: lang === "ru" ? "Фронтенд-инженерия на Next.js" : lang === "sr" ? "Frontend inženjering na Next.js" : "Next.js Frontend Engineering",
      desc:
        lang === "ru"
          ? "Пишем чистый, строго типизированный код на React / Next.js и Tailwind CSS. Используем React Server Components для максимальной скорости рендеринга."
          : lang === "sr"
          ? "Pišemo čist, strogo tipiziran kod na React / Next.js i Tailwind CSS. Koristimo React Server komponente za maksimalnu brzinu renderovanja."
          : "Writing clean, type-safe code with React, Next.js App Router, and Tailwind CSS. Leveraging Server Components for instantaneous edge delivery.",
    },
    {
      step: "04",
      title: lang === "ru" ? "Интеграции, формы и безопасность" : lang === "sr" ? "Integracije, forme i zaštita" : "APIs, Forms & Hardening",
      desc:
        lang === "ru"
          ? "Подключаем приём заявок в CRM (amoCRM, Bitrix24), корпоративную почту, платежные шлюзы (Stripe, СБП) и настраиваем защиту от спама."
          : lang === "sr"
          ? "Povezujemo prijem upita u CRM sisteme, poslovnu poštu, procesore plaćanja (Stripe i lokalna rešenja) i konfigurišemo zaštitu od spama."
          : "Hooking up webhook pipelines to your CRM, corporate email routing, multi-currency payment checkouts, and zero-compromise security.",
    },
    {
      step: "05",
      title: lang === "ru" ? "SEO-оптимизация и релиз на Edge CDN" : lang === "sr" ? "Tehnički SEO i globalna Edge distribucija" : "Technical SEO & Edge Deploy",
      desc:
        lang === "ru"
          ? "Внедряем метаданные, OpenGraph, Schema.org разметку и sitemap.xml. Разворачиваем проект в глобальной сети доставки контента с PageSpeed 100/100."
          : lang === "sr"
          ? "Implementiramo metapodatke, OpenGraph, Schema.org mikrooznake i sitemap.xml. Puštamo sajt na globalnu CDN mrežu uz PageSpeed 100/100."
          : "Implementing structured JSON-LD schemas, canonical routing, and dynamic XML sitemaps. Deploying onto global Edge CDN with 100/100 Core Web Vitals.",
    },
  ];

  const comparisonPoints = [
    {
      feature: lang === "ru" ? "Время отклика первого байта (TTFB)" : lang === "sr" ? "Vreme odziva servera (TTFB)" : "Time to First Byte (TTFB)",
      nextjs: lang === "ru" ? "20–50 мс (глобальный Edge CDN)" : lang === "sr" ? "20–50 ms (globalni Edge CDN)" : "20–50ms (Global Edge CDN)",
      builders: lang === "ru" ? "400–1800 мс (ожидание сервера)" : lang === "sr" ? "400–1800 ms (čekanje servera)" : "400–1,800ms (Heavy server lag)",
    },
    {
      feature: lang === "ru" ? "Оценка Google Core Web Vitals" : lang === "sr" ? "Google Core Web Vitals ocena" : "Google Core Web Vitals",
      nextjs: lang === "ru" ? "95–100 / 100 (зелёная зона)" : lang === "sr" ? "95–100 / 100 (zelena zona)" : "95–100 / 100 (Green benchmark)",
      builders: lang === "ru" ? "Часто 35–65 / 100 (красная зона)" : lang === "sr" ? "Često 35–65 / 100 (crvena zona)" : "Often 35–65 / 100 (Red/Yellow)",
    },
    {
      feature: lang === "ru" ? "Уязвимость к атакам и взломам" : lang === "sr" ? "Ranjivost na napade i hakovanje" : "Vulnerability Surface",
      nextjs: lang === "ru" ? "Нулевая (нет открытой базы данных и PHP)" : lang === "sr" ? "Nula (nema javno dostupne baze i PHP-a)" : "Zero (No exposed SQL or PHP scripts)",
      builders: lang === "ru" ? "Высокая (уязвимости чужих плагинов)" : lang === "sr" ? "Visoka (ranjivosti eksternih dodataka)" : "High (Third-party plugin exploit surface)",
    },
    {
      feature: lang === "ru" ? "Ежемесячные сборы платформ" : lang === "sr" ? "Mesečne pretplate na platforme" : "Recurring Platform Taxes",
      nextjs: lang === "ru" ? "$0 (код принадлежит вам на 100%)" : lang === "sr" ? "$0 (kod pripada vama 100%)" : "$0 (100% proprietary code ownership)",
      builders: lang === "ru" ? "Постоянно растущие подписки" : lang === "sr" ? "Stalno rastući mesečni troškovi" : "Compounding builder subscriptions",
    },
    {
      feature: lang === "ru" ? "Отказоустойчивость под рекламой" : lang === "sr" ? "Stabilnost pod velikim prometom" : "High-Traffic Resilience",
      nextjs: lang === "ru" ? "Бесконечное Serverless-масштабирование" : lang === "sr" ? "Beskonačno Serverless skaliranje" : "Elastic serverless auto-scaling",
      builders: lang === "ru" ? "Падение при наплыве трафика" : lang === "sr" ? "Pad sistema pod oglasnim kampanjama" : "Server 502/504 downtime under ad bursts",
    },
  ];

  const faqs = [
    {
      q:
        lang === "ru"
          ? "Кому принадлежат права на исходный код созданного сайта?"
          : lang === "sr"
          ? "Kome pripadaju prava na izvorni kod izrađenog sajta?"
          : "Who owns the intellectual property and source code of the website?",
      a:
        lang === "ru"
          ? "Все права на исходный код, дизайн и базу данных полностью принадлежат заказчику. Проект передаётся через приватный Git-репозиторий (GitHub/GitLab) без скрытых привязок и vendor lock-in. Вы можете разместить его на любом хостинге или доверить дальнейшую поддержку нам."
          : lang === "sr"
          ? "Sva prava na izvorni kod, dizajn i bazu podataka u potpunosti pripadaju klijentu. Projekat se predaje preko privatnog Git repozitorijuma (GitHub/GitLab) bez ikakvog vezivanja za platformu (zero vendor lock-in). Možete ga hostovati gde god želite ili nama poveriti dalje održavanje."
          : "You maintain 100% intellectual property ownership of the source code, assets, and design files. The project is delivered via your private GitHub repository with zero vendor lock-in or proprietary runtime handcuffs.",
    },
    {
      q:
        lang === "ru"
          ? "Как заказчик сможет редактировать контент сайта после запуска?"
          : lang === "sr"
          ? "Kako tim može samostalno da uređuje sadržaj nakon lansiranja?"
          : "How will our marketing team update content after launch?",
      a:
        lang === "ru"
          ? "Мы подключаем удобную Headless CMS (Strapi, Sanity или индивидуальную панель управления), где контент-менеджеры могут легко менять тексты, цены, загружать фотографии и публиковать статьи без программиста. Студия Few Hands записывает подробные видеоинструкции и проводит обучающий Zoom-онбординг."
          : lang === "sr"
          ? "Povezujemo intuitivni Headless CMS (Strapi, Sanity ili prilagođeni administrativni panel) gde marketing tim može jednostavno da menja tekstove, cene, dodaje slike i objavljuje članke bez pomoći programera. Few Hands snima detaljna video-uputstva i organizuje uvodnu obuku za tim."
          : "We integrate intuitive headless CMS architectures (Strapi, Sanity, or lightweight bespoke dashboards) allowing your team to update text, prices, and assets seamlessly. Few Hands records personalized video guides and conducts live onboarding.",
    },
    {
      q:
        lang === "ru"
          ? "Сколько времени занимает разработка сайта под ключ?"
          : lang === "sr"
          ? "Koliko vremena je potrebno za izradu sajta po sistemu 'ključ u ruke'?"
          : "What is the typical delivery timeline for custom web development?",
      a:
        lang === "ru"
          ? "Сроки зависят от масштаба: продающий лендинг разрабатывается за 5–9 рабочих дней; корпоративный сайт на 15–25 разделов — за 10–18 рабочих дней; интернет-магазин с каталогом и интеграцией платежей — за 14–24 рабочих дня. Все этапы строго фиксируются в календарном плане."
          : lang === "sr"
          ? "Rokovi zavise od obima: konverziona landing stranica se izrađuje za 5–9 radnih dana; korporativni sajt sa 15–25 sekcija za 10–18 radnih dana; internet prodavnica sa katalogom i naplatom za 14–24 radna dana. Svi rokovi se precizno ugovaraju pre početka rada."
          : "Turnaround depends on project scope: high-converting landing pages take 5–9 business days; corporate hubs take 10–18 business days; e-commerce catalogs with checkouts take 14–24 business days. Milestone dates are contractually fixed prior to kickoff.",
    },
    {
      q:
        lang === "ru"
          ? "Нужно ли платить за дорогой серверный хостинг для Next.js сайта?"
          : lang === "sr"
          ? "Da li je potreban skup namenski server za održavanje Next.js sajta?"
          : "Is expensive server hosting required to run a Next.js web application?",
      a:
        lang === "ru"
          ? "Нет! Сайты на Next.js компилируются в оптимизированный статический код и бессерверные Edge-функции. Они прекрасно работают на бесплатных тарифах глобальных сетей Vercel и Cloudflare, выдерживая миллионы просмотров без необходимости арендовать дорогостоящие VPS."
          : lang === "sr"
          ? "Ne! Sajtovi na Next.js-u se kompajliraju u optimizovan statički kod i Serverless Edge funkcije. Savršeno rade na besplatnim i minimalnim paketima globalnih mreža kao što su Vercel i Cloudflare, podnoseći milione pregleda bez potrebe za skupim namenskim VPS serverima."
          : "No. Next.js applications leverage static pre-rendering and serverless edge functions. They operate flawlessly on free or minimal tiers of Vercel and Cloudflare, handling millions of requests without costly dedicated server infrastructure.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="py-12 sm:py-20">
      {/* Schema.org FAQ JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf2f7] border border-[#4b6c8c]/25 text-[#4b6c8c] text-xs font-semibold mb-4">
              <Zap className="w-3.5 h-3.5 text-[#4b6c8c]" />
              <span>{lang === "ru" ? "Кастомная веб-инженерия" : lang === "sr" ? "Namenski veb inženjering" : "Custom Web Engineering"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-tight">
              {lang === "ru"
                ? "Создание сайтов и веб-сервисов на современном стеке Next.js"
                : lang === "sr"
                ? "Izrada sajtova i veb servisa na savremenom Next.js steku"
                : "Bespoke Web Development & High-Velocity Next.js Platforms"}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#585068] leading-relaxed max-w-3xl">
              {lang === "ru"
                ? "Разрабатываем высоконагруженные сайты с чистого листа: от концепции, UX-прототипирования и продающего текста до интеграции API, CRM и глобального деплоя на Edge CDN. Никаких шаблонных компромиссов — только чистый TypeScript, непревзойдённая скорость загрузки и максимальная конверсия посетителей в клиентов."
                : lang === "sr"
                ? "Razvijamo sajtove visokih performansi od nule: od koncepta, UX prototipa i prodajnih tekstova do API integracija, CRM-a i globalne distribucije na Edge CDN-u. Bez šablonskih kompromisa — samo čist TypeScript, munjevita brzina i maksimalna konverzija posetilaca u klijente."
                : "Engineering bespoke web applications from first principles: design systems, modular React architecture, payment pipelines, and global Edge CDN deployment. Clean code, hardened security, and commercial focus."}
            </p>

            <div className="mt-8 flex flex-col items-start gap-2">
              <DoodlePointer
                text={lang === "ru" ? "прозрачный расчет бюджета ↘" : lang === "sr" ? "transparentna procena budžeta ↘" : "transparent budget estimate ↘"}
                direction="curved-down-right"
                className="mb-1"
              />
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2d263b] hover:bg-[#1e1927] text-[#faf9fb] font-semibold text-sm shadow-lg shadow-[#2d263b]/20 transition-all"
                >
                  <span>{lang === "ru" ? "Рассчитать стоимость сайта" : lang === "sr" ? "Proračunajte cenu sajta" : "Estimate Website Cost"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#2d263b]/15 bg-white text-[#2d263b] hover:bg-[#f1f0f5] font-semibold text-sm shadow-sm transition-all"
                >
                  <span>{lang === "ru" ? "Смотреть примеры работ" : lang === "sr" ? "Pogledajte primere radova" : "View Selected Works"}</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-2">
            <CraftCard
              tag={lang === "ru" ? "МАНИФЕСТ РАЗРАБОТКИ" : lang === "sr" ? "MANIFEST RAZVOJA" : "ARCHITECTURE MANIFESTO"}
              question={
                lang === "ru"
                  ? "Готовые шаблонные темы? НЕТ [X]"
                  : lang === "sr"
                  ? "Gotovi šabloni i teme? NE [X]"
                  : "Heavy pre-made themes? NO [X]"
              }
              reason={
                lang === "ru"
                  ? "Шаблоны тянут 4 МБ мусорного JavaScript и ломаются при пиках. Мы пишем модульный Next.js с бандлом < 90 КБ и мгновенным откликом."
                  : lang === "sr"
                  ? "Šabloni vuku 4 MB nepotrebnog JavaScript-a i pucaju pod opterećenjem. Mi pišemo modularni Next.js sa paketom < 90 KB i trenutnim odzivom."
                  : "Bloated themes drag 4MB of JS and crash under peak load. Clean Next.js delivers sub-90kB bundles and sub-second edge response."
              }
              checked={false}
              rotate="rotate-1"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl border border-[#2d263b]/10 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-[#4b6c8c]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#edf2f7] text-[#4b6c8c] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d263b] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#585068] leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-2.5 border-t border-[#f1f0f5] pt-5">
                    {item.specs.map((spec, si) => (
                      <li key={si} className="flex items-center gap-2 text-xs sm:text-sm text-[#2d263b]">
                        <Check className="w-4 h-4 text-[#7ea368] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Next.js Over Monoliths Box */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-[#2d263b]/10 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-[#4b6c8c] uppercase tracking-wider">
              {lang === "ru" ? "Технологическое превосходство" : lang === "sr" ? "Tehnološka prednost" : "Engineering Advantage"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Почему современный бизнес выбирает Next.js вместо устаревших CMS"
                : lang === "sr"
                ? "Zašto savremeni biznisi biraju Next.js umesto zastarelih CMS-ova"
                : "Why Growing Businesses Choose Next.js Over Monolithic CMSs"}
            </h2>
            <p className="text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Монолитные системы (WordPress, Битрикс, конструкторы) страдают от перегруженного кода, тяжелых плагинов и регулярных сбоев при росте посещаемости. Стек Next.js устраняет узкие места архитектуры на фундаментальном уровне."
                : lang === "sr"
                ? "Monolitni sistemi (WordPress, Bitrix, platforme) pate od preopterećenog koda, krhkih dodataka i redovnih padova pri skoku poseta. Next.js eliminiše arhitektonska uska grla u samom temelju."
                : "Monolithic CMS platforms struggle under code bloat, fragile plugin dependencies, and traffic volatility. Next.js eliminates architectural bottlenecks by decoupling presentation from state."}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-white border border-[#2d263b]/10 shadow-sm">
              <div className="text-3xl font-black text-[#4b6c8c]">100/100</div>
              <h4 className="font-bold text-[#2d263b] mt-2 text-base">
                {lang === "ru" ? "Google PageSpeed Target" : "Google PageSpeed Target"}
              </h4>
              <p className="text-xs text-[#585068] mt-2 leading-relaxed">
                {lang === "ru"
                  ? "Сайт загружается мгновенно (LCP < 0.8с). Поисковые роботы вознаграждают такую скорость топовыми позициями в органической выдаче."
                  : lang === "sr"
                  ? "Sajt se učitava trenutno (LCP < 0.8s). Pretraživači nagrađuju ovu brzinu vodećim organskim pozicijama."
                  : "Instantaneous rendering (LCP < 0.8s). Search crawlers reward sub-second page loads with superior organic ranking signals."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#2d263b]/10 shadow-sm">
              <div className="text-3xl font-black text-[#7ea368]">$0</div>
              <h4 className="font-bold text-[#2d263b] mt-2 text-base">
                {lang === "ru" ? "Сборов за плагины и платформы" : lang === "sr" ? "Zero mesečnih pretplata za platforme" : "Zero Builder Subscriptions"}
              </h4>
              <p className="text-xs text-[#585068] mt-2 leading-relaxed">
                {lang === "ru"
                  ? "Бессерверное развёртывание на Vercel/Cloudflare Edge исключает ежемесячные платежи конструкторам и расходы на тяжелые серверы."
                  : lang === "sr"
                  ? "Serverless postavljanje na Edge mreže eliminiše stalne mesečne licence za platforme i troškove održavanja skupih servera."
                  : "Serverless edge architecture eliminates compounding builder licensing taxes and expensive managed VPS maintenance fees."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#2d263b]/10 shadow-sm">
              <div className="text-3xl font-black text-[#9c386d]">0</div>
              <h4 className="font-bold text-[#2d263b] mt-2 text-base">
                {lang === "ru" ? "Уязвимостей базы данных" : lang === "sr" ? "Ranjivosti baza podataka" : "Exposed Database Vectors"}
              </h4>
              <p className="text-xs text-[#585068] mt-2 leading-relaxed">
                {lang === "ru"
                  ? "База данных скрыта за закрытым API. У хакеров и спам-ботов нет точек входа для SQL-инъекций и взлома через плагины."
                  : lang === "sr"
                  ? "Baza podataka je skrivena iza zatvorenog API-ja. Hakeri i botovi nemaju tačke pristupa za SQL injekcije i kompromitaciju dodataka."
                  : "Databases are completely isolated behind private microservices, eliminating traditional SQL injection exploits."}
              </p>
            </div>
          </div>

          {/* Deep Architectural Comparison Table */}
          <div className="overflow-x-auto mt-6 pt-6 border-t border-[#2d263b]/10">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#2d263b]/10 text-[#585068] font-mono text-xs uppercase">
                  <th className="py-3 px-3 font-semibold">{lang === "ru" ? "Критерий оценки" : lang === "sr" ? "Kriterijum procene" : "Benchmark Metric"}</th>
                  <th className="py-3 px-3 font-semibold text-[#4b6c8c]">Next.js + Edge CDN</th>
                  <th className="py-3 px-3 font-semibold text-[#585068]">WordPress / Tilda / Bitrix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2d263b]/5">
                {comparisonPoints.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#faf9fb] transition-colors">
                    <td className="py-3.5 px-3 font-bold text-[#2d263b]">{row.feature}</td>
                    <td className="py-3.5 px-3 text-[#2d263b] font-semibold">{row.nextjs}</td>
                    <td className="py-3.5 px-3 text-[#585068]">{row.builders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Craft Annotations: Stamp & PS */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <CustomStampBadge
              label={lang === "ru" ? "ЧИСТЫЙ ИСХОДНЫЙ КОД" : lang === "sr" ? "ČIST IZVORNI KOD" : "100% PROPRIETARY GIT"}
              caption={
                lang === "ru"
                  ? "Приватный репозиторий GitHub • 0 привязок"
                  : lang === "sr"
                  ? "Privatni GitHub repozitorijum • Bez vendor lock-in-a"
                  : "Private GitHub repo • Zero vendor lock-in"
              }
              starsCount={5}
              className="-rotate-1 max-w-xs shrink-0"
            />

            <CustomPSCard
              noteTitle={lang === "ru" ? "P.S. Архитектурный стандарт:" : lang === "sr" ? "P.S. Arhitektonski princip:" : "P.S. Architectural Principle:"}
              text={
                lang === "ru"
                  ? "Никаких 'веб-мастеров на зарплате'. Чистый React и строгий TypeScript позволяют любому квалифицированному инженеру масштабировать проект."
                  : lang === "sr"
                  ? "Bez zavisnosti od pojedinačnih programera. Čist React i strog TypeScript omogućavaju svakom iskusnom inženjeru lako proširivanje i održavanje projekta."
                  : "Zero developer handcuffs. Clean React & TypeScript ensure any senior engineer can maintain and scale your platform effortlessly."
              }
              className="rotate-1 flex-1 w-full"
            />
          </div>
        </div>

        {/* 5-Step Engineering Workflow (SEO Depth Section) */}
        <div className="mt-20">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#2d263b]/10 text-[#2d263b] text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-[#4b6c8c]" />
              <span>{lang === "ru" ? "Регламент разработки" : lang === "sr" ? "Proces razvoja" : "Engineering Process"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b]">
              {lang === "ru"
                ? "Пошаговый процесс создания веб-продукта Few Hands"
                : lang === "sr"
                ? "Proces kreiranja veb proizvoda studija Few Hands"
                : "Step-by-Step Web Product Delivery Pipeline"}
            </h2>
            <p className="text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Прозрачная пятиэтапная методология: от сбора требований и проектирования прототипа до комплексного тестирования и релиза на глобальном CDN."
                : lang === "sr"
                ? "Transparentna metodologija u pet faza: od prikupljanja zahteva i izrade prototipa do detaljnog testiranja i lansiranja na globalni CDN."
                : "Transparent 5-stage agile pipeline ensuring on-time delivery, pixel-perfect accuracy, and zero technical debt."}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {devPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-[#2d263b]/10 bg-white/90 backdrop-blur-md shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-mono font-black text-[#4b6c8c] mb-3">{phase.step}</div>
                  <h3 className="font-bold text-sm text-[#2d263b] mb-2 leading-snug">{phase.title}</h3>
                  <p className="text-xs text-[#585068] leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Pills */}
        <div className="mt-16 p-8 rounded-3xl border border-[#2d263b]/10 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#2d263b]">
                {lang === "ru" ? "Современный технологический стек проекта" : lang === "sr" ? "Savremeni tehnološki stek projekta" : "Production Technology Stack"}
              </h3>
              <p className="text-xs text-[#585068] mt-1">
                {lang === "ru"
                  ? "Только актуальные промышленные инструменты без устаревших библиотек."
                  : lang === "sr"
                  ? "Isključivo aktuelni industrijski alati bez zastarelih biblioteka."
                  : "Industrial-grade modern tooling with zero legacy baggage."}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel Edge", "Cloudflare", "PostgreSQL", "Sanity / Strapi", "Schema.org"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-[#f1f0f5] text-[#2d263b] font-mono text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section (SEO Authority & Schema.org) */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-[#2d263b]/10 bg-white/70 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#2d263b]/10 text-[#2d263b] text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#4b6c8c]" />
              <span>{lang === "ru" ? "Частые вопросы" : lang === "sr" ? "Česta pitanja" : "FAQ"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Ответы на вопросы о создании сайтов"
                : lang === "sr"
                ? "Odgovori na pitanja o izradi sajtova"
                : "Frequently Asked Questions About Custom Web Development"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Всё о правах на исходный код, редактировании контента, сроках и гарантиях студии."
                : lang === "sr"
                ? "Sve o pravima na izvorni kod, uređivanju sadržaja, rokovima i garancijama studija."
                : "Clear facts on code ownership, content workflows, delivery schedules, and guarantees."}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#2d263b]/10 bg-white/90 backdrop-blur-md overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-[#2d263b] hover:text-[#4b6c8c] transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#585068]/50 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#4b6c8c]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#585068] leading-relaxed border-t border-[#2d263b]/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantees Box */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/90 border border-[#2d263b]/10 shadow-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#7ea368] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-[#2d263b]">
                {lang === "ru" ? "100% Владение кодом" : lang === "sr" ? "100% Vlasništvo nad kodom" : "Full Code Ownership"}
              </h4>
              <p className="text-xs text-[#585068] mt-1 leading-relaxed">
                {lang === "ru"
                  ? "Репозиторий передаётся заказчику, отсутствие vendor lock-in и скрытых платежей."
                  : lang === "sr"
                  ? "Repozitorijum se predaje klijentu, bez vezivanja za platformu i skrivenih troškova."
                  : "Private repository transfer with zero platform dependencies or lock-in."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 border border-[#2d263b]/10 shadow-sm flex items-start gap-3">
            <Globe2 className="w-5 h-5 text-[#4b6c8c] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-[#2d263b]">
                {lang === "ru" ? "Глобальный Edge CDN" : lang === "sr" ? "Globalni Edge CDN" : "Global Edge CDN"}
              </h4>
              <p className="text-xs text-[#585068] mt-1 leading-relaxed">
                {lang === "ru"
                  ? "Молниеносная загрузка для пользователей в США, Европе, Азии и странах СНГ."
                  : lang === "sr"
                  ? "Munjevito učitavanje za posetioce u SAD, Evropi, Aziji i širom sveta."
                  : "Sub-second responsiveness across North America, Europe, Asia, and worldwide."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 border border-[#2d263b]/10 shadow-sm flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#9c386d] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-[#2d263b]">
                {lang === "ru" ? "Google PageSpeed 95-100" : lang === "sr" ? "Google PageSpeed 95-100" : "Guaranteed Web Vitals"}
              </h4>
              <p className="text-xs text-[#585068] mt-1 leading-relaxed">
                {lang === "ru"
                  ? "Строгий контроль показателей Core Web Vitals и соответствие стандартам ранжирования."
                  : lang === "sr"
                  ? "Stroga kontrola Core Web Vitals metrika i usklađenost sa SEO standardima rangiranja."
                  : "Strict adherence to Core Web Vitals targets for maximum organic SEO advantage."}
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-[#2d263b]/10 bg-gradient-to-b from-white/90 to-[#f1f0f5]/90 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-[#2d263b]">
            {lang === "ru" ? "Готовы обсудить концепцию вашего нового сайта?" : lang === "sr" ? "Spremni ste da razgovaramo o konceptu vašeg novog sajta?" : "Ready to Engineer Your Next-Gen Platform?"}
          </h3>
          <p className="text-xs sm:text-sm text-[#585068] mt-2 max-w-xl mx-auto">
            {lang === "ru"
              ? "Оставьте заявку на бесплатную консультацию и предварительную смету или воспользуйтесь нашим калькулятором стоимости."
              : lang === "sr"
              ? "Pošaljite upit za besplatne konsultacije i preliminarnu procenu ili iskoristite naš kalkulator cene."
              : "Submit your requirements for an architectural consultation and fixed budget proposal."}
          </p>
          <div className="mt-6 flex flex-col items-center">
            <DoodlePointer
              text={lang === "ru" ? "калькулятор с прозрачной сметой ↘" : lang === "sr" ? "kalkulator sa transparentnom procenom ↘" : "transparent itemized calculator ↘"}
              direction="curved-down-right"
              className="mb-2"
            />
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/estimate?service=dev"
                className="px-6 py-3.5 rounded-xl bg-[#2d263b] hover:bg-[#1e1927] text-[#faf9fb] font-semibold text-xs sm:text-sm shadow-md transition"
              >
                {lang === "ru" ? "Рассчитать стоимость в калькуляторе" : lang === "sr" ? "Proračunajte cenu u kalkulatoru" : "Calculate Development Cost"}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl border border-[#2d263b]/15 bg-white text-[#2d263b] hover:bg-[#f1f0f5] font-semibold text-xs sm:text-sm shadow-sm transition"
              >
                {lang === "ru" ? "Связаться со студией" : lang === "sr" ? "Kontaktirajte studio" : "Direct Studio Inquiry"}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
