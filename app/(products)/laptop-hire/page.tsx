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
import ImageInfo from "@/components/ImageInfo";

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

  const ImageInfoData = [
    {
      image: {
        url: "/Technology-Intro.png",
        alternativeText:
          "Laptop Hire for Events, Offices, and Businesses in Australia",
      },
      title: "Laptop Hire for Events, Offices, and Businesses in Australia",
      text: "Enter Laptop Rental – your trusted partner for laptop hire in Australia. We specialise in supplying a wide selection of laptops for events, office setups, and business needs. Whether you're organising a corporate seminar, a product launch, or need temporary equipment for a project, we offer practical solutions backed by dependable hardware and expert support. We provide laptop hire services in major Canadian cities, as well as in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Hobart, and across Australia.",
    },
    {
      image: {
        url: "/IT-Rental.png",
        alternativeText: "Hire Laptops for Events in Australia",
      },
      title: "Hire Laptops for Events in Australia",
      reverse: true,
      text: "As one of the leading providers of laptop hire, we support various short-term and long-term projects for businesses, event organisers, and office teams. Our range includes powerful Windows laptops, MacBooks, and high-performance devices suitable for presentations, registration desks, training sessions, and more. With 24/7 technical assistance and on-site and remote support options, you can rely on us to help keep your event or workplace running efficiently. We also supply related solutions such as IT rental for events in Australia, making it easier to source all your temporary tech from a single partner.",
    },
  ];

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
      {ImageInfoData.map((info, index) => (
        <ImageInfo key={index} {...info} />
      ))}{" "}
    </>
  );
};

export default LaptopRental;
