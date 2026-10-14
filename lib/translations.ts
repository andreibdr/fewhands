export type Language = 'ru' | 'en';

export interface TranslationContent {
  nav: {
    migration: string;
    development: string;
    video: string;
    portfolio: string;
    calculator: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metric1Label: string;
    metric1Val: string;
    metric2Label: string;
    metric2Val: string;
    metric3Label: string;
    metric3Val: string;
  };
  migration: {
    badge: string;
    partnerBadge: string;
    title: string;
    subtitle: string;
    partnerNote: string;
    platforms: {
      id: string;
      title: string;
      category: string;
      problem: string;
      solution: string;
      badgeColor: string;
    }[];
  };
  development: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      icon: string;
      title: string;
      desc: string;
      features: string[];
    }[];
  };
  video: {
    badge: string;
    title: string;
    subtitle: string;
    aiBadge: string;
    aiTitle: string;
    aiDesc: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
    shortsTitle: string;
    youtubeTitle: string;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    typeLabel: string;
    scopeLabel: string;
    timingLabel: string;
    estimateLabel: string;
    cta: string;
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: { id: string; label: string }[];
  };
  contacts: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    contactLabel: string;
    messageLabel: string;
    sendBtn: string;
    directChat: string;
    email: string;
  };
  footer: {
    rights: string;
    partnerText: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  ru: {
    nav: {
      migration: "Миграция сайтов",
      development: "Разработка",
      video: "Видео & AI",
      portfolio: "Портфолио",
      calculator: "Калькулятор",
      contact: "Контакты",
      cta: "Обсудить проект",
    },
    hero: {
      badge: "Веб-инженерия · Миграция CMS · AI Видеопродакшн",
      titleStart: "Создание и перенос сайтов на ",
      titleHighlight: "современный стек",
      titleEnd: ", монтаж видео и AI-аватары",
      description: "Освобождаем бизнес от тормозящих CMS (WordPress, Bitrix) и лимитов конструкторов (Tilda, Webflow). Переносим на чистый Next.js со 100/100 по Google PageSpeed. Создаём видео и реалистичных AI-аватаров.",
      ctaPrimary: "Рассчитать проект",
      ctaSecondary: "Кейсы и портфолио",
      metric1Label: "лет опыта в веб-разработке",
      metric1Val: "16+",
      metric2Label: "проекты в США, Европе и СНГ",
      metric2Val: "50+",
      metric3Label: "скорость загрузки сайта (PageSpeed)",
      metric3Val: "100/100",
    },
    migration: {
      badge: "Модернизация инфраструктуры",
      partnerBadge: "Партнёрство с GoMVP",
      title: "Миграция с устаревших платформ",
      subtitle: "Ваш сайт тормозит, плагины постоянно ломаются, а конструкторы требуют ежемесячную абонплату? Переносим ваш проект на Next.js с полным сохранением дизайна, данных и позиций в SEO.",
      partnerNote: "Для сложных бэкендов, личных кабинетов и высоконагруженных API мы объединяем экспертизу с нашим технологическим партнёром gomvp.dev (React + Go).",
      platforms: [
        {
          id: "wordpress",
          title: "WordPress / WooCommerce",
          category: "CMS & E-commerce",
          problem: "Ад из 40+ плагинов, конфликты версий, белый экран смерти, уязвимости и атаки ботов, тормозящий хостинг.",
          solution: "Перенос на чистый фронтенд Next.js без уязвимой базы данных. Мгновенная загрузка страниц и нулевой риск взлома.",
          badgeColor: "bg-blue-600",
        },
        {
          id: "tilda",
          title: "Tilda Publishing",
          category: "Конструктор сайтов",
          problem: "Ограничения блоков и Zero Block, блокировки, зависимость от платформы, лимиты на каталог и скрипты.",
          solution: "Полная свобода кода: кастомные интеграции, любые анимации, независимость и отсутствие ежемесячных оплат за аккаунт.",
          badgeColor: "bg-orange-600",
        },
        {
          id: "webflow",
          title: "Webflow",
          category: "No-Code Builder",
          problem: "Высокая валютная подписка, сложности с интеграцией российских и нестандартных платежных систем, лимиты CMS.",
          solution: "Собственный код без ежемесячных платежей платформе, любой хостинг (Vercel/Cloudflare) и кастомная бизнес-логика.",
          badgeColor: "bg-blue-500",
        },
        {
          id: "bitrix",
          title: "1C-Битрикс",
          category: "CMS & Корпоративные порталы",
          problem: "Тяжеловесный неповоротливый стек, дорогая поддержка, постоянные требования к ресурсам сервера и лицензиям.",
          solution: "Молниеносный Headless-интерфейс, быстрое взаимодействие пользователей и кратное снижение нагрузки на сервер.",
          badgeColor: "bg-red-600",
        },
        {
          id: "insales",
          title: "InSales / OpenCart / PrestaShop",
          category: "Интернет-магазины",
          problem: "Устаревший процесс оформления заказа (высокий процент брошенных корзин), медленный мобильный поиск и фильтры.",
          solution: "Headless E-commerce: моментальный переход по каталогу, мгновенный чекаут и автоматическая синхронизация.",
          badgeColor: "bg-sky-600",
        },
        {
          id: "legacy-php",
          title: "Самописный PHP / MODX",
          category: "Legacy системы",
          problem: "Устаревший код без документации, который боятся трогать программисты, невозможность внедрять новые фичи.",
          solution: "Аккуратная декомпозиция: современный UI-слой на Next.js с сохранением проверенной временем логики.",
          badgeColor: "bg-indigo-600",
        },
      ],
    },
    development: {
      badge: "Кастомная разработка",
      title: "Создание сайтов с чистого листа",
      subtitle: "Проектируем и запускаем производительные веб-проекты под ключ — от продающих лендингов до масштабируемых каталогов.",
      cards: [
        {
          icon: "Layout",
          title: "Конверсионные лендинги",
          desc: "Идеально выверенная структура, ясные акценты, убедительный визуал и максимальная конверсия посетителей в заявки.",
          features: ["Быстрая загрузка < 1 сек", "Адаптив под все смартфоны", "Интеграция с почтой и CRM"],
        },
        {
          icon: "ShoppingBag",
          title: "Каталоги и витрины",
          desc: "Современные интернет-витрины без раздутых движков. Удобная фильтрация, быстрый просмотр товаров и лёгкий чекаут.",
          features: ["Молниеносный поиск", "Интеграция оплат и доставки", "Оптимизация под SEO"],
        },
        {
          icon: "Cpu",
          title: "Корпоративные платформы",
          desc: "Представительские сайты для международных и локальных компаний, презентующие бренд на высшем инженерном уровне.",
          features: ["Мультиязычность (i18n)", "Глобальный Edge CDN", "Безупречная безопасность"],
        },
      ],
    },
    video: {
      badge: "Медиа & AI продакшн",
      title: "Видеомонтаж и цифровые AI-аватары",
      subtitle: "Создаём контент, который цепляет внимание с первых секунд и работает на продажи в YouTube, Shorts и на сайте.",
      aiBadge: "Трендовая технология",
      aiTitle: "AI Видео-аватар под ключ",
      aiDesc: "Реалистичный говорящий персонаж для приветствия на сайте, обучающих роликов или рекламы. Говорит на любом языке с идеальной артикуляцией — без затрат на съемочную группу и студию.",
      steps: [
        { num: "01", title: "Сценарий и бриф", desc: "Разрабатываем продающий текст, хуки и тайминги под вашу целевую аудиторию." },
        { num: "02", title: "Генерация и озвучка", desc: "Подбираем фотореалистичный аватар, накладываем профессиональную озвучку или ваш голос." },
        { num: "03", title: "Монтаж и интеграция", desc: "Добавляем динамичные титры, графику, звуковые эффекты и встраиваем в воронку." },
      ],
      shortsTitle: "Примеры AI-аватаров (Shorts / 9:16)",
      youtubeTitle: "Монтаж YouTube выпусков",
    },
    calculator: {
      badge: "Быстрый расчет",
      title: "Оцените стоимость вашего проекта",
      subtitle: "Выберите параметры, чтобы получить предварительный ориентир по срокам и бюджету.",
      typeLabel: "Тип задачи",
      scopeLabel: "Сложность и объем",
      timingLabel: "Желаемые сроки",
      estimateLabel: "Ориентировочная оценка:",
      cta: "Отправить заявку на оценку",
    },
    portfolio: {
      badge: "Портфолио",
      title: "Реализованные проекты",
      subtitle: "Реальные действующие сайты и медиа-проекты наших клиентов.",
      tabs: [
        { id: "all", label: "Все проекты" },
        { id: "web", label: "Сайты & Миграция" },
        { id: "video", label: "Видео & AI" },
      ],
    },
    contacts: {
      badge: "Связь",
      title: "Давайте обсудим вашу задачу",
      subtitle: "Отправьте заявку или напишите на email — ответим в течение 1–2 часов с конкретными предложениями.",
      nameLabel: "Ваше имя",
      contactLabel: "Email или WhatsApp",
      messageLabel: "Коротко о проекте",
      sendBtn: "Отправить заявку",
      directChat: "Прямые контакты:",
      email: "web@fewhands.com",
    },
    footer: {
      rights: "Few Hands. Веб-инженерия, миграция и AI-медиа.",
      partnerText: "В технологическом партнёрстве с gomvp.dev",
    },
  },
  en: {
    nav: {
      migration: "Migration",
      development: "Development",
      video: "Video & AI",
      portfolio: "Portfolio",
      calculator: "Estimator",
      contact: "Contact",
      cta: "Discuss Project",
    },
    hero: {
      badge: "Web Engineering · CMS Migration · AI Video Production",
      titleStart: "Building & Migrating websites to a ",
      titleHighlight: "modern stack",
      titleEnd: ", video editing & AI avatars",
      description: "We free businesses from sluggish CMSs (WordPress, Bitrix) and site-builder traps (Tilda, Webflow). We migrate you to clean Next.js with 100/100 Google PageSpeed scores, plus high-impact video & realistic AI avatars.",
      ctaPrimary: "Estimate Project",
      ctaSecondary: "View Portfolio",
      metric1Label: "years of engineering experience",
      metric1Val: "16+",
      metric2Label: "projects delivered worldwide",
      metric2Val: "50+",
      metric3Label: "target PageSpeed performance",
      metric3Val: "100/100",
    },
    migration: {
      badge: "Modernization Hub",
      partnerBadge: "Partnered with GoMVP",
      title: "Platform Migration & Modernization",
      subtitle: "Tired of bloated plugins, broken updates, or monthly site-builder fees? We rebuild and migrate your existing site to Next.js while strictly preserving your SEO rankings, URLs, and data.",
      partnerNote: "For complex backends, customer portals, and high-load APIs, we combine forces with our engineering partner gomvp.dev (React + Go).",
      platforms: [
        {
          id: "wordpress",
          title: "WordPress / WooCommerce",
          category: "CMS & E-commerce",
          problem: "40+ plugin dependencies, white screens of death, security exploits, database bloat, and costly hosting.",
          solution: "Migration to clean Next.js edge storefront. Sub-second page turns, zero database exploit vectors, instant TTFB.",
          badgeColor: "bg-blue-600",
        },
        {
          id: "tilda",
          title: "Tilda Publishing",
          category: "Site Builder",
          problem: "Rigid block limits, platform vendor lock-in, recurring monthly fees, restricted e-commerce capabilities.",
          solution: "True code freedom: custom APIs, tailored interactive components, zero recurring builder fees.",
          badgeColor: "bg-orange-600",
        },
        {
          id: "webflow",
          title: "Webflow",
          category: "No-Code Builder",
          problem: "Escalating monthly subscription fees, CMS record caps, custom backend hurdles.",
          solution: "Full code ownership on Vercel/Cloudflare with zero per-seat fees and unlimited scalability.",
          badgeColor: "bg-blue-500",
        },
        {
          id: "bitrix",
          title: "Bitrix / 1C-Bitrix",
          category: "Enterprise Monolith",
          problem: "Bulky codebase, slow mobile page loads, expensive specialist maintenance, heavy server loads.",
          solution: "Ultra-fast headless architecture with instant response times and drastically reduced server costs.",
          badgeColor: "bg-red-600",
        },
        {
          id: "insales",
          title: "InSales / OpenCart / PrestaShop",
          category: "E-Commerce",
          problem: "Clunky checkout processes resulting in abandoned carts, sluggish catalog filters and search.",
          solution: "Headless E-commerce with instant catalog navigation, streamlined one-click checkout.",
          badgeColor: "bg-sky-600",
        },
        {
          id: "legacy-php",
          title: "Legacy PHP / MODX",
          category: "Legacy Stacks",
          problem: "Undocumented legacy code that developers refuse to touch, blocking new feature releases.",
          solution: "Systematic modernization: fresh Next.js presentation layer retaining proven business rules.",
          badgeColor: "bg-indigo-600",
        },
      ],
    },
    development: {
      badge: "Custom Development",
      title: "Bespoke Web Development",
      subtitle: "Engineering fast, modern web applications from ground up — from high-converting landing pages to scalable product catalogs.",
      cards: [
        {
          icon: "Layout",
          title: "High-Converting Landings",
          desc: "Laser-focused narrative, compelling typography, and clean layouts that turn cold visitors into qualified inquiries.",
          features: ["Sub-second load times", "Flawless mobile UX", "Instant Email & CRM alerts"],
        },
        {
          icon: "ShoppingBag",
          title: "Product Catalogs & Stores",
          desc: "Modern digital storefronts without CMS bloat. Instant filtering, clean product presentation, and frictionless checkout.",
          features: ["Lightning-fast search", "Payment gateway integration", "Search engine optimized"],
        },
        {
          icon: "Cpu",
          title: "Corporate Hubs",
          desc: "Flagship digital presence for international businesses, delivering technical excellence and brand credibility.",
          features: ["Multilingual i18n", "Global Edge CDN", "Hardened security"],
        },
      ],
    },
    video: {
      badge: "Media & AI Production",
      title: "Video Editing & AI Avatars",
      subtitle: "High-impact video content that captures attention in seconds and drives commercial conversions on YouTube and web.",
      aiBadge: "Cutting-Edge AI",
      aiTitle: "Turnkey AI Video Avatars",
      aiDesc: "Photorealistic talking presenters for website greetings, explainer clips, and marketing ads. Speaks any language with accurate lip-sync — without video crew or studio overhead.",
      steps: [
        { num: "01", title: "Script & Angle", desc: "Crafting hook-driven messaging tailored specifically to your target audience." },
        { num: "02", title: "Synthesis & Audio", desc: "Generating photorealistic visual avatars with studio-grade neural voice synthesis." },
        { num: "03", title: "Editing & Delivery", desc: "Dynamic typography, graphics, sound effects, formatted for 9:16 and 16:9." },
      ],
      shortsTitle: "AI Avatar Showcases (Shorts / 9:16)",
      youtubeTitle: "YouTube Production Samples",
    },
    calculator: {
      badge: "Instant Estimate",
      title: "Project Cost & Timeline Estimator",
      subtitle: "Select your project specifications for an instant benchmark on timing and budget.",
      typeLabel: "Project Type",
      scopeLabel: "Scope & Complexity",
      timingLabel: "Target Timeline",
      estimateLabel: "Estimated Benchmark:",
      cta: "Submit Estimate Request",
    },
    portfolio: {
      badge: "Showcase",
      title: "Selected Client Works",
      subtitle: "Live websites, digital solutions, and media productions delivered for our clients.",
      tabs: [
        { id: "all", label: "All Projects" },
        { id: "web", label: "Web & Migration" },
        { id: "video", label: "Video & AI" },
      ],
    },
    contacts: {
      badge: "Get In Touch",
      title: "Let's Discuss Your Project",
      subtitle: "Submit an inquiry or reach out directly. We respond within 1–2 business hours with concrete next steps.",
      nameLabel: "Your Name",
      contactLabel: "Work Email or Phone",
      messageLabel: "Tell us about your project",
      sendBtn: "Send Inquiry",
      directChat: "Direct communication:",
      email: "web@fewhands.com",
    },
    footer: {
      rights: "Few Hands. Web engineering, migration & AI media.",
      partnerText: "In technology partnership with gomvp.dev",
    },
  },
};
