import Image from "next/image";
import React from "react";
import { MdOutlineNetworkCheck, MdOutlineScreenshot } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { IoHardwareChipOutline } from "react-icons/io5";
import Faqs from "@/components/Faqs";
import ProductInfoTabs from "@/components/ProductInfoTabs";
import {
  PageProps,
  ProductSpecsProps,
  SingleProductProps,
} from "@/lib/definitions";
import { PiDevices, PiHardDrives } from "react-icons/pi";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { getProductBySlug } from "@/data/loaders";
import { Metadata } from "next";
import AddToCartButton from "@/components/AddToCartButton";
import { getStrapiURL } from "@/lib/utils";
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";
import ProductCarousel from "@/components/ProductCarousel";
import ProductIconTooltip from "@/components/ProductIconTooltip";
import { LucideMonitor } from "lucide-react";
import JsonLdSchema from "@/components/JsonLdSchema";
import CardsSlider from "@/components/CardsSlider";
import ProductCard from "@/components/ProductCard";
import { GiRadarSweep } from "react-icons/gi";
import { TbSignalLte } from "react-icons/tb";
import { VscRadioTower } from "react-icons/vsc";

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
      canonical: `https://laptop-rental.com.au/laptop-hire/${data.productcategory.slug}/${data.slug}`,
    },
  };
}

async function ProductPage({ params }: PageProps) {
  const data: SingleProductProps = await getProductBySlug(params.id);
  const baseurl = getStrapiURL();

  let imageurl = "";
  if (data.ProductCardImage) imageurl = baseurl + data.ProductCardImage?.url;

  //Render icons for specs base on the value
  const IconProps = { className: "text-red-500", size: 24 };

  const getIconForSpec = (spec: ProductSpecsProps) => {
    //Stores specs names and their corresponding icons
    const iconMap: Record<string, JSX.Element> = {
      "display resolution": (
        <LucideMonitor {...IconProps} aria-label="Display resolution" />
      ),
      "screen size": (
        <MdOutlineScreenshot {...IconProps} aria-label="Screen size" />
      ),
      ram: <IoHardwareChipOutline {...IconProps} aria-label="RAM" />,
      range: <GiRadarSweep {...IconProps} aria-label="Range" />,
      storage: <PiHardDrives {...IconProps} aria-label="Storage" />,
      "number of devices": <PiDevices {...IconProps} aria-label="Devices" />,
      bandwidth: (
        <MdOutlineNetworkCheck {...IconProps} aria-label="Bandwidth" />
      ),
      carrier: <TbSignalLte {...IconProps} aria-label="Carrier" />,
      frequency: <VscRadioTower {...IconProps} aria-label="Frequency" />,
    };

    const specKey = spec.Spec.toLowerCase();

    //Handle operating system icons
    if (specKey === "os") {
      if (spec.value.toLowerCase().includes("android")) {
        return (
          <ProductIconTooltip value={spec.tooltiptext || spec.value}>
            <AiOutlineAndroid {...IconProps} aria-label="Android OS" />
          </ProductIconTooltip>
        );
      } else if (
        spec.value.toLowerCase().includes("ios") ||
        spec.value.toLowerCase().includes("ipados") ||
        spec.value.toLowerCase().includes("ipad os")
      ) {
        return (
          <ProductIconTooltip value={spec.tooltiptext || spec.value}>
            <AiOutlineApple {...IconProps} aria-label="iOS/iPadOS" />
          </ProductIconTooltip>
        );
      }
    }

    if (specKey in iconMap) {
      const icon = iconMap[specKey];
      return (
        <ProductIconTooltip value={spec.tooltiptext || spec.value}>
          {icon}
        </ProductIconTooltip>
      );
    }

    return null;
  };

  return (
    <>
      {/* <BannerWithImageUrl title="Dell ES5440 LATITUDE" text="" /> */}
      <section className="container px-8 md:px-20 pt-8">
        <Breadcrumbs
          category={{
            href: `${
              data.ProductCategory.toLowerCase() === "laptop"
                ? "/laptop-hire"
                : "/technology-rental"
            }`,
            title: `${
              data.ProductCategory.toLowerCase() === "laptop"
                ? "Laptop Hire"
                : "Technology Rental"
            }`,
          }}
          subcategory={{
            href: `${
              data.ProductCategory.toLowerCase() === "laptop"
                ? `/laptop-hire/${data.productcategory.slug}`
                : `/technology-rental/${data.productcategory.slug}`
            }`,
            title: `${data.ProductSubCategory}`,
          }}
          currentPage={data.Title}
        />
      </section>

      <section className="container p-8 flex items-center justify-center flex-col lg:flex-row gap-8 lg:gap-20">
        {data.ProductImages.data.length > 1 ? (
          <ProductCarousel data={data.ProductImages.data} />
        ) : (
          <Image
            src={`${baseurl}${data.ProductImages.data[0].url}`}
            alt={data.ProductImages.data[0].alternativeText || ""}
            width={500}
            height={500}
            className=""
          />
        )}

        <div className="flex flex-col items-center lg:items-start justify-center gap-4 w-full md:max-w-md">
          <h1 className="font-sans font-bold text-3xl text-center lg:text-left">
            {data.Title}
          </h1>

          <ul className="space-y-3">
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
            Minimum Specifications
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
              ProductCategory={data.ProductCategory}
            />
          </div>
        </div>
      </section>

      <ProductInfoTabs TabItems={data.info} />
      {data.relatedproducts?.data.length > 0 && (
        <section className="container">
          <h3 className="text-4xl font-bold text-center mt-10 mb-5">
            Related Products
          </h3>

          <CardsSlider>
            {data.relatedproducts.data.map((product, index) => (
              <ProductCard key={index} productCardItem={product} />
            ))}
          </CardsSlider>
        </section>
      )}
      <Faqs faqItems={data.Faqs} />

      {data.jsonSchema &&
        data.jsonSchema.map((schema) => (
          <JsonLdSchema key={schema.id} schema={schema.schema} />
        ))}
    </>
  );
}

export default ProductPage;
