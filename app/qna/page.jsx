import AppSidebar from "../AppSidebar";
import AnimatedAccordion from "../AnimatedAccordion";
import { RevealSection } from "../MotionBlocks";
import SidebarTrigger from "../SidebarTrigger";
import { FiFile, FiFileText, FiFolder } from "react-icons/fi";

const openGraphImage = "https://cloud.yardansh.com/2I0F95.jpg";

const orderChecklist = [
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

const qnaItems = [
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

const termsItems = [
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

export const metadata = {
  title: "QnA & S&K Order",
  description:
    "Panduan QnA, checklist, contoh struktur project, dan syarat ketentuan sebelum order Astralune Service.",
  alternates: {
    canonical: "/qna",
  },
  openGraph: {
    title: "QnA & S&K Order | Astralune Service",
    description:
      "Panduan sebelum order Astralune Service, termasuk checklist, QnA, struktur project, dan syarat ketentuan.",
    url: "/qna",
    siteName: "Astralune",
    images: [{ url: openGraphImage, alt: "Astralune QnA preview" }],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "QnA & S&K Order | Astralune Service",
    description:
      "Panduan sebelum order Astralune Service, termasuk checklist, QnA, struktur project, dan syarat ketentuan.",
    images: [openGraphImage],
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
  return (
    <>
      <header className="site-nav" id="top">
        <a className="wordmark" href="/" aria-label="Kembali ke portfolio">
          <span>Nathan</span>
          <small>qna</small>
        </a>
        <SidebarTrigger />
      </header>
      <AppSidebar active="qna" />

      <main>
        <RevealSection className="notebook">
          <span className="notebook-tape left" aria-hidden="true" />
          <span className="notebook-tape right" aria-hidden="true" />

          <span
            className="mascot-sticker"
            style={{ top: -52, right: 18, width: 72, transform: "rotate(8deg)" }}
            aria-label="Java Duke mascot sticker"
          >
            <img src="/stickers/duke.png" alt="" />
          </span>

          <div className="notebook-meta">
            <span>astralune / qna</span>
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
            <a className="button primary" href="https://t.me/AstraluneTeam2" target="_blank" rel="noreferrer">
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
              <a className="inline-link" href="mailto:jrevanaldi@gmail.com">email brief</a>
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
          <a href="mailto:jrevanaldi@gmail.com">Email</a>
        </nav>
        <div>
          <span>&copy;2026 Nathan</span>
          <a href="/services">Back to services</a>
        </div>
      </footer>
    </>
  );
}
