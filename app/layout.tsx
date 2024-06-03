import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Laptop Rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans min-h-dvh`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
