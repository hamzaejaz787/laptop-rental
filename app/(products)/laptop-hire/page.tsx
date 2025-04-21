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
