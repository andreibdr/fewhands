import { Language } from "./translations";

export interface PlatformData {
  slug: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  badgeColor: string;
  metaTitle: Record<Language, string>;
  metaDescription: Record<Language, string>;
  painPoints: Record<Language, string[]>;
  solutions: Record<Language, string[]>;
  whyGoMvp: Record<Language, string>;
  fewHandsRole: Record<Language, string>;
}

export const platformsData: Record<string, PlatformData> = {
  wordpress: {
    slug: "wordpress",
    title: { ru: "WordPress / WooCommerce", en: "WordPress / WooCommerce", sr: "WordPress / WooCommerce" },
    category: { ru: "CMS & Интернет-магазины", en: "CMS & E-Commerce", sr: "CMS & E-Trgovina" },
    badgeColor: "bg-blue-600",
    metaTitle: {
      ru: "Миграция с WordPress на Next.js | Ускорение сайта и отказ от плагинов - Few Hands & GoMVP",
      en: "Migrate from WordPress to Next.js | Eliminate Plugins & Bloat - Few Hands & GoMVP",
      sr: "Migracija sa WordPress-a na Next.js | Ubrzanje i rad bez dodataka - Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Перенос сайтов и интернет-магазинов с WordPress/WooCommerce на чистый стек Next.js. Инженерная миграция от GoMVP, обучение и абонентская техподдержка от Few Hands.",
      en: "Migrate websites and stores from WordPress/WooCommerce to modern Next.js. Engineering migration by GoMVP, training and monthly retainer support by Few Hands.",
      sr: "Prenos sajtova i prodavnica sa WordPress/WooCommerce na čist Next.js. Inženjerska migracija od GoMVP, obuka i mesečno održavanje od Few Hands.",
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
      sr: [
        "Pakao sa dodacima: konflikti verzija, ažuriranja koja kvare dizajn i kontakt forme.",
        "Beli ekran ('white screen of death') i stalni bezbednosni propusti u zastarelim dodacima.",
        "Spor TTFB i loše ocene na Google Core Web Vitals zbog preopterećene MySQL baze.",
        "Visoki troškovi hostinga i konstantan strah od pada sajta pri skoku poseta.",
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
      sr: [
        "Trenutan odziv stranica (ispod 50 ms) putem globalne Edge CDN mreže.",
        "100% zaštita od napada: statički frontend bez izložene baze podataka.",
        "Striktno očuvanje svih postojećih URL adresa, strukture preusmeravanja i SEO pozicija.",
        "Čist i predvidiv kod bez zavisnosti od nestabilnih dodataka.",
      ],
    },
    whyGoMvp: {
      ru: "Наш партнёр GoMVP выполняет полный перенос базы данных, статей, каталога и интеграций с платёжными системами на связку React + Go / Next.js.",
      en: "Our partner GoMVP performs complete data extraction, catalog migration, and custom API integrations to React + Go / Next.js.",
      sr: "Naš partner GoMVP vrši kompletan prenos baze podataka, članaka, kataloga i platnih integracija na moderan React + Go / Next.js stek.",
    },
    fewHandsRole: {
      ru: "Few Hands берет на себя аудит проекта, обучение ваших сотрудников работе с новым интерфейсом и регулярную ежемесячную техподдержку (доработка страниц, контент, мониторинг).",
      en: "Few Hands handles initial discovery, client staff onboarding & training, plus ongoing monthly maintenance and content updates on subscription.",
      sr: "Few Hands vodi klijentski deo: analizu potreba, obuku vašeg tima za rad sa sadržajem i pouzdanu mesečnu tehničku podršku.",
    },
  },

  tilda: {
    slug: "tilda",
    title: { ru: "Tilda Publishing", en: "Tilda Publishing", sr: "Tilda Publishing" },
    category: { ru: "Конструктор сайтов", en: "Website Builders", sr: "Sajt-bilderi" },
    badgeColor: "bg-orange-600",
    metaTitle: {
      ru: "Перенос сайта с Tilda на чистый код Next.js | Снятие лимитов - Few Hands & GoMVP",
      en: "Migrate from Tilda to Clean Next.js Code | Remove Limits - Few Hands & GoMVP",
      sr: "Migracija sa Tilde na Next.js | Oslobađanje od limita - Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Выросли из ограничений Tilda? Перенос лендингов и магазинов в независимый код на Next.js без абонплаты конструктору. Разработка от GoMVP, поддержка от Few Hands.",
      en: "Outgrown Tilda limits? Move landing pages and stores to independent Next.js code with no platform fees. Engineering by GoMVP, support by Few Hands.",
      sr: "Prerasli ste limite Tilde? Prenos sajtova u nezavisan Next.js kod bez pretplate platformi. Inženjering GoMVP, podrška Few Hands.",
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
      sr: [
        "Ograničenja standardnih Zero-blokova i limiti na broj proizvoda i stranica.",
        "Stalno plaćanje mesečnih pretplata za svaki pojedinačni sajt.",
        "Nemogućnost implementacije složene poslovne logike, portala ili kalkulatora.",
        "Rizici zavisnosti od jedne platforme i njenih tehničkih ograničenja.",
      ],
    },
    solutions: {
      ru: [
        "Полная свобода дизайна и любые сложные интерактивные сценарии.",
        "Ноль абонентской платы за платформу - сайт размещается на бесплатном глобальном CDN.",
        "Возможность интеграции с любыми CRM, базами данных и сервисами аналитики.",
        "Идеальная скорость загрузки 100/100 в мобильных устройствах.",
      ],
      en: [
        "Unrestricted frontend flexibility with custom interactive logic.",
        "Zero recurring builder subscription fees via serverless Edge hosting.",
        "Seamless integration with any CRM, database, or analytics stack.",
        "100/100 Mobile PageSpeed score guaranteed.",
      ],
      sr: [
        "Potpuna sloboda razvoja: složene interaktivne komponente i unikatni scenariji.",
        "Nula mesečnih naknada platformi uz hosting na Cloudflare / Vercel Edge mrežama.",
        "Bespogovorna integracija sa bilo kojim CRM sistemom ili bazom podataka.",
        "Maksimalna brzina učitavanja 100/100 na mobilnim uređajima.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP переносит визуал и верстку с Tilda в профессиональные React-компоненты с чистым кодом и надежной архитектурой.",
      en: "GoMVP rebuilds Tilda visual blocks into modular, high-performance React components with enterprise engineering standards.",
      sr: "GoMVP pretvara vizuelne blokove u modularne, profesionalne React/Next.js komponente vrhunskog kvaliteta.",
    },
    fewHandsRole: {
      ru: "Few Hands сопровождает проект, обучает команду управлять сайтом и обеспечивает ежемесячное техническое сопровождение по тарифу Retainer.",
      en: "Few Hands oversees project delivery, trains your team, and provides ongoing monthly technical and content maintenance.",
      sr: "Few Hands vodi lansiranje, obučava vaš tim za rad sa sajtom i pruža stabilno mesečno održavanje.",
    },
  },

  webflow: {
    slug: "webflow",
    title: { ru: "Webflow", en: "Webflow", sr: "Webflow" },
    category: { ru: "No-Code платформы", en: "No-Code Builders", sr: "No-Code platforme" },
    badgeColor: "bg-blue-500",
    metaTitle: {
      ru: "Миграция с Webflow на Next.js | Независимость от валютных подписок - Few Hands & GoMVP",
      en: "Migrate from Webflow to Next.js | Zero Vendor Lock-in - Few Hands & GoMVP",
      sr: "Migracija sa Webflow-a na Next.js | Bez mesečnih licenci - Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Перенос сайтов с Webflow на собственный код Next.js. Отказ от дорогих подписок Webflow, интеграция любых платежных шлюзов, поддержка и обучение от Few Hands.",
      en: "Migrate Webflow websites to proprietary Next.js code. Cut expensive USD subscription costs, unlock custom backends, supported by Few Hands.",
      sr: "Prenos sajtova sa Webflow-a na Next.js kod. Ušteda na skupim pretplatama, sloboda integracije i održavanje od Few Hands.",
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
      sr: [
        "Rastuće cene mesečnih pretplata za svaki novi sajt i korisničko mesto.",
        "Limit od 10.000 CMS stavki koji blokira dalji rast kataloga.",
        "Nemogućnost implementacije složene pozadinske logike i prilagođenih servisa.",
        "Poteškoće sa integracijom specifičnih regionalnih platnih procesora.",
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
      sr: [
        "100% vlasništvo nad kodom na Vercel ili Cloudflare platformama bez pretplata po korisniku.",
        "Uklanjanje svih ograničenja na broj artikala i kolekcija u CMS-u.",
        "Direktna integracija platnih sistema bez posredničkih provizija.",
        "Skalabilnost spremna za nagli rast poseta i prodaje.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP экспортирует CMS-коллекции и превращает Webflow-дизайн в модульное Next.js приложение с кастомным бэкендом при необходимости.",
      en: "GoMVP exports collections and translates Webflow design into scalable Next.js components paired with a tailored backend.",
      sr: "GoMVP precizno izvozi podatke i pretvara Webflow dizajn u skalabilnu Next.js aplikaciju povezanu sa namenskim backendom.",
    },
    fewHandsRole: {
      ru: "Few Hands обеспечивает плавный переход, обучает сотрудников администрированию и ведет ежемесячную поддержку сайта.",
      en: "Few Hands handles smooth onboarding, trains internal staff, and provides reliable monthly maintenance on retainer.",
      sr: "Few Hands osigurava glatku tranziciju, obučava vaše zaposlene i pruža posvećeno mesečno održavanje.",
    },
  },

  bitrix: {
    slug: "bitrix",
    title: { ru: "1C-Битрикс / Bitrix24", en: "1C-Bitrix / Bitrix24", sr: "1C-Bitrix / Bitrix24" },
    category: { ru: "Корпоративные CMS", en: "Enterprise CMS & Portals", sr: "Korporativni sistemi" },
    badgeColor: "bg-red-600",
    metaTitle: {
      ru: "Миграция с 1C-Битрикс на Headless Next.js | Ускорение в 5 раз - Few Hands & GoMVP",
      en: "Migrate from 1C-Bitrix to Headless Next.js | 5x Faster Speed - Few Hands & GoMVP",
      sr: "Migracija sa 1C-Bitrix na Headless Next.js | 5x brži sajt - Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Устали от тормозящего Битрикса и дорогих лицензий? Переносим публичную часть на молниеносный Next.js с сохранением интеграции с 1C. Разработка GoMVP, поддержка Few Hands.",
      en: "Tired of heavy Bitrix monoliths and expensive licensing? Migrate frontend to blazingly fast Next.js. Engineered by GoMVP, supported by Few Hands.",
      sr: "Umorili ste se od sporog Bitrix-a i skupih licenci? Odvajamo javni deo na munjevit Next.js uz očuvanje 1C integracija. GoMVP + Few Hands.",
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
      sr: [
        "Težak monolitni sistem sa izrazito sporim učitavanjem na mobilnim uređajima.",
        "Skupo godišnje obnavljanje licenci i visoke cene rada programera.",
        "Visoko opterećenje procesora servera čak i pri umerenom broju poseta.",
        "Zastareli šabloni koji usporavaju uvođenje modernih korisničkih funkcionalnosti.",
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
      sr: [
        "Headless arhitektura: ultrabrzi Next.js frontend dok se sinhronizacija sa bazom odvija preko API-ja.",
        "Višestruko smanjenje serverskih troškova zahvaljujući Edge keširanju.",
        "Potpuno očuvanje svih integracija sa magacinom, zalihama i ERP sistemima.",
        "Savremen dizajn koji donosi znatno veće konverzije zbog trenutnog odziva.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP разрабатывает быстрый шлюз данных на Go и современный фронтенд на React/Next.js, аккуратно связывая его с вашей учетной системой.",
      en: "GoMVP engineers an ultra-fast Go API gateway and React frontend, connecting smoothly with your legacy ERP.",
      sr: "GoMVP kreira ultrabrzi API prolaz u Go jeziku i React frontend koji se pouzdano povezuje sa vašom bazom.",
    },
    fewHandsRole: {
      ru: "Few Hands берет на себя онбординг команды, аудит конверсий и плановую техническую поддержку витрины по тарифу Retainer.",
      en: "Few Hands manages team training, conversion optimization, and dedicated monthly retainer support for your storefront.",
      sr: "Few Hands vodi obuku tima, optimizaciju konverzija i kontinuirano mesečno održavanje izloga.",
    },
  },

  insales: {
    slug: "insales",
    title: { ru: "InSales / OpenCart / PrestaShop", en: "InSales / OpenCart / PrestaShop", sr: "InSales / OpenCart / PrestaShop" },
    category: { ru: "Интернет-магазины", en: "E-Commerce Platforms", sr: "E-Commerce platforme" },
    badgeColor: "bg-sky-600",
    metaTitle: {
      ru: "Миграция интернет-магазина с InSales/OpenCart на Next.js - Few Hands & GoMVP",
      en: "Migrate Store from InSales/OpenCart to Next.js E-Commerce - Few Hands & GoMVP",
      sr: "Migracija e-prodavnice sa InSales/OpenCart na Next.js - Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Модернизация интернет-магазина: мгновенная фильтрация, быстрый чекаут без брошенных корзин на Next.js. Инженерия GoMVP, поддержка и обучение от Few Hands.",
      en: "Modernize your online store: instant product filtering, frictionless checkout, no monthly SaaS cut. GoMVP engineering, Few Hands retainer support.",
      sr: "Modernizacija online prodavnice: trenutni filteri, brza kupovina bez napuštenih korpi na Next.js steku. GoMVP + Few Hands.",
    },
    painPoints: {
      ru: [
        "Высокий процент брошенных корзин из-за долгой перезагрузки страниц оформления заказа.",
        "Ограниченные возможности кастомизации витрины и фильтрации товаров.",
        "Для InSales - растущая абонентская плата и комиссии с оборота.",
        "Для OpenCart - устаревший код, постоянные сбои модулей оплаты и доставки после обновлений.",
      ],
      en: [
        "High cart abandonment rates caused by sluggish multi-step checkout reloads.",
        "Limited customization for faceted filters and product variants.",
        "Recurring subscription fees and platform transaction cuts on hosted SaaS.",
        "Fragile third-party shipping and payment extensions breaking on legacy OpenCart.",
      ],
      sr: [
        "Visok procenat napuštanja korpe usled sporog ponovnog učitavanja stranica porudžbine.",
        "Ograničene opcije za prilagođavanje naprednih filtera i varijacija proizvoda.",
        "Mesečne pretplate i provizije od prometa kod SaaS platformi.",
        "Nestabilni moduli plaćanja i dostave koji otkazuju pri ažuriranjima na OpenCart-u.",
      ],
    },
    solutions: {
      ru: [
        "Мгновенный переход между товарами и мгновенная фильтрация без перезагрузки страниц.",
        "Оптимизированный чекаут в 1 экран с интеграцией любых эквайрингов и СБП.",
        "Перенос всей базы товаров, клиентов, истории заказов и SEO-ссылок.",
        "Отсутствие комиссий конструкторов - магазин принадлежит только вам.",
      ],
      en: [
        "Instant catalog filtering and zero-delay product page loads.",
        "Single-page streamlined checkout with direct payment gateway integration.",
        "Lossless migration of customers, product catalog, orders, and SEO URLs.",
        "Complete freedom from revenue-sharing and SaaS commissions.",
      ],
      sr: [
        "Trenutno filtriranje kataloga i pregled proizvoda bez čekanja i osvežavanja stranice.",
        "Pojednostavljen proces kupovine u jednom koraku sa direktnim platnim karticama.",
        "Potpun prenos baze kupaca, kataloga proizvoda, istorije porudžbina i SEO linkova.",
        "Potpuna sloboda bez provizija od prometa - prodavnica je 100% u vašem vlasništvu.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP реализует высокопроизводительный движок каталога и заказов на Go/Next.js с мгновенным оформлением покупки.",
      en: "GoMVP builds a robust e-commerce catalog engine on Go and Next.js with sub-second checkout pipelines.",
      sr: "GoMVP izrađuje robustan e-commerce mehanizam kataloga i porudžbina na Go i Next.js steku.",
    },
    fewHandsRole: {
      ru: "Few Hands обучает ваших менеджеров управлению заказами и товарами, обеспечивает регулярное сопровождение и доработки по подписке.",
      en: "Few Hands trains your store managers, handles promotional updates, and delivers continuous monthly maintenance.",
      sr: "Few Hands obučava vaše menadžere prodaje, vrši promotivna ažuriranja i pruža stalnu podršku.",
    },
  },

  shopify: {
    slug: "shopify",
    title: { ru: "Shopify", en: "Shopify", sr: "Shopify" },
    category: { ru: "SaaS E-Commerce", en: "SaaS E-Commerce", sr: "SaaS E-Trgovina" },
    badgeColor: "bg-emerald-600",
    metaTitle: {
      ru: "Миграция с Shopify на Headless Next.js | Без комиссий и ограничений - Few Hands & GoMVP",
      en: "Migrate from Shopify to Headless Next.js | Cut App Fees - Few Hands & GoMVP",
      sr: "Migracija sa Shopify na Headless Next.js | Bez provizija - Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Перенос магазина с Shopify на собственный Headless стек: избавьтесь от десятков платных приложений и транзакционных комиссий. GoMVP + Few Hands.",
      en: "Move your Shopify store to custom Headless Next.js: eliminate app subscription stacks and transaction cuts. GoMVP + Few Hands.",
      sr: "Prenesite Shopify prodavnicu na sopstveni Headless Next.js: ukinite troškove za desetine aplikacija i provizije. GoMVP + Few Hands.",
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
      sr: [
        "Mesečni troškovi za desetine plaćenih aplikacija koji dostižu stotine i hiljade dolara.",
        "Dodatne provizije platforme ako se ne koristi Shopify Payments.",
        "Regionalna ograničenja za platne kartice i valute.",
        "Usporenje sajta prouzrokovano gomilanjem eksternih JavaScript skripti aplikacija.",
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
      sr: [
        "Jedinstven namenski kod bez potrebe za plaćanjem 20+ mesečnih pretplata za aplikacije.",
        "Direktno povezivanje bilo kog procesora plaćanja bez naknada platformi.",
        "Lagani Next.js frontend sa čistih 100/100 na Google PageSpeed testu.",
        "Potpuna kontrola nad podacima o kupcima i tokovima naručivanja.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP переносит логику скидок, корзины и каталога в надежный кастомный бэкенд на Go, гарантируя стабильность при масштабных распродажах.",
      en: "GoMVP rebuilds promo logic, carts, and inventory in a scalable Go backend built for Black Friday spikes.",
      sr: "GoMVP prenosi logiku popusta, korpe i zaliha u stabilan backend u Go jeziku spreman za najveća opterećenja.",
    },
    fewHandsRole: {
      ru: "Few Hands берет на себя обучение персонала, подготовку медиа-материалов (видео, графика) и постоянную поддержку витрины по тарифу Retainer.",
      en: "Few Hands provides operational training, media production assets, and dedicated retainer support for your store.",
      sr: "Few Hands pruža operativnu obuku, pripremu grafičkih i video materijala i stalno mesečno održavanje.",
    },
  },

  modx: {
    slug: "modx",
    title: { ru: "MODX Revolution / Evolution", en: "MODX Revolution / Evolution", sr: "MODX Revolution / Evolution" },
    category: { ru: "Гибкие CMS", en: "Flexible CMS", sr: "Tradicionalni CMS" },
    badgeColor: "bg-slate-700",
    metaTitle: {
      ru: "Миграция с MODX на Next.js | Избавление от легаси - Few Hands & GoMVP",
      en: "Migrate from MODX to Next.js | Modern Architecture - Few Hands & GoMVP",
      sr: "Migracija sa MODX na Next.js | Savremena arhitektura - Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Перенос сайтов с MODX Revolution/Evolution на чистый Next.js. Уход от спагетти-сниппетов к современной архитектуре. Инженерия GoMVP, поддержка Few Hands.",
      en: "Migrate MODX sites to clean Next.js code. Replace legacy snippets with modern API architecture. Engineered by GoMVP, supported by Few Hands.",
      sr: "Prenos sajtova sa MODX-a na čist Next.js. Zamena nasleđenih snippeta modernom API arhitekturom. GoMVP + Few Hands.",
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
      sr: [
        "Zapetljana struktura snippeta i chunkova koju developeri odbijaju da održavaju.",
        "Spor odziv starijih verzija i problemi sa keširanjem sadržaja.",
        "Deficit stručnjaka koji poznaju specifičnosti MODX platforme.",
        "Poznati bezbednosni rizici u zastarelom jezgru i starim dodacima.",
      ],
    },
    solutions: {
      ru: [
        "Современный компонентный подход React / Next.js - легко развивать и масштабировать.",
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
      sr: [
        "Savremen modularni React/Next.js sistem komponenti lak za razvoj i širenje.",
        "Trenutno učitavanje stranica i besprekorna SEO indeksacija.",
        "Bezbedna arhitektura bez rizika od zlonamernih injekcija u šablone.",
        "Otvoren pristup globalnoj zajednici savremenih frontend inženjera.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP декомпозирует спагетти-логику MODX в структурированный API на Go и чистый фронтенд на React.",
      en: "GoMVP refactors tangled MODX snippets into clean Go microservices and React UI components.",
      sr: "GoMVP refaktoriše MODX logiku u čiste mikroservise u Go jeziku i React komponente.",
    },
    fewHandsRole: {
      ru: "Few Hands обучает команду новой админ-панели и обеспечивает ежемесячное сопровождение, доработку разделов и бэкапы.",
      en: "Few Hands handles administrative onboarding and delivers continuous monthly maintenance and feature tweaks.",
      sr: "Few Hands obučava vašu redakciju za rad sa novim panelom i pruža redovno mesečno održavanje.",
    },
  },

  "legacy-php": {
    slug: "legacy-php",
    title: { ru: "Самописный PHP / Монолиты", en: "Custom Legacy PHP & Monoliths", sr: "Nasleđeni PHP / Monoliti" },
    category: { ru: "Устаревшие монолиты", en: "Legacy Monoliths", sr: "Zastarele tehnologije" },
    badgeColor: "bg-indigo-600",
    metaTitle: {
      ru: "Модернизация самописных сайтов на PHP | Перенос на Next.js - Few Hands & GoMVP",
      en: "Modernize Legacy PHP Monoliths | Migration to Next.js - Few Hands & GoMVP",
      sr: "Modernizacija nasleđenog PHP koda | Prelazak na Next.js - Few Hands & GoMVP",
    },
    metaDescription: {
      ru: "Ваш сайт написан 10 лет назад на чистом PHP или старом фреймворке? Аккуратно переносим в современный Next.js с сохранением данных. GoMVP + Few Hands.",
      en: "Site built 10 years ago on legacy PHP? Modernize into clean Next.js while preserving core database rules. GoMVP + Few Hands.",
      sr: "Sajt napravljen pre mnogo godina na zastarelom PHP-u? Modernizujemo u čist Next.js uz očuvanje svih podataka. GoMVP + Few Hands.",
    },
    painPoints: {
      ru: [
        "Код без документации, написанный уволившимися программистами («работает - не трогай»).",
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
      sr: [
        "Nedokumentovan kod koji programeri odbijaju da diraju iz straha od pada sistema.",
        "Nemogućnost implementacije savremenog mobilnog korisničkog iskustva.",
        "Zastarele verzije PHP-a koje više ne podržavaju moderni bezbedni serveri.",
        "Veliki rizik od zastoja u poslovanju pri svakoj novoj izmeni ili doradi.",
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
      sr: [
        "Pažljivo razdvajanje: proverena poslovna logika se pretvara u API, dok je frontend moderan Next.js.",
        "Trenutno prilagodljiv interfejs sa najvišim standardima pristupačnosti i brzine.",
        "Potpuno uklanjanje tehničkog duga i spremnost za budući rast.",
        "100% očuvanje baze korisnika, transakcija i celokupne istorije.",
      ],
    },
    whyGoMvp: {
      ru: "GoMVP проводит глубокий аудит старого кода, извлекает ценную бизнес-логику и реализует надёжный серверный слой на Go.",
      en: "GoMVP conducts deep codebase audits, extracts mission-critical logic, and builds a robust Go service layer.",
      sr: "GoMVP sprovodi detaljnu reviziju starog koda, izdvaja poslovnu logiku i kreira pouzdan servisni sloj u Go jeziku.",
    },
    fewHandsRole: {
      ru: "Few Hands берет на себя дизайн, обучение ваших сотрудников работе с новым интерфейсом и ежемесячное сопровождение системы под ключ.",
      en: "Few Hands oversees visual design, staff training, and full-spectrum monthly retainer support.",
      sr: "Few Hands kreira moderan vizuelni dizajn, obučava vaš tim i pruža kompletno mesečno održavanje.",
    },
  },
};
