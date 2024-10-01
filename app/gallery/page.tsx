import Banner from "@/components/Banner";
import { getGalleryItemsById } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagesLoader from "./_components/ImagesLoader";

interface GalleryItemProps {
  id: number;
  url: string;
  alternativeText: string;
  width: number;
  height: number;
}

export const metadata: Metadata = {
  title: "Laptop Rental For Events | Gallery",
  description: "",
  keywords: "",
  alternates: {
    canonical: "https://laptop-rental.com.au/gallery",
  },
  other: { title: "Laptop Rental For Events | Gallery" },
};

const Gallery = async () => {
  const galleryItems = await getGalleryItemsById(1);
  const baseurl = getStrapiURL();
  const images: GalleryItemProps[] = galleryItems.galleryimage.data;

  return (
    <>
      <Banner
        image={{
          url: "/gallery-header.png",
          alternativeText: "Discover Our Event Transformations",
        }}
        title="Discover Our Event Transformations"
        text="Explore our Gallery to see how Laptop Rental transforms events with top-tier tech solutions. Serving Australia and New Zealand, we provide unmatched quality and service."
      />
      <Breadcrumbs className="sr-only" currentPage="Gallery" />

      <section className="container p-8 space-y-4">
        <h3 className="font-bold font-Barlow text-3xl text-center">
          Event Transformations Gallery{" "}
        </h3>
        <p className="text-center text-gray-600">
          Explore our Gallery to see how Laptop Rental transforms events with
          top-tier tech solutions. Serving Australia and New Zealand, we provide
          unmatched quality and service. Our curated images showcase the range
          and versatility of our rental equipment, ensuring seamless and
          impactful corporate events. From conferences to product launches, see
          how our technology enhances every occasion. Trust Laptop Rental for
          reliable, cutting-edge solutions that make your events stand out.
        </p>

        <ImagesLoader baseurl={baseurl} images={images} />
      </section>
    </>
  );
};
export default Gallery;
