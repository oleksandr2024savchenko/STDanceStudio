# ST Dance Studio (Wien 1040) — контекст проєкту

Вебплатформа танцювальної студії **ST Dance Studio** (Відень) і персональних сторінок засновників **Oleksandr** та **Tetiana**. Next.js App Router, статичний експорт на GitHub Pages.

## Правила роботи

- Кожну зміну спочатку перевіряємо (`npm run typecheck`, `npm run lint`, `npm run build`, візуальна перевірка сторінок), тільки потім комітимо.
- **Impressum і Datenschutz не чіпаємо** без окремого запиту — юридичні дані ще оформлюються.
- **SEO-тексти не чіпаємо** без окремого запиту: `metadata` / `buildPageMetadata`, `lib/seo.ts`, JSON-LD у `lib/schema.ts`, `site.description`.
- Коментарі в коді — німецькою (як у наявному коді). Тексти сайту — австрійська ділова німецька, звертання тільки на «Sie».

## Маршрути

| Маршрут | Файл | Аудиторія | Конверсія |
|---|---|---|---|
| `/` | `app/page.tsx` | Батьки дітей 4–17, організатори балів | Безкоштовне Schnuppertraining (форма → WhatsApp) |
| `/oleksandr` | `app/oleksandr/page.tsx` | Дорослі жінки 35–60+, Pro-Am, гості балів | WhatsApp з готовим текстом + візитка `.vcf` |
| `/tetiana` | `app/tetiana/page.tsx` | Дорослі жінки: Stretching, Solo-Latin, Pro-Am | WhatsApp + візитка `.vcf` |
| `/alle-leistungen` | `app/alle-leistungen/page.tsx` | Огляд усіх послуг (Show, Hochzeitstanz, Ballvorbereitung, Wiener Walzer) | Перехід на підсторінки |
| `/show` | `app/show/page.tsx` | B2B: бали, гала-події | Форма запиту → WhatsApp |
| `/hochzeitstanz` | `app/hochzeitstanz/page.tsx` | Наречені, Maturaball | Пакети + форма → WhatsApp |
| `/impressum`, `/datenschutz` | `app/*/page.tsx` + `lib/content/legal.ts` | — | — |

Таня на сайті — **Tetiana** (маршрут `/tetiana`).

## Юридичний фільтр термінів (Wiener Tanzschulgesetz)

Студія працює як Tanzsportverein / вільні тренери, не як концесійована Tanzschule. У текстах **не використовувати**:

| Заборонено | Замість цього |
|---|---|
| Tanzschule | ST Dance Studio, Tanzsportverein, Tanzstudio |
| Gesellschaftstanz | Tanzsporttraining, Turniertanz, Standard & Latein |
| Ballkurs für Anfänger | Pro-Am-Coaching, Technisches Einzeltraining, Haltung & Raumgefühl |
| Walzerkurs, Tanzkurs (Hochzeit) | Individuelle Hochzeitschoreografie, Choreografie & Einstudierung |
| Gymnastik, Tanzunterricht | Stretching & Bewegungstraining, Body Conditioning, Training |

Бажана лексика: Wiener Walzer, Balleröffnung, Polonaise, Mitternachtseinlage, Debütanten, Schnuppertraining, Semesterkurs, 10er-Block, Taxitänzer, Ballbegleitung, Pro-Am-Coaching.
Шоу (B2B): «Choreografie & Show-Konzeption für Bälle & Gala-Events», без згадок про внутрішній найм артистів.

## Дизайн-система «Viennese Quiet Luxury»

**Одна світла золото-пудрова тема на весь сайт.** Окремих темних чи кольорових тем для сторінок не робимо: власник явно відмовився від чорного `/oleksandr` і пудрового `/tetiana`, бо сайт виглядав різношерсно.

- Палітра в `tailwind.config.ts`: canvas `#FAF8F5` / `#F5F1EA`, surface `#FFFFFF`, line `#E8E2D7`, ink `#1A1A1A`, muted `#6E6B65`, brass `#D4AF37`, шкала `gold` (500 = `#C5A059`, 700 = `#8A6A2B` для тексту).
- **CTA-кнопки — золотий градієнт** `#E8CF7C → #D4AF37 → #B8902A` (`bg-gold-gradient`). Колір має бути саме золотим: не гірчичним, не коричневим, не чорним. Чорних кнопок і чорних плашок не використовувати.
- **Типографіка:** заголовки `font-serif` (Cormorant Garamond), текст `font-sans` (Plus Jakarta Sans), через `next/font` (self-hosted). Акцентні слова — `*слово*` → `AccentText` (золотий курсив, без плашок).
- **H1:** `leading-[1.15]` + `pt-2`, щоб не обрізались засічки.
- Без розмитих радіальних плям — тонкі золоті рамки (`GoldFrame`), орнамент `Ornament` (— ✦ —), арки для фото (`MediaFrame`).

## Структура

```
app/                    маршрути (див. таблицю), layout.tsx (шрифти, metadata de_AT, JSON-LD), sitemap.ts, robots.ts
components/
  layout/               Header (логотип по центру, зменшується при скролі), Footer, LanguageSwitcher (поки тільки UI)
  sections/             секції сторінок (Hero, PersonalHero, PricingSection, FaqSection …)
  forms/                форми, що формують повідомлення і відкривають WhatsApp
  ui/                   Button, Card, GoldFrame, MediaFrame, StatusBadge, SaveContactButton, WhatsAppButton …
  seo/JsonLd.tsx
lib/
  site.ts               назва, адреса, тренери (телефони), навігація
  content/*.ts          усі тексти сторінок
  whatsapp.ts           buildWhatsAppUrl(), buildTelUrl()
  vcard.ts              buildVCard(), vcardPath() — візитки тренерів
  schema.ts, seo.ts     JSON-LD і metadata (SEO — не змінювати без запиту)
app/kontakt/<id>.vcf/  route handlers → статичні файли /kontakt/oleksandr.vcf, /kontakt/tetiana.vcf (дані з lib/site.ts)
public/
  images/               логотип, фото (WebP, стиснені)
```

## Збірка й деплой

- `npm run dev` — локально; `npm run typecheck`, `npm run lint`, `npm run build` — перевірка.
- `next.config.ts`: `output: "export"`, `images.unoptimized`, `trailingSlash`, `basePath` з `NEXT_PUBLIC_BASE_PATH`.
- Шляхи до файлів з `public/` завжди з префіксом `BASE_PATH` (`lib/site.ts`).
- Деплой: `.github/workflows/deploy.yml` → GitHub Pages.
- Зображення не оптимізуються під час збірки, тому їх треба класти вже стиснутими (WebP, ≤ ~300 KB).

## Відкриті питання

- Impressum: власник, правова форма, ZVR/UID, справжній email (`site.email` — заглушка).
- Перемикач мов — тільки макет, переклад не підключено.
- Власний домен (зараз `github.io`).
- Фото тренерів для «Über mich».
