import { Poppins, Exo, Barlow } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500"],
  variable: "--font-Poppins",
  subsets: ["latin"],
});

export const fontExo = Exo({
  variable: "--font-Exo",
  subsets: ["latin"],
});

export const barlow = Barlow({
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-Barlow",
  subsets: ["latin"],
});
