import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yachtinsurance.co.nz"),
  title: "Yacht Insurance NZ | Specialist Marine Cover | YachtInsurance.co.nz",
  description:
    "Get specialist yacht and marine insurance quotes for New Zealand waters. We connect you with Keane and leading marine insurers — hull, liability, racing, liveaboard and blue water cover. Free, no obligation, response within 24 hours.",
  keywords: [
    "yacht insurance nz",
    "boat insurance nz",
    "marine insurance new zealand",
    "keane marine insurance",
    "keane yacht insurance",
    "jet ski insurance nz",
    "boat insurance quotes nz",
    "yacht insurance comparison nz",
    "marine insurance comparison",
    "sailing yacht insurance nz",
    "motor yacht insurance nz",
    "vessel insurance nz",
    "liveaboard insurance nz",
    "blue water yacht insurance",
    "racing yacht insurance nz",
    "hull and machinery insurance nz",
  ],
  authors: [
    {
      name: "Yacht Insurance NZ",
      url: "https://www.yachtinsurance.co.nz",
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
    url: "https://www.yachtinsurance.co.nz",
    title: "Yacht Insurance NZ | Specialist Marine Cover | YachtInsurance.co.nz",
    description:
      "Specialist yacht and marine insurance for New Zealand waters. Connect with Keane and leading marine insurers — hull, liability, racing, liveaboard and blue water cover. Free, no obligation.",
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
    title: "Yacht Insurance NZ | Specialist Marine Cover",
    description:
      "Specialist yacht and marine insurance for NZ waters. Connect with Keane and leading marine insurers — hull, liability, racing and blue water cover. Free, no obligation.",
    images: [
      "https://images.unsplash.com/photo-1602943554726-d8bebe914982?w=1200&h=630&fit=crop",
    ],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://www.yachtinsurance.co.nz",
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
    url: "https://www.yachtinsurance.co.nz",
    logo: "https://www.yachtinsurance.co.nz/logo.svg",
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
    url: "https://www.yachtinsurance.co.nz",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.yachtinsurance.co.nz/search?q={search_term_string}",
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

        <meta name="msvalidate.01" content="63B34F9B0897A91B07882077C77B3089" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

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
