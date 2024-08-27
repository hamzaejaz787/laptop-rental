import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { barlow, fontExo, poppins } from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollToTopButton } from "@/components/ScrollToTop";
import { CartProvider } from "@/providers/CartContext";
import ReCaptchaProvider from "@/components/RecaptchaProvider";
import CookieConsentPopup from "@/components/CookieConsentPopup";
import { GoogleAnalytics } from "@next/third-parties/google";
import JsonLdSchema from "@/components/JsonLdSchema";
import { getBreadCrumbJsonSchema } from "@/data/loaders";

export const metadata: Metadata = {
  title: "Laptop Rental For Events | Your Event Tech Partner",
  description:
    "Worldwide corporations and businesses trust Laptop Rental for perfect events. For all IT & event technology services, call us at +61-390711893 !",
  keywords: [
    "laptop hire",
    "laptop rental",
    "short term laptop rental",
    "rent laptop for business",
    "business laptop rental",
  ],
  alternates: {
    canonical: "https://laptop-rental.com.au/",
  },
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    follow: true,
    index: true,
  },
};
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Laptop Rental",
    image:
      "https://laptop-rental.com.au/_next/image?url=%2Flaptop_rental_logo.png&w=128&q=75",
    "@id": "",
    url: "https://laptop-rental.com.au/",
    telephone: "+61 390 711 839",
    address: {
      "@type": "PostalAddress",
      streetAddress: "19B Hinkler Rd",
      addressLocality: "Mordialloc",
      addressRegion: "VIC",
      postalCode: "VIC 3195",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.988686,
      longitude: 145.0987403,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Laptop Rental",
    url: "https://laptop-rental.com.au/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://laptop-rental.com.au/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const breadcrumbJson = await getBreadCrumbJsonSchema();
  return (
    <html lang="en-au">
      <body
        className={cn(
          "font-Poppins",
          poppins.variable,
          barlow.variable,
          fontExo.variable
        )}
      >
        <ReCaptchaProvider>
          <CartProvider>
            <Header />
            {children}
            <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID!} />
            <Footer />
            <Toaster />
            <ScrollToTopButton />
          </CartProvider>
          <CookieConsentPopup />
        </ReCaptchaProvider>

        {jsonLd.map((schema, index) => (
          <JsonLdSchema key={index} schema={JSON.stringify(schema)} />
        ))}

        <JsonLdSchema
          schema={JSON.stringify(breadcrumbJson.breadcrumbJsonLd)}
        />
      </body>
    </html>
  );
}
