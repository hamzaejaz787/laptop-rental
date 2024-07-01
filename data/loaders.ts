import qs from "qs";
import { getStrapiURL, flattenAttributes } from "@/lib/utils";

const baseURL = getStrapiURL();

async function fetchData(url: string) {
  try {
    const response = await fetch(url, {
      next: { revalidate: 120 },
    });
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getEvents() {
  const url = new URL("/api/events", baseURL);
  url.search = qs.stringify({
    populate: {
      IntroBanner: {
        fields: ["name", "url", "alternativeText"],
      },
    },
  });

  return await fetchData(url.href);
}

export async function getEventBySlug(slug: string) {
  const url = new URL(`/api/events/${slug}`, baseURL);
  url.search = qs.stringify({
    populate: {
      TextImage: {
        populate: "*",
      },
      IntroBanner: {
        fields: ["name", "url", "alternativeText"],
      },
      CtaImage: {
        fields: ["name", "url", "alternavtiveText"],
      },
      Faq: {
        populate: "*",
      },
    },
  });

  return await fetchData(url.href);
}

export const getProduct = async (
  queryString?: string,
  currentPage = 1,
  pageSize?: number
) => {
  const url = new URL("/api/products", baseURL);
  url.search = qs.stringify({
    populate: {
      Specs: {
        populate: true,
      },
      ProductImage: {
        fields: ["name", "url", "alternativeText"],
      },
    },
    sort: ["createdAt:desc"],
    filters: {
      $or: [{ Title: { $containsi: queryString } }],
    },
    pagination: {
      pageSize: pageSize || 25, // Default pageSize if not provided
      page: currentPage,
    },
  });

  return await fetchData(url.href);
};

export const getAllProducts = async () => {
  let allProducts = [];
  let currentPage = 1;
  let pageSize = 25;
  let pageCount = 1;

  // Fetch the first page to get the pageSize and pageCount
  const firstPageData = await getProduct(undefined, currentPage, pageSize);
  if (firstPageData.meta) {
    pageSize = firstPageData.meta.pagination.pageSize;
    pageCount = firstPageData.meta.pagination.pageCount;
  }
  allProducts = [...firstPageData.data];

  // Fetch remaining pages
  while (currentPage < pageCount) {
    currentPage += 1;
    const nextPageData = await getProduct(undefined, currentPage, pageSize);
    allProducts = [...allProducts, ...nextPageData.data];
  }

  return { data: allProducts, meta: firstPageData.meta };
};

export const getProductCategory = async () => {
  const url = new URL("/api/product-categories", baseURL);

  url.search = qs.stringify({
    populate: {
      products: {
        fields: ["ProductCategory", "ProductSubCategory"],
      },
    },
  });

  return await fetchData(url.href);
};

export const getProductCategoryBySlug = async (slug: string) => {
  const url = new URL(`/api/product-categories/${slug}`, baseURL);

  url.search = qs.stringify({
    populate: {
      BannerImage: {
        fields: ["name", "url", "alternativeText"],
      },
      CtaImage: {
        fields: ["name", "url", "alternativeText"],
      },
      IntroImage: {
        fields: ["name", "url", "alternativeText"],
      },
      products: {
        fields: ["ProductCategory", "ProductSubCategory"],
      },
    },
  });

  return await fetchData(url.href);
};

export const getGalleryItemsById = async (id: string | number) => {
  const url = new URL(`/api/galleries/${id}`, baseURL);

  url.search = qs.stringify({
    populate: {
      galleryimage: true,
    },
  });

  return await fetchData(url.href);
};
