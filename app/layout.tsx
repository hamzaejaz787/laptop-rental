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
    follow: false,
    index: false,
  },
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
      </body>
    </html>
  );
}
