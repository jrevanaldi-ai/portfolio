import { Caveat, Kalam, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BubbleBackground from "./BubbleBackground";
import MotionProvider from "./MotionProvider";
import WelcomeIntro from "./WelcomeIntro";
import { site } from "./site.config";

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

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: "Next.js",
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
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
    title: site.name,
    description: site.shortDescription,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        alt: `${site.name} portfolio preview`,
      },
    ],
    type: "website",
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.shortDescription,
    images: [site.ogImage],
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
    <html lang={site.lang} className={`${fontDisplay.variable} ${fontHand.variable} ${fontMono.variable}`}>
      <body>
        <WelcomeIntro>
          <BubbleBackground />
          <MotionProvider>{children}</MotionProvider>
        </WelcomeIntro>
      </body>
    </html>
  );
}
