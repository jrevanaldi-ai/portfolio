import AppSidebar from "../AppSidebar";
import { MotionCard, RevealSection } from "../MotionBlocks";

const servicePlans = [
  {
    name: "Website",
    price: "Mulai Rp750K",
    tag: "Landing / portfolio / company profile",
    description:
      "Untuk personal brand, bisnis kecil, portfolio, campaign page, atau website informasi yang rapi dan cepat.",
    features: ["Responsive UI", "Modern landing page", "SEO basic", "Deploy assistance"],
  },
  {
    name: "Application",
    price: "Mulai Rp2.5JT",
    tag: "Web app / dashboard / custom system",
    description:
      "Untuk aplikasi dengan fitur login, dashboard, data flow, API integration, dan kebutuhan bisnis yang lebih spesifik.",
    features: ["Frontend + backend", "Database design", "Auth flow", "Admin dashboard"],
    featured: true,
  },
  {
    name: "Game",
    price: "Mulai Rp3JT",
    tag: "Prototype / web game / multiplayer concept",
    description:
      "Untuk prototype game, sistem gameplay, UI game, atau fondasi awal project seperti RPG dan online game.",
    features: ["Game loop", "Gameplay systems", "UI / HUD", "Prototype build"],
  },
  {
    name: "Custom Project",
    price: "Sesuai request",
    tag: "Custom scope / request khusus / ide unik",
    description:
      "Untuk kebutuhan khusus yang tidak masuk paket standar, dibuat sesuai request, target, fitur, dan budget user.",
    features: ["Scope fleksibel", "Fitur sesuai request", "Estimasi custom", "Diskusi kebutuhan"],
  },
];

const serviceRows = [
  ["[+]", "Tech stack", "JavaScript, TypeScript, Golang, Rust"],
  ["[+]", "Delivery", "Scope jelas, progress bertahap, dan hasil bisa diuji"],
  ["[x]", "Best for", "Website, aplikasi custom, dashboard, game prototype, dan custom project"],
];

const serviceNavItems = [
  { href: "#top", label: "Top" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how-it-works", label: "Flow" },
  { href: "/", label: "Portfolio" },
  { href: "/qna", label: "QnA" },
];

export const metadata = {
  title: "Jasa Coding | Nathan",
  description:
    "Jasa coding Nathan untuk pembuatan website, aplikasi, dan game dengan paket harga profesional.",
};

export default function ServicesPage() {
  return (
    <>
      <AppSidebar active="services" />
      <header className="site-nav services-nav" id="top">
        <a className="wordmark" href="/" aria-label="Kembali ke portfolio">
          <span>NT</span>
          <small>services</small>
        </a>
        <nav className="nav-links services-links">
          {serviceNavItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button primary nav-cta" href="mailto:jrevanaldi@gmail.com">
          Start project
        </a>
      </header>

      <main>
        <RevealSection className="service-hero">
          <div>
            <span className="badge">[coding services / website / app / game]</span>
            <h1>Jasa coding untuk produk yang siap dipakai.</h1>
            <p>
              Saya membuka jasa pembuatan website, aplikasi, dan game. Cocok untuk personal
              project, bisnis, dashboard internal, media platform, sampai prototype game.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/qna">
                Read before order
              </a>
              <a className="button secondary" href="mailto:jrevanaldi@gmail.com">
                Request quotation
              </a>
              <a className="button secondary" href="https://t.me/AstraluneTeam2" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>
          <div className="service-spotlight" aria-label="Service summary">
            <span>currently accepting</span>
            <strong>Website. App. Game.</strong>
            <p>Build from concept, UI, code, integration, until deploy-ready handoff.</p>
          </div>
        </RevealSection>

        <RevealSection className="pricing-section" id="pricing" ariaLabel="Harga jasa coding">
          <div className="section-head">
            <div>
              <p className="section-label">[pricing plans]</p>
              <h2>Pilih plan sesuai scope.</h2>
            </div>
            <a className="inline-link" href="mailto:jrevanaldi@gmail.com">
              custom quote
            </a>
          </div>

          <div className="pricing-grid">
            {servicePlans.map((plan) => (
              <MotionCard className={plan.featured ? "pricing-card featured" : "pricing-card"} key={plan.name}>
                {plan.featured && <span className="plan-badge">Recommended</span>}
                <div>
                  <p>{plan.tag}</p>
                  <h3>{plan.name}</h3>
                  <strong>{plan.price}</strong>
                </div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>[+] {feature}</li>
                  ))}
                </ul>
                <a className={plan.featured ? "button primary" : "button secondary"} href="mailto:jrevanaldi@gmail.com">
                  Discuss {plan.name}
                </a>
              </MotionCard>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="content-section service-notes" id="how-it-works">
          <p className="section-label">[how it works]</p>
          <div className="list-block compact">
            {serviceRows.map(([marker, label, value]) => (
              <article className="list-row" key={label}>
                <span>{marker}</span>
                <strong>{label}</strong>
                <p>{value}</p>
              </article>
            ))}
          </div>
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
