"use client";

import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import AppSidebar from "./AppSidebar";
import SidebarTrigger from "./SidebarTrigger";
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

const portfolioRows = [
  {
    label: "Kudonime",
    href: "https://kudonime.tech",
    description: "Situs hiburan untuk nonton anime, baca manga, dan nonton film.",
    meta: "Anime · Manga · Film",
    accent: "linear-gradient(135deg, #ff7eb6 0%, #ffb347 100%)",
  },
  {
    label: "Astralune Prototype",
    href: "#work",
    description: "Eksplorasi konsep dan alur game MMORPG fantasy — prototype & game flow.",
    meta: "Game prototype · concept",
    accent: "linear-gradient(135deg, #8aa1ff 0%, #c89bff 100%)",
  },
];

const stackGroups = [
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

const processRows = [
  ["Explore", "Mencari ide yang punya karakter kuat, target pengguna jelas, dan ruang berkembang."],
  ["Prototype", "Membuat versi awal untuk menguji flow, tampilan, performa, dan feel produk."],
  ["Ship", "Merilis fitur bertahap dengan fokus ke stabilitas, usability, dan feedback nyata."],
  ["Improve", "Merapikan sistem, memperbaiki bug, menambah konten, dan memperkuat arah project."],
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.4.1 2.7.7.8 1.1 1.7 1.1 2.8 0 4-2.4 4.8-4.7 5.1.4.3.8 1 .8 2v2.4c0 .3.2.6.8.5A9.2 9.2 0 0 0 12 2.8Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 4 3 11.3l5.6 2.1L10.8 20l3.1-4 4.8 3.5L21 4Z" />
      <path d="m8.6 13.4 8.5-5.2-6.3 7.8" />
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [year, setYear] = useState("2026");
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-80px" },
        variants: fadeUp,
        transition: { duration: 0.42, ease: "easeOut" },
      };

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  async function copyEmail() {
    const email = "jrevanaldi@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <>
      <header className="site-nav">
        <a className="wordmark" href="#home" aria-label="Kembali ke beranda">
          <span>Nathan</span>
          <small>portfolio</small>
        </a>
        <SidebarTrigger />
      </header>
      <AppSidebar active="portfolio" />

      <main id="home">
        <m.section className="notebook" initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <span className="notebook-tape left" aria-hidden="true" />
          <span className="notebook-tape right" aria-hidden="true" />

          <span
            className="mascot-sticker"
            style={{ top: 64, right: 18, width: 74, transform: "rotate(8deg)" }}
            aria-label="Go gopher sticker"
          >
            <img src="/stickers/gopher.png" alt="" />
          </span>

          <div className="notebook-meta">
            <a href="https://github.com/jrevanaldi-ai" target="_blank" rel="noreferrer">
              github.com/jrevanaldi-ai
            </a>
            <span>17 y/o · 4 yrs</span>
          </div>

          <div className="page-heading">
            <h1>Astralune</h1>
          </div>

          <div className="tagline-card">web developer · 4 years experience</div>

          <p className="hero-text">
            Saya 17 tahun, 4 tahun ngoding. Fokus utama bikin web platform, aplikasi, dan hiburan
            digital pakai <span className="hl">JavaScript</span>,{" "}
            <span className="hl pink">TypeScript</span>, <span className="hl mint">Golang</span>,
            dan <span className="hl blue">Rust</span>. Selain itu juga main-main di prototype dan
            alur game.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#work">View work</a>
            <a className="button secondary" href="/services">View services</a>
          </div>

          <m.div className="sticky-note" {...reveal}>
            <span
              className="mascot-sticker"
              style={{ top: 10, right: 14, width: 62, transform: "rotate(-12deg)" }}
              aria-label="Ferris the crab sticker"
            >
              <img src="/stickers/ferris.png" alt="" />
            </span>
            <h3>Profile Note</h3>
            <p>
              Nathan, lebih dikenal lewat identitas <strong>Astralune</strong>. Developer muda yang
              dekat dengan dunia coding, pembuatan game, dan eksplorasi ide-ide digital yang terasa
              personal.
            </p>
            <p>
              Bangun project dari sisi teknis dan konsep produk — mulai dari web platform, aplikasi
              custom, sampai sistem game yang bisa dipakai pengguna nyata.
            </p>
          </m.div>

          <m.section className="section" id="work" {...reveal}>
            <div className="section-head">
              <div>
                <span className="section-label">selected work</span>
                <h2>Project portfolio</h2>
              </div>
              <a className="inline-link" href="/services">view coding services</a>
            </div>

            <div className="polaroid-stack">
              {portfolioRows.map((row) => (
                <a
                  className="polaroid"
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <div className="polaroid-photo" style={{ background: row.accent }}>
                    <span className="polaroid-photo-label">{row.label}</span>
                  </div>
                  <div className="polaroid-caption">
                    <strong>{row.label}</strong>
                    <p>{row.description}</p>
                    <span className="polaroid-meta">{row.meta}</span>
                  </div>
                </a>
              ))}
            </div>
          </m.section>

          <m.section className="section" id="expertise" {...reveal}>
            <span className="section-label">stack</span>
            <h2>Stack yang dipakai</h2>
            <div className="stack-list">
              {stackGroups.map((group) => (
                <div className="stack-row" key={group.title}>
                  <strong>{group.title}.</strong>
                  <div className="pill-row">
                    {group.items.map(([item, Icon]) => (
                      <span className="pill" key={item}>
                        <Icon aria-hidden="true" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </m.section>

          <m.section className="section" id="process" {...reveal}>
            <span className="section-label">process</span>
            <h2>How I build</h2>
            <ol className="process-list">
              {processRows.map(([title, copy]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </m.section>

          <m.section className="section" id="contact" {...reveal}>
            <span className="section-label">contact</span>
            <h2>Let&apos;s build something.</h2>
            <p className="hero-text">
              Buka jasa pembuatan website, aplikasi, prototype game, dan bot WhatsApp / Discord /
              Telegram (termasuk auto responder website). Cek section portfolio untuk lihat project
              yang sudah dibuat.
            </p>
            <div className="contact-block">
              <div className="contact-icons" aria-label="Contact links">
                <a className="icon-link" href="mailto:jrevanaldi@gmail.com" aria-label="Email Nathan">
                  <MailIcon />
                </a>
                <a className="icon-link" href="https://github.com/jrevanaldi-ai" target="_blank" rel="noreferrer" aria-label="GitHub Nathan">
                  <GitHubIcon />
                </a>
                <a className="icon-link" href="https://t.me/AstraluneTeam2" target="_blank" rel="noreferrer" aria-label="Telegram Astralune">
                  <TelegramIcon />
                </a>
              </div>
              <div>
                <button className="button primary" type="button" onClick={copyEmail}>
                  {copied ? "Email copied ✓" : "Copy email"}
                </button>
                <span className="copy-pill" style={{ marginLeft: 10 }}>website · app · prototype · bot</span>
              </div>
            </div>
          </m.section>
        </m.section>
      </main>

      <footer className="footer">
        <nav>
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="/services">Services</a>
          <a href="/qna">QnA</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <span>&copy;{year} Nathan</span>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </>
  );
}
