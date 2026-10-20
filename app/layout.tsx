import type { Metadata } from "next";
import { Italiana, DM_Sans } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelsunirulanka.com"),
  title: "Hotel Suniru Lanka | Luxury Weddings & Celebrations in Galle",
  description:
    "Hotel Suniru Lanka — Makuluwa, Galle's premier venue for weddings, homecomings, milestone parties, and corporate banquets. Grand air-conditioned hall, authentic Sri Lankan buffet catering, traditional Poruwa decor, and ample parking.",
  keywords: [
    "Hotel Suniru Lanka",
    "Galle wedding venue",
    "Banquet hall Galle",
    "Makuluwa hotel",
    "Sri Lankan wedding reception",
    "Homecoming celebration Galle",
    "Catering Galle",
  ],
  authors: [{ name: "Hotel Suniru Lanka" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Hotel Suniru Lanka | Luxury Celebrations in Galle",
    description:
      "Where your story becomes a celebration. Makuluwa, Galle's premier wedding and banquet destination.",
    url: "https://hotelsunirulanka.com",
    siteName: "Hotel Suniru Lanka",
    images: [
      {
        url: "/venue-exterior.jpg",
        width: 1200,
        height: 800,
        alt: "Hotel Suniru Lanka Illuminated Banquet Venue",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${italiana.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#17130f" />
      </head>
      <body className="bg-dark-deep text-cream font-sans antialiased selection:bg-gold selection:text-dark-deep min-h-screen relative overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
