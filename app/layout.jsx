import { Caveat, Kalam, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BubbleBackground from "./BubbleBackground";
import MotionProvider from "./MotionProvider";
import WelcomeIntro from "./WelcomeIntro";

const fontDisplay = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const fontHand = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-hand",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://astralune.cv";
const openGraphImage = "https://cloud.yardansh.com/2I0F95.jpg";

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
    images: [
      {
        url: openGraphImage,
        alt: "Astralune portfolio preview",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astralune",
    description:
      "Portfolio developer untuk digital worlds, media platforms, game systems, website, aplikasi, dan game.",
    images: [openGraphImage],
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
    <html lang="id" className={`${fontDisplay.variable} ${fontHand.variable} ${fontMono.variable}`}>
      <body>
        <WelcomeIntro>
          <BubbleBackground />
          <MotionProvider>{children}</MotionProvider>
        </WelcomeIntro>
      </body>
    </html>
  );
}
