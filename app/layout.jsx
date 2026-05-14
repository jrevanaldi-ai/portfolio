import "./globals.css";
import BubbleBackground from "./BubbleBackground";
import MotionProvider from "./MotionProvider";
import WelcomeIntro from "./WelcomeIntro";

export const metadata = {
  title: "Nathan | Developer Portfolio",
  description:
    "Portfolio developer software engineer 17 tahun dengan 4 tahun pengalaman di JavaScript, TypeScript, Go, dan Rust.",
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
