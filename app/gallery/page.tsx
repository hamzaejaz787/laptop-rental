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
  "Exam Event",
  "Festival Event",
];

const Gallery = () => {
  return (
    <>
      <Banner
        title="Gallery"
        text="We at Laptop Rentals understand whether you're hosting whether"
      />

      <section className="container p-8 space-y-4">
        <h3 className="font-bold font-Barlow text-3xl text-center">
          Our Gallery
        </h3>
        <p className="text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolores adipisci consequatur aliquam. Ipsa, a!
        </p>
        <MasonryGrid />

        <h3 className="font-bold font-Barlow text-3xl text-center pt-8">
          Past Events We Rented
        </h3>
        <p className="text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolores adipisci consequatur aliquam. Ipsa, a!
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
