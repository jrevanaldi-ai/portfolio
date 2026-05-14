import "./globals.css";
import BubbleBackground from "./BubbleBackground";
import MotionProvider from "./MotionProvider";
import WelcomeIntro from "./WelcomeIntro";

const siteUrl = "https://astralune.cv";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Astralune",
    template: "%s | Astralune",
  },
  description:
    "Astralune adalah portfolio developer untuk digital worlds, media platforms, game systems, dan jasa pembuatan website, aplikasi, serta game.",
  applicationName: "Astralune",
  generator: "Next.js",
  keywords: [
    "Astralune",
    "Astralune Service",
    "developer portfolio",
    "jasa coding",
    "jasa website",
    "jasa aplikasi",
    "jasa game",
    "Next.js developer",
    "Golang developer",
    "Rust developer",
  ],
  authors: [{ name: "Astralune", url: siteUrl }],
  creator: "Astralune",
  publisher: "Astralune",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Astralune",
    description:
      "Portfolio developer untuk digital worlds, media platforms, game systems, website, aplikasi, dan game.",
    url: siteUrl,
    siteName: "Astralune",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "Astralune",
    description:
      "Portfolio developer untuk digital worlds, media platforms, game systems, website, aplikasi, dan game.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <BubbleBackground />
        <WelcomeIntro />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
