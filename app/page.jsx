"use client";

import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
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
    marker: "[+]",
    label: "Kudonime",
    value: "Situs hiburan untuk nonton anime, baca manga, dan nonton film di kudonime.tech.",
    href: "https://kudonime.tech",
    meta: "Anime / Manga / Film platform",
  },
  {
    marker: "[+]",
    label: "Astralune MMORPG",
    value: "Project game MMORPG dengan arah dunia fantasi online, progression, dan social gameplay.",
    href: "#work",
    meta: "Fantasy MMORPG project",
  },
];

const stackGroups = [
  {
    title: "Bahasa Pemrograman",
    marker: "[lang]",
    items: [
      ["JavaScript", SiJavascript],
      ["TypeScript", SiTypescript],
      ["Golang", SiGo],
      ["Rust", SiRust],
    ],
  },
  {
    title: "Framework",
    marker: "[fw]",
    items: [
      ["Next.js", SiNextdotjs],
      ["React", SiReact],
      ["Node.js", SiNodedotjs],
      ["Express", SiExpress],
    ],
  },
  {
    title: "Database",
    marker: "[db]",
    items: [
      ["PostgreSQL", SiPostgresql],
      ["MySQL", SiMysql],
      ["MongoDB", SiMongodb],
      ["Redis", SiRedis],
    ],
  },
  {
    title: "Tools",
    marker: "[tool]",
    items: [
      ["Git", SiGit],
      ["Docker", SiDocker],
      ["Linux", SiLinux],
      ["REST API", TbApi],
    ],
  },
  {
    title: "IDE",
    marker: "[ide]",
    items: [
      ["VS Code", TbBrandVscode],
      ["WebStorm", SiWebstorm],
      ["Neovim", SiNeovim],
    ],
  },
];

const processRows = [
  ["01", "Explore", "Mencari ide yang punya karakter kuat, target pengguna jelas, dan ruang berkembang."],
  ["02", "Prototype", "Membuat versi awal untuk menguji flow, tampilan, performa, dan feel produk."],
  ["03", "Ship", "Merilis fitur bertahap dengan fokus ke stabilitas, usability, dan feedback nyata."],
  ["04", "Improve", "Merapikan sistem, memperbaiki bug, menambah konten, dan memperkuat arah project."],
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

function AsciiLogo() {
  return (
    <pre className="ascii-logo" aria-label="Nathan">
{`███╗   ██╗████████╗
████╗  ██║╚══██╔══╝
██╔██╗ ██║   ██║
██║╚██╗██║   ██║
██║ ╚████║   ██║
╚═╝  ╚═══╝   ╚═╝

NATHAN / SOFTWARE ENGINEER`}
    </pre>
  );
}

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
  const motionProps = reduceMotion
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
          <span>NT</span>
          <small>portfolio</small>
        </a>

      </header>

      <main id="home">
        <m.section className="hero-shell" initial="hidden" animate="show" variants={stagger}>
          <div className="hero-copy">
            <m.span className="badge" variants={fadeUp}>
              [17 year old software engineer / 4 years experience]
            </m.span>
            <m.h1 variants={fadeUp}>Saya membangun digital worlds, media platforms, dan game systems.</m.h1>
            <m.p variants={fadeUp}>
              Saya adalah software engineer berusia 17 tahun dengan 4 tahun pengalaman, menguasai
              JavaScript, TypeScript, Golang, dan Rust untuk membangun web platform, hiburan
              digital, dan game MMORPG.
            </m.p>
            <m.div className="hero-actions" variants={fadeUp}>
              <a className="button primary" href="#work">
                View work
              </a>
              <a className="button secondary" href="/services">
                View services
              </a>
            </m.div>
          </div>

          <m.div className="terminal-card" aria-label="Portfolio terminal preview" variants={fadeUp}>
            <AsciiLogo />
            <div className="prompt-row">
              <span>|</span>
              <strong>Build</strong>
              <span>nathan-portfolio</span>
              <em>Next.js</em>
            </div>
            <div className="terminal-output">
              <p>[+] name........ Nathan</p>
              <p>[+] age......... 17</p>
              <p>[+] role........ software engineer</p>
              <p>[x] stack....... JS, TS, Go, Rust</p>
            </div>
            <div className="terminal-hints">
              <span>tab switch section</span>
              <span>ctrl-k contact</span>
            </div>
          </m.div>
        </m.section>

        <m.section className="metric-grid" aria-label="Experience metrics" {...motionProps}>
          {[
            ["17", "years old"],
            ["4y", "software engineering"],
            ["4", "core languages"],
          ].map(([number, label]) => (
            <m.article key={label} whileHover={reduceMotion ? undefined : { y: -3 }}>
              <strong>{number}</strong>
              <span>{label}</span>
            </m.article>
          ))}
        </m.section>

        <m.section className="content-section split" {...motionProps}>
          <div>
            <p className="section-label">[profile]</p>
            <h2>A young developer turning entertainment ideas into real products.</h2>
          </div>
          <p>
            Saya membangun project dari sisi teknis dan konsep produk. Dengan pengalaman 4 tahun
            sebagai software engineer, fokus saya adalah membuat platform yang bisa dipakai pengguna
            nyata, mulai dari web platform, aplikasi custom, sampai sistem game.
          </p>
        </m.section>

        <m.section className="content-section" id="work" {...motionProps}>
          <div className="section-head">
            <div>
              <p className="section-label">[selected work]</p>
              <h2>Project portfolio</h2>
            </div>
            <a className="inline-link" href="/services">
              view coding services
            </a>
          </div>

          <div className="list-block">
            <div className="project-carousel" aria-label="Project carousel">
              <div className="project-track">
                {[...portfolioRows, ...portfolioRows].map((row, index) => (
                  <a
                    className="project-slide"
                    key={`${row.label}-${index}`}
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span>{row.marker} project</span>
                    <strong>{row.label}</strong>
                    <p>{row.value}</p>
                    <small>{row.meta}</small>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </m.section>

        <m.section className="content-section" id="expertise" {...motionProps}>
          <p className="section-label">[stack]</p>
          <h2>Stack yang saya gunakan.</h2>
          <div className="stack-grid">
            {stackGroups.map((group) => (
              <m.article className="stack-card" key={group.title} whileHover={reduceMotion ? undefined : { y: -4 }}>
                <span>{group.marker}</span>
                <h3>{group.title}</h3>
                <div>
                  {group.items.map(([item, Icon]) => (
                    <small key={item}>
                      <Icon aria-hidden="true" />
                      {item}
                    </small>
                  ))}
                </div>
              </m.article>
            ))}
          </div>
        </m.section>

        <m.section className="content-section" id="process" {...motionProps}>
          <p className="section-label">[process]</p>
          <h2>How I build</h2>
          <div className="process-grid">
            {processRows.map(([step, title, copy]) => (
              <article key={step}>
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </m.section>

        <m.section className="content-section contact" id="contact" {...motionProps}>
          <div>
            <p className="section-label">[contact]</p>
            <h2>Follow the projects and the build journey.</h2>
            <p>
              Saya membuka jasa pembuatan website, aplikasi, dan game. Untuk melihat project yang
              sudah dibuat, gunakan carousel di section portfolio.
            </p>
          </div>
          <div className="contact-box">
            <div className="contact-icons" aria-label="Contact links">
              <a className="icon-link" href="mailto:jrevanaldi@gmail.com" aria-label="Email Nathan">
                <MailIcon />
              </a>
              <a
                className="icon-link"
                href="https://github.com/jrevanaldi-ai"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Nathan"
              >
                <GitHubIcon />
              </a>
              <a
                className="icon-link"
                href="https://t.me/AstraluneTeam2"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram Astralune Team"
              >
                <TelegramIcon />
              </a>
            </div>
            <span>Website / Application / Game</span>
            <button className="button primary" type="button" onClick={copyEmail}>
              {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
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
