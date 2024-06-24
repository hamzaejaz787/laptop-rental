import React from "react";
import { Metadata } from "next";
import ImageInfo from "@/components/ImageInfo";
import { ImPageBreak } from "react-icons/im";
import { FaWater, FaShieldHalved } from "react-icons/fa6";
import SidebarWithTab from "../_components/SidebarWithTab";
import BannerWithImageUrl from "@/components/DynamicBanner";
import TabCards from "../_components/TabCards";
import CTA, { CtaProps } from "@/components/CTA";
import { getProduct, getProductCategoryBySlug } from "@/data/loaders";
import { PageProps } from "@/lib/definitions";
import { notFound } from "next/navigation";

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

async function TechRental({ params }: PageProps) {
  const slug = params.slug;
  const [product, productCategory] = await Promise.all([
    getProduct(),
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

      <div className="flex flex-col md:flex-row gap-8 justify-between container p-8">
        <SidebarWithTab tabItems={product.data} />
        <TabCards tabCardsItems={product.data} />
      </div>

      <ImageInfo
        title={productCategory.IntroSectionTitle}
        reverse
        text={productCategory.IntroSectionDescription}
        items={[
          { icon: ImPageBreak, desc: "Accidental Breakage" },
          { icon: FaWater, desc: "Water Damage" },
          { icon: FaShieldHalved, desc: "Extended Warranty" },
        ]}
        image={productCategory.IntroImage}
      />

      <CTA ctaItems={ctaItems} />
    </>
  );
}

export default TechRental;
