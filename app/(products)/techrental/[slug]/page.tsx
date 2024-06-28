import React from "react";
import { Metadata } from "next";

import SidebarWithTab from "../_components/SidebarWithTab";
import BannerWithImageUrl from "@/components/DynamicBanner";
import TabCards from "../_components/TabCards";
import { CtaProps } from "@/components/CTA";
import {
  getAllProducts,
  getProduct,
  getProductCategoryBySlug,
} from "@/data/loaders";
import { PageProps } from "@/lib/definitions";
import { notFound } from "next/navigation";
import ServicesTimeline from "@/components/ServicesTimeline";
import CtaWithModal from "../_components/CtaWithModal";
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
  const [product, productCategory] = await Promise.all([
    getAllProducts(searchParams?.search?.toString()),
    getProductCategoryBySlug(slug),
  ]);

  const ctaItems: CtaProps = {
    title: productCategory.CtaTitle,
    text: productCategory.CtaText,
    href: "/get-a-quote",
    buttonText: "Request a Quote",
    bgsrc: productCategory.CtaImage,
  };

  const getProductCategories = productCategory.products?.data[0];
  const { ProductCategory, ProductSubCategory } = getProductCategories;

  if (productCategory.error?.status === 404) {
    notFound();
  }
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
          tabItems={product.data}
          ProductCategory={ProductCategory}
          ProductSubCategory={ProductSubCategory}
        />
        <TabCards tabCardsItems={product.data} />
      </div>
      {/* <PaginationComponent pageCount={product.meta.pagination.pageCount} /> */}

      <CtaWithModal ctaItems={ctaItems} />
      <ServicesTimeline description={productCategory?.TimelineText} />
    </>
  );
}

export default TechRental;
