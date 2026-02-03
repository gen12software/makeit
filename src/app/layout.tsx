import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Caveat, Unbounded } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAKE IT | Marketing, Design & Strategy",
  description: "Potenciamos tu marca personal y profesional. Marketing, diseño y estrategia para creadores y empresas.",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "MAKE IT | Marketing, Design & Strategy",
    description: "Marketing, diseño y estrategia para creadores y empresas.",
    url: "https://makeit-studio.com", // Puedes cambiar esto por la URL real
    siteName: "MAKE IT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAKE IT Studio",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAKE IT | Marketing, Design & Strategy",
    description: "Marketing, diseño y estrategia para creadores y empresas.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${outfit.variable} ${caveat.variable} ${unbounded.variable} antialiased selection:bg-brand-stone/30 selection:text-brand-black`}
      >
        {children}
      </body>
    </html>
  );
}
