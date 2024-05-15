import Image from "next/image";

export default function Image_frame() {
    const images = [
        { src: "/event_img7.png" },
        { src: "/event_img9.png" },
        { src: "/event_img8.png" },
        { src: "/event_img7.png" },
        { src: "/event_img9.png" },
        { src: "/event_img8.png" },
        { src: "/event_img7.png" },
        { src: "/event_img8.png" },
        { src: "/event_img9.png" }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {images.map((image, index) => (
                <div key={index} className="relative w-60 h-60">
                    <Image
                        src="/img_frame.png"
                        alt="frame"
                        height={1000} width={1000}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <Image
                        src={image.src}
                        alt={`Event Image ${index + 1}`}
                        height={1000} width={1000}
                        className="relative w-full h-full object-cover rounded-lg"
                    />
                </div>
            ))}
        </div>
    );
}
