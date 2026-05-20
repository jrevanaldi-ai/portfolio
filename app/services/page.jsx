import AppSidebar from "../AppSidebar";
import { MotionCard, RevealSection } from "../MotionBlocks";
import SidebarTrigger from "../SidebarTrigger";
import { site, contact, servicePlans, serviceRows, stickers } from "../site.config";

export const metadata = {
  title: `${site.name} Service`,
  description:
    `${site.name} Service menyediakan jasa coding untuk website, aplikasi, dashboard, custom system, prototype / alur game, dan bot WhatsApp/Discord/Telegram serta auto responder website.`,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `${site.name} Service`,
    description:
      "Jasa coding website, aplikasi, dashboard, prototype game, dan bot WhatsApp/Discord/Telegram.",
    url: "/services",
    siteName: site.name,
    images: [{ url: site.ogImage, alt: `${site.name} service preview` }],
    type: "website",
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} Service`,
    description:
      "Jasa coding website, aplikasi, dashboard, prototype game, dan bot WhatsApp/Discord/Telegram.",
    images: [site.ogImage],
  },
};

export default function ServicesPage() {
  const ts = stickers.services.ts;
  const js = stickers.services.js;

  return (
    <>
      <header className="site-nav" id="top">
        <a className="wordmark" href="/" aria-label="Kembali ke portfolio">
          <span>{site.brand}</span>
          <small>services</small>
        </a>
        <SidebarTrigger />
      </header>
      <AppSidebar active="services" />

      <main>
        <RevealSection className="notebook">
          <span className="notebook-tape left" aria-hidden="true" />
          <span className="notebook-tape right" aria-hidden="true" />

          <span className="mascot-sticker" style={ts.style} aria-label={ts.label}>
            <img src={ts.src} alt="" />
          </span>
          <span className="mascot-sticker" style={js.style} aria-label={js.label}>
            <img src={js.src} alt="" />
          </span>

          <div className="notebook-meta">
            <span>{site.name.toLowerCase()} / services</span>
            <span>website · app · game</span>
          </div>

          <div className="page-heading">
            <h1>Services</h1>
          </div>

          <div className="tagline-card">website · app · prototype · bot · automation</div>

          <p className="hero-text">
            Buka jasa pembuatan <span className="hl">website</span>,{" "}
            <span className="hl pink">aplikasi</span>,{" "}
            <span className="hl mint">prototype / alur game</span>, dan{" "}
            <span className="hl blue">bot WhatsApp / Discord / Telegram</span> termasuk
            auto responder untuk website.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="/qna">Read before order</a>
            <a className="button secondary" href={`mailto:${contact.email}`}>Request quotation</a>
            <a className="button secondary" href={contact.telegram} target="_blank" rel="noreferrer">Telegram</a>
          </div>

          <div className="spotlight">
            <span>[ currently accepting ]</span>
            <strong>Website. App. Prototype. Bot.</strong>
            <p>Build from concept, UI, code, integration, until deploy-ready handoff.</p>
          </div>

          <RevealSection className="section" id="pricing" ariaLabel="Harga jasa coding">
            <div className="section-head">
              <div>
                <span className="section-label">pricing plans</span>
                <h2>Pilih plan sesuai scope.</h2>
              </div>
              <a className="inline-link" href={`mailto:${contact.email}`}>custom quote</a>
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
                  <a className={plan.featured ? "button primary" : "button secondary"} href={`mailto:${contact.email}`}>
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
          <a href={`mailto:${contact.email}`}>Email</a>
        </nav>
        <div>
          <span>&copy;2026 {site.brand}</span>
          <a href="/">Back to portfolio</a>
        </div>
      </footer>
    </>
  );
}
