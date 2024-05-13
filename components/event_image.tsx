export default function Event_image() {
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
                    <img
                        src="/imageframe.png"
                        alt="frame"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <img
                        src={image.src}
                        alt={`Event Image ${index + 1}`}
                        className="relative w-full h-full object-cover rounded-lg"
                    />
                </div>
            ))}
        </div>
    );
}
