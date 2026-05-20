import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGo,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNeovim,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiRust,
  SiTypescript,
  SiWebstorm,
} from "react-icons/si";
import { TbApi, TbBrandVscode } from "react-icons/tb";
import { FiBriefcase, FiHelpCircle, FiHome, FiSend } from "react-icons/fi";

export const site = {
  name: "Astralune",
  brand: "Nathan",
  url: "https://astralune.cv",
  locale: "id_ID",
  lang: "id",
  ageYears: 17,
  experienceYears: 4,
  ogImage: "https://cloud.yardansh.com/9mHeeg.jpg",
  description:
    "Portfolio dan layanan engineering Astralune. Pengembangan website, aplikasi web, dashboard, sistem custom, prototype game, serta integrasi bot pada platform WhatsApp, Discord, dan Telegram.",
  shortDescription:
    "Portfolio dan layanan engineering untuk pengembangan website, aplikasi, prototype game, dan integrasi bot.",
  keywords: [
    "Astralune",
    "Astralune Service",
    "developer portfolio",
    "jasa coding",
    "jasa website",
    "jasa aplikasi",
    "jasa game",
    "jasa bot whatsapp",
    "jasa bot discord",
    "jasa bot telegram",
    "auto responder website",
    "Next.js developer",
    "Golang developer",
    "Rust developer",
  ],
};

export const contact = {
  email: "jrevanaldi@gmail.com",
  github: "https://github.com/jrevanaldi-ai",
  githubLabel: "github.com/jrevanaldi-ai",
  telegram: "https://t.me/AstraluneTeam2",
};

export const projects = [
  {
    label: "Kudonime",
    href: "https://kudonime.tech",
    image: "https://cloud.yardansh.com/0gJYes.jpg",
    description: "Situs hiburan untuk nonton anime, baca manga, dan nonton film.",
    meta: "Anime · Manga · Film",
    accent: "linear-gradient(135deg, #ff7eb6 0%, #ffb347 100%)",
  },
  {
    label: "Astralune Prototype",
    href: "https://github.com/jrevanaldi-ai/astralune-rpg",
    image: "https://cloud.yardansh.com/bumNMq.jpg",
    description: "Eksplorasi konsep dan alur game MMORPG fantasy — prototype & game flow.",
    meta: "Game prototype · concept",
    accent: "linear-gradient(135deg, #8aa1ff 0%, #c89bff 100%)",
  },
];

export const stackGroups = [
  {
    title: "Bahasa",
    items: [
      ["JavaScript", SiJavascript],
      ["TypeScript", SiTypescript],
      ["Golang", SiGo],
      ["Rust", SiRust],
    ],
  },
  {
    title: "Framework",
    items: [
      ["Next.js", SiNextdotjs],
      ["React", SiReact],
      ["Node.js", SiNodedotjs],
      ["Express", SiExpress],
      ["Gin", SiGo],
      ["Echo", SiGo],
      ["Fiber", SiGo],
      ["Actix", SiRust],
      ["Rocket", SiRust],
      ["Leptos", SiRust],
      ["Axum", SiRust],
    ],
  },
  {
    title: "Database",
    items: [
      ["PostgreSQL", SiPostgresql],
      ["MySQL", SiMysql],
      ["MongoDB", SiMongodb],
      ["Redis", SiRedis],
    ],
  },
  {
    title: "Tools",
    items: [
      ["Git", SiGit],
      ["Docker", SiDocker],
      ["Linux", SiLinux],
      ["REST API", TbApi],
    ],
  },
  {
    title: "IDE",
    items: [
      ["VS Code", TbBrandVscode],
      ["WebStorm", SiWebstorm],
      ["Neovim", SiNeovim],
    ],
  },
];

export const processSteps = [
  ["Explore", "Mencari ide yang punya karakter kuat, target pengguna jelas, dan ruang berkembang."],
  ["Prototype", "Membuat versi awal untuk menguji flow, tampilan, performa, dan feel produk."],
  ["Ship", "Merilis fitur bertahap dengan fokus ke stabilitas, usability, dan feedback nyata."],
  ["Improve", "Merapikan sistem, memperbaiki bug, menambah konten, dan memperkuat arah project."],
];

export const servicePlans = [
  {
    name: "Website",
    price: "Mulai Rp750K",
    tag: "Landing · portfolio · company profile",
    description:
      "Untuk personal brand, bisnis kecil, portfolio, campaign page, atau website informasi yang rapi dan cepat.",
    features: ["Responsive UI", "Modern landing page", "SEO basic", "Deploy assistance"],
  },
  {
    name: "Application",
    price: "Mulai Rp2.5JT",
    tag: "Web app · dashboard · custom system",
    description:
      "Untuk aplikasi dengan fitur login, dashboard, data flow, API integration, dan kebutuhan bisnis spesifik.",
    features: ["Frontend + backend", "Database design", "Auth flow", "Admin dashboard"],
    featured: true,
  },
  {
    name: "Game Prototype",
    price: "Mulai Rp2JT",
    tag: "Prototype · alur game · konsep early build",
    description:
      "Untuk prototype, alur gameplay, UI dasar, atau eksplorasi konsep awal — bukan production game penuh. Cocok buat validasi ide, demo, atau fondasi project sebelum dilanjutin ke studio lain.",
    features: ["Prototype build", "Alur & game flow", "UI dasar / HUD", "Konsep gameplay"],
  },
  {
    name: "Bot & Automation",
    price: "Mulai Rp500K",
    tag: "WhatsApp · Discord · Telegram · Web auto responder",
    description:
      "Bot custom untuk WhatsApp, Discord, dan Telegram, atau auto responder untuk website — cocok untuk customer service, notifikasi, moderasi, dan automasi flow harian.",
    features: [
      "WhatsApp / Discord / Telegram bot",
      "Web auto responder",
      "Custom commands & flow",
      "Webhook & API integration",
    ],
  },
  {
    name: "Custom Project",
    price: "Sesuai request",
    tag: "Custom scope · request khusus · ide unik",
    description:
      "Untuk kebutuhan khusus yang tidak masuk paket standar, dibuat sesuai request, target, fitur, dan budget.",
    features: ["Scope fleksibel", "Fitur sesuai request", "Estimasi custom", "Diskusi kebutuhan"],
  },
];

export const serviceRows = [
  ["Tech stack", "JavaScript, TypeScript, Golang, Rust"],
  ["Delivery", "Scope jelas, progress bertahap, dan hasil bisa diuji"],
  [
    "Best for",
    "Website, aplikasi custom, dashboard, prototype / alur game, bot WhatsApp/Discord/Telegram, auto responder",
  ],
];

export const orderChecklist = [
  {
    title: "Siapkan tujuan project",
    content:
      "Tulis project ini dibuat untuk apa, siapa target penggunanya, dan hasil akhir yang kamu harapkan. Contoh: landing page bisnis, dashboard admin, aplikasi member, atau prototype game.",
  },
  {
    title: "Siapkan fitur utama",
    content:
      "Buat daftar fitur wajib dan fitur tambahan. Fitur wajib diprioritaskan untuk estimasi harga dan waktu, fitur tambahan bisa masuk tahap lanjutan jika scope terlalu besar.",
  },
  {
    title: "Siapkan referensi tampilan",
    content:
      "Kirim contoh website, aplikasi, warna, layout, atau style yang kamu suka. Referensi membantu proses desain lebih cepat dan mengurangi revisi yang tidak perlu.",
  },
  {
    title: "Siapkan konten dan akses",
    content:
      "Untuk website, siapkan teks, logo, gambar, link sosial, domain, dan hosting jika sudah ada. Untuk aplikasi, siapkan contoh data, flow bisnis, dan kebutuhan role user.",
  },
];

export const qnaItems = [
  {
    title: "Bagaimana cara mulai order?",
    content:
      "Baca checklist dulu, lalu kirim ringkasan project lewat Telegram atau email. Setelah scope jelas, saya berikan estimasi harga, waktu pengerjaan, dan urutan milestone.",
  },
  {
    title: "Apakah harga bisa berubah?",
    content:
      "Bisa, kalau scope bertambah dari kesepakatan awal. Harga awal dihitung dari fitur, kompleksitas UI, integrasi, database, auth, dan kebutuhan deploy.",
  },
  {
    title: "Apakah bisa request revisi?",
    content:
      "Bisa. Revisi berlaku untuk penyesuaian sesuai scope awal. Perubahan besar seperti tambah fitur baru, ubah flow utama, atau redesign penuh dihitung sebagai scope tambahan.",
  },
  {
    title: "Berapa lama pengerjaan?",
    content:
      "Tergantung scope. Landing page sederhana bisa lebih cepat, sedangkan aplikasi, dashboard, dan game prototype butuh estimasi khusus setelah kebutuhan dibahas.",
  },
  {
    title: "Apakah bisa bantu deploy?",
    content:
      "Bisa. Saya bisa bantu deploy-ready handoff atau deploy langsung jika akses dan platform sudah jelas. Biaya domain, hosting, database, dan layanan pihak ketiga ditanggung client.",
  },
];

export const termsItems = [
  {
    title: "Pembayaran dan mulai kerja",
    content:
      "Project mulai dikerjakan setelah scope disetujui dan pembayaran awal dilakukan sesuai kesepakatan. Sisa pembayaran dilakukan sebelum final handoff atau deploy final.",
  },
  {
    title: "Scope harus jelas",
    content:
      "Semua fitur, halaman, integrasi, dan deliverable harus disepakati di awal. Request di luar scope akan dibuatkan estimasi tambahan sebelum dikerjakan.",
  },
  {
    title: "Materi dari client",
    content:
      "Client bertanggung jawab menyediakan konten, asset, akun, API key, domain, hosting, dan data yang diperlukan. Keterlambatan materi bisa mempengaruhi timeline.",
  },
  {
    title: "Final handoff",
    content:
      "Setelah project selesai dan pembayaran lunas, source code atau hasil deploy diserahkan sesuai kesepakatan. Maintenance setelah handoff dihitung terpisah jika tidak termasuk paket.",
  },
];

export const stickers = {
  home: {
    gopher: {
      src: "/stickers/gopher.png",
      label: "Go gopher sticker",
      style: { top: 64, right: 18, width: 74, transform: "rotate(8deg)" },
    },
    ferris: {
      src: "/stickers/ferris.png",
      label: "Ferris the crab sticker",
      style: { top: 10, right: 14, width: 62, transform: "rotate(-12deg)" },
    },
  },
  services: {
    ts: {
      src: "/stickers/ts.png",
      label: "TypeScript mascot sticker",
      style: { top: 64, right: 18, width: 78, transform: "rotate(-8deg)" },
    },
    js: {
      src: "/stickers/js.png",
      label: "JavaScript mascot sticker",
      style: { top: 480, left: 8, width: 58, transform: "rotate(12deg)" },
    },
  },
  qna: {
    duke: {
      src: "/stickers/duke.png",
      label: "Java Duke mascot sticker",
      style: { top: 64, right: 18, width: 68, transform: "rotate(8deg)" },
    },
  },
};

export const sidebarMenu = [
  {
    label: "Pages",
    items: [
      { href: "/", label: "Portfolio", icon: FiHome, key: "portfolio" },
      { href: "/services", label: "Services", icon: FiBriefcase, key: "services" },
      { href: "/qna", label: "QnA", icon: FiHelpCircle, key: "qna" },
    ],
  },
  {
    label: "Action",
    items: [
      { href: contact.telegram, label: "Order", icon: FiSend, key: "order", external: true },
    ],
  },
];

export const welcomeIntro = {
  storageKey: "nathan-welcome-seen",
  durationMs: 5000,
  text: `Dear visitor,

welcome to my notebook —
a small collection of ideas,
projects, and notes about
what I build.

— Nathan / Astralune`,
};

export const bubbleColors = {
  first: "18,113,255",
  second: "221,74,255",
  third: "0,220,255",
  fourth: "200,50,50",
  fifth: "180,180,50",
  sixth: "140,100,255",
};

export const previewMicrolinkParams = {
  screenshot: "true",
  meta: "false",
  embed: "screenshot.url",
  "viewport.width": "1280",
  "viewport.height": "960",
};

export const sitemapRoutes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/qna", changeFrequency: "monthly", priority: 0.8 },
];
