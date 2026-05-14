import "./globals.css";

export const metadata = {
  title: "Nathan | Developer Portfolio",
  description:
    "Portfolio developer software engineer 17 tahun dengan 4 tahun pengalaman di JavaScript, TypeScript, Go, dan Rust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
