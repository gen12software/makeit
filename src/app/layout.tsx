import type { Metadata } from "next";
import localFont from "next/font/local";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const codecPro = localFont({
  src: "../fonts/Codec Pro Regular.otf",
  variable: "--font-codec-pro",
});

const notoSerifTitulares = localFont({
  src: "../fonts/NotoSerifDisplay_ExtraCondensed-Regular.ttf",
  variable: "--font-noto-serif-titulares",
});

const notoSerifResaltar = localFont({
  src: "../fonts/NotoSerifDisplay-ExtraLightItalic.ttf",
  variable: "--font-noto-serif-resaltar",
});

const damion = localFont({
  src: "../fonts/Damion-Regular.ttf",
  variable: "--font-damion",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://makeit-studio.com"),
  title: "MAKE IT | Marketing, Design & Strategy",
  description: "Potenciamos tu marca personal y profesional. Marketing, diseño y estrategia para creadores y empresas.",
  icons: {
    icon: "/favicon.png",
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
        className={`${codecPro.variable} ${notoSerifTitulares.variable} ${notoSerifResaltar.variable} ${damion.variable} antialiased selection:bg-brand-stone/30 selection:text-brand-black`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
