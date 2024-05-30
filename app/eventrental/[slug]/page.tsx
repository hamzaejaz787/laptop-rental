import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import EventsCarousel from "./_components/EventsCarousel";
import MasonryGrid from "@/components/masonry";
import Hp_imgframe from "@/components/hp_imgframe";
import { getEventBySlug } from "@/data/loaders";
import { BannerImageProps, PageProps } from "@/lib/definitions";
import { Metadata } from "next";
import Faqs from "@/components/Faqs";
import ProductCard, { ProductCardItemsProps } from "@/components/ProductCard";

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

const ProductCardItems: ProductCardItemsProps[] = [
  {
    image: "/ipad.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "16GB",
    storage: "512GB",
    display: "10.5",
  },
  {
    image: "/screen.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "11.5",
  },
  {
    image: "/iphone.png",
    productTitle: "iPhone 14",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "7.5",
  },
  {
    image: "/printer.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "11.5",
  },
];

const Page = async ({ params }: PageProps) => {
  const slug = params.slug;
  const data = await getEventBySlug(slug);

  return (
    <div>
      <Banner
        title={data.IntroTitle}
        text={data.IntroText}
        image={data.IntroBanner}
      />
      {data.TextImage.map(
        (
          item: {
            HeroTitle: string;
            HeroDescription: string;
            HeroImage: BannerImageProps;
          },
          index: number
        ) => (
          <ImageInfo
            key={index}
            title={item.HeroTitle}
            image={item.HeroImage}
            text={item.HeroDescription}
            reverse={data.TextImage.length === 2 && index === 1} // Set reverse to true for the second occurrence when there are two items
          />
        )
      )}

      <div className="container space-y-6 pb-8 px-4 md:px-8 ">
        <h3 className="text-[40px] font-bold text-center font-Barlow">
          Our Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ProductCardItems.map((product, index) => (
            <ProductCard key={index} productCardItem={product} />
          ))}
        </div>
      </div>
      <Banner
        title={data.CtaTitle}
        text={data.CtaDescription}
        btn="Get a Quote"
        link="/form"
        image={data.CtaImage}
      />
      <div className="md:pl-16 md:pr-16 pl-5 pr-5">
        <h3 className="font-bold font-Barlow text-xl text-center md:pt-16 pt-5">
          We don&lsquo;t need to take into account
        </h3>
        <p className="text-gray-400 font-Poppins text-center md:pb-5 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolores adipisci consequatur aliquam. Ipsa, a!
        </p>
        <MasonryGrid />
      </div>
      <div className="md:pl-16 md:pr-16 pl-5 pr-5">
        <h3 className="font-bold font-Barlow text-xl text-center md:pt-16 pt-5">
          We don&lsquo;t need to take into account
        </h3>
        <p className="text-gray-400 font-Poppins text-center md:pb-5 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolores adipisci consequatur aliquam. Ipsa, a!
        </p>
        <div className="flex md:gap-3 gap-12 md:flex-row flex-col md:mt-0 mt-3 mb-5 justify-center items-center ">
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
      </div>

      <Faqs faqItems={data.Faq} />
    </div>
  );
};

export default Page;
