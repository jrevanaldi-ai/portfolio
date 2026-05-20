import AppSidebar from "../AppSidebar";
import AnimatedAccordion from "../AnimatedAccordion";
import { RevealSection } from "../MotionBlocks";
import SidebarTrigger from "../SidebarTrigger";
import { FiFile, FiFileText, FiFolder } from "react-icons/fi";
import {
  site,
  contact,
  orderChecklist,
  qnaItems,
  termsItems,
  stickers,
} from "../site.config";

export const metadata = {
  title: "QnA & S&K Order",
  description:
    `Panduan QnA, checklist, contoh struktur project, dan syarat ketentuan sebelum order ${site.name} Service.`,
  alternates: {
    canonical: "/qna",
  },
  openGraph: {
    title: `QnA & S&K Order | ${site.name} Service`,
    description:
      `Panduan sebelum order ${site.name} Service, termasuk checklist, QnA, struktur project, dan syarat ketentuan.`,
    url: "/qna",
    siteName: site.name,
    images: [{ url: site.ogImage, alt: `${site.name} QnA preview` }],
    type: "website",
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `QnA & S&K Order | ${site.name} Service`,
    description:
      `Panduan sebelum order ${site.name} Service, termasuk checklist, QnA, struktur project, dan syarat ketentuan.`,
    images: [site.ogImage],
  },
};

function Files({ children }) {
  return (
    <div className="files-frame">
      <div className="files-tree">{children}</div>
    </div>
  );
}

function FolderItem({ value, children, defaultOpen = true }) {
  return (
    <details className="folder-item" open={defaultOpen} data-value={value}>
      {children}
    </details>
  );
}

function FolderTrigger({ children, gitStatus }) {
  return (
    <summary className="folder-trigger">
      <span className="file-icon" aria-hidden="true">
        <FiFolder />
      </span>
      <span>{children}</span>
      {gitStatus && <small data-status={gitStatus}>{gitStatus}</small>}
    </summary>
  );
}

function FolderContent({ children }) {
  return <div className="folder-content">{children}</div>;
}

function SubFiles({ children }) {
  return <div className="sub-files">{children}</div>;
}

function FileItem({ children, gitStatus, icon: Icon = FiFile }) {
  return (
    <div className="file-item">
      <span className="file-icon" aria-hidden="true">
        <Icon />
      </span>
      <span>{children}</span>
      {gitStatus && <small data-status={gitStatus}>{gitStatus}</small>}
    </div>
  );
}

export default function QnaPage() {
  const duke = stickers.qna.duke;

  return (
    <>
      <header className="site-nav" id="top">
        <a className="wordmark" href="/" aria-label="Kembali ke portfolio">
          <span>{site.brand}</span>
          <small>qna</small>
        </a>
        <SidebarTrigger />
      </header>
      <AppSidebar active="qna" />

      <main>
        <RevealSection className="notebook">
          <span className="notebook-tape left" aria-hidden="true" />
          <span className="notebook-tape right" aria-hidden="true" />

          <span className="mascot-sticker" style={duke.style} aria-label={duke.label}>
            <img src={duke.src} alt="" />
          </span>

          <div className="notebook-meta">
            <span>{site.name.toLowerCase()} / qna</span>
            <span>read before order</span>
          </div>

          <div className="page-heading">
            <h1>QnA &amp; S&amp;K</h1>
          </div>

          <div className="tagline-card">brief · scope · timeline · deal</div>

          <p className="hero-text">
            Baca bagian ini dulu sebelum order supaya{" "}
            <span className="hl">scope</span>, <span className="hl pink">harga</span>,{" "}
            <span className="hl mint">timeline</span>, revisi, dan kebutuhan project jelas dari
            awal.
          </p>

          <div className="hero-actions">
            <a className="button primary" href={contact.telegram} target="_blank" rel="noreferrer">
              Order via Telegram
            </a>
            <a className="button secondary" href="/services">View pricing</a>
          </div>

          <RevealSection className="section" id="checklist">
            <div className="section-head">
              <div>
                <span className="section-label">order checklist</span>
                <h2>Yang perlu disiapkan.</h2>
              </div>
              <a className="inline-link" href={`mailto:${contact.email}`}>email brief</a>
            </div>
            <AnimatedAccordion items={orderChecklist} label="Checklist sebelum order" defaultOpenIndex={0} />
          </RevealSection>

          <RevealSection className="section" id="project-reference">
            <div className="section-head">
              <div>
                <span className="section-label">project reference</span>
                <h2>Struktur project yang rapi.</h2>
              </div>
              <a className="inline-link" href="/services">service plans</a>
            </div>
            <p className="hero-text">
              Ini contoh gambaran struktur project yang dipakai sebagai referensi saat handoff.
              Folder dipisah berdasarkan fungsi supaya client mudah membaca, deploy, dan melanjutkan
              pengembangan.
            </p>
            <div className="reference-points">
              <span>[+] route dan halaman jelas</span>
              <span>[+] komponen reusable dipisah</span>
              <span>[+] logic/API tidak dicampur UI</span>
              <span>[+] README untuk setup dan deploy</span>
            </div>
            <Files>
              <FolderItem value="app">
                <FolderTrigger gitStatus="modified">app</FolderTrigger>
                <FolderContent>
                  <SubFiles>
                    <FolderItem value="(home)">
                      <FolderTrigger gitStatus="untracked">(home)</FolderTrigger>
                      <FolderContent>
                        <SubFiles>
                          <FileItem gitStatus="untracked">page.jsx</FileItem>
                          <FileItem gitStatus="untracked">layout.jsx</FileItem>
                        </SubFiles>
                      </FolderContent>
                    </FolderItem>
                    <FileItem>layout.jsx</FileItem>
                    <FileItem gitStatus="modified">page.jsx</FileItem>
                    <FileItem>globals.css</FileItem>
                  </SubFiles>
                </FolderContent>
              </FolderItem>
              <FolderItem value="components">
                <FolderTrigger>components</FolderTrigger>
                <FolderContent>
                  <SubFiles>
                    <FileItem>button.jsx</FileItem>
                    <FileItem>tabs.jsx</FileItem>
                    <FileItem>dialog.jsx</FileItem>
                    <FolderItem value="empty" defaultOpen={false}>
                      <FolderTrigger>empty</FolderTrigger>
                    </FolderItem>
                  </SubFiles>
                </FolderContent>
              </FolderItem>
              <FolderItem value="lib">
                <FolderTrigger>lib</FolderTrigger>
                <FolderContent>
                  <SubFiles>
                    <FileItem>api.js</FileItem>
                    <FileItem>auth.js</FileItem>
                    <FileItem>validators.js</FileItem>
                  </SubFiles>
                </FolderContent>
              </FolderItem>
              <FileItem icon={FiFileText}>README.md</FileItem>
              <FileItem icon={FiFileText}>package.json</FileItem>
            </Files>
          </RevealSection>

          <RevealSection className="section" id="questions">
            <span className="section-label">qna</span>
            <h2>Pertanyaan umum.</h2>
            <AnimatedAccordion items={qnaItems} label="Pertanyaan umum jasa coding" />
          </RevealSection>

          <RevealSection className="section" id="terms">
            <span className="section-label">s&amp;k</span>
            <h2>Syarat dan ketentuan.</h2>
            <AnimatedAccordion items={termsItems} label="Syarat dan ketentuan order" />
          </RevealSection>
        </RevealSection>
      </main>

      <footer className="footer">
        <nav>
          <a href="/">Portfolio</a>
          <a href="/services">Services</a>
          <a href="/#work">Work</a>
          <a href={`mailto:${contact.email}`}>Email</a>
        </nav>
        <div>
          <span>&copy;2026 {site.brand}</span>
          <a href="/services">Back to services</a>
        </div>
      </footer>
    </>
  );
}
