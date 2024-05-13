import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import eventrental1 from "@/public/eventrental1.jpg";
import EventsCarousel from "./components/EventsCarousel";
const page = () => {
  return (
    <div>
      <Banner
        title="CORPORATE EVENT"
        text="We at Laptop Rentals understand whether you&lsquo;re hosting whether you&lsquo;re hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />
      <ImageInfo
        title="Empower Your Business with Flexible and Reliable IT Equipment Rentals"
        image={eventrental1}
        text="We at Laptop Rentals understand whether you&lsquo;re hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you."
      />
      <ImageInfo
        title="Empower Your Business with Flexible and Reliable IT Equipment Rentals"
        image={eventrental1}
        reverse
        text="We at Laptop Rentals understand whether you&lsquo;re hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you.understand whether you.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you."
      />
      <EventsCarousel
        title="We don&lsquo;t need to take into account"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus at ultricies. elit. In porttitor "
      />
    </div>
  );
};

export default page;
