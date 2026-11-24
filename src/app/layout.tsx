import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { site } from "@/lib/config";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Sedjuk Bakmi & Kopi Pos Bloc | Bakmi & Coffee in Jakarta",
  description: site.description,
  keywords: [
    "Sedjuk Bakmi Pos Bloc", "Bakmi Jakarta", "Coffee shop Pasar Baru",
    "Restaurant Pos Bloc Jakarta", "Bakmi and coffee Central Jakarta",
    "Café in Pos Bloc", "Food in Pasar Baru Jakarta",
  ],
  openGraph: {
    title: "Sedjuk Bakmi & Kopi Pos Bloc",
    description: site.description,
    type: "website",
    locale: "en_ID",
    url: site.url,
    siteName: site.name,
    images: [{
      url: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=1200&q=80&auto=format&fit=crop",
      width: 1200, height: 630, alt: "Sedjuk Bakmi & Kopi — Indonesian noodles and coffee",
    }],
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Sedjuk Bakmi & Kopi Pos Bloc",
  servesCuisine: ["Indonesian", "Noodles", "Coffee"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "ID",
  },
  telephone: site.phones[0],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: Math.max(site.reviewCount, 1),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
