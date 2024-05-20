import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import localFont from "@next/font/local";

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
      <body className={`${poppins.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
