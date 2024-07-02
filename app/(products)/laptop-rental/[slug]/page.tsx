import React from "react";
import { Metadata } from "next";
import { CtaProps } from "@/components/CTA";
import {
  getAllProducts,
  getProduct,
  getProductCategoryBySlug,
} from "@/data/loaders";
import { PageProps } from "@/lib/definitions";
import { notFound } from "next/navigation";
import ServicesTimeline from "@/components/ServicesTimeline";
import BannerWithImageUrl from "@/components/DynamicBanner";
import SidebarWithTab from "../../technology-rental/_components/SidebarWithTab";
import TabCards from "../../technology-rental/_components/TabCards";
import CtaWithModal from "../../technology-rental/_components/CtaWithModal";
import PaginationComponent from "@/components/PaginationComponent";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const data = await getProductCategoryBySlug(slug);
  return {
    title: data.MetaTitle,
    description: data.MetaDescription,
    keywords: data.MetaKeywords,
    alternates: {
      canonical: data?.MetaCanonical,
    },
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

  const [product, allProducts, productCategory] = await Promise.all([
    getProduct(query, currentPage, pageSize),
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

      <div className="flex flex-col lg:flex-row gap-8 justify-between container p-8">
        <SidebarWithTab
          tabItems={allProducts.data}
          ProductCategory={ProductCategory}
          ProductSubCategory={ProductSubCategory}
        />
        <TabCards tabCardsItems={product.data} allProducts={allProducts.data} />
      </div>
      <PaginationComponent pageCount={product.meta.pagination.pageCount} />

      <CtaWithModal ctaItems={ctaItems} />
      <ServicesTimeline description={productCategory?.TimelineText} />
    </>
  );
}

export default TechRental;
