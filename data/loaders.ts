import qs from "qs";
import { getStrapiURL, flattenAttributes } from "@/lib/utils";

const baseURL = getStrapiURL();

async function fetchData(url: string) {
  try {
    const response = await fetch(url, {
      next: { revalidate: 120 },
    });
    if (!response.ok) throw new Error(`Http error! status ${response.status}`);
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
  pageSize?: number,
  category?: string,
  subcategory?: string
) => {
  const baseUrl = new URL("/api/products", baseURL);

  const createSearchParams = (includeCategories: boolean) => {
    const filters: any = {};

    if (includeCategories) {
      if (category) filters.ProductCategory = { $containsi: category };
      if (subcategory) filters.ProductSubCategory = { $containsi: subcategory };
    }

    if (queryString) {
      filters.$or = [
        { Title: { $containsi: queryString } },
        { Description: { $containsi: queryString } },
        { ProductCategory: { $containsi: queryString } },
        { ProductSubCategory: { $containsi: queryString } },
      ];
    }

    return qs.stringify({
      populate: {
        Specs: { populate: true },
        ProductCardImage: { fields: ["name", "url", "alternativeText"] },
      },
      sort: ["id:ASC"],
      filters: filters,
      pagination: { pageSize: pageSize, page: currentPage },
    });
  };

  const fetchProducts = async (includeCategories: boolean) => {
    const url = new URL(baseUrl);
    url.search = createSearchParams(includeCategories);
    return await fetchData(url.href);
  };

  // First attempt: search with category and subcategory filters
  let result = await fetchProducts(true);

  // If no results and search query exists, try searching without category/subcategory filters
  if (result.data.length === 0 && queryString) {
    result = await fetchProducts(false);
  }

  return result;
};

export const getAllProducts = async (): Promise<{
  data: any;
  meta: { pagination: { total: number } };
}> => {
  const pageSize = 100;
  let allProducts: any = [];
  let currentPage = 1;
  let hasMorePages = true;

  while (hasMorePages) {
    const pageData = await getProduct(undefined, currentPage, pageSize);
    allProducts = [...allProducts, ...pageData.data];

    hasMorePages = currentPage < pageData.meta.pagination.pageCount;
    currentPage++;
  }

  return {
    data: allProducts,
    meta: { pagination: { total: allProducts.length } },
  };
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

export const getProductBySlug = async (slug: string) => {
  const url = new URL(`/api/products/${slug}`, baseURL);

  url.search = qs.stringify({
    populate: {
      Specs: { populate: true },
      ProductCardImage: { fields: ["name", "url", "alternativeText"] },
      ProductImages: { fields: ["name", "url", "alternativeText"] },
      ProductFeatures: { populate: true },
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
