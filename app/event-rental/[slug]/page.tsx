import { Metadata } from "next";
import Faqs from "@/components/Faqs";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import ImageInfo from "@/components/ImageInfo";
import Eventslist from "../_components/eventslist";
import ProductCard from "@/components/ProductCard";
import { getEventBySlug } from "@/data/loaders";
import BannerWithImageUrl from "@/components/DynamicBanner";
import { BannerImageProps, PageProps } from "@/lib/definitions";
import CardsSlider from "@/components/CardsSlider";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import Breadcrumbs from "@/components/Breadcrumbs";

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

      <Breadcrumbs
        className="sr-only"
        category={{ href: "/event-rental", title: "Event Rental" }}
        currentPage={data.NavMenuName}
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
        <section className="container space-y-4 pb-8 px-4 md:px-8">
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
              <ProductCard
                key={item.id}
                productCardItem={item}
                className="mx-auto"
              />
            ))}
          </CardsSlider>
        </section>
      )}
      <CTA ctaItems={ctaitems} />

      <Eventslist
        currentEventSlug={data.slug}
        relatedEventsTitle={data.EventsTitle}
        relatedEventsText={data.EventsText}
        className="pt-8 px-4 md:px-8"
      />
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
