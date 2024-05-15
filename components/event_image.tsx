import Image from 'next/image';

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
        { src: "/event_img9.png" }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {images.map((image, index) => (
                <div key={index} className="relative w-60 h-60">
                    <Image
                        src="/imageframe.png"
                        alt="frame"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 rounded-lg"
                    />
                    <Image
                        key={index} // Adding key prop here
                        src={image.src}
                        alt={`Event Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="relative rounded-lg"
                    />
                </div>
            ))}
        </div>
    );
}
