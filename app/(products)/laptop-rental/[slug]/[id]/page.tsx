import Image from "next/image";
import React from "react";
import { MdOutlineScreenshot } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { IoHardwareChipOutline } from "react-icons/io5";
import Faqs from "@/components/Faqs";
import ProductInfoTabs from "@/components/ProductInfoTabs";
import {
  PageProps,
  ProductSpecsProps,
  SingleProductProps,
} from "@/lib/definitions";
import { PiHardDrives } from "react-icons/pi";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { getProductBySlug } from "@/data/loaders";
import { Metadata } from "next";
import AddToCartButton from "@/components/AddToCartButton";
import { getStrapiURL } from "@/lib/utils";
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";
import ProductCarousel from "@/components/ProductCarousel";
import { LucideMonitor } from "lucide-react";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.id;
  const data: SingleProductProps = await getProductBySlug(slug);
  return {
    title: data.MetaTitle,
    description: data.MetaDescription,
    keywords: data.MetaKeywords,
    alternates: {
      canonical: data?.MetaCanonical,
    },
  };
}

async function ProductPage({ params }: PageProps) {
  const data: SingleProductProps = await getProductBySlug(params.id);
  const slug = params.slug;

  const baseurl = getStrapiURL();
  let imageurl = "";
  if (data.ProductCardImage) imageurl = baseurl + data.ProductCardImage?.url;

  //Render icons for specs base on the value
  const IconProps = { className: "text-red-500", size: 24 };
  const getIconForSpec = (spec: ProductSpecsProps) => {
    switch (spec.Spec.toLowerCase()) {
      case "display resolution":
        return <LucideMonitor {...IconProps} aria-label="Display resolution" />;
      case "screen size":
        return <MdOutlineScreenshot {...IconProps} aria-label="Screen size" />;
      case "ram":
        return <IoHardwareChipOutline {...IconProps} aria-label="RAM" />;
      case "storage":
        return <PiHardDrives {...IconProps} aria-label="Storage" />;
      case "os":
        if (spec.value.toLowerCase().includes("android")) {
          return <AiOutlineAndroid {...IconProps} aria-label="Android OS" />;
        } else if (
          spec.value.toLowerCase().includes("ios") ||
          spec.value.toLowerCase().includes("ipados") ||
          spec.value.toLowerCase().includes("ipad os")
        ) {
          return <AiOutlineApple {...IconProps} aria-label="iOS/iPadOS" />;
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <>
      {/* <BannerWithImageUrl title="Dell ES5440 LATITUDE" text="" /> */}
      <section className="container px-8 pt-28">
        <Breadcrumbs
          category={{
            href: `${
              data.ProductCategory.toLowerCase() === "laptop"
                ? "/laptop-rental"
                : "/technology-rental"
            }`,
            title: `${
              data.ProductCategory.toLowerCase() === "laptop"
                ? "Laptop Rental"
                : "Technology Rental"
            }`,
          }}
          subcategory={{
            href: `${
              data.ProductCategory.toLowerCase() === "laptop"
                ? `/laptop-rental/${data.productcategory.slug}`
                : `/technology-rental/${data.productcategory.slug}`
            }`,
            title: `${data.ProductSubCategory}`,
          }}
          currentPage={data.Title}
        />
      </section>

      <section className="container p-8 flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-16">
        {data.ProductImages.data.length > 1 ? (
          <ProductCarousel data={data.ProductImages.data} />
        ) : (
          <Image
            src={`${baseurl}${data.ProductImages.data[0].url}`}
            alt={data.ProductImages.data[0].alternativeText || ""}
            width={500}
            height={500}
            className="flex-1"
          />
        )}

        <div className="flex flex-col items-center lg:items-start justify-between gap-4 flex-1">
          <h3 className="font-sans font-bold text-3xl text-center lg:text-left">
            {data.Title}
          </h3>

          <ul className="space-y-3 max-w-xl">
            {data.ProductFeatures.map((feature) => (
              <li
                key={feature.id}
                className="flex items-center gap-2 font-medium text-gray-800"
              >
                <div>
                  <SiTicktick className="text-primary-red size-4" />
                </div>
                {feature.Feature}
              </li>
            ))}
          </ul>

          <h5 className="font-bold text-lg text-center lg:text-left">
            Specifications
          </h5>
          <div className="grid grid-cols-3 gap-3 mx-auto lg:mx-0 max-w-[250px] w-full">
            {data.Specs.map((item) => (
              <div
                key={item.id}
                className="w-full border-2 p-1 rounded-sm border-gray-200 flex items-center justify-center flex-col text-center gap-1"
              >
                {getIconForSpec(item)}
                <span className="text-xs text-gray-700 text-center">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <CtaButton
              href={`/get-a-quote`}
              text="Get A Quote"
              className="rounded-r-none w-full"
            />
            <AddToCartButton
              Title={data.Title}
              id={data.id}
              imageUrl={imageurl}
            />
          </div>
        </div>
      </section>

      <ProductInfoTabs TabItems={data.info} />
      {/* <section className="container">
        <h3 className="text-4xl font-bold text-center mt-10 mb-5">
          Related Products
        </h3>

        <CardsSlider>
          {ProductCardItems.map((product, index) => (
            <ProductCard key={index} productCardItem={product} />
          ))}
        </CardsSlider>
      </section> */}
      <Faqs faqItems={data.Faqs} />
    </>
  );
}

export default ProductPage;
