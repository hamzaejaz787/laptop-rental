import Banner from "@/components/Banner";
import Video from "./_components/Video";
import Cta from "./_components/Cta";
import AboutCards from "./_components/AboutCards";
import { AboutForm } from "./_components/AboutForm";
import Hp_icons from "@/components/ServicesIcons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us page of Laptop Rental AU",
  description:
    "The business events industry uplifts and unites people. We're fortunate to be part of it. For all your IT and event technology needs, contact us.",
};

const Aboutus = () => {
  return (
    <>
      <Banner
        btn="Contact us"
        link="/contactus"
        title="About Us"
        text="Laptop Rental is a global leader in providing cutting-edge event technology services, addressing the persistent challenges businesses face in organising successful events."
      />
      <Video />

      <section className="container p-8">
        <h2 className="md:font-[800] font-bold font-Barlow md:text-[34px] text-[14px] text-center">
          Our Event Services
        </h2>

        <Hp_icons />
      </section>

      <Cta />

      <AboutCards />

      {/* <AboutForm /> */}
    </>
  );
};

export default Aboutus;
