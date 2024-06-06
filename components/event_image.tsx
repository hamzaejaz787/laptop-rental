import Image from "next/image";

export default function EventImage() {
  const images = [
    { src: "/event_img7.png" },
    { src: "/event_img9.png" },
    { src: "/event_img8.png" },
    { src: "/event_img7.png" },
    { src: "/event_img9.png" },
    { src: "/event_img8.png" },
    { src: "/event_img7.png" },
    { src: "/event_img8.png" },
    { src: "/event_img9.png" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative w-60 h-60">
          <Image
            src="/imageframe.png"
            alt="frame"
            fill={true}
            className="object-cover rounded-lg"
          />
          <Image
            key={index} // Adding key prop here
            src={image.src}
            width={360}
            height={360}
            alt={`Event Image ${index + 1}`}
            className="relative rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
