import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Portfolio of Chantele Mucuio, a final-year ICT student and software developer focused on Java, Python, backend development and modern web applications.";

export const metadata: Metadata = {
  title: {
    default: "Chantele Mucuio | Software Developer",
    template: "%s | Chantele Mucuio",
  },
  description,
  openGraph: {
    title: "Chantele Mucuio | Software Developer",
    description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFB8D6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
