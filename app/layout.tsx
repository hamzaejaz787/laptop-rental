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
import Script from "next/script";
//Global metadata
export const metadata: Metadata = {
  title: "Laptop Rental For Events | Your Event Tech Partner",
  description:
    "Trust Laptop Rental for top-notch laptops & tech for events across Australia & New Zealand. Call us at +61-390711893 for fast, reliable service!",
  keywords: [
    "laptop hire",
    "laptop rental",
    "short term laptop rental",
    "rent laptop for business",
    "business laptop rental",
  ],
  other: { title: "Laptop Rental For Events | Your Event Tech Partner" },
  alternates: {
    canonical: "https://laptop-rental.com.au/",
  },
  // icons: {
  //   icon: "/favicon.png",
  // },
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: "Laptop Rental for Business Events in Australia",
    description:
      "Looking to rent laptop for a business event? Laptop Rental offers high-quality laptops for conferences, exhibitions, and other events across Australia and New Zealand.",
    images: [
      {
        url: "https://laptop-rental.com.au/laptop_rental_logo.png",
        width: 128,
        height: 75,
      },
    ],
    type: "website",
    siteName: "Laptop Rental",
  },
  verification: {
    google: "vNWmPR5hwgZ-TRlxaOGCWxkZMtHZdO20cnEpZhNVgZM",
  },
};

//Global schema
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

        <Script
          id="zendesk"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            window.$zopim || (function(d, s) {
               var z = $zopim = function(c) {
                       z._.push(c)
                   },
                   $ = z.s =
                   d.createElement(s),
                   e = d.getElementsByTagName(s)[0];
               z.set = function(o) {
                   z.set._.push(o)
               };
               z._ = [];
               z.set._ = [];
               $.async = !0;
               $.setAttribute('charset', 'utf-8');
               $.src = 'https://v2.zopim.com/?4YOlgTDJ2HbpxTyZYudYvBBfMrWsGVaA';
               z.t = +new Date;
               $.type = 'text/javascript';
               e.parentNode.insertBefore($, e)
            })(document, 'script');
          `,
          }}
        />

        {jsonLd.map((schema, index) => (
          <JsonLdSchema key={index} schema={JSON.stringify(schema)} />
        ))}

        <JsonLdSchema schema={breadcrumbJson.breadcrumbJsonLd} />
      </body>
    </html>
  );
}
