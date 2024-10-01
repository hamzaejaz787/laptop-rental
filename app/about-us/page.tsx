import Banner from "@/components/Banner";
import Video from "./_components/Video";
import Cta from "./_components/Cta";
import AboutCards from "./_components/AboutCards";
import { Metadata } from "next";
import ReviewCarousel from "./_components/ReviewCarousel";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Laptop Rental For Events | About Us",
  description:
    "The business events industry uplifts and unites people. We're fortunate to be part of it. For all your IT and event technology needs, contact us.",
  keywords: "",
  alternates: {
    canonical: "https://laptop-rental.com.au/about-us",
  },
  other: { title: "Laptop Rental For Events | About Us" },
};

const Aboutus = () => {
  return (
    <>
      <Banner
        image={{
          url: "/About-Header.png",
          alternativeText: "About Us",
        }}
        btn="Contact us"
        link="/contact-us"
        title="About Us"
        text="Laptop Rental is a global leader in providing cutting-edge event technology services, addressing the persistent challenges businesses face in organising successful events."
      />

      <Breadcrumbs className="sr-only" currentPage="About Us" />
      <Video />
      <Cta />
      <AboutCards />
      <ReviewCarousel />
      {/* <AboutForm /> */}
    </>
  );
};

export default Aboutus;
