# Astralune Portfolio

Notebook-style portfolio + jasa coding untuk **Astralune / Nathan**. Next.js 16 App Router, React 19, framer-motion.

Live: [astralune.cv](https://astralune.cv)

## Commands

```bash
npm run dev      # dev server (Turbopack)
npm run build    # production build
npm run start    # serve build
npm run lint     # next lint
```

## Routes

- `/` — home (portfolio, stack, process, contact)
- `/services` — pricing plans + how it works
- `/qna` — checklist, project reference, QnA, S&K

## Edit konten lewat satu file

Semua data yang sering diubah ada di **`app/site.config.js`**. Ga perlu jajal file per file.

| Mau ubah                              | Edit di `site.config.js`              |
| ------------------------------------- | ------------------------------------- |
| Nama, URL, deskripsi, OG image        | `site`                                |
| Email, GitHub, Telegram               | `contact`                             |
| Polaroid project di home              | `projects`                            |
| Bahasa/framework/database/tools/IDE   | `stackGroups`                         |
| Proses kerja (Explore/Prototype/...)  | `processSteps`                        |
| Plan harga                            | `servicePlans`                        |
| Tabel "how it works" services         | `serviceRows`                         |
| Checklist sebelum order               | `orderChecklist`                      |
| Pertanyaan QnA                        | `qnaItems`                            |
| Syarat & ketentuan                    | `termsItems`                          |
| Posisi/ukuran/rotasi mascot sticker   | `stickers.{home,services,qna}`        |
| Item sidebar navigation               | `sidebarMenu`                         |
| Text & durasi welcome intro           | `welcomeIntro`                        |
| Warna bubble background               | `bubbleColors`                        |
| Sitemap routes                        | `sitemapRoutes`                       |

## Structure

```
app/
  site.config.js      → semua data konten (edit di sini)
  layout.jsx          → root layout, fonts, metadata
  page.jsx            → home
  services/page.jsx   → /services
  qna/page.jsx        → /qna
  globals.css         → semua styling (notebook theme, single file)
  AppSidebar.jsx      → drawer nav (portaled, event "toggle-sidebar")
  SidebarTrigger.jsx  → hamburger button
  MotionProvider.jsx  → LazyMotion strict
  MotionBlocks.jsx    → RevealSection, MotionCard (server-safe wrappers)
  BubbleBackground.jsx→ pointer-reactive bubble background
  WelcomeIntro.jsx    → one-shot intro (sessionStorage gated)
  AnimatedAccordion.jsx
  sitemap.js / robots.js
public/
  stickers/           → mascot PNG (gopher, ferris, duke, js, ts)
```

## Stack

- **Next.js 16** App Router + **React 19**
- **framer-motion** dengan `LazyMotion strict` — pakai `m.*`, bukan `motion.*`
- **next/font/google** — Caveat (display), Kalam (hand), JetBrains Mono
- **react-icons** untuk Si*/Fi*/Tb* glyphs
- Single global stylesheet di `app/globals.css` (~1600 baris). Reuse CSS custom properties di `:root`.

## Tambah project baru

Edit `projects` di `site.config.js`:

```js
{
  label: "Project Name",
  href: "https://project-url.tld",   // atau anchor "#section"
  image: "https://cdn/.../shot.jpg", // langsung tampil di polaroid
  description: "Deskripsi singkat 1 kalimat.",
  meta: "Kategori · tag",
  accent: "linear-gradient(135deg, #aaa 0%, #bbb 100%)", // fallback warna kalau ga ada image
}
```

Alternatif kalau ga punya screenshot manual: hapus `image`, tambah `previewUrl` — otomatis ke-screenshot lewat Microlink API.

## Tambah route baru

1. Bikin folder + `page.jsx` di `app/<route>/`
2. Tambah entry di `sidebarMenu` (`site.config.js`) dengan `key` baru, supaya highlight aktif
3. Pass `active="<key>"` ke `<AppSidebar />` di page baru
4. Tambah route ke `sitemapRoutes` di `site.config.js`

## Catatan

- Welcome intro hanya muncul sekali per session (sessionStorage key di config). Untuk reset, clear session storage di devtools.
- OG image di-cache crawler (Facebook/Telegram/Twitter). Setelah ganti URL, force refresh via [Facebook Debugger](https://developers.facebook.com/tools/debug/).
- Mascot stickers di `public/stickers/`: Gopher (CC-BY 3.0), Ferris (CC0), Duke (BSD), JS/TS mascot (CC BY-SA 4.0).
