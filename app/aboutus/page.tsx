import Banner from "@/components/Banner";
import Video from "./_components/Video";
import Cta from "./_components/Cta";
import AboutCards from "./_components/AboutCards";
import { AboutForm } from "./_components/AboutForm";
import { ReviewCarousel } from "./_components/ReviewCarousel";
import Hp_icons from "@/components/hp_icons";

const Aboutus = () => {
  return (
    <div className="flex flex-col md:pb-10 npb-5">
      <Banner
        btn="Contact Us"
        title="About Us"
        text="We at Laptop Rentals understand whether you&lsquo;re hosting whether you&lsquo;re hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />
      <Video />
      <div>
        <div className="md:font-[800] font-bold font-Barlow md:text-[34px] text-[14px] text-center md:pt-16 pt-5 md:pb-5">
          Our Event Services
          <div>
            <Hp_icons />
          </div>
        </div>
      </div>
      <Cta />
      <AboutCards />
      <ReviewCarousel />
      <AboutForm />
    </div>
  );
};

export default Aboutus;
