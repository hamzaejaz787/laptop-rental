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
import CtaWithModal from "../_components/CtaWithModal";
import PaginationComponent from "@/components/PaginationComponent";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageInfo from "@/components/ImageInfo";

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
    return notFound();
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

  const ImageInfoData = [
    {
      image: {
        url: "/Technology-Intro.png",
        alternativeText:
          "Connect to Excellence: Unlock the Future with Event Technology Rental",
      },
      title:
        "Connect to Excellence: Unlock the Future with Event Technology Rental",
      text: "Enter Laptop Rental - your premier partner for event technology rental in Australia. We specialise in providing a wide range of top-quality tech rental for events. From business conferences and seminars to festivals and product launches, we offer tailored solutions to meet diverse event needs",
    },
    {
      image: {
        url: "/IT-Rental.png",
        alternativeText: "IT Rental for Events",
      },
      title: "IT Rental for Events",
      reverse: true,
      text: "As a leading technology rental company, our mission is to empower businesses and individuals by providing cutting-edge and reliable technology solutions for their short-term and long-term events needs. Our comprehensive IT rental for events caters to a diverse range of needs, providing top-notch laptops, iPads, and other essential technology. With a focus on reliability and flexibility, our offerings ensure that your event runs smoothly, from hassle-free check-ins to flawless presentations. Our dedicated team is committed to providing 24/7 assistance, both on-site and remotely, ensuring that technical support is readily available whenever you need it. Hire IT equipment for events, and let us contribute to the success of your gatherings with cutting-edge technology and professional support",
    },
  ];

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
      {ImageInfoData.map((info, index) => (
        <ImageInfo key={index} {...info} />
      ))}
    </>
  );
}

export default TechRental;
