<?php
/**
 * Template Name: Landing — FewHands
 * Template Post Type: page
 */
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Few Hands — сайты на WordPress, монтаж видео, YouTube и Instagram</title>
  <meta name="description" content="Создание сайтов на WordPress и статической вёрстке, монтаж видео, сопровождение YouTube и Instagram. Портфолио проектов, видео‑аватары, сроки и стоимость, форма заявки." />
  <meta property="og:title" content="Few Hands — Сайты, Монтаж, YouTube, Instagram" />
  <meta property="og:description" content="Создание сайтов, монтаж видео, ведение YouTube и Instagram. Реальные примеры, видео‑аватары, понятные этапы и форма заявки." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://fewhands.com/favicon.png" />
  <meta name="theme-color" content="#0ea5e9" />
  <!-- Tailwind CDN for quick styling (enable dark mode via class) -->
  <!-- Set initial theme early to prevent flash -->
  <script>(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();</script>
  <!-- Configure Tailwind CDN to use class-based dark mode -->
  <script>window.tailwind=window.tailwind||{};window.tailwind.config={darkMode:'class'};</script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Smooth scroll */
    html { scroll-behavior: smooth; }
    /* Simple fade-in */
    .fade-in { animation: fadeIn .6s ease-out both; }
    @keyframes fadeIn { from {opacity:.0; transform: translateY(6px)} to {opacity:1; transform:none} }
    /* Glass card */
    .glass { background: rgba(255,255,255,.7); backdrop-filter: blur(8px); }
    .dark .glass { background: rgba(17,24,39,.6); }
      /* YouTube fallback */
    .yt-fallback{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
    .yt-fallback img{width:100%;height:100%;object-fit:cover;filter:brightness(.8)}
    .yt-fallback .play{position:absolute;font-size:44px;line-height:1;padding:.5rem .8rem;border-radius:9999px;background:rgba(0,0,0,.55);color:#fff}
  </style>
<style>
/* Neon hero */
.neon-hero{position:relative;background: radial-gradient(80% 60% at 20% 20%, rgba(14,165,233,.25), transparent 60%), radial-gradient(60% 60% at 80% 30%, rgba(124,58,237,.25), transparent 60%), linear-gradient(135deg, rgba(2,6,23,0.92), rgba(30,41,59,0.92));}
.neon-hero::after{content:'';position:absolute;inset:0;background: repeating-linear-gradient(90deg, rgba(148,163,184,.06) 0px, rgba(148,163,184,.06) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(0deg, rgba(148,163,184,.06) 0px, rgba(148,163,184,.06) 1px, transparent 1px, transparent 12px); mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 75%);}
.orb{position:absolute;border-radius:50%;filter: blur(40px);opacity:.85;mix-blend-mode:screen}
.orb1{width:220px;height:220px;background:linear-gradient(180deg,#22d3ee,#2563eb); top:10%; left:8%; animation: float1 9s ease-in-out infinite;}
.orb2{width:260px;height:260px;background:linear-gradient(180deg,#f472b6,#a78bfa); bottom:8%; right:6%; animation: float2 11s ease-in-out infinite;}
@keyframes float1{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(12px, -10px,0)}}
@keyframes float2{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(-14px, 12px,0)}}
.mock{backdrop-filter: blur(8px); background: rgba(255,255,255,.08); border: 1px solid rgba(148,163,184,.25); border-radius: 14px; padding: 10px 12px; color: #e2e8f0; font-weight:600; box-shadow: 0 10px 30px rgba(2,6,23,.35);}
.mock small{display:block;color:#94a3b8;font-weight:400}
.mock-stack{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media(min-width:640px){.mock-stack{grid-template-columns:repeat(3,1fr)}}
</style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
  <!-- Header -->
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200/60 dark:border-slate-700/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#home" class="flex items-center gap-2 font-semibold tracking-tight">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="text-sky-500"><path d="M4 8l8-5 8 5v8l-8 5-8-5V8z"/><path d="M12 3v18" opacity=".5"/></svg>
        <span>Few Hands</span>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a href="#services" class="hover:text-sky-600">Услуги</a>
        <a href="#work" class="hover:text-sky-600">Сайты</a>
        <a href="#youtube" class="hover:text-sky-600">YouTube</a>
        <a href="#instagram" class="hover:text-sky-600">Instagram</a>
        <a href="#process" class="hover:text-sky-600">Процесс</a>
        <a href="#faq" class="hover:text-sky-600">FAQ</a>
        <a href="#contact" class="hover:text-sky-600">Контакты</a>
      </nav>
      <div class="flex items-center gap-2">
  <a href="#contact" class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 text-white hover:bg-sky-600">
    <span>Оставить заявку</span>
  </a>
  <button id="menuBtn" class="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-700" aria-label="Открыть меню">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
  </button>
</div>

    </div>
    <div id="mobileNav" class="md:hidden hidden border-t border-slate-200 dark:border-slate-700">
      <nav class="px-4 py-3 grid gap-2 text-sm">
        <a href="#services" class="py-2">Услуги</a>
        <a href="#work" class="py-2">Сайты</a>
        <a href="#youtube" class="py-2">YouTube</a>
        <a href="#instagram" class="py-2">Instagram</a>
        <a href="#process" class="py-2">Процесс</a>
        <a href="#faq" class="py-2">FAQ</a>
        <a href="#contact" class="py-2">Контакты</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="home" class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-sky-50 to-transparent dark:from-sky-900/20 pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div class="fade-in">
          <h1 class="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            Делаю сайты и видео. Помогаю с YouTube и Instagram.
          </h1>
          <p class="mt-5 text-slate-600 dark:text-slate-300 text-lg">Без лишних слов и сложных терминов. Ниже — примеры работ, простое описание услуг и форма для связи.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#work" class="px-5 py-3 rounded-xl bg-sky-500 text-white hover:bg-sky-600">Смотреть проекты</a>
            <a href="#contact" class="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800">Запросить стоимость</a>
          </div>
          <div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span class="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Опыт с 2008 года</span>
            <span class="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M14.31 8l5.74 9.94"/></svg>Проекты в США и Европе</span>
          </div>
        </div>
        <div class="fade-in lg:justify-self-end">
  <div class="neon-hero relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-slate-700">
    <div class="absolute inset-0">
      <div class="orb orb1"></div>
      <div class="orb orb2"></div>
    </div>
    <div class="absolute inset-0 flex items-center justify-center p-4">
      <div class="mock-stack">
        <div class="mock rotate-[-4deg]">
          Сайты
          <small>WordPress · лендинги</small>
        </div>
        <div class="mock rotate-[3deg]">
          Видео
          <small>монтаж · субтитры</small>
        </div>
        <div class="mock hidden sm:block rotate-[-2deg]">
          YouTube
          <small>Shorts · оформление</small>
        </div>
        <div class="mock hidden sm:block rotate-[4deg]">
          Instagram
          <small>посты · Reels</small>
        </div>
        <div class="mock hidden sm:block rotate-[-3deg]">
          Видео‑аватар
          <small>реалистичный голос</small>
        </div>
        <div class="mock hidden sm:block rotate-[2deg]">
          Поддержка
          <small>публикация · отчёт</small>
        </div>
      </div>
    </div>
  </div>
  <p class="mt-3 text-xs text-slate-500 text-center">Неон‑коллаж: сайты, монтаж, YouTube, Instagram и видео‑аватары</p>
</div>

<!-- logos -->

      <div class="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center opacity-80">
        <a href="https://stazhkova.com" target="_blank" rel="noopener" class="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-center hover:bg-slate-50 dark:hover:bg-slate-800">Stazhkova</a>
        <a href="https://iwdsolutions.com" target="_blank" rel="noopener" class="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-center hover:bg-slate-50 dark:hover:bg-slate-800">IWD Solutions</a>
        <a href="https://miptglobal.com" target="_blank" rel="noopener" class="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-center hover:bg-slate-50 dark:hover:bg-slate-800">MIPT Global</a>
        <a href="https://amt-g.net" target="_blank" rel="noopener" class="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-center hover:bg-slate-50 dark:hover:bg-slate-800">AMT‑G</a>
        <a href="https://bigdatarealty.com" target="_blank" rel="noopener" class="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-center hover:bg-slate-50 dark:hover:bg-slate-800">Big Data Realty</a>
        <a href="https://vivasan.us" target="_blank" rel="noopener" class="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-center hover:bg-slate-50 dark:hover:bg-slate-800">Vivasan USA</a>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section id="services" class="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Что делаю</h2>
      <p class="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">Разработка сайтов на <strong>WordPress</strong> и статической вёрстке, <strong>монтаж видео</strong> для YouTube и Reels/Shorts, сопровождение <strong>YouTube‑каналов</strong> и <strong>Instagram</strong>: контент‑план, тексты, публикации. Всё с понятными сроками и примерами.</p>

      <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
          <div class="flex items-center gap-3"><span class="p-2 rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">💻</span><h3 class="font-semibold">Сайты</h3></div>
          <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc ml-5">
            <li>Лендинги и небольшие корпоративные сайты под задачу</li>
            <li>Аккуратная вёрстка, быстрая загрузка, адаптив под мобильные</li>
            <li>Формы заявок, подключение почты/мессенджеров, базовая аналитика</li>
          </ul>
        </div>
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
          <div class="flex items-center gap-3"><span class="p-2 rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">🎬</span><h3 class="font-semibold">Монтаж видео</h3></div>
          <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc ml-5">
            <li>YouTube‑ролики и короткие форматы (Reels/Shorts)</li>
            <li>Монтаж, титры, простая графика, музыка, базовая обработка звука</li>
            <li>Экспорт под нужные площадки и разрешения</li>
          </ul>
        </div>
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
          <div class="flex items-center gap-3"><span class="p-2 rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">▶️</span><h3 class="font-semibold">YouTube</h3></div>
          <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc ml-5">
            <li>Подготовка тем, помощь со сценариями, монтаж выпусков</li>
            <li>Обложки, тайм‑коды, описание и главы</li>
            <li>Публикация и базовое оформление канала/ролика</li>
          </ul>
        </div>
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
          <div class="flex items-center gap-3"><span class="p-2 rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">📱</span><h3 class="font-semibold">Instagram</h3></div>
          <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc ml-5">
            <li>Подготовка контент‑плана, тексты и подбор визуалов</li>
            <li>Публикация постов, сторис и Reels по договорённому графику</li>
            <li>Базовые рекомендации по оформлению профиля</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
	
	<!-- ОТДЕЛЬНЫЙ РАЗДЕЛ: вставь ниже блока #services (или перед #work) -->
<section id="video-avatar" class="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-end justify-between gap-4">
      <div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Видео‑аватар под ключ</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">Короткие ролики с говорящим аватаром: приветствие на сайте, реклама, инструкции. Сделаю сценарий, подберу/создам аватар, озвучу (TTS или ваш голос), смонтирую и отдам в нужных форматах.</p>
      </div>
      <a href="#contact" class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 text-white hover:bg-sky-600 text-sm">Заказать видео‑аватар</a>
    </div>

    <div class="mt-8 grid md:grid-cols-3 gap-5">
      <!-- YouTube Shorts A -->
      <div class="relative aspect-[9/16] rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 bg-black">
        <a class="yt-fallback" href="https://youtube.com/shorts/M8g2gJlwH7M" target="_blank" rel="noopener" aria-label="Смотреть на YouTube">
          <img src="https://i.ytimg.com/vi/M8g2gJlwH7M/hqdefault.jpg" alt="Пример видео‑аватара A" />
          <span class="play">▶</span>
        </a>
        <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/M8g2gJlwH7M" title="Пример видео‑аватара A" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload="this.previousElementSibling.style.display='none'"></iframe>
      </div>
      <!-- YouTube Shorts B -->
      <div class="relative aspect-[9/16] rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 bg-black">
        <a class="yt-fallback" href="https://youtube.com/shorts/9_jdjXBknOw" target="_blank" rel="noopener" aria-label="Смотреть на YouTube">
          <img src="https://i.ytimg.com/vi/9_jdjXBknOw/hqdefault.jpg" alt="Пример видео‑аватара B" />
          <span class="play">▶</span>
        </a>
        <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/9_jdjXBknOw" title="Пример видео‑аватара B" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload="this.previousElementSibling.style.display='none'"></iframe>
      </div>
      <!-- YouTube Shorts C -->
      <div class="relative aspect-[9/16] rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 bg-black">
        <a class="yt-fallback" href="https://youtube.com/shorts/-UE0CTWQwD4" target="_blank" rel="noopener" aria-label="Смотреть на YouTube">
          <img src="https://i.ytimg.com/vi/-UE0CTWQwD4/hqdefault.jpg" alt="Пример видео‑аватара C" />
          <span class="play">▶</span>
        </a>
        <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/-UE0CTWQwD4" title="Пример видео‑аватара C" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload="this.previousElementSibling.style.display='none'"></iframe>
      </div>
    </div>

    <div class="mt-10 grid md:grid-cols-3 gap-5 text-sm">
      <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
        <h3 class="font-semibold">Подготовка</h3>
        <ul class="mt-2 list-disc ml-5 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Бриф: цели, площадки, язык(и)</li>
          <li>Короткий сценарий и кадрирование</li>
          <li>Подбор или генерация аватара</li>
        </ul>
      </div>
      <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
        <h3 class="font-semibold">Производство</h3>
        <ul class="mt-2 list-disc ml-5 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Озвучка (TTS/ваш голос)</li>
          <li>Синхронизация губ и эмоций</li>
          <li>Монтаж, титры, графика</li>
        </ul>
      </div>
      <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
        <h3 class="font-semibold">Отгрузка</h3>
        <ul class="mt-2 list-disc ml-5 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Форматы 9:16 / 1:1 / 16:9</li>
          <li>Версии на нескольких языках</li>
          <li>Субтитры .srt и хук/CTA</li>
        </ul>
      </div>
    </div>

    <div class="mt-8 text-center">
      <a href="#contact" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 text-white hover:bg-sky-600">Обсудить видео‑аватар</a>
    </div>
  </div>
</section>

<!-- Подсказки:
1) Ссылки уже подставлены: YouTube Shorts (M8g2gJlwH7M, 9_jdjXBknOw, -UE0CTWQwD4).
2) Если не хотите грузить instagram embed, оставьте только <a class="yt-fallback" ...> — она откроет ролик в Instagram.
3) Чтобы пункт появился в меню, добавьте <a href="#video-avatar" class="hover:text-sky-600">Видео‑аватар</a> в навигацию.
-->


  <!-- Work (Tabs) -->
  <section id="work" class="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Примеры сайтов</h2>
          <p class="mt-3 text-slate-600 dark:text-slate-300">Портфолио: только действующие сайты с превью и активными ссылками. Адаптивная вёрстка, высокая скорость, формы заявок и базовая аналитика.</p>
        </div>
      </div>

      <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <a class="group block p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:shadow-lg transition" href="https://stazhkova.com" target="_blank" rel="noopener">
          <div class="aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-700/70">
            <img src="https://image.thum.io/get/width/1200/crop/900/https://stazhkova.com" alt="stazhkova.com" class="w-full h-full object-cover" />
          </div>
          <div class="mt-3">
            <h3 class="font-semibold">stazhkova.com</h3>
            <p class="text-sm text-slate-500">Персональный сайт / портфолио</p>
          </div>
        </a>
        <a class="group block p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:shadow-lg transition" href="https://iwdsolutions.com" target="_blank" rel="noopener">
          <div class="aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-700/70">
            <img src="https://image.thum.io/get/width/1200/crop/900/https://iwdsolutions.com" alt="iwdsolutions.com" class="w-full h-full object-cover" />
          </div>
          <div class="mt-3">
            <h3 class="font-semibold">Impact Windows & Doors Solutions</h3>
            <p class="text-sm text-slate-500">Оконные и дверные решения</p>
          </div>
        </a>
        <a class="group block p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:shadow-lg transition" href="https://miptglobal.com" target="_blank" rel="noopener">
          <div class="aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-700/70">
            <img src="https://image.thum.io/get/width/1200/crop/900/https://miptglobal.com" alt="miptglobal.com" class="w-full h-full object-cover" />
          </div>
          <div class="mt-3">
            <h3 class="font-semibold">MIPT Global</h3>
            <p class="text-sm text-slate-500">Сообщество выпускников</p>
          </div>
        </a>
        <a class="group block p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:shadow-lg transition" href="https://amt-g.net" target="_blank" rel="noopener">
          <div class="aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-700/70">
            <img src="/wp-content/uploads/2025/08/amt-g.webp" alt="amt-g.net" class="w-full h-full object-cover" />
          </div>
          <div class="mt-3">
            <h3 class="font-semibold">AMT‑G</h3>
            <p class="text-sm text-slate-500">Construction 3D Printers</p>
          </div>
        </a>
        <a class="group block p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:shadow-lg transition" href="https://bigdatarealty.com" target="_blank" rel="noopener">
          <div class="aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-700/70">
            <img src="https://image.thum.io/get/width/1200/crop/900/https://bigdatarealty.com" alt="bigdatarealty.com" class="w-full h-full object-cover" />
          </div>
          <div class="mt-3">
            <h3 class="font-semibold">Big Data Realty</h3>
            <p class="text-sm text-slate-500">Блог и аналитика по недвижимости</p>
          </div>
        </a>
        <a class="group block p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:shadow-lg transition" href="https://vivasan.us" target="_blank" rel="noopener">
          <div class="aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-700/70">
            <img src="https://image.thum.io/get/width/1200/crop/900/https://vivasan.us" alt="vivasan.us" class="w-full h-full object-cover" />
          </div>
          <div class="mt-3">
            <h3 class="font-semibold">Vivasan</h3>
            <p class="text-sm text-slate-500">Интернет‑магазин</p>
          </div>
        </a>
      </div>

      <div class="mt-10 text-center">
        <a href="#contact" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 text-white hover:bg-sky-600">Хочу похожий сайт</a>
      </div>
    </div>
  </section>

  <!-- YouTube samples -->
  <section id="youtube" class="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Примеры YouTube</h2>
      <p class="mt-3 text-slate-600 dark:text-slate-300">Монтаж для длинных выпусков и Shorts: помощь со сценарием, обложки, тайм‑коды, описания и публикация. Ниже — три примера.</p>
      <div class="mt-8 grid md:grid-cols-3 gap-5">
        <div class="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 bg-black yt-card">
          <a class="yt-fallback" href="https://youtu.be/KjhW0NmL2v0" target="_blank" rel="noopener" aria-label="Смотреть на YouTube">
            <img src="https://i.ytimg.com/vi/KjhW0NmL2v0/hqdefault.jpg" alt="YouTube preview 1" />
            <span class="play">▶</span>
          </a>
          <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/KjhW0NmL2v0" title="YouTube video 1" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload="this.previousElementSibling.style.display='none'"></iframe>
        </div>
        <div class="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 bg-black yt-card">
          <a class="yt-fallback" href="https://youtu.be/wm9bt16QY_Q" target="_blank" rel="noopener" aria-label="Смотреть на YouTube">
            <img src="https://i.ytimg.com/vi/wm9bt16QY_Q/hqdefault.jpg" alt="YouTube preview 2" />
            <span class="play">▶</span>
          </a>
          <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/wm9bt16QY_Q" title="YouTube video 2" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload="this.previousElementSibling.style.display='none'"></iframe>
        </div>
        <div class="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 bg-black yt-card">
          <a class="yt-fallback" href="https://youtu.be/_9Z-gfKJRBU" target="_blank" rel="noopener" aria-label="Смотреть на YouTube">
            <img src="https://i.ytimg.com/vi/_9Z-gfKJRBU/hqdefault.jpg" alt="YouTube preview 3" />
            <span class="play">▶</span>
          </a>
          <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/_9Z-gfKJRBU" title="YouTube video 3" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload="this.previousElementSibling.style.display='none'"></iframe>
        </div>
      </div>
    </div>
  </section>

	
<!-- Instagram samples -->
<section id="instagram" class="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-end justify-between gap-4">
      <div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Примеры Instagram</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-300">Ведение Instagram‑аккаунтов: сетка постов, Reels, тексты и графика. Здесь — превью двух профилей и примеры публикаций.</p>
      </div>
      <a href="#contact" class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm">Нужен такой же Instagram</a>
    </div>

    <div class="mt-8 grid md:grid-cols-2 gap-5">
      <!-- moe_miami -->
      <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <!-- simple avatar fallback -->
            <div class="h-9 w-9 rounded-full bg-gradient-to-br from-pink-400 to-violet-500 grid place-items-center text-white text-xs font-semibold select-none">MM</div>
            <div>
              <div class="font-semibold leading-tight">@moe_miami</div>
              <div class="text-xs text-slate-500">лента, сторис, Reels</div>
            </div>
          </div>
          <a href="https://www.instagram.com/moe_miami/" target="_blank" rel="noopener" class="text-sm text-sky-600 hover:underline">Открыть</a>
        </div>
        <!-- mini grid 3×2 -->
        <div class="mt-4 grid grid-cols-3 gap-1.5">
          <a href="https://www.instagram.com/moe_miami/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-mi-1.jpg" alt="Пост 1 @moe_miami" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
          <a href="https://www.instagram.com/moe_miami/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-mi-2.jpg" alt="Пост 2 @moe_miami" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
          <a href="https://www.instagram.com/moe_miami/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-mi-3.jpg" alt="Пост 3 @moe_miami" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
          <a href="https://www.instagram.com/moe_miami/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-mi-4.jpg" alt="Пост 4 @moe_miami" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
          <a href="https://www.instagram.com/moe_miami/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-mi-5.jpg" alt="Пост 5 @moe_miami" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
          <a href="https://www.instagram.com/moe_miami/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-mi-6.jpg" alt="Пост 6 @moe_miami" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
        </div>
      </div>

      <!-- bigdatarealty -->
      <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center text-white text-xs font-semibold select-none">BDR</div>
            <div>
              <div class="font-semibold leading-tight">@bigdatarealty</div>
              <div class="text-xs text-slate-500">карточки, аналитика, Reels</div>
            </div>
          </div>
          <a href="https://www.instagram.com/bigdatarealty/" target="_blank" rel="noopener" class="text-sm text-sky-600 hover:underline">Открыть</a>
        </div>
        <div class="mt-4 grid grid-cols-3 gap-1.5">
          <a href="https://www.instagram.com/bigdatarealty/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-1.jpg" alt="Пост 1 @bigdatarealty" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
          <a href="https://www.instagram.com/bigdatarealty/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-2.jpg" alt="Пост 2 @bigdatarealty" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
          <a href="https://www.instagram.com/bigdatarealty/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-3.jpg" alt="Пост 3 @bigdatarealty" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
          <a href="https://www.instagram.com/bigdatarealty/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-4.jpg" alt="Пост 4 @bigdatarealty" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
          <a href="https://www.instagram.com/bigdatarealty/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-5.jpg" alt="Пост 5 @bigdatarealty" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
          <a href="https://www.instagram.com/bigdatarealty/" target="_blank" rel="noopener" class="block aspect-square rounded-md overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
            <img src="/wp-content/uploads/2025/08/ig-sample-6.jpg" alt="Пост 6 @bigdatarealty" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </a>
        </div>
      </div>
    </div>

    <p class="mt-4 text-xs text-slate-500">Подсказка: вместо отдельных превью можно использовать один скрин на карточку, но мини‑сеткой удобнее визуально и компактнее. Изображения возьмите из Медиафайлов и поменяйте пути <code>assets/*.jpg</code>.</p>
  </div>
</section>
	

  <!-- Process -->
  <section id="process" class="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Как работаю</h2>
      <p class="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">Прозрачный процесс: бриф → план и фиксированная цена → производство → публикация → поддержка. Можно начать с небольшой пробной задачи.</p>
<div class="mt-8 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60"><div class="text-sm text-slate-500">Шаг 1</div><h3 class="font-semibold mt-1">Обсуждаем задачу</h3><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Созвон или переписка: что нужно и к какому сроку.</p></div>
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60"><div class="text-sm text-slate-500">Шаг 2</div><h3 class="font-semibold mt-1">План и цена</h3><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Короткий план работ и фиксированная стоимость.</p></div>
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60"><div class="text-sm text-slate-500">Шаг 3</div><h3 class="font-semibold mt-1">Делаю работу</h3><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Дизайн/верстка сайта, монтаж роликов, тексты.</p></div>
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60"><div class="text-sm text-slate-500">Шаг 4</div><h3 class="font-semibold mt-1">Публикуем</h3><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Заливаю на хостинг/канал/аккаунт, проверяем.</p></div>
        <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60"><div class="text-sm text-slate-500">Шаг 5</div><h3 class="font-semibold mt-1">Поддержка</h3><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Правки по необходимости и дальнейшее ведение.</p></div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Частые вопросы</h2>
      <p class="mt-3 text-slate-600 dark:text-slate-300">Ответы про сроки, бюджет и формат сотрудничества. Больше деталей — при брифе.</p>
<div class="mt-6 divide-y divide-slate-200 dark:divide-slate-800 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <details class="group open:bg-white/60 dark:open:bg-slate-900/60">
          <summary class="cursor-pointer px-5 py-4 font-medium flex items-center justify-between">Сроки и стоимость?
            <span class="ml-3 text-slate-400 group-open:rotate-180 transition">▾</span>
          </summary>
          <div class="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300">Лендинг от 1–2 недель. Видео — от 2–5 дней (в зависимости от объёма). Ведение каналов/аккаунтов — помесячно. Итоговая смета после брифа.</div>
        </details>
        <details class="group">
          <summary class="cursor-pointer px-5 py-4 font-medium flex items-center justify-between">Работаете по договору и с предоплатой?
            <span class="ml-3 text-slate-400 group-open:rotate-180 transition">▾</span>
          </summary>
          <div class="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300">Да. Фиксируем этапы и критерии готовности. Предоплата 30–50% в зависимости от объёма.</div>
        </details>
        <details class="group">
          <summary class="cursor-pointer px-5 py-4 font-medium flex items-center justify-between">Можно начать с пробной задачи?
            <span class="ml-3 text-slate-400 group-open:rotate-180 transition">▾</span>
          </summary>
          <div class="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300">Да. Например, собрать мини‑лендинг/квиз или смонтировать 1–2 ролика, чтобы увидеть процесс и результат.</div>
        </details>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Расскажите о задаче</h2>
          <p class="mt-3 text-slate-600 dark:text-slate-300">Опишите нишу, сроки и примерные материалы. Отвечу в ближайшее время.</p>
          <div class="mt-6 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
            <div class="text-sm text-slate-500">Email</div>
            <div class="flex items-center gap-2 mt-1">
              <a id="emailLink" href="mailto:web@fewhands.com" class="font-medium">web@fewhands.com</a>
              <button id="copyEmail" class="text-xs px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700">Копировать</button>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-2 text-sm">
              <a href="https://t.me/Strashilamudry" class="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-center">Telegram</a>
              <a href="https://wa.me/+79611809004" class="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-center">WhatsApp</a>
            </div>
          </div>
        </div>
        <form class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 space-y-4"
      action="<?php echo esc_url( admin_url('admin-post.php') ); ?>"
      method="POST">
  <input type="hidden" name="action" value="fewhands_contact">
  <?php wp_nonce_field('fewhands_contact','fewhands_nonce'); ?>
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off"> <!-- honeypot -->

  <div>
    <label class="text-sm text-slate-500">Имя</label>
    <input name="name" required class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900" placeholder="Иван" />
  </div>
  <div>
    <label class="text-sm text-slate-500">Email</label>
    <input type="email" name="email" required class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900" placeholder="name@email.com" />
  </div>
  <div>
    <label class="text-sm text-slate-500">Сообщение</label>
    <textarea name="message" rows="4" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900" placeholder="Коротко о задаче…" required></textarea>
  </div>

  <button class="w-full px-5 py-3 rounded-xl bg-sky-500 text-white hover:bg-sky-600">Отправить</button>

  <?php if (isset($_GET['sent']) && $_GET['sent']==='1'): ?>
    <p class="text-sm text-emerald-600 mt-2">Спасибо! Заявка отправлена.</p>
  <?php elseif (isset($_GET['sent']) && $_GET['sent']==='0'): ?>
    <p class="text-sm text-rose-600 mt-2">Ошибка при отправке. Проверьте поля и попробуйте ещё раз.</p>
  <?php endif; ?>
</form>

      </div>
    </div>
  </section>

  <footer class="py-10 border-t border-slate-200/60 dark:border-slate-800 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="opacity-80">© 2019–2025 Few Hands Studio</div>
      <div class="flex items-center gap-4">
        <a href="#home" class="hover:text-sky-600">Наверх ↑</a>
        <a href="https://fewhands.com" target="_blank" rel="noopener" class="hover:text-sky-600">fewhands.com</a>
      </div>
    </div>
  </footer>

  <script>
    
    // Load theme
    (function(){
      const t = localStorage.getItem('theme');
      if (t === 'dark') document.documentElement.classList.add('dark');
    })();

    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    menuBtn.addEventListener('click', ()=> mobileNav.classList.toggle('hidden'));

    // Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.tab;
        tabBtns.forEach(b => b.setAttribute('aria-selected', String(b===btn)));
        tabPanels.forEach(p => p.classList.toggle('hidden', p.id !== 'tab-' + id));
      });
    });

    // Copy email
    const copyBtn = document.getElementById('copyEmail');
    copyBtn.addEventListener('click', async () => {
      const email = document.getElementById('emailLink').textContent.trim();
      try { await navigator.clipboard.writeText(email); copyBtn.textContent = 'Скопировано!'; setTimeout(()=>copyBtn.textContent='Копировать', 1500);} catch(e){}
    });

    // Mock form submit (replace with real endpoint)
    const form = document.getElementById('leadForm');
    const formMsg = document.getElementById('formMsg');
    form.addEventListener('submit', (e)=>{ e.preventDefault(); form.reset(); formMsg.classList.remove('hidden'); setTimeout(()=>formMsg.classList.add('hidden'), 2500); });
  </script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Few Hands Studio",
  "url": "https://fewhands.com",
  "email": "web@fewhands.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Сроки и стоимость?",
      "acceptedAnswer": {"@type": "Answer", "text": "Лендинг от 1–2 недель. Видео — от 2–5 дней; сопровождение каналов/аккаунтов — помесячно. Итоговая смета после брифа."}
    },
    {
      "@type": "Question",
      "name": "Работаете по договору и с предоплатой?",
      "acceptedAnswer": {"@type": "Answer", "text": "Да. Фиксируем этапы и критерии готовности, предоплата 30–50% в зависимости от объёма."}
    },
    {
      "@type": "Question",
      "name": "Можно начать с пробной задачи?",
      "acceptedAnswer": {"@type": "Answer", "text": "Да. Например, собрать мини‑лендинг/квиз или смонтировать 1–2 ролика, чтобы увидеть процесс и результат."}
    }
  ]
}
</script>
</body>
</html>
