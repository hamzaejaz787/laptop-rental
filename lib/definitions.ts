import { BlocksContent } from "@strapi/blocks-react-renderer";
import { startOfToday } from "date-fns";
import React from "react";
import { z } from "zod";

export interface PageProps {
  params: { slug: string; id: string };
}

export interface BannerImageProps {
  alternativeText: string;
  width?: number;
  height?: number;
  url: string;
}

export interface BannerItem {
  icon: React.ElementType;
  desc: string;
  title?: string;
}

export interface BannerProps {
  btn?: string;
  link?: string;
  title: string;
  text: string;
  reverse?: boolean;
  image?: BannerImageProps;
  items?: BannerItem[];
  __component?: string;
  content?: BlocksContent;
}

export interface EventCardProps {
  id?: number;
  FeaturedText?: string;
  slug: string;
  FeaturedImage: {
    url: string;
    alternativeText: string;
  };
  NavMenuName: string;
}

export interface EventItemTypes {
  data: {
    id: string;
    slug: string;
    NavMenuName: string;
  }[];
}

const today = startOfToday();

export const quoteFormSchema = z
  .object({
    name: z.string().min(2),
    email: z.string().email().min(2),
    message: z
      .string()
      .max(350, { message: "Message cannot be longer than 350 characters" }),
    startdate: z.date().min(today, { message: "Date cannot be older" }),
    enddate: z.date().min(today, { message: "Date cannot be older" }),
    company: z.string(),
    location: z.string(),
    phone: z
      .string()
      .regex(/^\+?\d[\d\s\-().]{7,}$/, {
        message: "Phone number is not valid!!",
      })
      .transform((val) => val.replace(/\D/g, "")),
  })
  .superRefine((values, ctx) => {
    if (values.enddate < values.startdate) {
      ctx.addIssue({
        code: "custom",
        message: "End date cannot be earlier than start date",
        path: ["enddate"],
      });
    }
  });

export const formSchema = z.object({
  name: z.string().min(1, { message: "Cannot be empty" }),
  email: z.string().email().min(1, { message: "Cannot be empty" }),
  contact: z
    .string()
    .regex(/^\+?\d[\d\s\-().]{7,}$/, {
      message: "Phone number is not valid!!",
    })
    .transform((val) => val.replace(/\D/g, "")),
  company: z.string(),
  location: z.string(),
  message: z
    .string()
    .max(350, { message: "Message cannot be longer than 350 characters" }),
});

//Single Product
export interface ProductImageCarouselProps {
  data: Array<{
    id: number;
    url: string;
    alternativeText: string | null;
    width: number;
    height: number;
  }>;
}

export interface ProductSpecsProps {
  id: number;
  value: string;
  Spec: string;
  tooltiptext?: string;
}

export interface ProductInfoTabItemProps {
  id: number;
  Type: "Description" | "Product Guide" | string;
  url?: string;
  content: BlocksContent;
}

export interface ProductTabInfoProps {
  TabItems: ProductInfoTabItemProps[];
}

export interface JsonLdSchemaItem {
  id: number;
  schema: string;
}

export interface RelatedProductsTypes {
  id: number;
  Title: string;
  slug: string;
  ProductCategory: string;
  ProductSubCategory: string;
  ProductCardImage: {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
  };
  Specs: ProductSpecsProps[];
  productcategory: {
    slug: string;
  };
}

export interface SingleProductProps {
  id: number;
  Title: string;
  MetaDescription: string | null;
  MetaKeywords: string[] | string | null;
  MetaCanonical: string | null;
  MetaTitle: string;
  ProductCategory: string;
  ProductSubCategory: string;
  slug: string;
  Specs: ProductSpecsProps[];
  ProductCardImage: {
    url: string;
    alternativeText: string | null;
    width: number;
    height: number;
  };
  ProductImages: ProductImageCarouselProps;
  ProductFeatures: Array<{
    id: number;
    Feature: string;
  }>;
  Faqs: Array<{
    id: number;
    Question: string;
    Answer: string;
  }>;
  info: ProductInfoTabItemProps[];
  productcategory: {
    slug: string;
  };
  jsonSchema: JsonLdSchemaItem[];
  relatedproducts: { data: RelatedProductsTypes[] };
}

export interface ResourceCardTypes {
  id: number;
  MetaDescription: string | null;
  MetaKeywords: string[] | string | null;
  MetaCanonical: string | null;
  MetaTitle: string;
  MainImage: {
    url: string;
    alternativeText: string;
  };
  HeaderImage: {
    url: string;
    alternativeText: string;
  };
  BlogThumbnail: {
    url: string;
    alternativeText: string;
  };
  Title: string;
  Description: string;
  BlogContent: BlocksContent;
  IntroText: string;
  slug: string;
  ReadingTime: number;
  updatedAt: string;
  updatedBy: {
    id: number;
    firstname: string;
    lastname: string;
  };
  createdBy: {
    id: number;
    firstname: string;
    lastname: string;
  };
}
