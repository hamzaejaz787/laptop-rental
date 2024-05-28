import Hp_imgframe from "@/components/hp_imgframe";
import React from "react";

interface Image {
  src: string;
  alt: string;
  text: string;
  link: string;
}

const images = [
  { src: "/hp_imgframe.png", alt: '', text: "Corporate Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Business Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Rental Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Rental Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Corporate Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Business Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Rental Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Rental Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Corporate Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Business Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Rental Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
  { src: "/hp_imgframe.png", alt: '', text: "Rental Event", link: "/singleevent",  desc: "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure", btn:"Explore Event"  },
];
const chunkArray = (arr: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, size + i));
  }
  return chunks;
};

const Eventslist = () => {
  return (
    <div className="mt-10 md:mt-14 lg:mt-20 md:px-20 px-5">
      <div>
        <h2 className="text-3xl mb-3 font-bold text-center">
          We don&lsquo;t need to take into account
        </h2>
        <p className="text-sm text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor
          dictum lectus at ultricies. elit. In porttitor
        </p>
      </div>
      <div className="grid gap-12  grid-cols-2 lg:grid-cols-4 justify-center items-center">
        {images.map((img, index) => (
          <Hp_imgframe key={index} src={img.src} alt={img.alt} text={img.text} link={img.link} desc={img.desc} btn={img.btn} />
        ))}
      </div>
    </div>
  );
};

export default Eventslist;