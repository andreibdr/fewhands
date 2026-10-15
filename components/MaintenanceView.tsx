"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import {
  Headphones,
  GraduationCap,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Layers,
  Sparkles,
  Server,
  Zap,
} from "lucide-react";
import {
  CraftCard,
  CustomStampBadge,
  CustomPSCard,
  DoodlePointer,
} from "./HandDrawnDecorations";

export const MaintenanceView: React.FC = () => {
  const { lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const plans = [
    {
      id: "start",
      name:
        lang === "ru"
          ? "Старт (Контроль & Бэкапы)"
          : lang === "sr"
          ? "Start (Nadzor & Rezervne kopije)"
          : "Essentials (Care & Backups)",
      price: "$190",
      period: lang === "ru" ? "/ месяц" : lang === "sr" ? "/ mesečno" : "/ month",
      desc:
        lang === "ru"
          ? "Для сайтов-визиток и небольших проектов, которым нужен постоянный контроль без сюрпризов."
          : lang === "sr"
          ? "Za prezentacione sajtove i manje projekte kojima je potrebna stabilna pouzdanost i automatske rezervne kopije."
          : "For landing pages and corporate websites needing steady reliability, continuous uptime, and automated backups.",
      features:
        lang === "ru"
          ? [
              "Мониторинг доступности сайта 24/7 (Uptime)",
              "Регулярные резервные копии и аудит безопасности",
              "Обновление пакетов и серверных зависимостей",
              "До 3 часов мелких контентных правок в месяц",
              "Поддержка по Email и в рабочем чате (ответ в течение рабочего дня)",
            ]
          : lang === "sr"
          ? [
              "24/7 nadzor dostupnosti i performansi sajta (Uptime)",
              "Automatske redovne rezervne kopije i bezbednosni pregled",
              "Ažuriranje softverskih paketa i serverskih zavisnosti",
              "Do 3 sata manjih izmena sadržaja i tekstova mesečno",
              "Podrška putem imejla i radnog četa (odgovor u toku radnog dana)",
            ]
          : [
              "24/7 Uptime & Core Web Vitals monitoring",
              "Automated scheduled backups & security audits",
              "Dependency and package version maintenance",
              "Up to 3 hours of content and text adjustments monthly",
              "Corporate email & team chat support (next business day response)",
            ],
      popular: false,
    },
    {
      id: "business",
      name:
        lang === "ru"
          ? "Бизнес Retainer"
          : lang === "sr"
          ? "Biznis Retainer"
          : "Business Retainer",
      price: "$450",
      period: lang === "ru" ? "/ месяц" : lang === "sr" ? "/ mesečno" : "/ month",
      desc:
        lang === "ru"
          ? "Оптимально для перенесённых сайтов и растущего бизнеса, где постоянно обновляется контент и витрина."
          : lang === "sr"
          ? "Optimalno za migrirane sajtove i aktivan biznis koji redovno objavljuje sadržaj i ponude."
          : "Ideal for migrated platforms and active businesses requiring regular page rollouts and team guidance.",
      features:
        lang === "ru"
          ? [
              "Всё из тарифа «Старт»",
              "Обучение и онбординг сотрудников (видео-инструкции)",
              "До 10 часов верстки, доработок и новых блоков",
              "Публикация контента, акций, товаров и баннеров",
              "Приоритетный ответ в рабочие часы (Mon-Fri)",
              "Контроль скорости Google PageSpeed (держим 95-100)",
            ]
          : lang === "sr"
          ? [
              "Sve iz paketa „Start“",
              "Obuka i onbording zaposlenih (video uputstva)",
              "Do 10 sati inženjeringa, novih sekcija i dorada",
              "Redovno objavljivanje članaka, banera i proizvoda",
              "Prioritetni odgovor tokom radnog vremena (pon-pet)",
              "Kontrola brzine Google PageSpeed (ciljamo 95-100)",
            ]
          : [
              "All features included in Essentials",
              "Team onboarding & step-by-step video tutorials",
              "Up to 10 engineering hours for new sections and UI tweaks",
              "Continuous publication of articles, banners, and products",
              "Priority response during business hours (Mon-Fri)",
              "Continuous Core Web Vitals audits (target 95-100)",
            ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise Retainer",
      price: "$950",
      period: lang === "ru" ? "/ месяц" : lang === "sr" ? "/ mesečno" : "/ month",
      desc:
        lang === "ru"
          ? "Максимальный приоритет для высоконагруженных проектов и масштабных платформ, требующих непрерывных спринтов разработки."
          : lang === "sr"
          ? "Maksimalni prioritet za zahtevne platforme koje traže stalne inženjerske sprinteve i strog SLA."
          : "Maximum priority for high-traffic platforms requiring continuous engineering sprints, architectural tuning, and strict SLA.",
      features:
        lang === "ru"
          ? [
              "Всё из тарифа «Бизнес»",
              "До 25 часов глубокой веб-разработки и новых разделов",
              "Выделенный Senior-инженер и персональный тимлид",
              "Приоритетный SLA (время реакции до 1 часа в рабочее время)",
              "Еженедельные спринты и синхронизация по дорожной карте",
              "Непрерывный аудит конверсий, скорости и нагрузочное тестирование",
            ]
          : lang === "sr"
          ? [
              "Sve iz paketa „Biznis“",
              "Do 25 sati naprednog veb inženjeringa i novih sekcija",
              "Dodeljeni Senior inženjer i tehnički rukovodilac",
              "Prioritetni SLA (vreme odziva do 1 sata tokom radnog vremena)",
              "Nedeljni razvojni sprintevi i usklađivanje planova",
              "Kontinuirana optimizacija konverzije i testiranje opterećenja",
            ]
          : [
              "All features included in Business",
              "Up to 25 dedicated senior engineering hours monthly",
              "Dedicated technical lead & account manager",
              "Priority SLA (response under 1 hour during business hours)",
              "Weekly roadmap sprints & architecture reviews",
              "Continuous conversion rate optimization & load testing",
            ],
      popular: false,
    },
  ];

  const inhouseComparison = [
    {
      metric:
        lang === "ru"
          ? "Ежемесячные затраты бизнеса"
          : lang === "sr"
          ? "Mesečni troškovi kompanije"
          : "Monthly Financial Cost",
      inhouse:
        lang === "ru"
          ? "$2,500 - $4,500/мес (оклад, налоги, рабочее место)"
          : lang === "sr"
          ? "$2.500 - $4.500/mesečno (plata, porezi, oprema)"
          : "$2,500 - $4,500/mo (Salary, taxes, benefits)",
      fewhands:
        lang === "ru"
          ? "От $190/мес - фиксированный Retainer без налогов и найма"
          : lang === "sr"
          ? "Od $190/mesečno - fiksni Retainer bez troškova zapošljavanja"
          : "From $190/mo - flat predictable retainer, zero overhead",
    },
    {
      metric:
        lang === "ru"
          ? "Набор компетенций"
          : lang === "sr"
          ? "Širina stručnosti"
          : "Skillset Diversity",
      inhouse:
        lang === "ru"
          ? "Один специалист (знает либо бэкенд, либо верстку)"
          : lang === "sr"
          ? "Jedan programer (poznaje samo frontend ili samo backend)"
          : "Single developer with limited narrow skill scope",
      fewhands:
        lang === "ru"
          ? "Целая команда: инженер, верстальщик, DevOps, контентщик"
          : lang === "sr"
          ? "Ceo tim: Senior programer, dizajner interfejsa, DevOps"
          : "Multi-disciplinary team: Senior Dev, UI designer, DevOps",
    },
    {
      metric:
        lang === "ru"
          ? "Непрерывность работы"
          : lang === "sr"
          ? "Kontinuitet i dostupnost"
          : "Availability & Coverage",
      inhouse:
        lang === "ru"
          ? "Риск отпуска, больничных и внезапного увольнения"
          : lang === "sr"
          ? "Rizik od godišnjih odmora, bolovanja i odlaska radnika"
          : "Vacation downtime, sick leaves, turnover friction",
      fewhands:
        lang === "ru"
          ? "100% гарантия по договору и SLA, непрерывный мониторинг"
          : lang === "sr"
          ? "100% garancija po ugovoru i SLA, 365 dana nadzora"
          : "365-day SLA guarantee with automated failover monitoring",
    },
    {
      metric:
        lang === "ru"
          ? "Обучение сотрудников компании"
          : lang === "sr"
          ? "Obuka zaposlenih u firmi"
          : "Staff Onboarding & Training",
      inhouse:
        lang === "ru"
          ? "Редко документирует код и неохотно учит менеджеров"
          : lang === "sr"
          ? "Retko dokumentuje rad i nerado priprema uputstva"
          : "Rarely produces structured video walkthroughs",
      fewhands:
        lang === "ru"
          ? "Записываем пошаговые видеоуроки и проводим Zoom-сессии"
          : lang === "sr"
          ? "Snimamo video lekcije korak-po-korak i držimo Zoom sesije"
          : "Bespoke video training library & live onboarding calls",
    },
  ];

  const faqs = [
    {
      q:
        lang === "ru"
          ? "Что произойдет, если в текущем месяце мы не использовали все часы?"
          : lang === "sr"
          ? "Šta se dešava ako u tekućem mesecu ne iskoristimo sve sate podrške?"
          : "What happens if we do not use all allocated support hours in a month?",
      a:
        lang === "ru"
          ? "Неиспользованные часы частично переносятся на следующий расчётный период (до 50% объема тарифа) или могут быть направлены на плановую оптимизацию скорости, проверку безопасности и аудит конверсий сайта."
          : lang === "sr"
          ? "Neiskorišćeni sati se delimično prenose u sledeći obračunski period (do 50% obima paketa) ili se mogu usmeriti na plansku optimizaciju brzine, bezbednosne zakrpe i tehnički SEO pregled sajta."
          : "Up to 50% of unused engineering hours can roll over into the following billing cycle or be allocated toward automated speed audits, security patching, and SEO technical reviews.",
    },
    {
      q:
        lang === "ru"
          ? "Как происходит постановка задач и контроль выполнения?"
          : lang === "sr"
          ? "Kako se zadaju zadaci i prati njihovo izvršenje?"
          : "How are maintenance tasks submitted and tracked?",
      a:
        lang === "ru"
          ? "Без громоздких и неудобных тикет-систем: задачи ставятся через корпоративную почту web@fewhands.com или в выделенном рабочем чате вашей команды. Каждый запрос регистрируется, оценивается по времени и выполняется в рамках SLA."
          : lang === "sr"
          ? "Bez glomaznih i komplikovanih tiketing sistema: zadaci se postavljaju putem korporativnog imejla web@fewhands.com ili u namenskom timskom četu. Svaki zahtev se evidentira, procenjuje i izvršava u okviru dogovorenog SLA."
          : "We bypass bureaucratic ticketing friction: tasks are submitted directly via dedicated team channels or corporate email. Every request is timestamped, estimated, and fulfilled according to your plan SLA.",
    },
    {
      q:
        lang === "ru"
          ? "Берёте ли вы на поддержку сайты, созданные другими студиями?"
          : lang === "sr"
          ? "Da li preuzimate na održavanje sajtove koje su kreirale druge agencije?"
          : "Do you accept platforms built by other agencies for ongoing maintenance?",
      a:
        lang === "ru"
          ? "Да! Перед началом абонентской поддержки мы проводим обязательный технический аудит: проверяем чистоту кода, стек, зависимости и наличие уязвимостей, после чего предлагаем оптимальный план сопровождения или модернизации."
          : lang === "sr"
          ? "Da! Pre početka mesečnog održavanja sprovodimo obaveznu tehničku proveru: proveravamo čistoću koda, tehnološki stek, zavisnosti i bezbednost, a zatim predlažemo optimalan plan podrške ili modernizacije."
          : "Yes. Prior to initiating retainer coverage, our engineering team performs an initial code audit to evaluate dependency hygiene, security posture, and runtime health, then recommends an optimal maintenance plan.",
    },
    {
      q:
        lang === "ru"
          ? "Как проходит обучение наших контент-менеджеров?"
          : lang === "sr"
          ? "Kako izgleda obuka naših menadžera sadržaja?"
          : "How is staff onboarding and CMS training delivered?",
      a:
        lang === "ru"
          ? "Мы записываем персонализированные видео-скринкасты по каждому разделу вашего сайта (добавление новостей, акций, баннеров, товаров) и проводим интерактивную сессию в Zoom. У вашей команды остаётся постоянный доступ к видеотеке инструкций."
          : lang === "sr"
          ? "Snimamo personalizovana video uputstva za svaku operaciju na sajtu (dodavanje vesti, akcija, banera, proizvoda) i organizujemo interaktivnu sesiju putem Zoom-a. Vaš tim dobija trajan pristup videoteci uputstava."
          : "We produce tailored video screencasts covering every workflow in your panel (publishing articles, updating catalogs, modifying promotional banners) and host live onboarding sessions. Your team retains permanent access to the guides.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef7f0] border border-[#c6814b]/30 text-[#c6814b] text-xs font-semibold mb-4">
              <Headphones className="w-3.5 h-3.5" />
              <span>
                {lang === "ru"
                  ? "Ежемесячный Retainer SLA"
                  : lang === "sr"
                  ? "Mesečni Retainer SLA"
                  : "Monthly Retainer SLA"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-tight">
              {lang === "ru"
                ? "Техническая поддержка и сопровождение сайтов (Retainer)"
                : lang === "sr"
                ? "Tehničko održavanje i podrška veb sajtova (Retainer)"
                : "Ongoing Website Maintenance, Retainer SLA & Support"}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#585068] leading-relaxed max-w-3xl">
              {lang === "ru"
                ? "После релиза или миграции сайта самое главное - надежное техническое плечо. Команда инженеров Few Hands берет на себя регулярное обновление контента, защиту от сбоев, круглосуточный мониторинг, онбординг персонала и доработку новых фич по фиксированному тарифу без затрат на штатного разработчика."
                : lang === "sr"
                ? "Nakon objave ili migracije sajta najvažnija je sigurna tehnička podrška. Inženjerski tim Few Hands preuzima redovno ažuriranje sadržaja, zaštitu od prekida, 24/7 nadzor, obuku zaposlenih i doradu novih funkcionalnosti po fiksnom mesečnom paketu, bez troškova zapošljavanja in-house programera."
                : "We ensure your digital platform stays fast, secure, and always operational. Few Hands delivers proactive maintenance, scheduled content rollouts, 24/7 uptime monitoring, and engineering iterations under a predictable monthly retainer."}
            </p>

            <div className="mt-6">
              <DoodlePointer
                text={
                  lang === "ru"
                    ? "прозрачные фиксированные тарифы ↘"
                    : lang === "sr"
                    ? "transparentni fiksni paketi ↘"
                    : "predictable flat retainers ↘"
                }
                direction="curved-down-right"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-2">
            <CraftCard
              tag={
                lang === "ru"
                  ? "ИНЦИДЕНТНЫЙ ИММУНИТЕТ"
                  : lang === "sr"
                  ? "IMUNITET NA INCIDENTE"
                  : "INCIDENT IMMUNITY"
              }
              question={
                lang === "ru"
                  ? "Нужен штатный веб-мастер? НЕТ [X]"
                  : lang === "sr"
                  ? "Zaposliti stalnog veb programera? NE [X]"
                  : "Hire in-house webmaster? NO [X]"
              }
              reason={
                lang === "ru"
                  ? "Штатный сотрудник стоит $3,000+ плюс налоги и отпуска. Retainer Few Hands даёт Senior-команду и гарантированный SLA от $190/мес."
                  : lang === "sr"
                  ? "Zaposleni u firmi košta $3.000+ uz poreze i odmore. Retainer Few Hands obezbeđuje Senior tim sa SLA garancijom već od $190/mesečno."
                  : "An in-house dev costs $3,000+ plus taxes and sick leaves. A Few Hands retainer delivers an entire senior team with SLA from $190/mo."
              }
              checked={false}
              rotate="rotate-1"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#fcf0f6] text-[#9c386d] flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#2d263b]">
              {lang === "ru"
                ? "Обучение персонала"
                : lang === "sr"
                ? "Obuka zaposlenih"
                : "Staff Onboarding"}
            </h3>
            <p className="text-xs sm:text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Записываем наглядные видео-инструкции для ваших контент-менеджеров и проводим Zoom-онбординг."
                : lang === "sr"
                ? "Snimamo detaljna video uputstva za vaše menadžere sadržaja i držimo Zoom obuku."
                : "Tailored video walkthroughs and live Zoom consulting for your marketing and content team."}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#f0f5ec] text-[#7ea368] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#2d263b]">
              {lang === "ru"
                ? "Быстрые доработки"
                : lang === "sr"
                ? "Brze dorade i izmene"
                : "Fast Turnaround"}
            </h3>
            <p className="text-xs sm:text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Нужно добавить новый блок, форму, акционный баннер или страницу? Вносим правки в течение 24 часов."
                : lang === "sr"
                ? "Potrebno je dodati novi blok, formular, baner za akciju ili stranicu? Realizujemo u roku od 24 sata."
                : "Need a new promotional banner, lead form, or campaign page? Executed swiftly within 24 hours."}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#edf5f5] text-[#386161] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#2d263b]">
              {lang === "ru"
                ? "24/7 Мониторинг"
                : lang === "sr"
                ? "24/7 Nadzor i zaštita"
                : "24/7 Monitoring"}
            </h3>
            <p className="text-xs sm:text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Автоматический мониторинг доступности и скорости, еженедельные бэкапы и обновление системных модулей."
                : lang === "sr"
                ? "Automatski nadzor dostupnosti i brzine sajta, redovne rezervne kopije i održavanje softverskih zavisnosti."
                : "Automated uptime alarms, performance tracking, regular backups, and dependency maintenance."}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#fef7f0] text-[#c6814b] flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#2d263b]">
              {lang === "ru"
                ? "Прямой канал связи"
                : lang === "sr"
                ? "Direktan kanal komunikacije"
                : "Direct Channels"}
            </h3>
            <p className="text-xs sm:text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Оперативная связь по корпоративной почте или в удобном для вашей команды мессенджере без бюрократии."
                : lang === "sr"
                ? "Direktna komunikacija putem imejla ili u namenskom timskom četu, bez birokratije i komplikovanih tiketa."
                : "Direct access via corporate email or your preferred team channel with no ticket-system bureaucracy."}
            </p>
          </div>
        </div>

        {/* Retainer Pricing Cards */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b]">
              {lang === "ru"
                ? "Тарифные планы сопровождения"
                : lang === "sr"
                ? "Retainer paketi mesečne podrške"
                : "Retainer Support Packages"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Прозрачные условия без скрытых доплат. Возможность менять тариф в зависимости от сезонной нагрузки."
                : lang === "sr"
                ? "Jasni i transparentni uslovi bez skrivenih troškova. Prilagodite paket sezonskim potrebama vašeg poslovanja."
                : "Predictable monthly pricing with no hidden surcharges. Easily adjust tiers as your business scales."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                  plan.popular
                    ? "border-2 border-[#2d263b] bg-white shadow-xl ring-1 ring-[#2d263b]/10"
                    : "border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm hover:shadow-lg"
                }`}
              >
                <div>
                  {plan.popular && (
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#2d263b] text-[#faf9fb] font-bold mb-4 inline-block">
                      {lang === "ru"
                        ? "Рекомендуемый выбор"
                        : lang === "sr"
                        ? "Najpopularniji izbor"
                        : "Most Popular"}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#2d263b]">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#2d263b]">{plan.price}</span>
                    <span className="text-sm text-[#585068]">{plan.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#585068] mt-3 leading-relaxed">
                    {plan.desc}
                  </p>

                  <ul className="mt-6 pt-6 border-t border-[#f1f0f5] space-y-3">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2d263b]">
                        <Check className="w-4 h-4 text-[#7ea368] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6">
                  <Link
                    href={`/contact?plan=${plan.id}`}
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition ${
                      plan.popular
                        ? "bg-[#2d263b] hover:bg-[#1a1622] text-[#faf9fb] shadow-md shadow-[#2d263b]/15"
                        : "border border-[#e5e1eb] bg-white text-[#2d263b] hover:bg-[#f1f0f5] shadow-sm"
                    }`}
                  >
                    <span>
                      {lang === "ru"
                        ? "Выбрать тариф"
                        : lang === "sr"
                        ? "Izaberite paket"
                        : "Select Package"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Comparison: In-House vs Few Hands Retainer */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-[#e5e1eb] bg-white/70 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-[#386161] uppercase tracking-wider">
              {lang === "ru"
                ? "Экономика бизнеса"
                : lang === "sr"
                ? "Poslovna računica"
                : "Commercial Rationale"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Штатный программист против абонентского тарифа Retainer"
                : lang === "sr"
                ? "Programer u firmi naspram Retainer modela podrške"
                : "In-House Developer vs Retainer Support Model"}
            </h2>
            <p className="text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Почему средний и растущий бизнес выбирает внешнее сопровождение вместо найма дорогих узких специалистов в штат."
                : lang === "sr"
                ? "Zašto se uspešne kompanije odlučuju za fleksibilnu eksternu podršku umesto fiksnih plata i dugotrajnog zapošljavanja."
                : "Why forward-looking organizations choose agile retainer partnerships over fixed payroll overhead and hiring bottlenecks."}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#e5e1eb] text-[#8c829c] font-mono text-xs uppercase">
                  <th className="py-3 px-3 font-semibold">
                    {lang === "ru" ? "Критерий" : lang === "sr" ? "Kriterijum" : "Parameter"}
                  </th>
                  <th className="py-3 px-3 font-semibold text-[#8c829c]">
                    {lang === "ru"
                      ? "Штатный сотрудник"
                      : lang === "sr"
                      ? "Programer u firmi"
                      : "In-House Staff"}
                  </th>
                  <th className="py-3 px-3 font-semibold text-[#386161]">Few Hands Retainer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f0f5]">
                {inhouseComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#faf9fb] transition-colors">
                    <td className="py-3.5 px-3 font-bold text-[#2d263b]">{row.metric}</td>
                    <td className="py-3.5 px-3 text-[#585068]">{row.inhouse}</td>
                    <td className="py-3.5 px-3 text-[#386161] font-semibold">{row.fewhands}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Craft Annotations: Stamp & PS */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <CustomStampBadge
              label={
                lang === "ru"
                  ? "РЕАКЦИЯ ПО SLA"
                  : lang === "sr"
                  ? "SLA ODZIV"
                  : "RESPONSE SLA"
              }
              caption={
                lang === "ru"
                  ? "До 1 часа на инциденты • 24/7 Uptime"
                  : lang === "sr"
                  ? "Do 1h za hitne incidente • 24/7 Uptime"
                  : "Under 1 hr incident SLA • 24/7 Uptime"
              }
              starsCount={5}
              className="-rotate-1 max-w-xs shrink-0"
            />

            <CustomPSCard
              noteTitle={
                lang === "ru"
                  ? "P.S. Прозрачность часов:"
                  : lang === "sr"
                  ? "P.S. Prenos neiskorišćenih sati:"
                  : "P.S. Retainer Transparency:"
              }
              text={
                lang === "ru"
                  ? "До 50% неиспользованных часов переносятся на следующий месяц или инвестируются в плановое ускорение и SEO-аудиты."
                  : lang === "sr"
                  ? "Do 50% neiskorišćenih sati se prenosi u sledeći mesec ili se usmerava u plansku optimizaciju brzine i tehnički SEO audit."
                  : "Up to 50% of unused hours roll over or get invested into proactive performance and technical security audits."
              }
              className="rotate-1 flex-1 w-full"
            />
          </div>
        </div>

        {/* Staff Training Details Section (SEO Depth) */}
        <div className="mt-20">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#e5e1eb] text-[#386161] text-xs font-semibold mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>
                {lang === "ru"
                  ? "Обучающая программа"
                  : lang === "sr"
                  ? "Program obuke"
                  : "Onboarding Protocol"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b]">
              {lang === "ru"
                ? "Как устроено обучение сотрудников вашей компании"
                : lang === "sr"
                ? "Kako Few Hands sprovodi obuku vašeg tima"
                : "How Few Hands Onboards and Empowers Your Team"}
            </h2>
            <p className="text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Мы не оставляем клиентов с непонятной системой. Передаём знания так, чтобы рядовой менеджер управлял витриной сайта за пару минут."
                : lang === "sr"
                ? "Ne ostavljamo vas sa nerazumljivim sistemom. Prenošenje znanja organizujemo tako da svaki član vašeg tima s lakoćom ažurira sadržaj za nekoliko minuta."
                : "We eliminate interface confusion with structured video knowledge transfers and live mentoring sessions."}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#edf5f5] text-[#386161] flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-[#2d263b] text-base mb-2">
                {lang === "ru"
                  ? "Персональная видеотека"
                  : lang === "sr"
                  ? "Namenska videoteka"
                  : "Custom Video Library"}
              </h3>
              <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Короткие наглядные ролики (3-5 мин) под каждую операцию: добавление товара, редактирование баннера, публикация статьи."
                  : lang === "sr"
                  ? "Kratka video uputstva (3-5 min) za svaku funkciju: unos novog proizvoda, izmena banera, objava blog članka."
                  : "Concise 3-minute screen recordings tailored to your specific UI for catalog, banner, and text management."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#f0f5ec] text-[#7ea368] flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-[#2d263b] text-base mb-2">
                {lang === "ru"
                  ? "Интерактивный Zoom-онбординг"
                  : lang === "sr"
                  ? "Interaktivni Zoom onbording"
                  : "Interactive Live Sessions"}
              </h3>
              <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Живая демонстрация работы с сайтом в режиме реального времени. Ответы на любые вопросы ваших маркетологов и контентщиков."
                  : lang === "sr"
                  ? "Praktična demonstracija rada na sajtu u realnom vremenu. Odgovori na sva pitanja vaših marketing i operativnih saradnika."
                  : "Live interactive walkthroughs demonstrating real-time workflows and resolving specific operational questions."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0f6] text-[#9c386d] flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-[#2d263b] text-base mb-2">
                {lang === "ru"
                  ? "Постоянная линия помощи"
                  : lang === "sr"
                  ? "Stalna linija podrške"
                  : "Continuous Support Line"}
              </h3>
              <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Если новый сотрудник забыл инструкцию или запутался - оперативно подскажем и поможем решить вопрос в рабочем чате."
                  : lang === "sr"
                  ? "Kada se pojave novi članovi tima ili nedoumice oko rada - uvek smo tu da brzo pomognemo i odgovorimo u radnom četu."
                  : "Whenever new staff joins or edge cases arise, our engineers provide fast, friendly guidance in your dedicated chat."}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-[#e5e1eb] bg-white/70 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#e5e1eb] text-[#386161] text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Частые вопросы" : lang === "sr" ? "Česta pitanja" : "FAQ"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Вопросы и ответы по абонентской поддержке"
                : lang === "sr"
                ? "Pitanja i odgovori o Retainer podršci"
                : "Frequently Asked Questions About Retainer Support"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Регламент работы, условия переноса часов, реакция на срочные инциденты и гибкость тарифов."
                : lang === "sr"
                ? "Pravila saradnje, uslovi prenosa sati, reakcija na hitne situacije i fleksibilnost paketa."
                : "Turnaround guidelines, task estimation, roll-over mechanics, and SLA guarantees."}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-[#2d263b] hover:text-[#386161] transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8c829c] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#386161]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#585068] leading-relaxed border-t border-[#f1f0f5] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-[#e5e1eb] bg-gradient-to-b from-white/95 to-[#f1f0f5] text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-[#2d263b]">
            {lang === "ru"
              ? "Нужна надежная поддержка для вашего сайта?"
              : lang === "sr"
              ? "Tražite pouzdanu tehničku podršku za vaš sajt?"
              : "Looking for Reliable Retainer Tech Support?"}
          </h3>
          <p className="text-xs sm:text-sm text-[#585068] mt-2 max-w-xl mx-auto">
            {lang === "ru"
              ? "Оставьте заявку с адресом вашего сайта. Мы проведем экспресс-аудит проекта и предложим оптимальный план сопровождения."
              : lang === "sr"
              ? "Pošaljite nam link vašeg sajta. Uradićemo brzu reviziju koda i predložiti optimalan paket mesečne podrške."
              : "Submit your website URL for a complimentary code audit and personalized retainer proposal."}
          </p>
          <div className="mt-6 flex flex-col items-center">
            <DoodlePointer
              text={
                lang === "ru"
                  ? "быстрый расчет сметы за 1 мин ↘"
                  : lang === "sr"
                  ? "brza procena budžeta za 1 min ↘"
                  : "instant retainer estimate in 1 min ↘"
              }
              direction="curved-down-right"
              className="mb-2"
            />
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/estimate?service=migration"
                className="px-6 py-3.5 rounded-xl bg-[#2d263b] hover:bg-[#1a1622] text-[#faf9fb] font-semibold text-xs sm:text-sm shadow-md transition"
              >
                {lang === "ru"
                  ? "Рассчитать стоимость поддержки"
                  : lang === "sr"
                  ? "Izračunajte cenu podrške"
                  : "Calculate Retainer Budget"}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl border border-[#e5e1eb] bg-white text-[#2d263b] hover:text-[#386161] hover:border-[#386161]/40 font-semibold text-xs sm:text-sm shadow-sm transition"
              >
                {lang === "ru"
                  ? "Связаться со студией"
                  : lang === "sr"
                  ? "Kontaktirajte studio"
                  : "Direct Studio Inquiry"}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
