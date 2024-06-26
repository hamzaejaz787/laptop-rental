import MasonryGrid from "@/components/masonry";
import Banner from "@/components/Banner";
import TabSidebar from "./_components/TabSidebar";
import GalleryTabCards from "./_components/GalleryTabCards";

const tabItems = [
  "Corporate Event",
  "Rental Event",
  "Gaming Event",
  "Business Event",
  "Training & Seminar",
];

const Gallery = () => {
  return (
    <>
      <Banner
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

        <div className="flex flex-col md:flex-row gap-8 justify-between my-8">
          <TabSidebar tabItems={tabItems} />
          <GalleryTabCards />
        </div>
      </section>
    </>
  );
};
export default Gallery;
