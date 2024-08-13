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

export const metadata: Metadata = {
  title: "Laptop Rental For Events | Your Event Tech Partner",
  description:
    "Worldwide corporations and businesses trust Laptop Rental for perfect events. For all IT & event technology services, call us at +61 383 730 303!",
  keywords: [
    "laptop hire (laptop hire for events)",
    "laptop rental (laptop rental for events)",
    "short term laptop rental (for events)",
    "rent laptop for business",
    "business laptop rental",
    "hire laptop for Corporates events",
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://laptop-rental.com.au/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://laptop-rental.com.au/about-us",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Laptop Rental",
      item: "https://laptop-rental.com.au/laptop-rental",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Dell Laptop Rental",
      item: "https://laptop-rental.com.au/laptop-rental/dell-laptop-rental",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "MacBook Pro Rental",
      item: "https://laptop-rental.com.au/laptop-rental/macbook-pro-rental",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Lenovo Laptop Rental",
      item: "https://laptop-rental.com.au/laptop-rental/lenovo-laptop-rental",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "HP Laptop Rental",
      item: "https://laptop-rental.com.au/laptop-rental/hp-laptop-rental",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Microsoft Surface Pro Rental",
      item: "https://laptop-rental.com.au/laptop-rental/microsoft-surface-pro-rental",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "Gaming Laptop Rental",
      item: "https://laptop-rental.com.au/laptop-rental/gaming-laptop-rental",
    },
    {
      "@type": "ListItem",
      position: 10,
      name: "Technology Rental",
      item: "https://laptop-rental.com.au/technology-rental",
    },
    {
      "@type": "ListItem",
      position: 11,
      name: "iPad Rental",
      item: "https://laptop-rental.com.au/technology-rental/ipad-rental",
    },
    {
      "@type": "ListItem",
      position: 12,
      name: "Mobile Phone Rental",
      item: "https://laptop-rental.com.au/technology-rental/mobile-phone-rental",
    },
    {
      "@type": "ListItem",
      position: 13,
      name: "Android Phone Rental",
      item: "https://laptop-rental.com.au/technology-rental/android-phone-rental",
    },
    {
      "@type": "ListItem",
      position: 14,
      name: "iPhone Rental",
      item: "https://laptop-rental.com.au/technology-rental/iphone-rental",
    },
    {
      "@type": "ListItem",
      position: 15,
      name: "Event Rental",
      item: "https://laptop-rental.com.au/event-rental",
    },
    {
      "@type": "ListItem",
      position: 16,
      name: "Corporate Event Hire",
      item: "https://laptop-rental.com.au/event-rental/corporate-event",
    },
    {
      "@type": "ListItem",
      position: 17,
      name: "Festival Event Hire",
      item: "https://laptop-rental.com.au/event-rental/corporate-event",
    },
    {
      "@type": "ListItem",
      position: 18,
      name: "Gaming Event Hire",
      item: "https://laptop-rental.com.au/event-rental/gaming-event-hire",
    },
    {
      "@type": "ListItem",
      position: 19,
      name: "Product Launch Hire",
      item: "https://laptop-rental.com.au/event-rental/product-launch-hire",
    },
    {
      "@type": "ListItem",
      position: 20,
      name: "Exhibitions Equipment Rental",
      item: "https://laptop-rental.com.au/event-rental/exhibitions-equipment-rental",
    },
    {
      "@type": "ListItem",
      position: 21,
      name: "Gallery",
      item: "https://laptop-rental.com.au/gallery",
    },
    {
      "@type": "ListItem",
      position: 22,
      name: "Contact us",
      item: "https://laptop-rental.com.au/contact-us",
    },
    {
      "@type": "ListItem",
      position: 23,
      name: "Get A Quote",
      item: "https://laptop-rental.com.au/get-a-quote",
    },
    {
      "@type": "ListItem",
      position: 24,
      name: "Dell Latitude E5440",
      item: "https://laptop-rental.com.au/laptop-rental/dell-laptop-rental/dell-latitude-e5440",
    },
    {
      "@type": "ListItem",
      position: 25,
      name: "Dell Latitude 6430u",
      item: "https://laptop-rental.com.au/laptop-rental/dell-laptop-rental/dell-latitude-6430u",
    },
    {
      "@type": "ListItem",
      position: 26,
      name: "Dell Latitude E7440",
      item: "https://laptop-rental.com.au/laptop-rental/dell-laptop-rental/dell-latitude-e7440",
    },
    {
      "@type": "ListItem",
      position: 27,
      name: "MacBook Pro Retina 15",
      item: "https://laptop-rental.com.au/laptop-rental/macbook-pro-rental/macbook-pro-retina-15",
    },
    {
      "@type": "ListItem",
      position: 28,
      name: "Macbook Pro 16 M1",
      item: "https://laptop-rental.com.au/laptop-rental/macbook-pro-rental/macbook-pro-16-m1",
    },
    {
      "@type": "ListItem",
      position: 29,
      name: "Lenovo ThinkPad T460",
      item: "https://laptop-rental.com.au/laptop-rental/lenovo-laptop-rental/lenovo-thinkpad-t460",
    },
    {
      "@type": "ListItem",
      position: 30,
      name: "Lenovo ThinkPad T470",
      item: "https://laptop-rental.com.au/laptop-rental/lenovo-laptop-rental/lenovo-think-pad-t470",
    },
    {
      "@type": "ListItem",
      position: 31,
      name: "Lenovo Thinkpad T480",
      item: "https://laptop-rental.com.au/laptop-rental/lenovo-laptop-rental/lenovo-thinkpad-t480",
    },
    {
      "@type": "ListItem",
      position: 32,
      name: "Lenovo ThinkPad X1",
      item: "https://laptop-rental.com.au/laptop-rental/lenovo-laptop-rental/lenovo-thinkpad-x1",
    },
    {
      "@type": "ListItem",
      position: 33,
      name: "HP EliteBook 840",
      item: "https://laptop-rental.com.au/laptop-rental/hp-laptop-rental/hp-elitebook-840",
    },
    {
      "@type": "ListItem",
      position: 34,
      name: "HP EliteBook Folio 9480m",
      item: "https://laptop-rental.com.au/laptop-rental/hp-laptop-rental/hp-elitebook-folio-9480m",
    },
    {
      "@type": "ListItem",
      position: 35,
      name: "Microsoft Surface Pro Tablet",
      item: "https://laptop-rental.com.au/laptop-rental/microsoft-surface-pro-rental/microsoft-surface-pro-tablet",
    },
    {
      "@type": "ListItem",
      position: 36,
      name: "MSI Gaming Laptop",
      item: "https://laptop-rental.com.au/laptop-rental/gaming-laptop-rental/msi-gaming-laptop",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </body>
    </html>
  );
}
