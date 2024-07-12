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
}

export interface ProductInfoTabItemProps {
  value: string;
  content: string;
}

export interface EventCardProps {
  imagesrc: string;
  alternativeText: string;
  title: string;
  description: string;
  href: string;
  ctatext: string;
  
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
      .regex(
        /^(\+?61|0)?[-\s]?([0-9]{1,4})[-\s]?([0-9]{3,4})[-\s]?([0-9]{3,4})$/,
        {
          message: "Invalid Australian phone number",
        }
      )
      .refine(
        (val) => {
          const digits = val.replace(/\D/g, "");
          return (
            (digits.startsWith("0") && digits.length === 10) ||
            (digits.startsWith("61") && digits.length === 11) ||
            (!digits.startsWith("0") &&
              !digits.startsWith("61") &&
              digits.length === 9)
          );
        },
        {
          message: "Invalid Australian phone number",
        }
      )
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
    .regex(
      /^(\+?61|0)?[-\s]?([0-9]{1,4})[-\s]?([0-9]{3,4})[-\s]?([0-9]{3,4})$/,
      {
        message: "Invalid Australian phone number",
      }
    )
    .refine(
      (val) => {
        const digits = val.replace(/\D/g, "");
        return (
          (digits.startsWith("0") && digits.length === 10) ||
          (digits.startsWith("61") && digits.length === 11) ||
          (!digits.startsWith("0") &&
            !digits.startsWith("61") &&
            digits.length === 9)
        );
      },
      {
        message: "Invalid Australian phone number",
      }
    )
    .transform((val) => val.replace(/\D/g, "")),
  company: z.string(),
  location: z.string(),
  message: z
    .string()
    .max(350, { message: "Message cannot be longer than 350 characters" }),
});
