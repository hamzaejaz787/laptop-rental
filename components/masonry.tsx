import Image from "next/image";

const imageSources = [
  { src: "/img2.png" },
  { src: "/img3.png" },
  { src: "/img4.png" },
  { src: "/img7.png" },
  { src: "/img8.png" },
  { src: "/img9.png" },
  { src: "/img2.png" },
  { src: "/img3.png" },
  { src: "/img4.png" },
  { src: "/img7.png" },
  { src: "/img2.png" },
];

export default function MasonryGrid() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {imageSources.map((image, index) => (
        <Image
          src={image.src}
          alt=""
          width={300}
          height={300}
          key={index}
          className="rounded-md object-cover justify-self-center"
        />
      ))}
    </div>
  );
}
