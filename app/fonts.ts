import { Poppins, Exo, Barlow } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500"],
  variable: "--font-Poppins",
  subsets: ["latin"],
});

export const fontExo = Exo({
  weight: ["400", "500", "700"],
  variable: "--font-Exo",
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export const barlow = Barlow({
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-Barlow",
  subsets: ["latin", "latin-ext", "vietnamese"],
});
