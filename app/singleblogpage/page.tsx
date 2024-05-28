import Banner from "@/components/Banner";
import React from "react";
import Singleblogdetail from "./components/singleblogdetail";
import Rightsidebar from "@/components/rightsidebar";
import Hp_imgframe from "@/components/hp_imgframe";

interface Image {
  src: string;
  alt: string;
  text: string;
  link: string;
}

const images = [
  { src: "/hp_imgframe.png", alt: '', text: "Nel. Dingen. Trenera. Funas. Sorade. Kror. Hobelt ", btnlink: "/", btntxt: "Read More", desc: "Get in contact us to start planning your own adventure." },
  { src: "/hp_imgframe.png", alt: '', text: "Nel. Dingen. Trenera. Funas. Sorade. Kror. Hobelt ", btnlink: "/", btntxt: "Read More", desc: "Get in contact us to start planning your own adventure."  },
  { src: "/hp_imgframe.png", alt: '', text: "Nel. Dingen. Trenera. Funas. Sorade. Kror. Hobelt ", btnlink: "/", btntxt: "Read More", desc: "Get in contact us to start planning your own adventure."  },
  { src: "/hp_imgframe.png", alt: '', text: "Nel. Dingen. Trenera. Funas. Sorade. Kror. Hobelt ", btnlink: "/", btntxt: "Read More", desc: "Get in contact us to start planning your own adventure."  },
];

function SingleBlogPage() {
  return (
    <div>
      <Banner
        title="SINGLE BLOG PAGE"
        text="Home > Blog Page > Single Blog Page"
      />
      <div className="flex flex-col items-center">
        <div className="flex mt-10 md:gap-10 md:mt-14 lg:mt-20 md:mx-20 mx-10 md:items-start md:justify-start">
          <Singleblogdetail />
          <div className="md:mt-14">
            <Rightsidebar txt={"IPad With 10.5 Cellular"} />
          </div>
        </div>
        <div className="mt-10 md:mt-14 lg:mt-20 flex flex-col items-center">
          <div>
            <h2 className="text-3xl mb-3 font-bold text-center">
              Popular Blogs
            </h2>
            <p className="text-sm text-center mb-8 px-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor
              dictum lectus at ultricies. elit. In porttitor
            </p>
          </div>
          <div className="grid gap-10 grid-cols-2 lg:grid-cols-4 md:mb-20 mb-14 px-5">
            {images.map((img, index) => (
              <Hp_imgframe key={index} src={img.src} alt={img.alt} text={img.text} btnlink={img.btnlink} btntxt={img.btntxt} desc={img.desc}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
