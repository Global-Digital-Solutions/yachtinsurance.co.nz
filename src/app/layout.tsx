import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://yachtinsurance.co.nz"),
  title: "Yacht Insurance NZ | Compare & Save | YachtInsurance.co.nz",
  description:
    "Compare top yacht and marine insurance providers in New Zealand. Get instant quotes for boat, yacht, jet ski and marine insurance from specialists like Mariner, Tower and NMI. Save on premiums today.",
  keywords: [
    "yacht insurance nz",
    "boat insurance nz",
    "marine insurance new zealand",
    "jet ski insurance nz",
    "boat insurance quotes",
    "yacht insurance comparison",
    "marine insurance comparison",
    "sailing yacht insurance",
    "motor yacht insurance",
    "vessel insurance nz",
  ],
  authors: [
    {
      name: "Yacht Insurance NZ",
      url: "https://yachtinsurance.co.nz",
    },
  ],
  creator: "Yacht Insurance NZ",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://yachtinsurance.co.nz",
    title: "Yacht Insurance NZ | Compare & Save | YachtInsurance.co.nz",
    description:
      "Compare top yacht and marine insurance providers in New Zealand. Get instant quotes for boat, yacht, jet ski and marine insurance.",
    siteName: "Yacht Insurance NZ",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602943554726-d8bebe914982?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Luxury yacht sailing in New Zealand waters",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YachtInsuranceNZ",
    creator: "@YachtInsuranceNZ",
    title: "Yacht Insurance NZ | Compare & Save",
    description:
      "Compare top yacht and marine insurance providers in New Zealand. Get instant quotes for boat, yacht, jet ski and marine insurance.",
    images: [
      "https://images.unsplash.com/photo-1602943554726-d8bebe914982?w=1200&h=630&fit=crop",
    ],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://yachtinsurance.co.nz",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yacht Insurance NZ",
    url: "https://yachtinsurance.co.nz",
    logo: "https://yachtinsurance.co.nz/logo.svg",
    description:
      "New Zealand yacht and marine insurance comparison service helping boat owners find the best coverage.",
    foundingDate: "2026",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "NZ",
      availableLanguage: ["en"],
    },
    sameAs: [
      "https://www.facebook.com/yachtinsurancenz",
      "https://www.twitter.com/yachtinsurancenz",
      "https://www.linkedin.com/company/yachtinsurancenz",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yacht Insurance NZ",
    url: "https://yachtinsurance.co.nz",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://yachtinsurance.co.nz/search?q={search_term_string}",
      },
      query_input: "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Yacht Insurance NZ" />
        <meta name="format-detection" content="telephone=no" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="canonical" href="https://yachtinsurance.co.nz" />
        <link
          rel="alternate"
          hrefLang="en-NZ"
          href="https://yachtinsurance.co.nz"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6745344450942342"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="antialiased min-h-full flex flex-col bg-white text-slate-900 font-sans"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
