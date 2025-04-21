import React from "react";
import { Metadata } from "next";
import { CtaProps } from "@/components/CTA";
import {
  getAllProducts,
  getProduct,
  getProductCategoryBySlug,
} from "@/data/loaders";
import {
  BannerImageProps,
  PageProps,
  SingleProductProps,
} from "@/lib/definitions";
import { notFound } from "next/navigation";
import ServicesTimeline from "@/components/ServicesTimeline";
import BannerWithImageUrl from "@/components/DynamicBanner";
import SidebarWithTab from "../../technology-rental/_components/SidebarWithTab";
import TabCards from "../../technology-rental/_components/TabCards";
import CtaWithModal from "../../technology-rental/_components/CtaWithModal";
import PaginationComponent from "@/components/PaginationComponent";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageInfo from "@/components/ImageInfo";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const data: SingleProductProps = await getProductCategoryBySlug(slug);
  return {
    title: data.MetaTitle,
    description: data.MetaDescription,
    keywords: data.MetaKeywords,
    alternates: {
      canonical: `https://laptop-rental.com.au/laptop-hire/${data.slug}`,
    },
    other: { title: data.MetaTitle },
  };
}

export interface SearchParamsProps {
  searchParams?: {
    query?: string;
  };
}

async function TechRental({
  params,
  searchParams,
}: {
  params: PageProps["params"];
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
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

  const [product, allProducts, productCategory] = await Promise.all([
    getProduct(query, currentPage, pageSize, category, subcategory, sort),
    getAllProducts(),
    getProductCategoryBySlug(slug),
  ]);

  if (productCategory.error?.status === 404) {
    notFound();
  }

  const ctaItems: CtaProps = {
    title: productCategory.CtaTitle,
    text: productCategory.CtaText,
    href: "/get-a-quote",
    buttonText: "Request a Quote",
    bgsrc: productCategory.CtaImage,
  };

  const getProductCategories = productCategory.products?.data[0];
  const { ProductCategory, ProductSubCategory } = getProductCategories;

  return (
    <>
      <BannerWithImageUrl
        title={productCategory.BannerTitle}
        text={productCategory.BannerText}
        link={
          productCategory.BannerCtaLink !== null &&
          productCategory.BannerCtaLink !== ""
            ? productCategory.BannerCtaLink
            : "/contactus"
        }
        btn={
          productCategory.BannerCta !== null && productCategory.BannerCta !== ""
            ? productCategory.BannerCta
            : "Contact us"
        }
        image={productCategory.BannerImage}
      />
      <Breadcrumbs
        className="sr-only"
        category={{
          href: "/laptop-hire",
          title: "Laptop Hire",
        }}
        currentPage={productCategory.BannerTitle}
      />
      <div className="flex flex-col lg:flex-row gap-8 justify-between container p-8">
        <SidebarWithTab
          tabItems={allProducts.data}
          ProductCategory={ProductCategory}
          ProductSubCategory={ProductSubCategory}
        />
        <TabCards tabCardsItems={product.data} />
      </div>
      <PaginationComponent pageCount={product.meta.pagination.pageCount} />
      <CtaWithModal ctaItems={ctaItems} />
      <ServicesTimeline description={productCategory?.TimelineText} />
      {productCategory?.TextImage.map(
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
}

export default TechRental;
