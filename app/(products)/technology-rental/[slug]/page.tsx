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
import { PageProps, SingleProductProps } from "@/lib/definitions";
import { notFound } from "next/navigation";
import ServicesTimeline from "@/components/ServicesTimeline";
import CtaWithModal from "../_components/CtaWithModal";
import PaginationComponent from "@/components/PaginationComponent";
import Breadcrumbs from "@/components/Breadcrumbs";

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
      canonical: `https://laptop-rental.com.au/technology-rental/${data.slug}`,
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

  const pageSize = 24;
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
      <Breadcrumbs
        className="sr-only"
        category={{ href: "/technology-rental", title: "Technology Rental" }}
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
    </>
  );
}

export default TechRental;
