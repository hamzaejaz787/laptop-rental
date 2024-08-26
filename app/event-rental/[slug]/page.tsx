import { Metadata } from "next";
import Faqs from "@/components/Faqs";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import ImageInfo from "@/components/ImageInfo";
import Eventslist from "../_components/eventslist";
import ProductCard from "@/components/ProductCard";
import { getEventBySlug, getEvents } from "@/data/loaders";
import BannerWithImageUrl from "@/components/DynamicBanner";
import { BannerImageProps, PageProps } from "@/lib/definitions";
import CardsSlider from "@/components/CardsSlider";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const data = await getEventBySlug(slug);

  if (data.error?.status === 404) {
    notFound();
  }

  return {
    title: data.MetaTitle,
    description: data.MetaDescription,
    keywords: data.MetaKeywords,
    alternates: {
      canonical: `https://laptop-rental.com.au/event-rental/${data.slug}`,
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const slug = params.slug;
  const data = await getEventBySlug(slug);
  const ctaitems = {
    title: data.CtaTitle,
    text: data.CtaDescription,
    buttonText: "Get a Quote",
    href: "/get-a-quote",
    bgsrc: data.CtaImage,
  };

  return (
    <div>
      <BannerWithImageUrl
        title={data.IntroTitle}
        text={data.IntroText}
        image={data.IntroBanner}
      />
      {data?.TextImage?.map(
        (
          item: {
            __component: string;
            HeroTitle: string;
            HeroDescription: string;
            HeroImage: BannerImageProps;
            Content: BlocksContent;
          },
          index: number
        ) => (
          <ImageInfo
            key={index}
            title={item.HeroTitle}
            image={item.HeroImage}
            text={item.HeroDescription}
            reverse={index % 2 !== 0} // Set reverse to true for the second occurrence when there are two items
            __component={item.__component}
            content={item.Content}
          />
        )
      )}

      {data.relatedproducts.data.length > 0 && (
        <div className="container space-y-4 pb-8 px-4 md:px-8">
          <h3 className="font-bold text-3xl text-center font-Barlow">
            {data.RelatedProductsTitle || "Related Products"}
          </h3>
          {data.RelatedProductsText !== null && (
            <p className="text-sm xl:text-base max-w-4xl mx-auto text-center">
              {data.RelatedProductsText}
            </p>
          )}

          <CardsSlider>
            {data.relatedproducts?.data.map((item: any) => (
              <ProductCard key={item.id} productCardItem={item} />
            ))}
          </CardsSlider>
        </div>
      )}
      <CTA ctaItems={ctaitems} />
      <div className="pt-8">
        <Eventslist
          relatedEventsTitle={data.EventsTitle}
          relatedEventsText={data.EventsText}
        />
      </div>
      <Faqs
        faqItems={data.Faq}
        description={
          data.FaqText ||
          "Find answers to frequently asked questions about our event rental services. Our team is here to provide quick assistance and expert guidance. Contact us today for reliable and speedy support."
        }
      />
    </div>
  );
};

export default Page;
