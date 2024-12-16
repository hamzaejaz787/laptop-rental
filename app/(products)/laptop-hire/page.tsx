import React from "react";
import Banner from "@/components/Banner";
import ServicesTimeline from "@/components/ServicesTimeline";
import { Metadata } from "next";
import { getAllProducts, getProduct } from "@/data/loaders";
import PaginationComponent from "@/components/PaginationComponent";
import SidebarWithTab from "../technology-rental/_components/SidebarWithTab";
import TabCards from "../technology-rental/_components/TabCards";
import CtaWithModal from "../technology-rental/_components/CtaWithModal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Laptop Hire For Events in Australia",
  description:
    "Reliable laptop hire services across Australia and New Zealand. Choose from top brands like Dell, Lenovo, HP, and MacBook Pros for your next event. Contact Us",
  keywords: [
    "laptop hire",
    "hire laptop for short term",
    "Hire laptop",
    "Laptop Hire for events",
  ],
  alternates: {
    canonical: "https://laptop-rental.com.au/laptop-hire",
  },
  other: { title: "Laptop Hire For Events in Australia" },
};

const LaptopRental = async ({
  searchParams,
}: {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}) => {
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

  const [product, allProducts] = await Promise.all([
    getProduct(query, currentPage, pageSize, category, subcategory, sort),
    getAllProducts(),
  ]);

  return (
    <>
      <Banner
        title="Laptop Hire"
        text="Partnering for Success: Comprehensive Laptop Hire For Events & Dedicated Support for Businesses in Australia and New Zealand. Book Now!"
        link="/get-a-quote"
        btn="Get A Quote"
        image={{
          url: "/laptoprental-header.png",
          alternativeText: "Laptop Rental",
        }}
      />

      <Breadcrumbs className="sr-only" currentPage="Laptop Hire" />

      <div className="flex flex-col lg:flex-row gap-8 justify-between container p-8">
        <SidebarWithTab tabItems={allProducts.data} />
        <TabCards tabCardsItems={product.data} />
      </div>
      <PaginationComponent pageCount={product.meta.pagination.pageCount} />

      <CtaWithModal
        ctaItems={{
          title: "Hire Laptop for Business",
          text: "Request a Free Quote & Consultation Today for Successful Events",
          buttonText: "Request A Quote",
          href: "/get-a-quote",
        }}
      />
      <ServicesTimeline description="Whether it's Melbourne's dynamic energy or Sydney's harborside charm, we deliver event-ready solutions across Australia, backed by dedicated regional teams for unparalleled service. Enjoy 24/7 technical and customer support, covering consultation, installation, on-site assistance, and equipment recovery, guaranteeing a smooth and hassle-free event experience. Contact our team and hire laptops for corporate events in Australia and New Zealand." />
    </>
  );
};

export default LaptopRental;
