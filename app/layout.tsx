import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

const barlow = localFont({
  src: [
    {
      path: "../public/fonts/Barlow-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Barlow-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Laptop Rental For Events | Your Event Tech Partner",
  description:
    "Worldwide corporations and businesses trust Laptop Rental for perfect events. For all IT & event technology services, call us at +61 383 730 303!",
  keywords: [
    "laptop hire  (laptop hire for events)",
    "laptop rental (laptop rental for events)",
    "short term laptop rental ( for events)",
    "rent laptop for business",
    "business laptop rental",
    "hire laptop for Corporates events",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
