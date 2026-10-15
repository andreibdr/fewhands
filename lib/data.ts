export interface PortfolioItem {
  id: string;
  title: string;
  category: 'web' | 'video';
  tags: string[];
  description: { ru: string; en: string };
  image?: string;
  url?: string;
  status?: 'live' | 'archived';
  archivedYear?: string;
  youtubeId?: string;
  isShort?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  // --- Active Live Projects ---
  {
    id: "american-med-travel",
    title: "American Med Travel",
    category: "web",
    tags: ["Healthcare", "USA Directory", "Glassmorphism"],
    description: {
      ru: "Премиальный портал медицинского туризма и каталог ведущих клиник США (онкология, кардиохирургия).",
      en: "Curated directory & portal connecting international patients with top-ranked US hospitals.",
    },
    image: "/portfolio/americanmedtravel.jpg",
    url: "https://www.americanmedtravel.com/",
    status: "live",
  },
  {
    id: "stazhkova",
    title: "Elena Stazhkova Real Estate",
    category: "web",
    tags: ["Personal Brand", "Real Estate", "Next.js"],
    description: {
      ru: "Персональный сайт и портфолио агента по элитной недвижимости во Флориде с каталогом объектов и интерактивными картами.",
      en: "Personal website & portfolio for a Florida luxury real estate agent featuring property listings and neighborhood guides.",
    },
    image: "/portfolio/stazhkova.png",
    url: "https://stazhkova.com",
    status: "live",
  },
  {
    id: "iwdsolutions",
    title: "Impact Windows & Doors Solutions",
    category: "web",
    tags: ["Corporate", "USA/Florida", "Lead Gen", "B2B"],
    description: {
      ru: "Сайт поставщика ураганостойких окон и дверей во Флориде: онлайн-калькулятор остекления, каталог профилей и заявки.",
      en: "Corporate website for a Florida hurricane impact windows and doors contractor: quote flows, product specs, and commercial portfolio.",
    },
    image: "/portfolio/iwdsolutions.png",
    url: "https://iwdsolutions.com",
    status: "live",
  },
  {
    id: "amt-global",
    title: "AMT Global — Construction 3D Printers",
    category: "web",
    tags: ["High-Tech", "Industrial", "3D Printing"],
    description: {
      ru: "Официальный сайт производителя строительных 3D-принтеров для возведения зданий и малых архитектурных форм.",
      en: "Official website for the manufacturer of industrial 3D construction printers for additive building and architectural manufacturing.",
    },
    image: "/portfolio/amt-g.jpg",
    url: "https://amt-g.net",
    status: "live",
  },
  {
    id: "bigdata-realty",
    title: "Big Data Realty",
    category: "web",
    tags: ["Fintech/Proptech", "Analytics", "USA Portal"],
    description: {
      ru: "Аналитическая платформа рынка недвижимости Майами: прогнозирование цен, инвестиционные дашборды и метрики доходности.",
      en: "Miami real estate market analytics platform: price trend prediction, investment dashboards, and ROI yield metrics.",
    },
    image: "/portfolio/bigdatarealty.jpg",
    url: "https://bigdatarealty.com",
    status: "live",
  },
  {
    id: "bugera",
    title: "Vladimir Bugera — Miami Real Estate Analytics",
    category: "web",
    tags: ["Data Analytics", "Real Estate", "FinTech"],
    description: {
      ru: "Персональная платформа финансового аналитика и исследователя рынка жилой недвижимости Южной Флориды.",
      en: "Research and quantitative analytics platform for South Florida residential and commercial real estate.",
    },
    image: "/portfolio/bugera.jpg",
    url: "http://bugera.com",
    status: "live",
  },

  // --- Design Archive Projects (Authentic Client Showcase) ---
  {
    id: "mipt-global",
    title: "MIPT Global / Физтех Inside",
    category: "web",
    tags: ["Community", "Education", "Global Portal"],
    description: {
      ru: "Информационно-образовательный портал международного сообщества выпускников и студентов МФТИ.",
      en: "Educational community portal connecting global alumni and students of MIPT (Moscow Institute of Physics and Technology).",
    },
    image: "/portfolio/miptglobal.png",
    status: "archived",
    archivedYear: "2023",
  },
  {
    id: "cabaes-group",
    title: "Cabaes Group — Neighborhood Broker",
    category: "web",
    tags: ["Real Estate", "Branding", "UI/UX"],
    description: {
      ru: "Сайт брокерского агентства недвижимости полного цикла: аренда, покупка премиальных резиденций и кондоминиумов.",
      en: "Full-service real estate brokerage agency website: residential leasing, commercial investment, and luxury condominiums.",
    },
    image: "/portfolio/cabaes-group.png",
    status: "archived",
    archivedYear: "2024",
  },
  {
    id: "shef-kazan",
    title: "Шеф-Казан / Chef-Kazan",
    category: "web",
    tags: ["E-Commerce", "Catalog", "Online Store"],
    description: {
      ru: "Интернет-магазин чугунных казанов, мангалов, печей и аутентичной кухонной утвари с удобным чекаутом и каталогом.",
      en: "E-commerce store specializing in cast-iron cauldrons, grills, wood-fired stoves, and outdoor culinary cookware.",
    },
    image: "/portfolio/shefkazan.jpg",
    status: "archived",
    archivedYear: "2020",
  },
  {
    id: "parf-de-maniac",
    title: "Parf de Maniac — Niche Boutique",
    category: "web",
    tags: ["E-Commerce", "Luxury", "Perfumery"],
    description: {
      ru: "Бутик редкой селективной парфюмерии: карточки ароматов по нотам, фильтрация по брендам и удобная корзина покупок.",
      en: "Selective and niche perfumery online boutique: fragrance pyramids, olfactory notes filtering, and curated collections.",
    },
    image: "/portfolio/parfdeman.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "aquarium-beauty-spa",
    title: "Aquarium Beauty Spa & Wellness",
    category: "web",
    tags: ["Beauty & Spa", "Booking", "Wellness"],
    description: {
      ru: "Элегантный сайт спа-центра и салона косметологии: прайс-лист, галерея процедур, профили мастеров и онлайн-запись.",
      en: "Refined beauty salon and medical aesthetics center website: service menu, treatment gallery, master profiles, and booking.",
    },
    image: "/portfolio/aquarium.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "coralman-aquariums",
    title: "Coralman Aquariums — Bespoke Marine Systems",
    category: "web",
    tags: ["Design Studio", "Aqua Design", "Portfolio"],
    description: {
      ru: "Студия аквадизайна: проектирование рифовых комплексов, обслуживание морских биотопов и индивидуальное изготовление аквариумов.",
      en: "Aquatic design studio: bespoke marine reef ecosystems, custom freshwater installations, and professional maintenance.",
    },
    image: "/portfolio/coralman.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "sovetnik",
    title: "ЭИЦ «Советник» / EIC Sovetnik",
    category: "web",
    tags: ["Legal", "Consulting", "GovTech"],
    description: {
      ru: "Официальный сайт экспертно-информационного центра: сопровождение тендеров, правовой консалтинг и аудит процедур.",
      en: "Legal advisory & procurement consulting portal: public tender management, compliance audit, and corporate bidding advisory.",
    },
    image: "/portfolio/sovetnik.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "expert-center",
    title: "Expert Center — Government Contracts Advisory",
    category: "web",
    tags: ["Corporate", "Consulting", "B2B"],
    description: {
      ru: "Корпоративный портал консалтинговой группы по обеспечению участия бизнеса в крупных государственных контрактах.",
      en: "Consultancy firm web portal assisting enterprises in securing municipal and federal government procurement contracts.",
    },
    image: "/portfolio/expertus.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "expert-center-llc",
    title: "Expert Center LLC — USA Business Advisory",
    category: "web",
    tags: ["Legal", "USA Business", "Consulting"],
    description: {
      ru: "Платформа консалтинговых услуг по инкорпорации, налоговому планированию и открытию бизнеса во Флориде и США.",
      en: "Business advisory platform for international entrepreneurs: corporate registration, compliance, and Florida market entry.",
    },
    image: "/portfolio/expertllc.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "bart",
    title: "BART Investment Group — EB-5 Regional Center",
    category: "web",
    tags: ["Investments", "EB-5", "Finance"],
    description: {
      ru: "Презентационный портал инвестиционной группы по программе EB-5: девелопмент, инфраструктурные проекты и привлечение инвесторов.",
      en: "Investment group presentation portal for the EB-5 immigrant investor program: commercial development and EB-5 fund structuring.",
    },
    image: "/portfolio/bart.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "vivasan",
    title: "Vivasan — Swiss Natural Health Products",
    category: "web",
    tags: ["Health & Beauty", "Catalog", "Phyto"],
    description: {
      ru: "Каталог швейцарских эфирных масел, фитопрепаратов и натуральной косметики регионального представительства.",
      en: "Regional distributor web catalog for premium Swiss essential oils, phytotherapy, and natural wellness skincare.",
    },
    image: "/portfolio/vivasan.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "miamireach",
    title: "Miami Reach — South Florida City Guide",
    category: "web",
    tags: ["Travel & Leisure", "Concierge", "Miami"],
    description: {
      ru: "Консьерж-сервис и городской портал Майами: аренда яхт, вилл, автомобили и организация мероприятий под ключ.",
      en: "Miami city guide and luxury lifestyle concierge: yacht charters, exotic rentals, villa booking, and VIP services.",
    },
    image: "/portfolio/miamireach.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "moemiami",
    title: "Моё Майами / Moe Miami Media",
    category: "web",
    tags: ["Media", "Community", "News"],
    description: {
      ru: "Крупный региональный медиа-портал: афиша событий, новости округа Майами-Дейд, справочник заведений и сообщество.",
      en: "Regional media and community news portal covering South Florida culture, events calendar, and local business directory.",
    },
    image: "/portfolio/moemiami.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "maysa",
    title: "Майса Гида / Maysa Gida — Food Tech",
    category: "web",
    tags: ["B2B", "Food Tech", "Corporate"],
    description: {
      ru: "Корпоративный сайт поставщика пищевых ингредиентов, заквасок и технологических решений для молочной промышленности.",
      en: "Corporate portal for dairy industry enzyme cultures, ingredients supply, and bio-technological production solutions.",
    },
    image: "/portfolio/maysa.jpg",
    status: "archived",
    archivedYear: "2019",
  },
  {
    id: "kangaroo-kids",
    title: "Kangaroo Kids Club — Children Academy",
    category: "web",
    tags: ["Education", "Kids & Family", "Services"],
    description: {
      ru: "Детский образовательный центр: программы раннего развития, ментальная арифметика, творческие мастерские и расписание занятий.",
      en: "Early childhood development and creativity academy: STEM enrichment, mental math, arts workshops, and class scheduling.",
    },
    image: "/portfolio/kangaroo.jpg",
    status: "archived",
    archivedYear: "2019",
  },

  // --- Video & AI Showcases ---
  {
    id: "avatar-1",
    title: "AI Avatar Presenter 1",
    category: "video",
    tags: ["AI Technology", "Shorts 9:16", "Neural Voice"],
    description: {
      ru: "Презентация продукта с фотореалистичным цифровым аватаром.",
      en: "Product explainer featuring a photorealistic AI presenter.",
    },
    youtubeId: "M8g2gJlwH7M",
    isShort: true,
  },
  {
    id: "avatar-2",
    title: "AI Avatar Presenter 2",
    category: "video",
    tags: ["AI Technology", "Shorts 9:16", "Multilingual"],
    description: {
      ru: "Рекламный ролик с говорящим аватаром и динамичными субтитрами.",
      en: "Promotional spot with talking avatar and animated captions.",
    },
    youtubeId: "9_jdjXBknOw",
    isShort: true,
  },
  {
    id: "avatar-3",
    title: "AI Avatar Presenter 3",
    category: "video",
    tags: ["AI Technology", "Shorts 9:16", "Lead Hook"],
    description: {
      ru: "Короткий хук для привлечения лидов в воронку продаж.",
      en: "Short-form video hook engineered for social lead generation.",
    },
    youtubeId: "-UE0CTWQwD4",
    isShort: true,
  },
  {
    id: "yt-1",
    title: "YouTube Video Production 1",
    category: "video",
    tags: ["YouTube", "16:9", "Full Edit"],
    description: {
      ru: "Комплексный монтаж длинного YouTube-выпуска: графика, звук, динамика.",
      en: "Full YouTube production: audio mastering, dynamic B-roll & graphics.",
    },
    youtubeId: "KjhW0NmL2v0",
    isShort: false,
  },
  {
    id: "yt-2",
    title: "YouTube Video Production 2",
    category: "video",
    tags: ["YouTube", "16:9", "Interview"],
    description: {
      ru: "Монтаж экспертного интервью с цветокоррекцией и саунд-дизайном.",
      en: "Expert interview editing with custom motion graphics & color grading.",
    },
    youtubeId: "wm9bt16QY_Q",
    isShort: false,
  },
  {
    id: "yt-3",
    title: "YouTube Video Production 3",
    category: "video",
    tags: ["YouTube", "16:9", "Showcase"],
    description: {
      ru: "Презентационный ролик для коммерческого канала.",
      en: "High-paced commercial video showcase.",
    },
    youtubeId: "_9Z-gfKJRBU",
    isShort: false,
  },
];
