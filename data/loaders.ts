import qs from "qs";
import { getStrapiURL, flattenAttributes } from "@/lib/utils";

const baseURL = getStrapiURL();

async function fetchData(url: string) {
  try {
    const response = await fetch(url, {
      next: { revalidate: 600 },
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

export const getProduct = async (queryString?: string) => {
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

    //Sort and filter the product for search
    sort: ["createdAt:desc"],
    filters: {
      $or: [{ Title: { $containsi: queryString } }],
    },
  });

  return await fetchData(url.href);
};

export const getProductCategory = async () => {
  const url = new URL("/api/product-categories", baseURL);

  url.search = qs.stringify({
    // populate: {
    //   BannerImage: {
    //     fields: ["name", "url", "alternativeText"],
    //   },
    //   CtaImage: {
    //     fields: ["name", "url", "alternativeText"],
    //   },
    //   IntroImage: {
    //     fields: ["name", "url", "alternativeText"],
    //   },
    // },
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
    },
  });

  return await fetchData(url.href);
};
