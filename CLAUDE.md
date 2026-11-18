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

Кольори задані як CSS-змінні (RGB-канали) у `app/globals.css` і підключені в `tailwind.config.ts`. Компоненти використовують тільки токени (`bg-canvas`, `text-ink`, `border-line`, `text-gold-700`, `bg-brass` …), а не hex-коди, щоб теми працювали автоматично.

- **Світла палацова тема** (за замовчуванням): canvas `#FBF9F5`, surface `#FFFFFF`, line `#EADBCE`, ink `#181716`, золото `#C5A059` / `#B88E3E`.
- **Темна вечірня тема `noir`** (`/oleksandr`): canvas `#09080A`, surface `#141418`, рамки золото/30, текст шампань `#FDF8EE`. Вмикається обгорткою `<ThemeScope theme="noir">` на сторінці; тема поширюється на хедер і футер через `:root:has([data-theme=…])`.
- **М'яка тема `cashmere`** (`/tetiana`): пудровий кашемір `#E8DDD9` / `#A39089` як акцент на фонах секцій і рамках.
- **CTA-кнопки** (`components/ui/Button.tsx`, клас `.btn-primary`): на світлих темах — глибокий антрацит `#1C1917` з текстом `#FAF7F2` і рамкою золото/50; на `noir` — золотий градієнт `#DFBE74 → #C5A059 → #A67C37` з текстом `#121110`. Жовто-гірчичних градієнтів не використовувати.
- **Типографіка:** заголовки `font-serif` (Cormorant Garamond), текст `font-sans` (Plus Jakarta Sans), шрифти через `next/font` (self-hosted, без Google-запитів у браузері). Акцентні слова в заголовках — `*слово*` → `AccentText` (золотий курсив, без плашок).
- **H1:** `leading-[1.15]` + `pt-2`, щоб не обрізались засічки.
- Без розмитих радіальних плям — тільки тонкі золоті рамки (`GoldFrame`), орнамент `Ornament` (— ✦ —), арки для фото (`MediaFrame`).

## Структура

```
app/                    маршрути (див. таблицю), layout.tsx (шрифти, metadata de_AT, JSON-LD), sitemap.ts, robots.ts
components/
  layout/               Header (логотип по центру, зменшується при скролі), Footer, LanguageSwitcher (поки тільки UI)
  sections/             секції сторінок (Hero, PersonalHero, PricingSection, FaqSection …)
  forms/                форми, що формують повідомлення і відкривають WhatsApp
  ui/                   Button, Card, GoldFrame, MediaFrame, StatusBadge, ThemeScope, SaveContactButton, WhatsAppButton …
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
