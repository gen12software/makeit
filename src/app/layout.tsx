import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

const codecPro = localFont({
  src: "../fonts/Codec Pro Regular.otf",
  variable: "--font-codec-pro",
  display: "swap",
  preload: true,
});

const notoSerifTitulares = localFont({
  src: "../fonts/NotoSerifDisplay_ExtraCondensed-Regular.ttf",
  variable: "--font-noto-serif-titulares",
  display: "swap",
  preload: true,
});

const notoSerifResaltar = localFont({
  src: "../fonts/NotoSerifDisplay-ExtraLightItalic.ttf",
  variable: "--font-noto-serif-resaltar",
  display: "swap",
  preload: false,
});

const damion = localFont({
  src: "../fonts/Damion-Regular.ttf",
  variable: "--font-damion",
  display: "swap",
  preload: false,
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
  verification: {
    other: {
      "facebook-domain-verification": ["rwgte92odxdayabar7327qt9z344iv"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1461155318692416');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`${codecPro.variable} ${notoSerifTitulares.variable} ${notoSerifResaltar.variable} ${damion.variable} antialiased selection:bg-brand-stone/30 selection:text-brand-black`}
      >
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1461155318692416&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
