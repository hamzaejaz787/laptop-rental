import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import MasonryGrid from "@/components/masonry";
import { getEventBySlug } from "@/data/loaders";
import { BannerImageProps, PageProps } from "@/lib/definitions";
import { Metadata } from "next";
import Faqs from "@/components/Faqs";
import ProductCard, { ProductCardItemsProps } from "@/components/ProductCard";
import CTA from "@/components/CTA";
import Eventslist from "../_components/eventslist";

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

  const ctaitems = {
    title: data.CtaTitle,
    text: data.CtaDescription,
    buttonText: "Get a Quote",
    href: "/form",
    bgsrc: data.CtaImage,
  };

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

      <div className="container space-y-6 pb-8 px-4 md:px-8">
        <h3 className="font-bold text-3xl text-center font-Barlow">
          Our Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ProductCardItems.map((product, index) => (
            <ProductCard key={index} productCardItem={product} />
          ))}
        </div>
      </div>
      <CTA ctaItems={ctaitems} />

      <div className="container space-y-6 py-8 px-4 md:px-8">
        <h3 className="font-bold text-3xl text-center font-Barlow">
          We don&lsquo;t need to take into account
        </h3>
        <p className="text-gray-400 font-Poppins text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolores adipisci consequatur aliquam. Ipsa, a!
        </p>
        <MasonryGrid />
      </div>

      <Eventslist />
      <Faqs faqItems={data.Faq} />
    </div>
  );
};

export default Page;
