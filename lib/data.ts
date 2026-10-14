export interface PortfolioItem {
  id: string;
  title: string;
  category: 'web' | 'video';
  tags: string[];
  description: { ru: string; en: string };
  image?: string;
  url?: string;
  youtubeId?: string;
  isShort?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "bigdata-realty",
    title: "Big Data Realty",
    category: "web",
    tags: ["Fintech/Proptech", "Analytics", "USA Portal"],
    description: {
      ru: "Аналитический портал и блог о трендах на рынке недвижимости США.",
      en: "Analytics portal & research platform tracking US real estate market data.",
    },
    image: "/bigdata.jpg",
    url: "https://bigdatarealty.com",
  },
  {
    id: "american-med-travel",
    title: "American Med Travel",
    category: "web",
    tags: ["Healthcare", "USA Directory", "Glassmorphism"],
    description: {
      ru: "Премиальный портал медицинского туризма и каталог ведущих клиник США (онкология, кардиохирургия).",
      en: "Curated directory & portal connecting international patients with top-ranked US hospitals.",
    },
    image: "/americanmedtravel.jpg",
    url: "https://www.americanmedtravel.com/",
  },
  {
    id: "stazhkova",
    title: "Elena Stazhkova",
    category: "web",
    tags: ["Personal Brand", "Real Estate", "Next.js/HTML"],
    description: {
      ru: "Персональный сайт и портфолио агента по элитной недвижимости.",
      en: "Personal website & portfolio for a luxury real estate broker.",
    },
    image: "/stazhkova.jpg",
    url: "https://stazhkova.com",
  },
  {
    id: "iwd-solutions",
    title: "Impact Windows & Doors",
    category: "web",
    tags: ["Corporate", "USA/Florida", "Lead Gen"],
    description: {
      ru: "Сайт компании по установке ударопрочных окон и дверей во Флориде, США.",
      en: "Corporate website for impact-resistant window & door installations in Florida, USA.",
    },
    image: "/windoor.jpg",
    url: "https://iwdsolutions.com",
  },
  {
    id: "mipt-global",
    title: "MIPT Global",
    category: "web",
    tags: ["Community", "Education", "Global"],
    description: {
      ru: "Международная площадка сообщества выпускников МФТИ.",
      en: "International portal for the MIPT alumni global network.",
    },
    image: "/mipt.jpg",
    url: "https://miptglobal.com",
  },
  // Video & AI showcases
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
