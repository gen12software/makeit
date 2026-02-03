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
