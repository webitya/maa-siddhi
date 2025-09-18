import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import MobileBottomNav from "@/components/shared/mobile-bottom-nav";
import DesktopFloatingActions from "@/components/shared/desktop-floating-actions";
import "./globals.css";

export const metadata = {
  title: "Maa Siddhi - पूजा सामग्री और हवन सामग्री | Ranchi, Jharkhand",
  description:
    "माँ सिद्धि - रांची, झारखंड में पूजा सामग्री और हवन सामग्री की विश्वसनीय दुकान। दुर्गा पूजा, हवन, और सभी धार्मिक आवश्यकताओं के लिए गुणवत्तापूर्ण सामग्री। WhatsApp पर ऑर्डर करें।",
  keywords:
    "पूजा सामग्री रांची, हवन सामग्री झारखंड, दुर्गा पूजा सामग्री, धार्मिक सामान रांची, Puja Samagri Ranchi, Hawan Samagri Jharkhand, Maa Siddhi, religious items ranchi, durga puja items ranchi",
  generator: "Maa Siddhi",
  applicationName: "Maa Siddhi Puja Samagri",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Maa Siddhi", url: "https://maasiddhi.com" }],
  creator: "Maa Siddhi",
  publisher: "Maa Siddhi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://maasiddhi.com"),
  alternates: {
    canonical: "/",
    languages: {
      "hi-IN": "/",
      "en-IN": "/en",
    },
  },
  openGraph: {
    title: "Maa Siddhi - पूजा सामग्री और हवन सामग्री | Ranchi, Jharkhand",
    description:
      "रांची, झारखंड में सबसे अच्छी पूजा सामग्री और हवन सामग्री। दुर्गा पूजा के लिए संपूर्ण सामग्री उपलब्ध।",
    url: "https://maasiddhi.com",
    siteName: "Maa Siddhi",
    locale: "hi_IN",
    type: "website",
    images: [
      {
        url: "/beautiful-durga-maa-idol-with-puja-items-diyas-flo.jpg",
        width: 1200,
        height: 630,
        alt: "Maa Siddhi - Puja Samagri Ranchi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Siddhi - पूजा सामग्री रांची",
    description: "रांची में सबसे अच्छी पूजा सामग्री और हवन सामग्री",
    images: ["/beautiful-durga-maa-idol-with-puja-items-diyas-flo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Religious Items",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Maa Siddhi Puja Samagri",
    description:
      "रांची, झारखंड में पूजा सामग्री और हवन सामग्री की विश्वसनीय दुकान",
    url: "https://maasiddhi.com",
    telephone: "+91-9876543210",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road",
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      postalCode: "834001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.3441,
      longitude: 85.3096,
    },
    openingHours: "Mo-Su 08:00-20:00",
    priceRange: "₹₹",
    servesCuisine: "Religious Items",
    areaServed: {
      "@type": "City",
      name: "Ranchi",
    },
    sameAs: ["https://wa.me/919876543210"],
  };

  return (
    <html
      lang="hi"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <MobileBottomNav />
        <DesktopFloatingActions />
        <Analytics />
      </body>
    </html>
  );
}
