import Banner from "@/components/Banner";
import Video from "./_components/Video";
import Cta from "./_components/Cta";
import AboutCards from "./_components/AboutCards";
import { AboutForm } from "./_components/AboutForm";
import { ReviewCarousel } from "./_components/ReviewCarousel";

const Aboutus = () => {
  return (
    <div>
      <Banner
        btn="Contact Us"
        title="About Us"
        text="We at Laptop Rentals understand whether you&lsquo;re hosting whether you&lsquo;re hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />
      <Video />
      <Cta />
      <AboutCards />
      <ReviewCarousel />
      <AboutForm />
    </div>
  );
};

export default Aboutus;
