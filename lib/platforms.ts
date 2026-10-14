export interface PlatformData {
  slug: string;
  title: string;
  category: string;
  badgeColor: string;
  metaTitle: { ru: string; en: string };
  metaDescription: { ru: string; en: string };
  painPoints: { ru: string[]; en: string[] };
  solutions: { ru: string[]; en: string[] };
  whyGoMvp: { ru: string; en: string };
  fewHandsRole: { ru: string; en: string };
}

export const platformsData: Record<string, PlatformData> = {
  wordpress: {
    slug: "wordpress",
    title: "WordPress / WooCommerce",
    category: "CMS & E-Commerce",
    badgeColor: "bg-blue-600",
    metaTitle: {
      ru: "Миграция с WordPress на Next.js | Ускорение сайта и отказ от плагинов — Few Hands & GoMVP",
      en: "Migrate from WordPress to Next.js | Eliminate Plugins & Bloat — Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Перенос сайтов и интернет-магазинов с WordPress/WooCommerce на чистый стек Next.js. Инженерная миграция от GoMVP, обучение и абонентская техподдержка от Few Hands.",
      en: "Migrate websites and stores from WordPress/WooCommerce to modern Next.js. Engineering migration by GoMVP, training and monthly retainer support by Few Hands.",
    },
    painPoints: {
      ru: [
        "Плагинный ад: конфликты версий, обновления ломают верстку и формы.",
        "Белый экран смерти и постоянные уязвимости безопасности (вирусы, инъекции в плагинах).",
        "Медленный TTFB и плохие показатели Google Core Web Vitals из-за тяжелой БД MySQL.",
        "Высокие требования к хостингу и постоянный страх падения сайта под нагрузкой.",
      ],
      en: [
        "Plugin hell: version conflicts and updates breaking critical pages and checkout forms.",
        "White screens of death and recurring security exploits in outdated plugins.",
        "Sluggish TTFB and poor Google Core Web Vitals caused by monolithic database queries.",
        "High server overhead and fear of site crashes under traffic spikes.",
      ],
    },
    solutions: {
      ru: [
        "Мгновенный отклик страниц (до 50 мс) через глобальный Edge CDN.",
        "100% защита от взлома: статичный фронтенд без уязвимой базы данных на виду.",
        "Сохранение всех URL, SEO-структуры, редиректов и мета-тегов.",
        "Чистая и предсказуемая кодовая база без сотен сторонних плагинов.",
      ],
      en: [
        "Sub-second page transitions (under 50ms) across global Edge CDN.",
        "Immunity to common CMS exploits: headless architecture with zero exposed database.",
        "Strict preservation of existing URLs, redirect map, schema, and SEO positions.",
        "Clean, maintainable codebase free from fragile plugin dependencies.",
      ],
    },
    whyGoMvp: {
      ru: "Наш партнёр GoMVP выполняет полный перенос базы данных, статей, каталога и интеграций с платёжными системами на связку React + Go / Next.js.",
      en: "Our partner GoMVP performs complete data extraction, catalog migration, and custom API integrations to React + Go / Next.js.",
    },
    fewHandsRole: {
      ru: "Few Hands берет на себя аудит проекта, обучение ваших сотрудников работе с новым интерфейсом и регулярную ежемесячную техподдержку (доработка страниц, контент, мониторинг).",
      en: "Few Hands handles initial discovery, client staff onboarding & training, plus ongoing monthly maintenance and content updates on subscription.",
    },
  },

  tilda: {
    slug: "tilda",
    title: "Tilda Publishing",
    category: "Конструктор сайтов",
    badgeColor: "bg-orange-600",
    metaTitle: {
      ru: "Перенос сайта с Tilda на чистый код Next.js | Снятие лимитов — Few Hands & GoMVP",
      en: "Migrate from Tilda to Clean Next.js Code | Remove Limits — Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Выросли из ограничений Tilda? Перенос лендингов и магазинов в независимый код на Next.js без абонплаты конструктору. Разработка от GoMVP, поддержка от Few Hands.",
      en: "Outgrown Tilda limits? Move landing pages and stores to independent Next.js code with no platform fees. Engineering by GoMVP, support by Few Hands.",
    },
    painPoints: {
      ru: [
        "Лимиты Zero Block и ограничение на количество товаров/страниц в аккаунте.",
        "Пожизненная ежемесячная абонентская плата за каждый сайт.",
        "Невозможность внедрить сложную логику, личные кабинеты или кастомные калькуляторы.",
        "Зависимость от единого сервиса: риск блокировок или сбоев сторонней инфраструктуры.",
      ],
      en: [
        "Strict Zero Block constraints and artificial catalog/page caps.",
        "Recurring monthly subscription costs for every single site.",
        "Inability to implement complex business workflows, client portals, or custom algorithms.",
        "Vendor lock-in and platform outage risks.",
      ],
    },
    solutions: {
      ru: [
        "Полная свобода дизайна и любые сложные интерактивные сценарии.",
        "Ноль абонентской платы за платформу — сайт размещается на бесплатном глобальном CDN.",
        "Возможность интеграции с любыми CRM, базами данных и сервисами аналитики.",
        "Идеальная скорость загрузки 100/100 в мобильных устройствах.",
      ],
      en: [
        "Unrestricted frontend flexibility with custom interactive logic.",
        "Zero recurring builder subscription fees via serverless Edge hosting.",
        "Seamless integration with any CRM, database, or analytics stack.",
        "100/100 Mobile PageSpeed score guaranteed.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP переносит визуал и верстку с Tilda в профессиональные React-компоненты с чистым кодом и надежной архитектурой.",
      en: "GoMVP rebuilds Tilda visual blocks into modular, high-performance React components with enterprise engineering standards.",
    },
    fewHandsRole: {
      ru: "Few Hands сопровождает перенос, обучает команду управлять сайтом и обеспечивает ежемесячную контентную и техническую поддержку по абонплате.",
      en: "Few Hands oversees project delivery, trains your team, and provides ongoing monthly technical and content maintenance.",
    },
  },

  webflow: {
    slug: "webflow",
    title: "Webflow",
    category: "No-Code Builder",
    badgeColor: "bg-blue-500",
    metaTitle: {
      ru: "Миграция с Webflow на Next.js | Независимость от валютных подписок — Few Hands & GoMVP",
      en: "Migrate from Webflow to Next.js | Zero Vendor Lock-in — Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Перенос сайтов с Webflow на собственный код Next.js. Отказ от дорогих подписок Webflow, интеграция любых платежных шлюзов, поддержка и обучение от Few Hands.",
      en: "Migrate Webflow websites to proprietary Next.js code. Cut expensive USD subscription costs, unlock custom backends, supported by Few Hands.",
    },
    painPoints: {
      ru: [
        "Дорогая валютная подписка (Workspace + Site plan + CMS caps), растущая с каждым сайтом.",
        "Сложности с оплатой зарубежных сервисов и интеграцией локальных платежных систем.",
        "Лимит на количество записей в CMS (10 000 items) и ограниченная серверная логика.",
        "Трудности масштабирования в полноценный веб-продукт с личными кабинетами.",
      ],
      en: [
        "High recurring USD subscription fees expanding with every page and CMS collection.",
        "Payment gateway restrictions and friction with regional processors.",
        "CMS item limits (capped at 10k items) and absence of custom backend logic.",
        "Inability to scale into user portals or complex web applications.",
      ],
    },
    solutions: {
      ru: [
        "100% владение исходным кодом: размещайте на Vercel, Cloudflare или собственном сервере.",
        "Снятие всех ограничений на количество страниц, товаров и динамических записей.",
        "Любые платежные шлюзы без комиссий сторонних no-code платформ.",
        "Максимальная производительность и готовность к масштабированию.",
      ],
      en: [
        "100% proprietary code ownership hosted on Vercel or Cloudflare with zero per-seat fees.",
        "Removal of all item and collection limits.",
        "Direct payment integrations without third-party platform transaction cut.",
        "Enterprise-grade performance ready for rapid scaling.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP экспортирует CMS-коллекции и превращает Webflow-дизайн в модульное Next.js приложение с кастомным бэкендом при необходимости.",
      en: "GoMVP exports collections and translates Webflow design into scalable Next.js components paired with a tailored backend.",
    },
    fewHandsRole: {
      ru: "Few Hands обеспечивает плавный переход, обучает сотрудников администрированию и ведет ежемесячную поддержку сайта.",
      en: "Few Hands handles smooth onboarding, trains internal staff, and provides reliable monthly maintenance on retainer.",
    },
  },

  bitrix: {
    slug: "bitrix",
    title: "1C-Битрикс / Bitrix24",
    category: "CMS & Корпоративные порталы",
    badgeColor: "bg-red-600",
    metaTitle: {
      ru: "Миграция с 1C-Битрикс на Headless Next.js | Ускорение в 5 раз — Few Hands & GoMVP",
      en: "Migrate from 1C-Bitrix to Headless Next.js | 5x Faster Speed — Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Устали от тормозящего Битрикса и дорогих лицензий? Переносим публичную часть на молниеносный Next.js с сохранением интеграции с 1C. Разработка GoMVP, поддержка Few Hands.",
      en: "Tired of heavy Bitrix monoliths and expensive licensing? Migrate frontend to blazingly fast Next.js. Engineered by GoMVP, supported by Few Hands.",
    },
    painPoints: {
      ru: [
        "Тяжеловесный неповоротливый монолит: медленная загрузка мобильных страниц (Core Web Vitals в красной зоне).",
        "Дорогие ежегодные лицензии и сверхвысокая стоимость работы битрикс-программистов.",
        "Постоянная перегрузка серверов даже при умеренном наплыве посетителей.",
        "Устаревший стек шаблонизации (PHP/компоненты), тормозящий внедрение современных фич.",
      ],
      en: [
        "Heavy monolithic architecture with sluggish mobile load times and poor Web Vitals.",
        "Expensive annual license renewals and scarce, costly developer talent.",
        "Server CPU spikes and high infrastructure costs even on moderate traffic.",
        "Outdated templating layer delaying feature rollouts and modern UX experiments.",
      ],
    },
    solutions: {
      ru: [
        "Headless-архитектура: публичный сайт летает на Next.js, а данные синхронизируются через API.",
        "Кратное снижение требований к серверу (кэширование на CDN).",
        "Сохранение всех интеграций со складом, 1C и остатками товаров.",
        "Современный UI, приносящий на 20-30% больше конверсий за счет скорости.",
      ],
      en: [
        "Headless decoupling: lightning-fast Next.js storefront with clean API synchronization.",
        "Dramatically reduced server hardware costs through edge caching.",
        "Preservation of warehouse, ERP, and inventory integrations.",
        "Modern interface converting significantly higher due to instant response times.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP разрабатывает быстрый шлюз данных на Go и современный фронтенд на React/Next.js, аккуратно связывая его с вашей учетной системой.",
      en: "GoMVP engineers an ultra-fast Go API gateway and React frontend, connecting smoothly with your legacy ERP.",
    },
    fewHandsRole: {
      ru: "Few Hands берет на себя обучение контент-менеджеров, аудит конверсий и плановую ежемесячную техподдержку витрины по абонплате.",
      en: "Few Hands manages team training, conversion optimization, and dedicated monthly retainer support for your storefront.",
    },
  },

  insales: {
    slug: "insales",
    title: "InSales / OpenCart / PrestaShop",
    category: "Интернет-магазины",
    badgeColor: "bg-sky-600",
    metaTitle: {
      ru: "Миграция интернет-магазина с InSales/OpenCart на Next.js — Few Hands & GoMVP",
      en: "Migrate Store from InSales/OpenCart to Next.js E-Commerce — Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Модернизация интернет-магазина: мгновенная фильтрация, быстрый чекаут без брошенных корзин на Next.js. Инженерия GoMVP, поддержка и обучение от Few Hands.",
      en: "Modernize your online store: instant product filtering, frictionless checkout, no monthly SaaS cut. GoMVP engineering, Few Hands retainer support.",
    },
    painPoints: {
      ru: [
        "Высокий процент брошенных корзин из-за долгой перезагрузки страниц оформления заказа.",
        "Ограниченные возможности кастомизации витрины и фильтрации товаров.",
        "Для InSales — растущая абонентская плата и комиссии с оборота.",
        "Для OpenCart — устаревший код, постоянные сбои модулей оплаты и доставки после обновлений.",
      ],
      en: [
        "High cart abandonment rates caused by sluggish multi-step checkout reloads.",
        "Limited customization for faceted filters and product variants.",
        "Recurring subscription fees and platform transaction cuts on hosted SaaS.",
        "Fragile third-party shipping and payment extensions breaking on legacy OpenCart.",
      ],
    },
    solutions: {
      ru: [
        "Мгновенный переход между товарами и мгновенная фильтрация без перезагрузки страниц.",
        "Оптимизированный чекаут в 1 экран с интеграцией любых эквайрингов и СБП.",
        "Перенос всей базы товаров, клиентов, истории заказов и SEO-ссылок.",
        "Отсутствие комиссий конструкторов — магазин принадлежит только вам.",
      ],
      en: [
        "Instant catalog filtering and zero-delay product page loads.",
        "Single-page streamlined checkout with direct payment gateway integration.",
        "Lossless migration of customers, product catalog, orders, and SEO URLs.",
        "Complete freedom from revenue-sharing and SaaS commissions.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP реализует высокопроизводительный движок каталога и заказов на Go/Next.js с мгновенным оформлением покупки.",
      en: "GoMVP builds a robust e-commerce catalog engine on Go and Next.js with sub-second checkout pipelines.",
    },
    fewHandsRole: {
      ru: "Few Hands обучает ваших менеджеров управлению заказами и товарами, обеспечивает регулярное сопровождение и доработки по подписке.",
      en: "Few Hands trains your store managers, handles promotional updates, and delivers continuous monthly maintenance.",
    },
  },

  shopify: {
    slug: "shopify",
    title: "Shopify",
    category: "SaaS E-Commerce",
    badgeColor: "bg-emerald-600",
    metaTitle: {
      ru: "Миграция с Shopify на Headless Next.js | Без комиссий и ограничений — Few Hands & GoMVP",
      en: "Migrate from Shopify to Headless Next.js | Cut App Fees — Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Перенос магазина с Shopify на собственный Headless стек: избавьтесь от десятков платных приложений и транзакционных комиссий. GoMVP + Few Hands.",
      en: "Move your Shopify store to custom Headless Next.js: eliminate app subscription stacks and transaction cuts. GoMVP + Few Hands.",
    },
    painPoints: {
      ru: [
        "Стек из десятков платных приложений, раздувающий ежемесячные счета на сотни и тысячи долларов.",
        "Транзакционные комиссии платформы при использовании сторонних эквайрингов.",
        "Географические ограничения и сложности с оплатой подписки в некоторых регионах.",
        "Трудности с тонкой оптимизацией скорости из-за сторонних скриптов приложений.",
      ],
      en: [
        "Mounting app subscription stack costing hundreds or thousands of dollars monthly.",
        "Platform transaction fee penalties for using non-Shopify payment gateways.",
        "Regional payment processor blocks and currency restrictions.",
        "Degraded Core Web Vitals caused by third-party app JavaScript bloat.",
      ],
    },
    solutions: {
      ru: [
        "Единый монолитный код без необходимости оплачивать 20 сторонних приложений каждый месяц.",
        "Прямое подключение любых эквайрингов с нулевой комиссией платформе.",
        "Чистый и легкий фронтенд со скоростью 100/100 на Next.js.",
        "Полный контроль над базой данных и покупательскими сценариями.",
      ],
      en: [
        "Unified custom codebase eliminating the need for 20+ rented app subscriptions.",
        "Direct acquiring integration with zero third-party platform cuts.",
        "Ultra-lightweight Next.js frontend scoring 100/100 on PageSpeed.",
        "Total sovereignty over customer records and data pipelines.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP переносит логику скидок, корзины и каталога в надежный кастомный бэкенд на Go, гарантируя стабильность при масштабных распродажах.",
      en: "GoMVP rebuilds promo logic, carts, and inventory in a scalable Go backend built for Black Friday spikes.",
    },
    fewHandsRole: {
      ru: "Few Hands берет на себя обучение персонала, подготовку медиа-материалов (видео, графика) и постоянную поддержку витрины по абонплате.",
      en: "Few Hands provides operational training, media production assets, and dedicated retainer support for your store.",
    },
  },

  modx: {
    slug: "modx",
    title: "MODX",
    category: "Гибкая CMS",
    badgeColor: "bg-slate-700",
    metaTitle: {
      ru: "Миграция с MODX на Next.js | Избавление от легаси — Few Hands & GoMVP",
      en: "Migrate from MODX to Next.js | Modern Architecture — Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Перенос сайтов с MODX Revolution/Evolution на чистый Next.js. Уход от спагетти-сниппетов к современной архитектуре. Инженерия GoMVP, поддержка Few Hands.",
      en: "Migrate MODX sites to clean Next.js code. Replace legacy snippets with modern API architecture. Engineered by GoMVP, supported by Few Hands.",
    },
    painPoints: {
      ru: [
        "Запутанная архитектура чанков и сниппетов, которую боятся трогать разработчики.",
        "Медленный отклик старых версий Evolution/Revolution и проблемы с кэшированием.",
        "Дефицит квалифицированных специалистов по MODX на рынке.",
        "Уязвимости устаревших версий ядра и расширений.",
      ],
      en: [
        "Spaghetti chunk and snippet architecture that new developers refuse to maintain.",
        "Sluggish TTFB on legacy Evolution/Revolution installations with fragile caching.",
        "Critical shortage of competent MODX engineers.",
        "Known security vulnerabilities in unmaintained core and extra plugins.",
      ],
    },
    solutions: {
      ru: [
        "Современный компонентный подход React / Next.js — легко развивать и масштабировать.",
        "Молниеносный отклик страниц и идеальный SEO-аудит.",
        "Безопасная архитектура без риска инъекций в шаблоны.",
        "Доступ к огромному сообществу современных веб-разработчиков.",
      ],
      en: [
        "Modular React/Next.js component system that any modern developer can advance.",
        "Instant page loads and flawless search engine indexing.",
        "Hardened architecture eliminating template-injection vectors.",
        "Access to a vast global talent pool of modern frontend engineers.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP декомпозирует спагетти-логику MODX в структурированный API на Go и чистый фронтенд на React.",
      en: "GoMVP refactors tangled MODX snippets into clean Go microservices and React UI components.",
    },
    fewHandsRole: {
      ru: "Few Hands обучает команду новой админ-панели и обеспечивает ежемесячное сопровождение, доработку разделов и бэкапы.",
      en: "Few Hands handles administrative onboarding and delivers continuous monthly maintenance and feature tweaks.",
    },
  },

  "legacy-php": {
    slug: "legacy-php",
    title: "Самописный PHP / Старые фреймворки",
    category: "Legacy Monoliths",
    badgeColor: "bg-indigo-600",
    metaTitle: {
      ru: "Модернизация самописных сайтов на PHP | Перенос на Next.js — Few Hands & GoMVP",
      en: "Modernize Legacy PHP Monoliths | Migration to Next.js — Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Ваш сайт написан 10 лет назад на чистом PHP или старом фреймворке? Аккуратно переносим в современный Next.js с сохранением данных. GoMVP + Few Hands.",
      en: "Site built 10 years ago on legacy PHP? Modernize into clean Next.js while preserving core database rules. GoMVP + Few Hands.",
    },
    painPoints: {
      ru: [
        "Код без документации, написанный уволившимися программистами («работает — не трогай»).",
        "Невозможность внедрить современный мобильный интерфейс и анимации.",
        "Устаревшие версии PHP (5.6 / 7.0), которые больше не поддерживаются современными хостингами.",
        "Высокий риск падения бизнеса при попытке дописать даже простую новую функцию.",
      ],
      en: [
        "Undocumented legacy codebase written years ago with high fear of touching it.",
        "Inability to deploy modern reactive mobile experiences.",
        "End-of-life PHP versions (5.6/7.0) rejected by modern secure hosting providers.",
        "High risk of business downtime during any minor feature modification.",
      ],
    },
    solutions: {
      ru: [
        "Бережное разделение: проверенная логика оборачивается в API, а витрина пишется на чистом Next.js.",
        "Мгновенный адаптивный UI с современными стандартами доступности и скорости.",
        "Снятие технологического долга и готовность к быстрому росту.",
        "100% сохранение базы клиентов, транзакций и истории.",
      ],
      en: [
        "Pragmatic decoupling: proven logic encapsulated in secure APIs while UI is reborn in Next.js.",
        "Instant responsive UX adhering to modern accessibility and Core Web Vitals.",
        "Complete technical debt relief and readiness for growth.",
        "100% data fidelity preserving users, transactions, and historical records.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP проводит глубокий аудит старого кода, извлекает ценную бизнес-логику и реализует надёжный серверный слой на Go.",
      en: "GoMVP conducts deep codebase audits, extracts mission-critical logic, and builds a robust Go service layer.",
    },
    fewHandsRole: {
      ru: "Few Hands берет на себя дизайн, обучение ваших сотрудников работе с новым интерфейсом и ежемесячное сопровождение системы под ключ.",
      en: "Few Hands oversees visual design, staff training, and full-spectrum monthly retainer support.",
    },
  },
};
