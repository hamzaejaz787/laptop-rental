import Banner from "@/components/Banner";
import { getGalleryItemsById } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import Image from "next/image";
import { Metadata } from "next";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface GalleryItemProps {
  id: number;
  url: string;
  alternativeText: string;
  width?: number;
  height?: number;
}

export const metadata: Metadata = {
  title: "Laptop Rental For Events | Gallery",
  description: "",
  keywords: "",
  alternates: {
    canonical: "https://laptop-rental.com.au/gallery",
  },
};

const Gallery = async () => {
  const galleryItems = await getGalleryItemsById(1);
  const baseurl = getStrapiURL();
  const images: GalleryItemProps[] = galleryItems.galleryimage.data;

  return (
    <>
      <Banner
        image={{
          url: "/gallery-banner.jpg",
          alternativeText: "Discover Our Event Transformations",
        }}
        title="Discover Our Event Transformations"
        text="Explore our Gallery to see how Laptop Rental transforms events with top-tier tech solutions. Serving Australia, New Zealand, and worldwide, we provide unmatched quality and service."
      />

      <section className="container px-8 py-4 space-y-4">
        <h3 className="font-bold font-Barlow text-3xl text-center pt-8">
          Event Transformations Gallery{" "}
        </h3>
        <p className="text-center text-gray-600">
          Explore our Gallery to see how Laptop Rental transforms events with
          top-tier tech solutions. Serving Australia, New Zealand, and
          worldwide, we provide unmatched quality and service. Our curated
          images showcase the range and versatility of our rental equipment,
          ensuring seamless and impactful corporate events. From conferences to
          product launches, see how our technology enhances every occasion.
          Trust Laptop Rental for reliable, cutting-edge solutions that make
          your events stand out.
        </p>

        {/* <div className="flex flex-col md:flex-row gap-8 justify-between my-8">
          <TabSidebar tabItems={tabItems} />
          <GalleryTabCards />
        </div> */}

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {images.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger>
                <Image
                  src={`${baseurl}${item.url}`}
                  alt={item.alternativeText}
                  width={500}
                  height={500}
                  className="h-full object-cover rounded-sm hover:scale-105 transition-transform hover:shadow-lg"
                />
              </DialogTrigger>
              <DialogContent>
                <Image
                  src={`${baseurl}${item.url}`}
                  alt={item.alternativeText}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </>
  );
};
export default Gallery;
