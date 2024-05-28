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
}
