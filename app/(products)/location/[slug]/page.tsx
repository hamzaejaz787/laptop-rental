import React from "react";
import Banner from "@/components/Banner";
import ServicesTimeline from "@/components/ServicesTimeline";
import { Metadata } from "next";
import { getAllProducts, getLocationPage, getProduct } from "@/data/loaders";
import PaginationComponent from "@/components/PaginationComponent";
import Breadcrumbs from "@/components/Breadcrumbs";
import SidebarWithTab from "../../technology-rental/_components/SidebarWithTab";
import TabCards from "../../technology-rental/_components/TabCards";
import CtaWithModal from "../../technology-rental/_components/CtaWithModal";
import {
  BannerImageProps,
  PageProps,
  SingleProductProps,
} from "@/lib/definitions";
import BannerWithImageUrl from "@/components/DynamicBanner";
import { CtaProps } from "@/components/CTA";
import ImageInfo from "@/components/ImageInfo";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const data: SingleProductProps = await getLocationPage(slug);
  return {
    title: data.MetaTitle,
    description: data.MetaDescription,
    keywords: data.MetaKeywords,
    alternates: {
      canonical: `https://laptop-rental.com.au/location/${data.slug}`,
    },
    other: { title: data.MetaTitle },
  };
}

const LaptopRental = async ({
  searchParams,
  params,
}: {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
  params: PageProps["params"];
}) => {
  const slug = params.slug;
  const query = searchParams?.search?.toString();
  const currentPage = searchParams?.page
    ? parseInt(searchParams.page as string)
    : 1;
  const pageSize = 24;
  const category = searchParams?.category?.toString();
  const subcategory = searchParams?.subcategory?.toString();
  //Sort iPhones by updated at date
  let sort;
  if (
    query?.toLowerCase() === "iphone" ||
    category?.toLowerCase() === "mobile phones" ||
    subcategory?.toLowerCase() === "iphone"
  )
    sort = "updatedAt:desc";

  const [product, allProducts, locationPage] = await Promise.all([
    getProduct(query, currentPage, pageSize, category, subcategory, sort),
    getAllProducts(),
    getLocationPage(slug),
  ]);

  const ctaItems: CtaProps = {
    title: locationPage.CtaTitle,
    text: locationPage.CtaText,
    href: "/get-a-quote",
    buttonText: "Request a Quote",
    bgsrc: locationPage.CtaImage,
  };

  return (
    <>
      <BannerWithImageUrl
        title={locationPage.BannerTitle}
        text={locationPage.BannerText}
        link={
          locationPage.BannerCtaLink !== null &&
          locationPage.BannerCtaLink !== ""
            ? locationPage.BannerCtaLink
            : "/get-a-quote"
        }
        btn={
          locationPage.BannerCta !== null && locationPage.BannerCta !== ""
            ? locationPage.BannerCta
            : "Get a quote"
        }
        image={locationPage.BannerImage}
      />

      <div className="flex flex-col lg:flex-row gap-8 justify-between container p-8">
        <SidebarWithTab tabItems={allProducts.data} />
        <TabCards tabCardsItems={product.data} />
      </div>
      <PaginationComponent pageCount={product.meta.pagination.pageCount} />

      <CtaWithModal ctaItems={ctaItems} />
      <ServicesTimeline description={locationPage?.TimelineText} />

      {locationPage?.TextImage.map(
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
            reverse={index % 2 !== 0}
            __component={item.__component}
            content={item.Content}
          />
        )
      )}
    </>
  );
};

export default LaptopRental;
