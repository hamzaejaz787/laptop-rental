import Banner from "@/components/Banner";
import Video from "./_components/Video";
import Cta from "./_components/Cta";
import AboutCards from "./_components/AboutCards";
import { Metadata } from "next";
import ReviewCarousel from "./_components/ReviewCarousel";

export const metadata: Metadata = {
  title: "About Us page of Laptop Rental AU",
  description:
    "The business events industry uplifts and unites people. We're fortunate to be part of it. For all your IT and event technology needs, contact us.",
  keywords: "",
  alternates: {
    canonical: "https://laptop-rental.com.au/about-us",
  },
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
      <Video />
      <Cta />
      <AboutCards />
      <ReviewCarousel />
      {/* <AboutForm /> */}
    </>
  );
};

export default Aboutus;
