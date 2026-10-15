"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import {
  Sparkles,
  Play,
  ArrowRight,
  ShieldCheck,
  Check,
  HelpCircle,
  ChevronDown,
  Globe2,
  Lock,
  FileCheck2,
  Smartphone,
  Video,
  UserCheck,
  Zap,
  Repeat,
  DollarSign,
  TrendingUp,
  Camera,
  Film,
  Scissors,
  Wand2,
} from "lucide-react";
import {
  CraftCard,
  CustomStampBadge,
  CustomPSCard,
  DoodlePointer,
} from "./HandDrawnDecorations";
import { VideoBubbleWidget } from "./VideoBubbleWidget";

export const AiVideoView: React.FC = () => {
  const { lang } = useLanguage();
  const [activeIframe, setActiveIframe] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [demoWidgetActive, setDemoWidgetActive] = useState<boolean>(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const sampleShorts = [
    {
      id: "M8g2gJlwH7M",
      title:
        lang === "ru"
          ? "Цифровой двойник эксперта - Презентация продукта"
          : lang === "sr"
          ? "Digitalni dvojnik stručnjaka - Prezentacija proizvoda"
          : "Digital Twin Presenter - Product Explainer",
      badge: lang === "ru" ? "Русский оригинал" : lang === "sr" ? "Original" : "Original Voice",
    },
    {
      id: "9_jdjXBknOw",
      title:
        lang === "ru"
          ? "Англоязычная версия с сохранением тембра голоса"
          : lang === "sr"
          ? "Engleska verzija sa očuvanom bojom glasa"
          : "English Localization with Native Voice Timbre",
      badge: lang === "ru" ? "Клон голоса (EN)" : lang === "sr" ? "AI Klon (EN)" : "Voice Clone (EN)",
    },
    {
      id: "-UE0CTWQwD4",
      title:
        lang === "ru"
          ? "Лид-магнит ролик для соцсетей и сайта"
          : lang === "sr"
          ? "Video za generisanje lidova za sajt i mreže"
          : "Social Lead Hook & Website Presenter",
      badge: lang === "ru" ? "Высокая конверсия" : lang === "sr" ? "Visoka konverzija" : "High Conversion",
    },
  ];

  const youtubeVideos = [
    {
      id: "KjhW0NmL2v0",
      title:
        lang === "ru"
          ? "YouTube Production - Полный монтаж выпуска"
          : lang === "sr"
          ? "YouTube produkcija - Kompletna montaža epizode"
          : "YouTube Production - Full Episode Edit",
      category: lang === "ru" ? "Подкаст / Выпуск" : lang === "sr" ? "Podkast / Emisija" : "Podcast / Episode",
    },
    {
      id: "wm9bt16QY_Q",
      title:
        lang === "ru"
          ? "YouTube Production - Экспертное интервью"
          : lang === "sr"
          ? "YouTube produkcija - Stručni intervju"
          : "YouTube Production - In-Depth Interview",
      category: lang === "ru" ? "Интервью" : lang === "sr" ? "Intervju" : "Interview",
    },
    {
      id: "_9Z-gfKJRBU",
      title:
        lang === "ru"
          ? "YouTube Production - Коммерческий шоукейс"
          : lang === "sr"
          ? "YouTube produkcija - Komercijalni video"
          : "YouTube Production - Commercial Showcase",
      category: lang === "ru" ? "Коммерческое видео" : lang === "sr" ? "Komercijalni video" : "Commercial Showcase",
    },
  ];

  const editingFeatures = [
    {
      icon: Scissors,
      titleRu: "Динамическая нарезка и ритм",
      titleEn: "Pacing & Cutdowns",
      titleSr: "Dinamična montaža i ritam",
      descRu: "Удаляем длинные паузы, оговорки и слова-паразиты. Выстраиваем плотный захватывающий темпоритм без просадок внимания.",
      descEn: "Eliminating dead pauses, filler words, and awkward takes. Tight narrative pacing engineered for high viewer retention.",
      descSr: "Uklanjamo duge pauze, greške i poštapalice. Gradimo dinamičan tempo koji drži pažnju gledalaca od prve sekunde.",
    },
    {
      icon: Wand2,
      titleRu: "Кинетические субтитры и B-roll",
      titleEn: "Kinetic Captions & B-Roll",
      titleSr: "Animirani titlovi i B-roll",
      descRu: "Яркие анимированные титры в стиле лучших YouTube-каналов, наложение иллюстраций, графиков и перебивок под слова спикера.",
      descEn: "High-contrast animated captions, relevant stock and bespoke B-roll insertions, graphs, and visual metaphors.",
      descSr: "Privlačni animirani titlovi po uzoru na najbolje YouTube kanale, dodavanje grafike, animacija i tematskih inserata.",
    },
    {
      icon: Zap,
      titleRu: "Саунд-дизайн и мастеринг",
      titleEn: "Sound Design & Mastering",
      titleSr: "Dizajn zvuka i mastering",
      descRu: "Шумоподавление, выравнивание громкости голоса, звуковые эффекты (whoosh, pop, click) и лицензированная фоновая музыка.",
      descEn: "Noise suppression, vocal EQ and compression, sound effects (whooshes, pops, impacts), and licensed background audio.",
      descSr: "Uklanjanje šuma, kompresija i čišćenje glasa, zvučni efekti i licencirana pozadinska muzika prilagođena temi.",
    },
    {
      icon: TrendingUp,
      titleRu: "CTR-обложки и хуки первых секунд",
      titleEn: "High-CTR Thumbnails & Hooks",
      titleSr: "CTR naslovne sličice i uvod",
      descRu: "Разрабатываем зацепляющие обложки с высоким процентом кликов и упаковываем первые 5 секунд ролика под максимальный просмотр.",
      descEn: "Designing click-worthy custom YouTube thumbnails and front-loading the opening 5-second hook for peak retention.",
      descSr: "Dizajniramo privlačne naslovne sličice sa visokom stopom klikova i osmišljavamo uvodnih 5 sekundi za maksimalnu gledanost.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      titleRu: "Заявка и бриф",
      titleEn: "Brief & Strategy",
      titleSr: "Prijava i brif",
      descRu: "Обсуждаем задачи: создание цифрового двойника, монтаж серии Shorts/Reels или YouTube-выпусков под ключ.",
      descEn: "We align on scope: custom digital twin training, ongoing Shorts/Reels pipelines, or turnkey YouTube episode editing.",
      descSr: "Definišemo ciljeve: izrada digitalnog dvojnika, montaža serije Shorts/Reels ili produkcija YouTube emisija.",
    },
    {
      step: "02",
      titleRu: "Съемка эталона (2-5 мин)",
      titleEn: "5-Minute Phone Recording",
      titleSr: "Snimanje etalona (2-5 min)",
      descRu: "Вы записываете короткое видео на телефон по нашей инструкции. В запись входит ваше личное видео-согласие.",
      descEn: "You record 2-5 minutes on your phone using our quick checklist, including your personal video consent statement.",
      descSr: "Snimate kratak video na telefonu po našem uputstvu. Snimak uključuje i vašu ličnu video saglasnost.",
    },
    {
      step: "03",
      titleRu: "Синтез двойника и клон голоса",
      titleEn: "Neural Synthesis & Voice Cloning",
      titleSr: "Sinteza dvojnika i klon glasa",
      descRu: "Обучаем модель на HeyGen, калибруем артикуляцию и создаем студийный клон тембра голоса на 30+ языках.",
      descEn: "We train neural models on HeyGen, fine-tune lip-sync phonemes, and generate a studio vocal clone in 30+ languages.",
      descSr: "Obučavamo model na HeyGen platformi, kalibrišemo artikulaciju i kreiramo studijski klon glasa na 30+ jezika.",
    },
    {
      step: "04",
      titleRu: "Пост-продакшн и монтаж",
      titleEn: "Post-Production Polish",
      titleSr: "Post-produkcija i montaža",
      descRu: "Монтируем ролики: накладываем B-roll, кинетические титры, саунд-дизайн, цветокоррекцию и графику.",
      descEn: "Our editors assemble masters: dynamic captions, contextual B-roll, sound design, color grading, and assets.",
      descSr: "Montiramo materijal: dodajemo B-roll, dinamične titlove, dizajn zvuka, korekciju boja i grafičke elemente.",
    },
    {
      step: "05",
      titleRu: "Готовые видео по расписанию",
      titleEn: "Turnkey Video Pipeline",
      titleSr: "Isporuka gotovih videa",
      descRu: "Вы просто присылаете текст сценария - через 24-48 часов получаете готовый ролик под ключ для публикации.",
      descEn: "Send script copy and receive finished broadcast-ready videos delivered to your schedule within 24-48 hours.",
      descSr: "Jednostavno pošaljete tekst scenarija - za 24-48 sati dobijate gotov profesionalni video spreman za objavu.",
    },
  ];

  const targetAudiences = [
    {
      titleRu: "Эксперты и блогеры",
      titleEn: "Coaches, Creators & Experts",
      titleSr: "Stručnjaci i kreatori",
      descRu: "Регулярный контент для соцсетей без съемочных дней. Выход на англоязычную аудиторию с вашим собственным голосом без акцента.",
      descEn: "Consistent video content without monthly film days. Direct expansion to global audiences in your own natural voice.",
      descSr: "Redovan video sadržaj bez snimajućih dana. Izlazak na globalno tržište sa vašim glasom bez stranog akcenta.",
      tagRu: "Shorts & Reels без студий",
      tagEn: "Zero Studio Stress",
      tagSr: "Bez snimanja u studiju",
    },
    {
      titleRu: "Онлайн-школы и EdTech",
      titleEn: "EdTech & Online Academies",
      titleSr: "Online škole i kursevi",
      descRu: "Обновление уроков за час без пересъемки всего курса. Достаточно отредактировать абзац текста в сценарии.",
      descEn: "Update outdated course lessons in 1 hour without reshooting. Simply edit the script text and re-render the segment.",
      descSr: "Ažuriranje lekcija za sat vremena bez ponovnog snimanja. Dovoljno je samo promeniti pasus teksta u skripti.",
      tagRu: "Экономия до 90% бюджета",
      tagEn: "90% Cost Reduction",
      tagSr: "90% ušteda budžeta",
    },
    {
      titleRu: "Бизнес и фаундеры",
      titleEn: "Founders & Corporate Leaders",
      titleSr: "Osnivači i kompanije",
      descRu: "Интерактивный видео-двойник на сайте, регулярные обращения к команде, онбординг сотрудников и видеовизитки.",
      descEn: "Interactive website video avatar, executive all-hands updates, employee onboarding, and personalized B2B pitch videos.",
      descSr: "Interaktivni video dvojnik na sajtu, poruke zaposlenima, obuka novih radnika i video prezentacije.",
      tagRu: "+35-50% к конверсии сайта",
      tagEn: "+35-50% Conversion Lift",
      tagSr: "+35-50% veća konverzija",
    },
    {
      titleRu: "YouTube-каналы и подкасты",
      titleEn: "YouTube Channels & Podcasters",
      titleSr: "YouTube kanali i podkasti",
      descRu: "Комплексный монтаж длинных выпусков (16:9), нарезка лучших моментов на Shorts/Reels и создание обложек с высоким CTR.",
      descEn: "Turnkey full-length YouTube episode editing (16:9), multi-angle cutdowns, viral Shorts extraction, and high-CTR thumbnails.",
      descSr: "Kompletna montaža dugih emisija (16:9), izvlačenje najboljih momenata za Shorts/Reels i dizajn naslovnih sličica.",
      tagRu: "YouTube под ключ",
      tagEn: "Turnkey YouTube",
      tagSr: "YouTube po sistemu ključ u ruke",
    },
  ];

  const pricingTiers = [
    {
      nameRu: "Пробный пилот",
      nameEn: "Starter Pilot",
      nameSr: "Probni paket",
      price: "$190",
      timeRu: "2-3 раб. дня",
      timeEn: "2-3 business days",
      timeSr: "2-3 radna dana",
      featuresRu: [
        "Создание персонального двойника",
        "Базовое клонирование голоса",
        "1 готовый ролик под ключ (до 60 сек)",
        "Обязательное видео-согласие",
        "Базовый монтаж и титры",
        "1 круг правок и калибровки",
      ],
      featuresEn: [
        "Custom digital twin creation",
        "Baseline neural voice cloning",
        "1 finished video master (up to 60 sec)",
        "Verified personal video consent",
        "Essential captions and edit",
        "1 revision & calibration cycle",
      ],
      featuresSr: [
        "Kreiranje personalnog dvojnika",
        "Osnovno kloniranje glasa",
        "1 gotov video (do 60 sekundi)",
        "Obavezna video saglasnost",
        "Osnovni titlovi i montaža",
        "1 krug izmena i kalibracije",
      ],
      recommended: false,
    },
    {
      nameRu: "Персональный двойник Pro",
      nameEn: "Studio Twin Pro",
      nameSr: "Personalni dvojnik Pro",
      price: "$450",
      timeRu: "3-5 раб. дней",
      timeEn: "3-5 business days",
      timeSr: "3-5 radnih dana",
      featuresRu: [
        "Создание студийного двойника высокой точности",
        "Studio Voice Clone с интонациями и дыханием",
        "3 готовых ролика (Reels / Shorts / Презентация)",
        "Динамичный монтаж, B-roll и саунд-дизайн",
        "Опция дубляжа на английский язык с вашим тембром",
        "2 круга правок на ролик",
      ],
      featuresEn: [
        "High-fidelity studio digital twin",
        "Studio Voice Clone with natural breaths & cadence",
        "3 master videos (Shorts / Web Presenter / Promo)",
        "Kinetic captions, sound design & B-roll edit",
        "Multilingual clone option (English / Spanish)",
        "2 revision rounds per master",
      ],
      featuresSr: [
        "Kreiranje studijskog dvojnika visoke rezolucije",
        "Studio Voice Clone sa prirodnim intonacijama",
        "3 gotova videa (Reels / Shorts / Prezentacija)",
        "Dinamična montaža, B-roll i dizajn zvuka",
        "Mogućnost sinhronizacije na engleski sa vašim glasom",
        "2 kruga izmena po videu",
      ],
      recommended: true,
      badgeRu: "Топ продаж",
      badgeEn: "Most Popular",
      badgeSr: "Najpopularniji",
    },
    {
      nameRu: "Двойник + Контент-машина",
      nameEn: "Scale Machine",
      nameSr: "Dvojnik + Video mašina",
      price: "$980",
      timeRu: "По графику",
      timeEn: "Weekly Cadence",
      timeSr: "Po rasporedu",
      featuresRu: [
        "Студийный двойник + расширенная калибровка",
        "Studio Voice Clone высшего качества",
        "10 готовых роликов под ключ (сценарии, титры, монтаж)",
        "Перевод и дубляж на 2 иностранных языка",
        "Интеграция видео-виджета в ваш сайт (Вариант А)",
        "До 3 правок на каждый ролик",
      ],
      featuresEn: [
        "Studio twin + multi-angle gesture calibration",
        "Ultra-realistic studio voice clone",
        "10 turnkey videos (scripts, captions, motion B-roll)",
        "Voice clone translation into 2 foreign languages",
        "Lightweight on-site Video Bubble integration",
        "Up to 3 revisions per master",
      ],
      featuresSr: [
        "Studijski dvojnik sa kalibracijom pokreta",
        "Vrhunski Studio Voice Clone",
        "10 gotovih videa po sistemu ključ u ruke",
        "Prevod i sinhronizacija na 2 strana jezika",
        "Ugradnja interaktivnog video vidžeta na vaš sajt",
        "Do 3 izmene po svakom videu",
      ],
      recommended: false,
    },
  ];

  const faqs = [
    {
      qRu: "В чем преимущество связки «Цифровой двойник + Видеомонтаж»?",
      qEn: "What is the advantage of pairing a Digital Twin with full Video Post-Production?",
      qSr: "Koja je prednost kombinacije digitalnog dvojnika i profesionalne video montaže?",
      aRu: "Сам по себе сырой аватар - это просто говорящая голова. Мы упаковываем его в полноценный коммерческий контент: накладываем кинетическую графику, иллюстрации, примеры интерфейсов (B-roll), динамичные субтитры и звуковые эффекты. В результате ролик удерживает зрителя так же сильно, как видео топовых мировых блогеров.",
      aEn: "A raw avatar on its own is merely a static talking head. We elevate it into high-converting media: layering kinetic typography, contextual B-roll footage, animated diagrams, sound effects, and music. The resulting video retains viewer attention with the polished standards of leading global channels.",
      aSr: "Sam po sebi avatar je samo statičan lik koji govori. Mi ga pretvaramo u vrhunski komercijalni video: dodajemo animirane titlove, tematske B-roll inserte, zvučne efekte i muziku. Krajnji rezultat drži pažnju gledalaca jednako efikasno kao video sadržaj najuspešnijih kanala.",
    },
    {
      qRu: "Монтируете ли вы обычные длинные YouTube-выпуски, снятые на камеру?",
      qEn: "Do you also edit traditional full-length YouTube episodes shot on real cameras?",
      qSr: "Da li montirate i standardne duge YouTube emisije snimljene kamerom?",
      aRu: "Да, абсолютно! Мы занимаемся полноценным монтажом горизонтальных YouTube-выпусков (16:9): подкастов, интервью, обучающих видео и шоукейсов. Делаем динамичную нарезку, чистим звук, выравниваем цвет, добавляем плашки и рисуем кликабельные превью.",
      aEn: "Yes, definitely! We provide complete end-to-end post-production for traditional 16:9 YouTube videos: podcasts, interviews, tutorials, and corporate showcases. This includes multi-cam cutdowns, audio mastering, color grading, animated lower thirds, and high-CTR thumbnails.",
      aSr: "Da, naravno! Radimo kompletnu montažu horizontalnih YouTube emisija (16:9): podkasta, intervjua, edukativnih materijala i prezentacija. Pružamo dinamično sečenje, obradu zvuka, korekciju boja i dizajn privlačnih naslovnih sličica.",
    },
    {
      qRu: "Двойник будет выглядеть неестественно или роботизировано?",
      qEn: "Will the digital twin look robotic or unnatural?",
      qSr: "Da li će digitalni dvojnik izgledati neprirodno ili robotski?",
      aRu: "Качество двойника напрямую зависит от исходной записи. Мы даем подробную памятку по свету, звуку и ракурсу камеры, а перед запуском основной работы показываем тестовый ролик. Современный HeyGen генерирует естественную микромимику, моргание и идеальный липсинк. Если что-то не понравится - мы калибруем модель или бесплатно переснимаем эталон.",
      aEn: "Twin quality directly reflects the initial footage. We provide a step-by-step recording guide for lighting, mic placement, and framing. Modern HeyGen neural pipelines render micro-expressions, eye blinks, and exact phoneme lip synchronization. We review pilot footage together and fine-tune until it matches your standard.",
      aSr: "Kvalitet direktno zavisi od početnog snimka. Dajemo vam precizno uputstvo za svetlo, zvuk i ugao kamere, a pre izrade paketa pregledate testni video. Savremeni HeyGen mehanizam obezbeđuje prirodnu mikromimiku i savršeno pomeranje usana. Ukoliko je potrebno, vršimo finu kalibraciju.",
    },
    {
      qRu: "Можно ли сделать цифрового двойника по фото или по чужому видео из интернета?",
      qEn: "Can you create an avatar from a static photo or third-party videos?",
      qSr: "Da li možete napraviti avatara na osnovu fotografije ili tuđeg snimka sa interneta?",
      aRu: "Категорически нет. Это основа нашей этики и безопасности: двойник создается ТОЛЬКО при наличии вашего личного видео-согласия, записанного на камеру в соответствии с регламентом платформы. Мы не создаем двойников других людей по просьбе третьих лиц.",
      aEn: "Strictly no. This is the cornerstone of our ethical AI security policy: avatars are generated ONLY with verifiable personal video consent delivered by the person on camera. We never synthesize third-party individuals.",
      aSr: "Kategorično ne. To je temelj naše etičke i bezbednosne politike: avatar se kreira ISKLJUČIVO uz vašu ličnu video saglasnost snimljenu na kameri po protokolu platforme. Ne pravimo avatare trećih lica.",
    },
    {
      qRu: "Кому юридически принадлежат права на двойника и готовые ролики?",
      qEn: "Who owns the intellectual property and commercial usage rights?",
      qSr: "Kome pravno pripadaju autorska i komercijalna prava na dvojnika i video?",
      aRu: "100% прав принадлежат вам. Ваши исходные видеоматериалы используются исключительно для вашего проекта и удаляются по вашему первому требованию. Мы не используем ваш образ в рекламе без вашего отдельного письменного разрешения.",
      aEn: "100% of all intellectual property and commercial rights belong to you. Your raw training files are utilized solely for your authorized avatar instance and purged upon request. We never showcase your likeness without explicit sign-off.",
      aSr: "100% autorskih i komercijalnih prava pripada vama. Vaši izvorni materijali se koriste isključivo za vaš projekat i brišu se na vaš zahtev. Nikada ne koristimo vaš lik u promotivne svrhe bez pismene saglasnosti.",
    },
    {
      qRu: "Не будет ли тормозить сайт при установке видео-виджета с двойником?",
      qEn: "Will the website slow down if we embed the founder video bubble?",
      qSr: "Da li će ugradnja video vidžeta sa dvojnikom usporiti sajt?",
      aRu: "Абсолютно нет. Мы инженеры, поэтому используем наш собственный легковесный компонент FewHands (Вариант А): он весит всего 3-4 КБ, не загружает видео при старте страницы и не влияет на показатели Google PageSpeed (98-100 баллов). Видео подгружается только после первого клика пользователя.",
      aEn: "Zero performance drop. As engineering specialists, we deploy our proprietary FewHands lightweight widget (Option A): weighing just 3-4 KB, it performs zero video preloading during initial page render, ensuring 98-100 Google PageSpeed scores.",
      aSr: "Apsolutno ne. Kao inženjerski studio koristimo naš sopstveni lagani FewHands vidžet (Varijanta A): ima samo 3-4 KB, ne učitava video dok se stranica otvara i ne utiče na Google PageSpeed (98-100 bodova). Video se pokreće tek na klik.",
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      {/* Floating Interactive Widget Demo */}
      <VideoBubbleWidget
        videoId="M8g2gJlwH7M"
        startOpened={demoWidgetActive}
        titleRu="Привет! Я цифровой двойник FewHands. Могу встречать ваших клиентов на сайте и отвечать на вопросы без потери скорости!"
        titleEn="Hi! I am the FewHands digital twin. I greet visitors directly on your site with zero page load impact!"
        titleSr="Zdravo! Ja sam FewHands digitalni dvojnik. Mogu dočekati posetioce na vašem sajtu bez usporavanja performansi!"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8edf3] border border-[#9c386d]/25 text-[#9c386d] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#9c386d]" />
              <span>
                {lang === "ru"
                  ? "Цифровые двойники (HeyGen) & Видеомонтаж под ключ"
                  : lang === "sr"
                  ? "Digitalni dvojnici (HeyGen) & Video montaža"
                  : "Custom Digital Twins (HeyGen) & Turnkey Video Editing"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-[1.15]">
              {lang === "ru"
                ? "Цифровой двойник с вашим лицом и голосом + видеомонтаж под ключ"
                : lang === "sr"
                ? "Digitalni dvojnik vašim licem i glasom + video montaža po meri"
                : "Your Custom Digital Twin & High-Impact Turnkey Video Production"}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#585068] leading-relaxed max-w-2xl">
              {lang === "ru"
                ? "Объединяем создание персональных цифровых аватаров с профессиональным пост-продакшном: от вирусных Shorts и Reels со звуковым дизайном до длинных экспертных YouTube-выпусков (16:9). Запишите себя один раз за 5 минут - дальше получайте регулярный поток готовых видео без студии и операторов."
                : lang === "sr"
                ? "Spajamo izradu personalnih digitalnih avatara sa profesionalnom montažom: od dinamičnih Shorts i Reels videa do dugih YouTube emisija (16:9). Snimite sebe jednom za 5 minuta - a zatim dobijajte redovan video sadržaj bez studija i snimatelja."
                : "We integrate custom digital twin synthesis with broadcast-grade post-production: from viral retention-engineered Shorts & Reels to full-length YouTube episodes (16:9). Record yourself once in 5 minutes - then generate high-converting video pipelines with zero studio stress."}
            </p>

            <div className="mt-8 flex flex-col items-start gap-2">
              <DoodlePointer
                text={
                  lang === "ru"
                    ? "рассчитайте смету за 1 минуту ↘"
                    : lang === "sr"
                    ? "izračunajte procenu za 1 minut ↘"
                    : "itemized quote in 1 minute ↘"
                }
                direction="curved-down-right"
                className="mb-1"
              />
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/estimate?service=video"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9c386d] to-[#6d244c] hover:opacity-95 text-white font-semibold text-sm shadow-lg shadow-[#9c386d]/20 transition-all"
                >
                  <span>
                    {lang === "ru"
                      ? "Рассчитать стоимость сметы"
                      : lang === "sr"
                      ? "Izračunajte procenu cene"
                      : "Calculate Production Cost"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#2d263b]/15 bg-white text-[#2d263b] hover:bg-[#f1f0f5] font-semibold text-sm shadow-sm transition-all"
                >
                  <span>
                    {lang === "ru"
                      ? "Обсудить проект со студией"
                      : lang === "sr"
                      ? "Konsultacije sa studiom"
                      : "Discuss Project with Studio"}
                  </span>
                </Link>
              </div>

              {/* Instant Widget Trigger Button */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-3">
                <button
                  onClick={() => setDemoWidgetActive(true)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#386161] bg-[#edf5f5] hover:bg-[#dfeeee] px-3 py-1.5 rounded-lg border border-[#386161]/30 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-[#386161]" />
                  <span>
                    {lang === "ru"
                      ? "Запустить демо видео-двойника в углу экрана"
                      : lang === "sr"
                      ? "Pokrenite demo video dvojnika u uglu ekrana"
                      : "Test live on-site video avatar bubble"}
                  </span>
                </button>
                <span className="text-[11px] text-[#585068]">
                  {lang === "ru" ? "0% влияния на скорость сайта" : lang === "sr" ? "0% usporavanja sajta" : "Zero performance penalty"}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-2">
            <CraftCard
              tag={
                lang === "ru"
                  ? "2 В 1: ДВОЙНИК + МОНТАЖ"
                  : lang === "sr"
                  ? "2 U 1: DVOJNIK + MONTAŽA"
                  : "2-IN-1: TWIN + EDITING"
              }
              question={
                lang === "ru"
                  ? "Скучная «говорящая голова»? НЕТ [X]"
                  : lang === "sr"
                  ? "Monotona glava koja priča? NE [X]"
                  : "Boring static talking head? NO [X]"
              }
              reason={
                lang === "ru"
                  ? "Мы упаковываем двойника в динамичный видеоряд: кинетические субтитры, B-roll кадры, звуковые эффекты и монтаж под ключ."
                  : lang === "sr"
                  ? "Spajamo digitalnog dvojnika sa dinamičnom montažom: animirani titlovi, B-roll kadrovi, zvučni efekti i obrada."
                  : "We package custom avatars into high-retention media: kinetic typography, contextual B-roll, sound design, and broadcast polish."
              }
              checked={false}
              rotate="rotate-1"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* TRUST & SECURITY PILLAR BANNER (ETHICS) */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-[#386161]/25 bg-gradient-to-br from-[#edf5f5]/80 via-white to-[#edf5f5]/50 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#386161]/10 text-[#386161] text-xs font-bold mb-2">
              <ShieldCheck className="w-4 h-4 text-[#386161]" />
              <span>
                {lang === "ru"
                  ? "Этика, безопасность и защита персональных данных"
                  : lang === "sr"
                  ? "Etika, bezbednost i zaštita privatnosti"
                  : "Ethics, Data Security & Likeness Governance"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Ваш двойник не может быть создан без вашего личного согласия. Никем и никогда."
                : lang === "sr"
                ? "Vaš dvojnik ne može biti kreiran bez vaše lične saglasnosti. Nikada i ni od koga."
                : "Your digital twin cannot be created without your personal consent. By anyone, ever."}
            </h2>
            <p className="text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Мы открыто защищаем цифровую безопасность клиентов. Верификационное видео-согласие - не формальность, а ваш главный юридический и этический щит."
                : lang === "sr"
                ? "Otvoreno štitimo bezbednost naših klijenata. Video saglasnost nije formalnost, već vaša zakonska garancija i zaštitni štit."
                : "We enforce bank-grade integrity protocols. Explicit video consent is not bureaucracy - it is your ironclad guarantee against unauthorized likeness exploitation."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-white border border-[#386161]/20 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#edf5f5] text-[#386161] flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#2d263b] mb-1">
                {lang === "ru" ? "Личное видео-согласие" : lang === "sr" ? "Lična video saglasnost" : "Verified Video Consent"}
              </h3>
              <p className="text-xs text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Вы лично на камеру зачитываете текст согласия. Без этого система HeyGen технически блокирует создание аватара."
                  : lang === "sr"
                  ? "Lično na kameri izgovarate izjavu o saglasnosti. Bez toga sistem tehnički odbija kreiranje avatara."
                  : "You deliver a spoken authorization on camera. Without it, the engine strictly rejects synthesis."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#386161]/20 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#edf5f5] text-[#386161] flex items-center justify-center mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#2d263b] mb-1">
                {lang === "ru" ? "Защита от фейков" : lang === "sr" ? "Zaštita od zloupotrebe" : "Zero Hallucinations"}
              </h3>
              <p className="text-xs text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Двойник произносит только утвержденный вами текст. Он ничего не придумывает от себя и не импровизирует."
                  : lang === "sr"
                  ? "Dvojnik izgovara isključivo scenario koji ste lično odobrili. Samostalno ne može dodati nijednu reč."
                  : "Your twin articulates exclusively pre-screened script text with 100% deterministic fidelity."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#386161]/20 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#edf5f5] text-[#386161] flex items-center justify-center mb-3">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#2d263b] mb-1">
                {lang === "ru" ? "100% прав у вас" : lang === "sr" ? "100% autorskih prava vama" : "100% Commercial IP Rights"}
              </h3>
              <p className="text-xs text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Все права на готовые ролики, синтезированный голос и аватар принадлежат вам для любых коммерческих целей."
                  : lang === "sr"
                  ? "Sva komercijalna prava na gotove snimke, klonirani glas i avatara pripadaju isključivo vama."
                  : "Full commercial ownership of video masters, cloned audio models, and marketing usage rights belongs to you."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#386161]/20 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#edf5f5] text-[#386161] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#2d263b] mb-1">
                {lang === "ru" ? "Удаление исходников" : lang === "sr" ? "Brisanje izvornih fajlova" : "Data Purge on Demand"}
              </h3>
              <p className="text-xs text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Сырые обучающие видео используются строго для вашего проекта и удаляются по вашему первому запросу."
                  : lang === "sr"
                  ? "Sirovi snimci se koriste isključivo za vaš projekat i brišu se odmah na vaš zahtev."
                  : "Source training files are strictly isolated and permanently scrubbed from our systems on your request."}
              </p>
            </div>
          </div>
        </div>

        {/* SHOWCASE 1: VERTICAL FORMAT (9:16 SHORTS & REELS) */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-[#9c386d] uppercase tracking-wider">
              {lang === "ru"
                ? "Направление 1: Вертикальные ролики 9:16 (Shorts, Reels, Сайты)"
                : lang === "sr"
                ? "Pravac 1: Vertikalni formati 9:16 (Shorts, Reels, Sajtovi)"
                : "Focus 1: 9:16 Vertical Video (Shorts, Reels, Web Presenters)"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Примеры работы цифровых двойников с динамичным монтажом"
                : lang === "sr"
                ? "Primeri digitalnih dvojnika sa dinamičnom montažom"
                : "Digital Twins Paired with Dynamic Kinetic Editing"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Нажмите на ролик, чтобы воспроизвести образец с живой мимикой, клоном голоса и монтажом."
                : lang === "sr"
                ? "Kliknite na video za prikaz uzorka sa prirodnom mikromimikom, kloniranim glasom i montažom."
                : "Click any preview below to experience realistic facial articulation, multilingual voice cloning, and tight post-production."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sampleShorts.map((item) => (
              <div
                key={item.id}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-md bg-black group border border-slate-200"
              >
                {activeIframe === item.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div
                    onClick={() => setActiveIframe(item.id)}
                    className="w-full h-full cursor-pointer relative"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white border border-white/20">
                        {item.badge}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-xs font-semibold text-white line-clamp-2">{item.title}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#9c386d] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SHOWCASE 2: HORIZONTAL YOUTUBE PRODUCTION (16:9) */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
              {lang === "ru"
                ? "Направление 2: Горизонтальный YouTube-монтаж (16:9)"
                : lang === "sr"
                ? "Pravac 2: Horizontalna YouTube montaža (16:9)"
                : "Focus 2: Full-Length YouTube Post-Production (16:9)"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Монтаж длинных YouTube-выпусков, подкастов и интервью"
                : lang === "sr"
                ? "Montaža dugih YouTube emisija, podkasta i intervjua"
                : "Turnkey YouTube Episodes, Podcasts & Commercial Shows"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Комплексный пост-продакшн для авторов и бизнеса: вы присылаете отснятый материал - мы отдаем готовый выпуск с нарезкой, чисткой звука и обложкой."
                : lang === "sr"
                ? "Kompletna postprodukcija za autore i kompanije: pošaljete sirovi snimak - mi isporučujemo gotovu emisiju sa obradom zvuka i naslovnom sličicom."
                : "End-to-end post-production for channels and brands: send raw footage and receive dynamic broadcast-ready cuts, polished sound, and high-CTR thumbnails."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {youtubeVideos.map((yt) => (
              <div
                key={yt.id}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-sm bg-black group border border-slate-200"
              >
                {activeIframe === yt.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${yt.id}?autoplay=1`}
                    title={yt.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div
                    onClick={() => setActiveIframe(yt.id)}
                    className="w-full h-full cursor-pointer relative"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${yt.id}/hqdefault.jpg`}
                      alt={yt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white border border-white/20">
                        {yt.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white translate-x-0.5" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <span className="text-xs font-semibold text-white line-clamp-1">{yt.title}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* EDITING CAPABILITIES GRID */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-100 pt-8">
            {editingFeatures.map((ef, idx) => {
              const IconComp = ef.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <div className="w-8 h-8 rounded-lg bg-[#2d263b] text-white flex items-center justify-center mb-2.5">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2d263b] mb-1">
                    {lang === "ru" ? ef.titleRu : lang === "sr" ? ef.titleSr : ef.titleEn}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#585068] leading-relaxed">
                    {lang === "ru" ? ef.descRu : lang === "sr" ? ef.descSr : ef.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* EXCLUSIVE FEATURE: ИНТЕРАКТИВНЫЙ ВИДЕО-ДВОЙНИК НА САЙТЕ (ВАРИАНТ А) */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#2d263b] via-[#3a2f4c] to-[#2d263b] text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#9c386d]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#faf9fb] text-xs font-semibold mb-4 border border-white/15">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {lang === "ru"
                    ? "Фирменная разработка FewHands · Вариант А"
                    : lang === "sr"
                    ? "FewHands rešenje · Varijanta A"
                    : "Exclusive FewHands Component · Option A"}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {lang === "ru"
                  ? "Видео-двойник прямо на вашем сайте: встречайте посетителей лично"
                  : lang === "sr"
                  ? "Video dvojnik na vašem sajtu: dočekajte posetioce lično"
                  : "Live Digital Twin on Your Website: Greet Every Visitor In Person"}
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {lang === "ru"
                  ? "Мы встраиваем легковесный интерактивный видео-виджет с вашим двойником в правый угол сайта. Двойник лично рассказывает об услуге, вызывает доверие и ведет посетителя к форме заявки. Никакой сторонней абонплаты и 0% влияния на скорость загрузки сайта!"
                  : lang === "sr"
                  ? "Ugrađujemo lagani interaktivni video vidžet sa vašim dvojnikom u ugao sajta. Dvojnik lično predstavlja uslugu, gradi poverenje i vodi posetioca ka kupovini. Bez mesečnih pretplata za spoljne servise i 0% usporavanja sajta!"
                  : "We embed an ultra-lightweight interactive video bubble featuring your verified digital twin. The founder personally greets incoming traffic, conveys product value, and converts users to demo signups. Zero SaaS subscriptions and zero Google PageSpeed penalty."}
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <div className="text-emerald-400 font-extrabold text-lg sm:text-xl">+35-50%</div>
                  <div className="text-slate-300">
                    {lang === "ru" ? "Рост конверсии лендинга" : lang === "sr" ? "Veća konverzija sajta" : "Conversion Lift"}
                  </div>
                </div>
                <div>
                  <div className="text-purple-300 font-extrabold text-lg sm:text-xl">3-4 КБ</div>
                  <div className="text-slate-300">
                    {lang === "ru" ? "Вес нашего скрипта" : lang === "sr" ? "Veličina skripte" : "Script Footprint"}
                  </div>
                </div>
                <div>
                  <div className="text-amber-300 font-extrabold text-lg sm:text-xl">100 / 100</div>
                  <div className="text-slate-300">
                    {lang === "ru" ? "Google Core Web Vitals" : lang === "sr" ? "Google PageSpeed ocena" : "Google PageSpeed Score"}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setDemoWidgetActive(true)}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#9c386d] to-[#7f2656] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>
                    {lang === "ru"
                      ? "Протестировать виджет прямо сейчас"
                      : lang === "sr"
                      ? "Isprobajte vidžet odmah"
                      : "Trigger Live Demo Bubble"}
                  </span>
                </button>
                <Link
                  href="/estimate?service=video"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <span>
                    {lang === "ru" ? "Заказать для своего сайта" : lang === "sr" ? "Naručite za svoj sajt" : "Order On-Site Presenter"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="p-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md max-w-xs text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.ytimg.com/vi/M8g2gJlwH7M/hqdefault.jpg"
                  alt="Website Video Bubble"
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white/30 shadow-2xl mb-4"
                />
                <h4 className="text-base font-bold text-white">
                  {lang === "ru" ? "Видео-виджет FewHands" : lang === "sr" ? "FewHands video vidžet" : "FewHands Video Bubble"}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {lang === "ru"
                    ? "Устанавливается на любой сайт за 5 минут. Посетители кликают и смотрят истории со звуком."
                    : lang === "sr"
                    ? "Postavlja se na bilo koji sajt za 5 minuta. Posetioci gledaju video sa zvukom na klik."
                    : "Installs on any modern web stack in 5 minutes. Clean responsive stories-style player."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: КАК ЭТО РАБОТАЕТ (5 ШАГОВ) */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-[#9c386d] uppercase tracking-wider">
              {lang === "ru" ? "Простой понятный процесс" : lang === "sr" ? "Jednostavan proces" : "Streamlined Process"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Как мы создаем контент от эталона до готового монтажа"
                : lang === "sr"
                ? "Kako kreiramo video od etalona do gotove montaže"
                : "How We Engineer Media from Baseline to Master Edit"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "5 понятных этапов от первой заявки до регулярного выпуска контента вашим лицом и голосом."
                : lang === "sr"
                ? "5 jednostavnih koraka od prvog razgovora do redovnog kreiranja videa vašim licem i glasom."
                : "5 straightforward steps from initial onboarding to automated multi-channel video delivery."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((ws, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-[#9c386d]/40 transition-colors"
              >
                <div>
                  <span className="text-xl font-mono font-black text-[#9c386d]">
                    {ws.step}
                  </span>
                  <h3 className="font-bold text-sm text-[#2d263b] mt-2 mb-1.5">
                    {lang === "ru" ? ws.titleRu : lang === "sr" ? ws.titleSr : ws.titleEn}
                  </h3>
                  <p className="text-xs text-[#585068] leading-relaxed">
                    {lang === "ru" ? ws.descRu : lang === "sr" ? ws.descSr : ws.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: ДЛЯ КОГО (4 ЦЕЛЕВЫЕ АУДИТОРИИ) */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#f1f0f5]/60 border border-[#2d263b]/10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-[#386161] uppercase tracking-wider">
              {lang === "ru" ? "Сферы применения" : lang === "sr" ? "Primena u praksi" : "Target Audiences"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Для кого окупается медиа-продакшн полного цикла"
                : lang === "sr"
                ? "Za koga se isplati video produkcija punog ciklusa"
                : "Who Generates Immediate ROI from Media Pipelines"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((aud, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#edf5f5] text-[#386161] text-[11px] font-bold mb-3">
                    {lang === "ru" ? aud.tagRu : lang === "sr" ? aud.tagSr : aud.tagEn}
                  </span>
                  <h3 className="text-base font-bold text-[#2d263b] mb-2">
                    {lang === "ru" ? aud.titleRu : lang === "sr" ? aud.titleSr : aud.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                    {lang === "ru" ? aud.descRu : lang === "sr" ? aud.descSr : aud.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: ТАРИФЫ И АБОНЕМЕНТЫ */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-[#9c386d] uppercase tracking-wider">
              {lang === "ru" ? "Прозрачные фиксированные цены" : lang === "sr" ? "Transparentne fiksne cene" : "Fixed-Price Tiers"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Тарифы на цифровых двойников и монтаж"
                : lang === "sr"
                ? "Paketi za digitalne dvojnike i video montažu"
                : "Production & Video Editing Packages"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Без скрытых доплат. Все коммерческие права на двойника и готовые ролики переходят вам."
                : lang === "sr"
                ? "Bez skrivenih troškova. Sva prava na dvojnika i video materijale pripadaju vama."
                : "No recurring vendor lock-in. Full commercial IP rights transferred upon delivery."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-3xl flex flex-col justify-between transition-all ${
                  tier.recommended
                    ? "bg-[#2d263b] text-white shadow-xl border-2 border-[#9c386d] relative transform md:-translate-y-2"
                    : "bg-white text-[#2d263b] border border-slate-200/80 shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        tier.recommended ? "text-[#e890be]" : "text-[#9c386d]"
                      }`}
                    >
                      {lang === "ru" ? tier.nameRu : lang === "sr" ? tier.nameSr : tier.nameEn}
                    </span>
                    {tier.recommended && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#9c386d] text-white text-[10px] font-bold">
                        {lang === "ru" ? tier.badgeRu : lang === "sr" ? tier.badgeSr : tier.badgeEn}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {tier.price}
                    </span>
                    <span
                      className={`text-xs ${
                        tier.recommended ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      / {lang === "ru" ? "проект" : lang === "sr" ? "projekat" : "turnkey"}
                    </span>
                  </div>

                  <div
                    className={`mt-2 text-xs font-semibold ${
                      tier.recommended ? "text-emerald-300" : "text-emerald-700"
                    }`}
                  >
                    ⏱ {lang === "ru" ? tier.timeRu : lang === "sr" ? tier.timeSr : tier.timeEn}
                  </div>

                  <ul className="mt-6 space-y-3 text-xs sm:text-sm">
                    {(lang === "ru"
                      ? tier.featuresRu
                      : lang === "sr"
                      ? tier.featuresSr
                      : tier.featuresEn
                    ).map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.recommended ? "text-emerald-400" : "text-[#386161]"
                          }`}
                        />
                        <span
                          className={
                            tier.recommended ? "text-slate-200" : "text-[#585068]"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/20">
                  <Link
                    href="/estimate?service=video"
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center block transition-all ${
                      tier.recommended
                        ? "bg-gradient-to-r from-[#9c386d] to-[#6d244c] hover:opacity-95 text-white shadow-md"
                        : "bg-[#2d263b] hover:bg-[#1e1927] text-white"
                    }`}
                  >
                    {lang === "ru"
                      ? "Выбрать этот тариф"
                      : lang === "sr"
                      ? "Izaberite ovaj paket"
                      : "Select Package"}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RETAINER BANNER */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#edf5f5] border border-[#386161]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#386161] text-xs font-bold mb-2 border border-[#386161]/20">
                <Repeat className="w-3.5 h-3.5" />
                <span>
                  {lang === "ru"
                    ? "Ежемесячный абонемент на монтаж и контент (Retainer)"
                    : lang === "sr"
                    ? "Mesečna pretplata na montažu i sadržaj (Retainer)"
                    : "Monthly Retainer Subscription"}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#2d263b]">
                {lang === "ru"
                  ? "Нужен регулярный поток роликов для YouTube-канала, блога или онлайн-школы?"
                  : lang === "sr"
                  ? "Potreban vam je redovan tok video sadržaja za YouTube, blog ili školu?"
                  : "Need a regular high-cadence video pipeline for YouTube, creators or academies?"}
              </h3>
              <p className="text-xs sm:text-sm text-[#585068] mt-1 max-w-2xl">
                {lang === "ru"
                  ? "Возьмем на себя регулярный монтаж длинных YouTube-выпусков или генерацию от 10 роликов Shorts/Reels в месяц со звуком, графикой и субтитрами по фиксированной цене от $390/мес."
                  : lang === "sr"
                  ? "Preuzimamo redovnu montažu YouTube emisija ili generisanje od 10 Shorts/Reels videa mesečno sa zvukom, grafikom i titlovima već od $390/mes."
                  : "We manage your ongoing YouTube episode editing or automated 10+ Shorts/Reels monthly with kinetic captions, sound design, and B-roll starting at $390/mo."}
              </p>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#386161] hover:bg-[#2b4c4c] text-white font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-sm"
            >
              {lang === "ru"
                ? "Обсудить абонемент"
                : lang === "sr"
                ? "Dogovorite pretplatu"
                : "Discuss Retainer"}
            </Link>
          </div>
        </div>

        {/* SECTION: РАЗВЕРНУТЫЙ FAQ */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white/70 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8edf3] border border-[#9c386d]/20 text-[#9c386d] text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Частые вопросы" : lang === "sr" ? "Česta pitanja" : "FAQ"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Все ответы о цифровых двойниках и видеомонтаже"
                : lang === "sr"
                ? "Svi odgovori o digitalnim dvojnicima i video montaži"
                : "Frequently Asked Questions About AI Media & Editing"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Этика, естественность мимики, права, YouTube-монтаж и клонирование голоса."
                : lang === "sr"
                ? "Etika, prirodnost mimike, autorska prava i YouTube montaža."
                : "Ethics, natural facial dynamics, licensing, YouTube post-production, and voice cloning."}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white backdrop-blur-md overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-[#2d263b] hover:text-[#9c386d] transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base">
                      {lang === "ru" ? faq.qRu : lang === "sr" ? faq.qSr : faq.qEn}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#9c386d]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#585068] leading-relaxed border-t border-slate-100 pt-4">
                      {lang === "ru" ? faq.aRu : lang === "sr" ? faq.aSr : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION: ФИНАЛЬНЫЙ СТУДИЙНЫЙ CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white via-slate-50 to-slate-100 border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#f8edf3] text-[#9c386d] flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-[#9c386d]" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b]">
            {lang === "ru"
              ? "Готовы протестировать видео-двойника или заказать монтаж?"
              : lang === "sr"
              ? "Spremni da testirate video dvojnika ili naručite montažu?"
              : "Ready to Prototype Your Digital Twin or Order Video Post-Production?"}
          </h3>
          <p className="text-xs sm:text-sm text-[#585068] mt-2 max-w-xl mx-auto leading-relaxed">
            {lang === "ru"
              ? "Рассчитайте стоимость ролика в онлайн-калькуляторе за 1 минуту или отправьте заявку на бесплатную консультацию со студией."
              : lang === "sr"
              ? "Izračunajte procenu cene u online kalkulatoru za 1 minut ili nam pošaljite upit za besplatne konsultacije."
              : "Calculate production costs in our online estimator in 1 minute or reach out directly for a complimentary studio consultation."}
          </p>

          <div className="mt-8 flex flex-col items-center">
            <DoodlePointer
              text={
                lang === "ru"
                  ? "расчет сметы без обязательств ↘"
                  : lang === "sr"
                  ? "procena bez obaveza ↘"
                  : "zero-commitment quote ↘"
              }
              direction="curved-down-right"
              className="mb-2"
            />
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/estimate?service=video"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9c386d] to-[#6d244c] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>
                  {lang === "ru"
                    ? "Рассчитать смету в калькуляторе"
                    : lang === "sr"
                    ? "Izračunajte procenu cene"
                    : "Calculate Turnkey Quote"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl border border-slate-300 bg-white text-[#2d263b] hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                {lang === "ru"
                  ? "Связаться со студией"
                  : lang === "sr"
                  ? "Kontaktirajte studio"
                  : "Contact Studio"}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
