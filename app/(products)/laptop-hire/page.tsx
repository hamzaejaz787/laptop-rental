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
import { BannerProps } from "@/lib/definitions";

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

  const ImageInfoData: BannerProps[] = [
    {
      image: {
        url: "/Technology-Intro.png",
        alternativeText:
          "Laptop Hire for Events, Offices, and Businesses in Australia",
      },
      __component: "hero-section.rich-hero-text",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Looking for laptop hire in Australia? Laptop Rental is your go-to partner for short-term and bulk laptop solutions. We provide a wide range of laptops for corporate events, office setups, training sessions, conferences, and business projects, all backed by expert technical support.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "From Sydney to Melbourne, Brisbane to Perth, Adelaide to Canberra, and Hobart, we deliver high-performance laptops wherever you need them. Whether it’s for a product launch, a temporary team setup, or a business seminar, we make sure your tech is ready on time and works flawlessly.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          children: [{ type: "text", text: "Why choose Laptop Rental?" }],
        },
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Wide range of business-grade laptops (Windows & macOS)",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Same-day or next-day delivery available in major cities",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Short-term and long-term rental options",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Pre-installed software and accessories upon request",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Bulk rental discounts and flexible bundles",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "On-site support available for larger events",
                },
              ],
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          children: [
            {
              type: "text",
              text: "Fast delivery. Flexible rental terms. Expert support—nationwide.",
            },
          ],
        },
      ],
    },
    {
      image: {
        url: "/IT-Rental.png",
        alternativeText: "Hire Laptops for Events in Australia",
      },
      reverse: true,
      __component: "hero-section.rich-hero-text",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "As one of Australia’s leading providers of laptop hire services, we support short-term and long-term projects for businesses, event organisers, training providers, and office teams. Our diverse inventory is designed to meet professional demands:",
            },
          ],
        },
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "High-performance Windows laptops for day-to-day operations",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "MacBooks for creative, media, and executive use",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Specialised devices for presentations, registration desks, remote work, and corporate training",
                },
              ],
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          children: [
            {
              type: "text",
              text: "We make it easy to hire laptops with reliable service features:",
            },
          ],
        },
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "24/7 technical assistance to ensure minimal downtime",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "On-site and remote support, available Australia-wide",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Pre-installed software and accessories based on your requirements",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Flexible rental durations to suit your event or business timeline",
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "In addition to hire laptop options, we offer a complete range of ",
            },
            {
              type: "link",
              url: "/technology-rental",
              children: [{ type: "text", text: "IT rental" }],
            },
            {
              type: "text",
              text: " services for events across Australia, making it convenient to source laptops, ",
            },
            {
              type: "link",
              url: "/laptop-hire?category=tablet+rental",
              children: [{ type: "text", text: "tablets" }],
            },
            {
              type: "text",
              text: ", printers, and ",
            },
            {
              type: "link",
              url: "/technology-rental/wifi-rental",
              children: [{ type: "text", text: "Wi-Fi kits" }],
            },
            {
              type: "text",
              text: " from one trusted partner.",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Banner
        title="Laptop Hire"
        text="Get business-ready laptop hire delivered anywhere in Australia. We supply top models for meetings, conferences, and corporate events with fast delivery and expert support."
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
      ))}
    </>
  );
};

export default LaptopRental;
