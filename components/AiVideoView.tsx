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
  Sliders,
  DollarSign,
  TrendingUp,
  MessageCircle,
  Camera,
  Layers,
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
          ? "Цифровой двойник эксперта - Презентация"
          : lang === "sr"
          ? "Digitalni dvojnik stručnjaka - Prezentacija"
          : "Digital Twin Presenter - Product Showcase",
      badge: lang === "ru" ? "Русский оригинал" : lang === "sr" ? "Original" : "Original Voice",
    },
    {
      id: "9_jdjXBknOw",
      title:
        lang === "ru"
          ? "Англоязычная версия с сохранением голоса"
          : lang === "sr"
          ? "Engleska verzija sa očuvanim tonom"
          : "English Localization with Native Voice Tone",
      badge: lang === "ru" ? "Клон голоса (EN)" : lang === "sr" ? "AI Klon (EN)" : "Voice Clone (EN)",
    },
    {
      id: "-UE0CTWQwD4",
      title:
        lang === "ru"
          ? "Короткий лид-ролик для соцсетей и сайта"
          : lang === "sr"
          ? "Kratki video za sajt i društvene mreže"
          : "Lead Generation Short for Web & Social",
      badge: lang === "ru" ? "Конверсионный ролик" : lang === "sr" ? "Video za sajt" : "High Conversion",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      titleRu: "Заявка и бриф",
      titleEn: "Brief & Objectives",
      titleSr: "Prijava i brif",
      descRu: "Обсуждаем задачи: выход за рубеж, уроки для онлайн-школы, регулярные Reels/Shorts или видео-двойник на сайт.",
      descEn: "We determine goals: global audience reach, course lessons, high-cadence Reels/Shorts, or website video presenters.",
      descSr: "Definišemo ciljeve: inostrana tržišta, lekcije za kurseve, redovni Reels/Shorts ili video dvojnik za sajt.",
    },
    {
      step: "02",
      titleRu: "Съемка эталонного видео (2-5 мин)",
      titleEn: "5-Minute Phone Recording",
      titleSr: "Snimanje etalona (2-5 min)",
      descRu: "Вы записываете 2-5 минут на смартфон по нашей пошаговой инструкции. В запись обязательно входит ваше личное видео-согласие.",
      descEn: "You record 2-5 minutes on your phone using our quick checklist, including your personal consent statement.",
      descSr: "Snimate 2-5 minuta na telefonu po našem uputstvu. Snimak obavezno uključuje i vašu video saglasnost.",
    },
    {
      step: "03",
      titleRu: "Создание двойника и клонирование голоса",
      titleEn: "Avatar Training & Voice Cloning",
      titleSr: "Kreiranje dvojnika i klon glasa",
      descRu: "Обучаем нейросеть на платформе HeyGen, калибруем микромимику, синхронизацию губ и создаем студийный клон вашего тембра.",
      descEn: "We train neural models on HeyGen, fine-tune lip-sync accuracy, and build a studio-grade clone of your vocal cadence.",
      descSr: "Obučavamo AI na HeyGen platformi, kalibrišemo mikromimiku i kreiramo studijski klon vaše boje glasa.",
    },
    {
      step: "04",
      titleRu: "Проверка тестового ролика",
      titleEn: "Pilot Review & Calibration",
      titleSr: "Provera testnog videa",
      descRu: "Вы смотрите первый сгенерированный ролик, оцениваете естественность и подачу, вносим финальные корректировки.",
      descEn: "You review the first generated pilot video, evaluate facial dynamics, and request adjustments before bulk production.",
      descSr: "Pregledate prvi generisani video, procenjujete prirodnost i unosimo završne korekcije.",
    },
    {
      step: "05",
      titleRu: "Готовые видео по расписанию",
      titleEn: "Turnkey Video Pipeline",
      titleSr: "Gotovi video zapisi po planu",
      descRu: "Вы просто присылаете текст - через 24-48 часов получаете готовые ролики со звуком, субтитрами и монтажом.",
      descEn: "Simply send script copy - within 24-48 hours you receive finished videos with dynamic captions, sound, and b-roll.",
      descSr: "Jednostavno pošaljete tekst - za 24-48 sati dobijate gotove video snimke sa titlovima, zvukom i grafikom.",
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
      titleRu: "Онлайн-школы и курсы",
      titleEn: "EdTech & Online Academies",
      titleSr: "Online škole i kursevi",
      descRu: "Обновление устаревших уроков за час без пересъемки всего курса. Достаточно просто отредактировать абзац текста.",
      descEn: "Update outdated course lessons in 1 hour without reshooting. Simply edit the script text and re-render the segment.",
      descSr: "Ažuriranje lekcija za sat vremena bez ponovnog snimanja. Dovoljno je samo promeniti pasus teksta u skripti.",
      tagRu: "Экономия до 90% бюджета",
      tagEn: "90% Cost Reduction",
      tagSr: "90% ušteda budžeta",
    },
    {
      titleRu: "Бизнес и руководители",
      titleEn: "Founders & Corporate Leaders",
      titleSr: "Osnivači i menadžment",
      descRu: "Интерактивный видео-двойник на сайте, регулярные обращения к команде, онбординг сотрудников и видеовизитки.",
      descEn: "Interactive website video avatar, executive all-hands updates, employee onboarding, and personalized B2B pitch videos.",
      descSr: "Interaktivni video dvojnik na sajtu, poruke zaposlenima, obuka novih radnika i video vizitkarte.",
      tagRu: "+35-50% к конверсии сайта",
      tagEn: "+35-50% Conversion Lift",
      tagSr: "+35-50% veća konverzija",
    },
    {
      titleRu: "Частные клиенты",
      titleEn: "Personal Brand & Keepsakes",
      titleSr: "Privatni klijenti",
      descRu: "Видеовизитки, цифровой портрет, поздравления близких на любых языках мира и масштабирование личного бренда.",
      descEn: "High-end video resumes, digital portraits, multi-language holiday greetings, and scalable personal brand media.",
      descSr: "Video biografije, digitalni portret, čestitke na svim jezicima sveta i građenje ličnog brenda.",
      tagRu: "Личный бренд в цифре",
      tagEn: "Personal Digital Legacy",
      tagSr: "Lični brend u digitalu",
    },
  ];

  const caseStudies = [
    {
      num: "01",
      titleRu: "Эксперт: выход на рынок США и Европы",
      titleEn: "Case 1: Global Market Expansion for Coach",
      titleSr: "Slučaj 1: Izlazak na globalno tržište za kouča",
      problemRu: "Русскоязычный эксперт хотел запустить YouTube и LinkedIn на английском, но стеснялся акцента и не успевал снимать.",
      problemEn: "Coach wanted to launch an English YouTube channel and LinkedIn brand, but lacked native accent and film time.",
      problemSr: "Stručnjak je želeo da pokrene YouTube na engleskom, ali je imao jezičku barijeru i nedostatak vremena za snimanje.",
      solutionRu: "Создан персональный двойник + клон голоса с нативным произношением. Выпуск 8 роликов в месяц по готовым текстам.",
      solutionEn: "Crafted personal digital twin + neural voice clone with native cadence. Output: 8 polished videos monthly.",
      solutionSr: "Kreiran digitalni dvojnik sa kloniranim glasom bez akcenta. Proizvodnja: 8 mesečnih videa po pripremljenim tekstovima.",
      resultRu: "Сэкономлено 3 съемочных дня в месяц, просмотры из США выросли в 4 раза.",
      resultEn: "Saved 3 shoot days monthly; US view retention increased 4x.",
      resultSr: "Ušteđena 3 dana snimanja mesečno, pregledi iz SAD-a porasli 4 puta.",
    },
    {
      num: "02",
      titleRu: "Онлайн-школа: точечное обновление курса",
      titleEn: "Case 2: Course Updates Without Re-shoots",
      titleSr: "Slučaj 2: Ažuriranje online kursa bez ponovnog snimanja",
      problemRu: "В 12 уроках изменился интерфейс и регламент. Спикер живет за границей, аренда студии и пересъемка стоили бы от $1,500.",
      problemEn: "Platform UI and regulations changed across 12 lessons. Instructor was abroad; traditional reshoot quoted at $1,500+.",
      problemSr: "U 12 lekcija su se promenila pravila. Predavač živi u inostranstvu, ponovno snimanje bi koštalo preko $1.500.",
      solutionRu: "Использовали обученного двойника спикера: заменили устаревшие 2-минутные блоки за 2 часа работы с текстом.",
      solutionEn: "Leveraged the instructor's verified twin to regenerate outdated 2-minute segments in under 2 hours.",
      solutionSr: "Upotrebom digitalnog dvojnika predavača zamenjeni su zastareli blokovi za svega 2 sata rada na tekstu.",
      resultRu: "Курс обновлен за 24 часа. Экономия бюджета: $1,250.",
      resultEn: "Course refreshed in 24 hours. Net budget saved: $1,250.",
      resultSr: "Kurs ažuriran za 24 sata. Ušteda budžeta: $1.250.",
    },
    {
      num: "03",
      titleRu: "Фаундер IT-стартапа: видео-двойник на сайте",
      titleEn: "Case 3: Founder Video Bubble on SaaS Website",
      titleSr: "Slučaj 3: Video dvojnik osnivača na SaaS sajtu",
      problemRu: "Холодные посетители лендинга уходили через 15 секунд, не понимая ценность сложного продукта.",
      problemEn: "Cold visitors bounced after 15 seconds without grasping the core value of a complex technical product.",
      problemSr: "Posetioci su napuštali sajt nakon 15 sekundi ne razumevajući vrednost tehnički složenog softvera.",
      solutionRu: "Встроили в правый угол легковесный виджет FewHands с двойником основателя: за 40 сек объясняет пользу и зовет в демо.",
      solutionEn: "Integrated FewHands lightweight video bubble: founder explains core value in 40 seconds and offers demo walkthrough.",
      solutionSr: "Ugrađen lagani FewHands video vidžet: osnivač za 40 sekundi objašnjava prednosti i vodi korisnika ka demo verziji.",
      resultRu: "Конверсия в заявку выросла на +42%, время на сайте увеличилось на 1.8 мин.",
      resultEn: "Lead form conversions jumped +42%; on-page dwell time lifted by 1.8 min.",
      resultSr: "Konverzija u upite skočila za +42%, a vreme na sajtu poraslo za 1.8 min.",
    },
    {
      num: "04",
      titleRu: "Блогер: конвейер ежедневных Shorts/Reels",
      titleEn: "Case 4: Daily Content Machine for Creator",
      titleSr: "Slučaj 4: Svakodnevni Shorts/Reels za blogera",
      problemRu: "Выгорание от постоянной подготовки к съемкам: свет, фон, прическа, дубли, монтаж съедали все выходные.",
      problemEn: "Creator burnout: studio lights, styling, endless retakes, and manual editing consumed every weekend.",
      problemSr: "Iscrpljenost od stalnih priprema za snimanje: svetlo, pozadina, frizura, ponavljanja i montaža oduzimali su vikende.",
      solutionRu: "Один эталонный съемочный день - и переход на конвейер: генерация пачек по 10-15 вертикальных роликов за вечер.",
      solutionEn: "One reference shoot day unlocked a weekly assembly line: 10-15 vertical Shorts generated in a single evening.",
      solutionSr: "Jedan jedini dan snimanja etalona i prelazak na automatizaciju: paketi od 10-15 vertikalnih videa po večeri.",
      resultRu: "30 роликов в месяц выходят строго по графику без единого съемочного дня.",
      resultEn: "30 high-CTR videos published monthly on strict cadence with zero filming fatigue.",
      resultSr: "30 videa mesečno izlazi tačno po rasporedu bez ijednog dodatnog snimanja.",
    },
  ];

  const pricingTiers = [
    {
      nameRu: "Пробный",
      nameEn: "Starter Pilot",
      nameSr: "Probni paket",
      price: "$190",
      timeRu: "2-3 раб. дня",
      timeEn: "2-3 business days",
      timeSr: "2-3 radna dana",
      featuresRu: [
        "Создание персонального двойника",
        "Базовое клонирование голоса",
        "1 готовый ролик (до 60 секунд)",
        "Обязательное видео-согласие",
        "1 круг правок и калибровки",
      ],
      featuresEn: [
        "Custom digital twin creation",
        "Baseline neural voice cloning",
        "1 finished video master (up to 60 sec)",
        "Verified personal video consent",
        "1 revision & calibration cycle",
      ],
      featuresSr: [
        "Kreiranje personalnog dvojnika",
        "Osnovno kloniranje glasa",
        "1 gotov video (do 60 sekundi)",
        "Obavezna video saglasnost",
        "1 krug izmena i kalibracije",
      ],
      recommended: false,
    },
    {
      nameRu: "Персональный двойник",
      nameEn: "Studio Twin Pro",
      nameSr: "Personalni dvojnik",
      price: "$450",
      timeRu: "3-5 раб. дней",
      timeEn: "3-5 business days",
      timeSr: "3-5 radnih dana",
      featuresRu: [
        "Создание студийного двойника высокой точности",
        "Studio Voice Clone с интонациями и дыханием",
        "3 готовых видеоролика (Reels / Shorts / Презентация)",
        "Субтитры, саунд-дизайн и монтаж",
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
        "Animirani titlovi, dizajn zvuka i montaža",
        "Mogućnost sinhronizacije na engleski sa vašim glasom",
        "2 kruga izmena po videu",
      ],
      recommended: true,
      badgeRu: "Самый популярный",
      badgeEn: "Most Popular",
      badgeSr: "Najpopularniji",
    },
    {
      nameRu: "Двойник + Контент",
      nameEn: "Scale Machine",
      nameSr: "Dvojnik + Sadržaj",
      price: "$980",
      timeRu: "По графику",
      timeEn: "Weekly Cadence",
      timeSr: "Po rasporedu",
      featuresRu: [
        "Студийный двойник + расширенная калибровка жестов",
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
      qRu: "А если цифровой двойник скажет что-то не то?",
      qEn: "What if the digital twin hallucinates or says something off-brand?",
      qSr: "Šta ako digitalni dvojnik kaže nešto neprimereno ili pogrešno?",
      aRu: "Двойник озвучивает исключительно тот текст, который вы утвердили в сценарии. Он не является автономным чат-ботом и физически не способен придумать слова от себя. Вы всегда контролируете каждое сказанное слово.",
      aEn: "The digital twin speaks strictly the script copy you inspect and approve. It is a deterministic neural synthesis engine, not an unguided bot. It cannot improvise or generate unauthorized statements.",
      aSr: "Dvojnik izgovara isključivo tekst koji ste vi prethodno odobrili u scenariju. Nije reč o nekontrolisanom botu - on tehnički ne može samostalno izmisliti nijednu reč.",
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
      qRu: "Что конкретно нужно для съёмки эталона?",
      qEn: "What equipment is required for the baseline recording?",
      qSr: "Šta je tačno potrebno za snimanje etalona?",
      aRu: "Обычный смартфон с хорошей камерой, тихое помещение без эха, ровный дневной свет из окна и 10-15 минут свободного времени. Никакой аренды студий и профессиональной техники не требуется. Подробная памятка отправляется вам перед записью.",
      aEn: "A standard smartphone with a decent camera, a quiet room without echo, even daylight from a window, and 10-15 minutes of your time. Zero studio rental or expensive gear needed. A quick checklist is provided beforehand.",
      aSr: "Standardni pametni telefon, tiha soba bez odjeka, ravnomerno dnevno svetlo sa prozora i 10-15 minuta vašeg vremena. Nije potreban zakup studija niti profesionalna oprema. Detaljan podsetnik dobijate pre snimanja.",
    },
    {
      qRu: "На каких языках двойник может говорить моим голосом?",
      qEn: "Which languages can my digital twin speak in my natural voice?",
      qSr: "Na kojim jezicima dvojnik može govoriti mojim glasom?",
      aRu: "Поддерживается 30+ основных языков мира: английский (US/UK/AU), немецкий, испанский, французский, сербский, португальский, итальянский, арабский, китайский и другие. Нейросеть сохраняет ваш естественный тембр, интонации и синхронизирует артикуляцию губ под каждый язык.",
      aEn: "Over 30 major languages are supported: English (US/UK/AU), German, Spanish, French, Serbian, Portuguese, Italian, Arabic, Japanese, and more. The engine preserves your authentic vocal timbre while articulating native phonemes.",
      aSr: "Podržano je preko 30 svetskih jezika: engleski, nemački, španski, francuski, srpski, italijanski, arapski i drugi. AI čuva vaš prirodni vokalni tembr i sinhronizuje pokrete usana prema svakom jeziku.",
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

  const shootingGuide = [
    {
      ruleRu: "Камера на уровне глаз",
      ruleEn: "Camera at Eye Level",
      ruleSr: "Kamera u visini očiju",
      descRu: "Установите телефон на штатив или подставку на уровне глаз. Горизонтально или вертикально в зависимости от формата.",
      descEn: "Mount phone on tripod or stand directly at eye level. Avoid low angles looking upwards.",
      descSr: "Postavite telefon na stalak u visini očiju. Izbegavajte snimanje odozdo.",
    },
    {
      ruleRu: "Равномерный мягкий свет спереди",
      ruleEn: "Even Front Lighting",
      ruleSr: "Ravnomerno prednje svetlo",
      descRu: "Сядьте лицом к окну или используйте софтбокс. Лицо должно быть освещено ровно, без жестких теней под носом и глазами.",
      descEn: "Face a large window or diffused softbox. Ensure no harsh shadows fall under eyes or nose.",
      descSr: "Okrenite se licem ka prozoru ili koristite meko svetlo. Lice mora biti ravnomerno osvetljeno.",
    },
    {
      ruleRu: "Чистый звук без эха",
      ruleEn: "Quiet Room & Zero Echo",
      ruleSr: "Čist zvuk bez odjeka",
      descRu: "Снимайте в тихой комнате с мебелью и ковром (не в пустом помещении). Идеально использовать петличку или гарнитуру.",
      descEn: "Record in a furnished room (avoid empty tiled spaces). A simple lavalier microphone yields optimal results.",
      descSr: "Snimajte u opremljenoj sobi sa tepihom (izbegavajte prazne prostorije). Preporučuje se mala bubica mikrofon.",
    },
    {
      ruleRu: "Однотонный фон",
      ruleEn: "Clean Neutral Backdrop",
      ruleSr: "Jednobojna pozadina",
      descRu: "Нейтральная стена или аккуратный офис. Сзади не должно быть движения людей, кошек или мелькающих экранов.",
      descEn: "Neutral solid wall or calm interior. Ensure zero background motion, walking colleagues, or flickering TVs.",
      descSr: "Neutralan zid ili mirna kancelarija. Iza vas ne sme biti kretanja ljudi niti treperavih ekrana.",
    },
    {
      ruleRu: "Живая мимика и паузы",
      ruleEn: "Natural Pauses & Articulation",
      ruleSr: "Prirodna mimika i pauze",
      descRu: "Говорите спокойно и естественно, смотрите в глазок камеры. Делайте микропаузы между фразами для чистоты нарезки.",
      descEn: "Speak calmly, look directly into camera lens. Make short micro-pauses between sentences for clean training segments.",
      descSr: "Govorite prirodno i gledajte u sočivo kamere. Pravite kratke pauze između rečenica.",
    },
    {
      ruleRu: "Видео-согласие (Consent Statement)",
      ruleEn: "Video Consent Statement",
      ruleSr: "Video saglasnost",
      descRu: "В конце записи вы четко зачитываете по нашему шаблону личное согласие на использование вашего образа для вашего проекта.",
      descEn: "Conclude recording by reciting our verified 15-second consent script authorizing avatar synthesis.",
      descSr: "Na kraju snimka jasno izgovarate tekst saglasnosti za kreiranje avatara po našem šablonu.",
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
                  ? "HeyGen Enterprise Pipeline · Этичный AI"
                  : lang === "sr"
                  ? "HeyGen Enterprise Pipeline · Etički AI"
                  : "HeyGen Enterprise Pipeline · Ethical AI"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-[1.15]">
              {lang === "ru"
                ? "Ваш цифровой двойник: говорит вашим лицом и голосом, пока вы развиваете бизнес"
                : lang === "sr"
                ? "Vaš digitalni dvojnik: govori vašim licem i glasom dok vi razvijate biznis"
                : "Your Digital Twin: Speaks with your face and voice while you focus on business"}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#585068] leading-relaxed max-w-2xl">
              {lang === "ru"
                ? "Один раз записываете себя на телефон за 5 минут. Дальше получаете неограниченное количество видео для соцсетей, сайта и зарубежного рынка без студии, операторов и монтажа. На русском, английском и других языках, с вашим собственным голосом."
                : lang === "sr"
                ? "Snimite sebe telefonom za 5 minuta. Nakon toga dobijate neograničen broj video snimaka za društvene mreže, sajt i strana tržišta bez studija, snimatelja i montaže. Na engleskom, srpskom i 30+ jezika, sa vašim autentičnim glasom."
                : "Record yourself once on your phone for 5 minutes. From then on, produce unlimited video content for socials, websites, and international audiences with zero studio or camera crew. Fluent in English, Spanish, and 30+ languages in your authentic voice."}
            </p>

            <div className="mt-8 flex flex-col items-start gap-2">
              <DoodlePointer
                text={
                  lang === "ru"
                    ? "получите тестовый ролик вашим голосом ↘"
                    : lang === "sr"
                    ? "dobijte testni video sa vašim glasom ↘"
                    : "preview your digital twin voice sample ↘"
                }
                direction="curved-down-right"
                className="mb-1"
              />
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://t.me/andreibdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9c386d] to-[#6d244c] hover:opacity-95 text-white font-semibold text-sm shadow-lg shadow-[#9c386d]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>
                    {lang === "ru"
                      ? "Получить превью двойника"
                      : lang === "sr"
                      ? "Zatražite demo dvojnika"
                      : "Get Twin Voice Preview"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/estimate?service=video"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#2d263b]/15 bg-white text-[#2d263b] hover:bg-[#f1f0f5] font-semibold text-sm shadow-sm transition-all"
                >
                  <span>
                    {lang === "ru"
                      ? "Рассчитать смету в калькуляторе"
                      : lang === "sr"
                      ? "Izračunajte procenu"
                      : "Calculate Production Cost"}
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
                  ? "БЕЗ ДИПФЕЙКОВ"
                  : lang === "sr"
                  ? "ETIČKI AI"
                  : "ETHICAL AI ONLY"
              }
              question={
                lang === "ru"
                  ? "Можно ли создать двойника без согласия? НЕТ [X]"
                  : lang === "sr"
                  ? "Može li se napraviti avatar bez saglasnosti? NE [X]"
                  : "Can avatars be forged without consent? NO [X]"
              }
              reason={
                lang === "ru"
                  ? "Мы никогда не создаем двойников по чужим фото или аудиозаписям. Только ваше личное видео-согласие и 100% авторских прав у вас."
                  : lang === "sr"
                  ? "Nikada ne pravimo avatare na osnovu tuđih fotografija ili snimaka. Isključivo uz vašu ličnu video saglasnost i 100% prava vama."
                  : "We strictly reject third-party synthesis. Digital twins require verified personal video consent with 100% IP rights transferred to you."
              }
              checked={false}
              rotate="rotate-1"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* TRUST & SECURITY PILLAR BANNER (CRITICAL ETHICS BLOCK) */}
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

        {/* INTERACTIVE VIDEO SHOWCASE */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-[#9c386d] uppercase tracking-wider">
              {lang === "ru"
                ? "Примеры работы цифровых двойников"
                : lang === "sr"
                ? "Primeri rada digitalnih dvojnika"
                : "Digital Twin Interactive Showcase"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Посмотрите, как говорит цифровой двойник"
                : lang === "sr"
                ? "Pogledajte kako govori digitalni dvojnik"
                : "Experience Photorealistic Digital Presenters in Action"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Нажмите на ролик, чтобы воспроизвести интерактивный образец с живой мимикой и клоном голоса."
                : lang === "sr"
                ? "Kliknite na video za interaktivni prikaz sa prirodnom mikromimikom i kloniranim glasom."
                : "Click any preview below to experience realistic facial articulation and multilingual vocal cloning."}
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

        {/* SECTION: КАК ЭТО РАБОТАЕТ (5 ШАГОВ) */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-[#9c386d] uppercase tracking-wider">
              {lang === "ru" ? "Простой понятный процесс" : lang === "sr" ? "Jednostavan proces" : "Streamlined Process"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Как создается ваш персональный цифровой двойник"
                : lang === "sr"
                ? "Kako se kreira vaš personalni digitalni dvojnik"
                : "How Your Custom Digital Twin is Engineered"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Всего 5 шагов от первой заявки до регулярного выпуска контента вашим лицом и голосом."
                : lang === "sr"
                ? "Samo 5 koraka od prvog razgovora do redovnog kreiranja videa vašim licem i glasom."
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
                ? "Для кого цифровой двойник окупается в первый же месяц"
                : lang === "sr"
                ? "Za koga se digitalni dvojnik isplati već u prvom mesecu"
                : "Who Generates Immediate ROI from a Digital Twin"}
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

        {/* SECTION: 4 КЕЙСА ДЛЯ ПОРТФОЛИО */}
        <div className="mt-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-bold text-[#9c386d] uppercase tracking-wider">
              {lang === "ru" ? "Реальные сценарии внедрения" : lang === "sr" ? "Primeri iz prakse" : "Production Case Studies"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "4 примера: как цифровой двойник решает конкретные бизнес-задачи"
                : lang === "sr"
                ? "4 primera: kako digitalni dvojnik rešava konkretne poslovne zadatke"
                : "4 Scenarios: How Digital Twins Solve Core Commercial Bottlenecks"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#9c386d]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#9c386d] px-2 py-0.5 rounded bg-[#f8edf3]">
                      Кейс {cs.num}
                    </span>
                    <span className="text-[11px] text-[#585068]">
                      {lang === "ru" ? "Демо-проект" : lang === "sr" ? "Demo projekat" : "Verified Demo"}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#2d263b] mb-3">
                    {lang === "ru" ? cs.titleRu : lang === "sr" ? cs.titleSr : cs.titleEn}
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[#585068]">
                    <div>
                      <strong className="text-[#2d263b] font-semibold">
                        {lang === "ru" ? "Задача: " : lang === "sr" ? "Problem: " : "Challenge: "}
                      </strong>
                      {lang === "ru" ? cs.problemRu : lang === "sr" ? cs.problemSr : cs.problemEn}
                    </div>
                    <div>
                      <strong className="text-[#386161] font-semibold">
                        {lang === "ru" ? "Решение: " : lang === "sr" ? "Rešenje: " : "Solution: "}
                      </strong>
                      {lang === "ru" ? cs.solutionRu : lang === "sr" ? cs.solutionSr : cs.solutionEn}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    {lang === "ru" ? cs.resultRu : lang === "sr" ? cs.resultSr : cs.resultEn}
                  </span>
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
                ? "Тарифы на создание цифрового двойника"
                : lang === "sr"
                ? "Paketi za kreiranje digitalnog dvojnika"
                : "Digital Twin Production Packages"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Без скрытых доплат. Все права на двойника и готовые ролики переходят вам."
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
                    ? "Ежемесячный абонемент на контент (Retainer)"
                    : lang === "sr"
                    ? "Mesečna pretplata na sadržaj (Retainer)"
                    : "Monthly Retainer Subscription"}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#2d263b]">
                {lang === "ru"
                  ? "Нужен регулярный поток роликов для эксперта или онлайн-школы?"
                  : lang === "sr"
                  ? "Potreban vam je redovan tok video sadržaja za školu ili eksperta?"
                  : "Need a high-cadence video pipeline for an online academy or creator?"}
              </h3>
              <p className="text-xs sm:text-sm text-[#585068] mt-1 max-w-2xl">
                {lang === "ru"
                  ? "После создания двойника вы можете заказать абонемент: от 10 роликов в месяц со сценариями, монтажом и субтитрами по фиксированной цене от $390/мес."
                  : lang === "sr"
                  ? "Nakon kreiranja dvojnika možete aktivirati mesečni paket: od 10 videa mesečno sa scenarijom, titlovima i montažom već od $390/mes."
                  : "Once your twin is created, activate our monthly retainer: from 10 polished Shorts monthly with kinetic subtitles and sound design starting at $390/mo."}
              </p>
            </div>

            <a
              href="https://t.me/andreibdr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#386161] hover:bg-[#2b4c4c] text-white font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-sm"
            >
              {lang === "ru"
                ? "Обсудить абонемент"
                : lang === "sr"
                ? "Dogovorite pretplatu"
                : "Discuss Retainer"}
            </a>
          </div>
        </div>

        {/* SECTION: ПАМЯТКА КЛИЕНТУ ПО СЪЕМКЕ ЭТАЛОНА */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8edf3] text-[#9c386d] text-xs font-semibold mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>
                {lang === "ru"
                  ? "Чек-лист для клиента"
                  : lang === "sr"
                  ? "Kontrolna lista za snimanje"
                  : "Client Shooting Checklist"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Как снять эталонное видео на смартфон за 10 минут"
                : lang === "sr"
                ? "Kako snimiti etalonski video na telefonu za 10 minuta"
                : "How to Record Reference Footage on Your Phone in 10 Minutes"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Соблюдение этих простых правил гарантирует естественный живой результат и одобрение видео-согласия."
                : lang === "sr"
                ? "Poštovanje ovih jednostavnih smernica obezbeđuje savršeno prirodan rezultat i odobrenje saglasnosti."
                : "Following these straightforward guidelines guarantees natural facial dynamics and instant consent approval."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shootingGuide.map((sg, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-[#9c386d] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-sm text-[#2d263b]">
                      {lang === "ru" ? sg.ruleRu : lang === "sr" ? sg.ruleSr : sg.ruleEn}
                    </h3>
                  </div>
                  <p className="text-xs text-[#585068] leading-relaxed pl-8">
                    {lang === "ru" ? sg.descRu : lang === "sr" ? sg.descSr : sg.descEn}
                  </p>
                </div>
              </div>
            ))}
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
                ? "Все ответы о создании персональных цифровых двойников"
                : lang === "sr"
                ? "Svi odgovori o kreiranju personalnih digitalnih dvojnika"
                : "Everything You Need to Know About Custom Digital Twins"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Этика, естественность мимики, права, требования к съемке и клонирование голоса."
                : lang === "sr"
                ? "Etika, prirodnost mimike, autorska prava i kloniranje glasa."
                : "Ethics, natural facial dynamics, licensing, recording setup, and voice cloning."}
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

        {/* SECTION: ФИНАЛЬНЫЙ CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white via-slate-50 to-slate-100 border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#f8edf3] text-[#9c386d] flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-[#9c386d]" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b]">
            {lang === "ru"
              ? "Хотите услышать, как звучит ваш голос на английском?"
              : lang === "sr"
              ? "Želite da čujete kako vaš glas zvuči na engleskom?"
              : "Ready to Hear Your Cloned Voice in English or Spanish?"}
          </h3>
          <p className="text-xs sm:text-sm text-[#585068] mt-2 max-w-xl mx-auto leading-relaxed">
            {lang === "ru"
              ? "Отправьте 30-секундное голосовое сообщение в Telegram - мы пришлем вам фрагмент на английском с сохранением вашего естественного тембра!"
              : lang === "sr"
              ? "Pošaljite glasovnu poruku od 30 sekundi na Telegram - poslaćemo vam demo na engleskom sa vašom prirodnom bojom glasa!"
              : "Send a 30-second voice note in Telegram - we will return a synthesized audio clip in English preserving your natural timbre!"}
          </p>

          <div className="mt-8 flex flex-col items-center">
            <DoodlePointer
              text={
                lang === "ru"
                  ? "экспресс-тест без обязательств ↘"
                  : lang === "sr"
                  ? "ekspresni demo bez obaveza ↘"
                  : "zero-commitment audio pilot ↘"
              }
              direction="curved-down-right"
              className="mb-2"
            />
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/andreibdr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9c386d] to-[#6d244c] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>
                  {lang === "ru"
                    ? "Отправить аудио в Telegram"
                    : lang === "sr"
                    ? "Pošaljite poruku na Telegram"
                    : "Send Voice Note in Telegram"}
                </span>
              </a>
              <Link
                href="/estimate?service=video"
                className="px-6 py-3.5 rounded-xl border border-slate-300 bg-white text-[#2d263b] hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                {lang === "ru"
                  ? "Рассчитать стоимость сметы"
                  : lang === "sr"
                  ? "Izračunajte procenu cene"
                  : "Calculate Turnkey Quote"}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
