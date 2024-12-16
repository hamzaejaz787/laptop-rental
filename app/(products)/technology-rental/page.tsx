import React from "react";
import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import ServicesTimeline from "@/components/ServicesTimeline";
import SidebarWithTab from "./_components/SidebarWithTab";
import TabCards from "./_components/TabCards";
import { Metadata } from "next";
import { getAllProducts, getProduct } from "@/data/loaders";
import PaginationComponent from "@/components/PaginationComponent";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Event Technology Rental Excellence",
  description:
    "Boost your events with our event technology rental in Australia. Smooth solutions for events like conferences, festivals, and more. Contact us",
  keywords: ["Technology rental", "tech rental for events", "hire technology"],
  alternates: {
    canonical: "https://laptop-rental.com.au/technology-rental",
  },
  other: { title: "Event Technology Rental Excellence" },
};

async function TechRental({
  searchParams,
}: {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const query = searchParams?.search?.toString();
  const currentPage = searchParams?.page
    ? parseInt(searchParams.page as string)
    : 1;
  const category = searchParams?.category?.toString();
  const subcategory = searchParams?.subcategory?.toString();
  const pageSize = 24;

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
        title="Event Technology Rental Excellence"
        text="Laptop Rental is your premier destination for event technology rental solutions in Australia"
        link="/contact-us"
        btn="Contact us"
        image={{
          url: "/Technology-Rental-Header.png",
          alternativeText:
            "Laptop Rental is your premier destination for event technology rental solutions in Australia",
        }}
      />

      <Breadcrumbs className="sr-only" currentPage="Technology Rental" />

      <div className="flex flex-col lg:flex-row gap-8 justify-between container p-8">
        <SidebarWithTab tabItems={allProducts.data} />
        <TabCards tabCardsItems={product.data} />
      </div>
      <PaginationComponent pageCount={product.meta.pagination.pageCount} />
      <ServicesTimeline description="Laptop Rental Australia steps in as your trusted Technology rental partner. We empower your event with cutting-edge technology and unparalleled service, ensuring every moment is an opportunity to impress. Supported by dedicated teams, enjoy 24/7 technical and customer support for seamless corporate events. Contact our experts and rent Technologies for corporate events in Australia and New Zealand." />

      {ImageInfoData.map((info, index) => (
        <ImageInfo key={index} {...info} />
      ))}
    </>
  );
}

export default TechRental;
