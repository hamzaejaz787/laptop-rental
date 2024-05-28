import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import eventrental1 from "@/public/eventrental1.jpg";
import EventsCarousel from "./_components/EventsCarousel";

import MasonryGrid from "@/components/masonry";
import Hp_imgframe from "@/components/hp_imgframe";

import { AccordionFAQ } from "@/components/Accordion";
import { getEventBySlug } from "@/data/loaders";
import { PageProps } from "@/lib/definitions";
import { Metadata } from "next";

const images = [
  {
    src: "/hp_imgframe.png",
    alt: "",
    text: "Corporate Event",
    link: "/singleevent",
    desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
    btn: "Explore Event",
  },
  {
    src: "/hp_imgframe.png",
    alt: "",
    text: "Business Event",
    link: "/singleevent",
    desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
    btn: "Explore Event",
  },
  {
    src: "/hp_imgframe.png",
    alt: "",
    text: "Rental Event",
    link: "/singleevent",
    desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
    btn: "Explore Event",
  },
  {
    src: "/hp_imgframe.png",
    alt: "",
    text: "Rental Event",
    link: "/singleevent",
    desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
    btn: "Explore Event",
  },
];

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const data = await getEventBySlug(slug);

  return {
    title: data.MetaTitle,
    description: data.MetaDescription,
    keywords: data.MetaKeywords,
    alternates: {
      canonical: data.MetaCanonical,
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const slug = params.slug;
  const data = await getEventBySlug(slug);

  console.log(data);

  return (
    <div>
      <Banner
        title={data.IntroTitle}
        text={data.IntroText}
        image={data.IntroBanner}
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
      <Banner
        title={data.CtaTitle}
        text={data.CtaDescription}
        btn="Get a Quote"
        link="/form"
        image={data.CtaImage}
      />
      <div className=" md:pl-16 md:pr-16 pl-5 pr-5">
        <p className="font-[800]  font-Barlow md:text-[34px] text-[20px] text-center md:pt-16 pt-5">
          We don&lsquo;t need to take into account
        </p>
        <p className="line-clamp-2 text-gray md:text-[15px] text-[9px] font-Poppins font-#595959 text-center md:pb-5 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolores adipisci consequatur aliquam. Ipsa, a!
        </p>
        <MasonryGrid />
      </div>
      <p className="font-[800]  font-Barlow md:text-[34px] text-[20px] text-center md:pt-16 pt-5">
        We don&lsquo;t need to take into account
      </p>
      <p className="line-clamp-2 text-gray md:text-[15px] text-[9px] font-Poppins font-#595959 text-center md:pb-5 pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        dolores adipisci consequatur aliquam. Ipsa, a!
      </p>
      <div className="flex md:gap-3 gap-12 md:flex-row flex-col md:mt-0 mt-3 mb-5  justify-center items-center ">
        {images.map((img, index) => (
          <Hp_imgframe
            key={index}
            src={img.src}
            alt={img.alt}
            text={img.text}
            link={img.link}
            desc={img.desc}
            btn={img.btn}
          />
        ))}
      </div>
      <div className="">
        <p className="text-[40px] font-bold text-center mt-10">
          Frequently Asked Questions
        </p>
        <p className="text-[14px] line-clamp-3 text-center md:pr-96 md:pl-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus accusantium error eius amet quaerat nostrum ducimus
          voluptas, eum deserunt? Ab facilis animi doloribus nulla molestias
          atque, quos odio sequi repellendus.
        </p>

        <AccordionFAQ />
        {/* <div className="flex justify-center mt-4">
          <form className="w-full max-w-md">
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 justify-between">
              <Input
                type="text"
                name="search"
                placeholder="Search"
                className="px-3 py-4 font-medium placeholder-gray-500ntext-black border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
              />
              <IoMdSearch
                className="w-7 h-7 absolute ml-[400px]  "
                color="D61837"
              />
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-4 pt-10">
          <div className="flex font-[600] text-[16px] justify-center font-Barlow underline underline-offset-4 gap-5">
            {["General", "Trust and Safety", "Services"].map((label, index) => (
              <Button
                key={index}
                variant="link"
                className={`${
                  activeButton === index ? "text-red-600" : ""
                } flex`}
                onClick={() => handleButtonClick(index)}
              >
                {label}
              </Button>
            ))}
          </div>
          <div className="mt-4 ml-20 mr-20 font-medium text-[14px] mb-4">
            {FAQ_buttoncontents[activeButton]}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
