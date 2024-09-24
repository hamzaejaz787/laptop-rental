import { getAllProducts, getEvents, getProductCategory } from "@/data/loaders";
import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

interface ProductItem {
  id: number;
  Title: string;
  slug: string;
  ProductCategory: string;
  productcategory: {
    slug: string;
  };
  updatedAt: string | Date;
}

// Type for the data returned by getAllProducts
interface GetAllProductsResponse {
  data: ProductItem[];
}

// Type for a single event item
interface EventItem {
  id: number;
  slug: string;
  updatedAt: string | Date;
}

// Type for the data returned by getEvents
interface GetEventsResponse {
  data: EventItem[];
}

// Type for a single product category item
interface ProductCategoryItem {
  id: number;
  slug: string;
  updatedAt: string | Date;
  products: {
    data: ProductItem[];
  };
}

// Type for the data returned by getProductCategory
interface GetProductCategoryResponse {
  data: ProductCategoryItem[];
}

type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  alternates?: {
    languages?: Record<string, string>;
  };
  images?: string[];
}>;

const baseUrl = "https://laptop-rental.com.au";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links: Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about-us`, lastModified: new Date() },
    { url: `${baseUrl}/contact-us`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/get-a-quote`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date() },
    { url: `${baseUrl}/event-rental`, lastModified: new Date() },
    { url: `${baseUrl}/laptop-hire`, lastModified: new Date() },
    { url: `${baseUrl}/technology-rental`, lastModified: new Date() },
  ];

  const [events, productCategory, products]: [
    GetEventsResponse,
    GetProductCategoryResponse,
    GetAllProductsResponse
  ] = await Promise.all([getEvents(), getProductCategory(), getAllProducts()]);

  //Single Event
  events.data.map((event) => {
    links.push({
      url: `${baseUrl}/event-rental/${event.slug}`,
      lastModified: event.updatedAt,
    });
  });

  //Filter products based on category
  const laptopItems = productCategory?.data.filter((item) =>
    item.products.data.some((product) => product.ProductCategory === "Laptop")
  );
  const otherItems = productCategory?.data.filter((item) =>
    item.products.data.every((product) => product.ProductCategory !== "Laptop")
  );

  //Product category
  laptopItems.map((laptop) => {
    links.push({
      url: `${baseUrl}/laptop-hire/${laptop.slug}`,
      lastModified: laptop.updatedAt,
    });
  });
  otherItems.map((item) => {
    links.push({
      url: `${baseUrl}/technology-rental/${item.slug}`,
      lastModified: item.updatedAt,
    });
  });

  //Single product
  products.data.forEach((product) => {
    const url = `${baseUrl}/${
      product.ProductCategory.toLowerCase() === "laptop"
        ? "laptop-hire"
        : "technology-rental"
    }/${product.productcategory.slug}/${product.slug}`;

    if (product.slug && product.productcategory.slug) {
      links.push({
        url,
        lastModified: product.updatedAt,
      });
    }
  });

  return links;
}
