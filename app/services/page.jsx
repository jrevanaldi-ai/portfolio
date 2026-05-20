import AppSidebar from "../AppSidebar";
import { MotionCard, RevealSection } from "../MotionBlocks";
import SidebarTrigger from "../SidebarTrigger";

const openGraphImage = "https://cloud.yardansh.com/2I0F95.jpg";

const servicePlans = [
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
    name: "Game",
    price: "Mulai Rp3JT",
    tag: "Prototype · web game · multiplayer concept",
    description:
      "Untuk prototype game, sistem gameplay, UI game, atau fondasi awal project seperti RPG dan online game.",
    features: ["Game loop", "Gameplay systems", "UI / HUD", "Prototype build"],
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

const serviceRows = [
  ["Tech stack", "JavaScript, TypeScript, Golang, Rust"],
  ["Delivery", "Scope jelas, progress bertahap, dan hasil bisa diuji"],
  ["Best for", "Website, aplikasi custom, dashboard, game prototype, custom project"],
];

export const metadata = {
  title: "Astralune Service",
  description:
    "Astralune Service menyediakan jasa coding untuk pembuatan website, aplikasi, dashboard, custom system, dan prototype game.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Astralune Service",
    description:
      "Jasa coding website, aplikasi, dashboard, custom system, dan prototype game.",
    url: "/services",
    siteName: "Astralune",
    images: [{ url: openGraphImage, alt: "Astralune service preview" }],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astralune Service",
    description:
      "Jasa coding website, aplikasi, dashboard, custom system, dan prototype game.",
    images: [openGraphImage],
  },
};

export default function ServicesPage() {
  return (
    <>
      <header className="site-nav" id="top">
        <a className="wordmark" href="/" aria-label="Kembali ke portfolio">
          <span>Nathan</span>
          <small>services</small>
        </a>
        <SidebarTrigger />
      </header>
      <AppSidebar active="services" />

      <main>
        <RevealSection className="notebook">
          <span className="notebook-tape left" aria-hidden="true" />
          <span className="notebook-tape right" aria-hidden="true" />

          <div
            className="sticker-slot"
            style={{ top: 32, right: 48, width: 84, height: 84, transform: "rotate(-6deg)" }}
            aria-hidden="true"
          />

          <div className="notebook-meta">
            <span>astralune / services</span>
            <span>website · app · game</span>
          </div>

          <div className="page-heading">
            <h1>Services</h1>
          </div>

          <div className="tagline-card">jasa coding · website · app · game</div>

          <p className="hero-text">
            Buka jasa pembuatan <span className="hl">website</span>,{" "}
            <span className="hl pink">aplikasi</span>, dan{" "}
            <span className="hl mint">game</span>. Cocok untuk personal project, bisnis,
            dashboard internal, media platform, sampai prototype game.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="/qna">Read before order</a>
            <a className="button secondary" href="mailto:jrevanaldi@gmail.com">Request quotation</a>
            <a className="button secondary" href="https://t.me/AstraluneTeam2" target="_blank" rel="noreferrer">Telegram</a>
          </div>

          <div className="spotlight">
            <span>[ currently accepting ]</span>
            <strong>Website. App. Game.</strong>
            <p>Build from concept, UI, code, integration, until deploy-ready handoff.</p>
          </div>

          <RevealSection className="section" id="pricing" ariaLabel="Harga jasa coding">
            <div className="section-head">
              <div>
                <span className="section-label">pricing plans</span>
                <h2>Pilih plan sesuai scope.</h2>
              </div>
              <a className="inline-link" href="mailto:jrevanaldi@gmail.com">custom quote</a>
            </div>

            <div className="pricing-grid">
              {servicePlans.map((plan) => (
                <MotionCard className={plan.featured ? "pricing-card featured" : "pricing-card"} key={plan.name}>
                  {plan.featured && <span className="plan-badge">Recommended</span>}
                  <p className="plan-tag">{plan.tag}</p>
                  <h3>{plan.name}</h3>
                  <span className="plan-price">{plan.price}</span>
                  <p>{plan.description}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a className={plan.featured ? "button primary" : "button secondary"} href="mailto:jrevanaldi@gmail.com">
                    Discuss {plan.name}
                  </a>
                </MotionCard>
              ))}
            </div>
          </RevealSection>

          <RevealSection className="section" id="how-it-works">
            <span className="section-label">how it works</span>
            <h2>Proses ringkas.</h2>
            <div className="stack-list">
              {serviceRows.map(([label, value]) => (
                <div className="stack-row" key={label}>
                  <strong>{label}.</strong> <span>{value}</span>
                </div>
              ))}
            </div>
          </RevealSection>
        </RevealSection>
      </main>

      <footer className="footer">
        <nav>
          <a href="/">Portfolio</a>
          <a href="/qna">QnA</a>
          <a href="/#work">Work</a>
          <a href="mailto:jrevanaldi@gmail.com">Email</a>
        </nav>
        <div>
          <span>&copy;2026 Nathan</span>
          <a href="/">Back to portfolio</a>
        </div>
      </footer>
    </>
  );
}
