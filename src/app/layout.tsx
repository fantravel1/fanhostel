import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fanhostel.com"),
  title: {
    default: "FanHostel - Best Hostels Near Stadiums, Arenas & Concert Venues Worldwide",
    template: "%s | FanHostel",
  },
  description:
    "Find the best budget hostels near stadiums, arenas, and concert venues worldwide. Fan-first accommodation for sports events, concerts, and festivals. Book cheap stays where the fans are.",
  keywords: [
    "hostels near stadiums",
    "cheap accommodation sports events",
    "fan hostels",
    "budget stays near arenas",
    "concert venue hostels",
    "sports travel accommodation",
    "football hostel",
    "game day hostel",
    "festival accommodation",
    "backpacker sports travel",
  ],
  authors: [{ name: "FanHostel" }],
  creator: "FanHostel",
  publisher: "FanHostel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fanhostel.com",
    siteName: "FanHostel",
    title: "FanHostel - Sleep With the Fans. Wake Up for the Game.",
    description:
      "The world's definitive guide to hostels built for sports & music fans. Game days, concert nights, fan energy, budget beds.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "FanHostel - Best Fan Hostels Worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FanHostel - Best Hostels Near Stadiums & Concert Venues",
    description:
      "Find the best budget hostels near stadiums, arenas, and concert venues worldwide.",
    images: [
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fanhostel.com",
    languages: {
      "en": "https://fanhostel.com",
      "es": "https://fanhostel.com/es",
      "fr": "https://fanhostel.com/fr",
      "de": "https://fanhostel.com/de",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FanHostel",
    url: "https://fanhostel.com",
    logo: "https://fanhostel.com/logo.png",
    description:
      "The world's definitive guide to hostels built for sports & music fans.",
    sameAs: [
      "https://twitter.com/fanhostel",
      "https://instagram.com/fanhostel",
      "https://facebook.com/fanhostel",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FanHostel",
    url: "https://fanhostel.com",
    description:
      "Find the best budget hostels near stadiums, arenas, and concert venues worldwide.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://fanhostel.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#FF3366" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
