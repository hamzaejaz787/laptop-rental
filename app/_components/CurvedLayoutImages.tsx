import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CurvedLayoutImages = () => {
  const layoutImages = [
    "/hp_img1.png",
    "/hp_img2.png",
    "/hp_img3.png",
    "/hp_img4.png",
    "/hp_img5.png",
    "/hp_img6.png",
  ];
  return (
    <div className="flex items-start gap-4 justify-center px-4 md:px-10 flex-wrap lg:flex-nowrap">
      {layoutImages.map((image, index) => (
        <Image
          src={image}
          key={index}
          alt=""
          width={150}
          height={500}
          className={cn(
            `${
              index === 1 || index === 4
                ? "lg:mt-14"
                : index === 2 || index === 3
                ? "lg:mt-32"
                : ""
            }`,
            `${index > 0 ? "hidden sm:block" : ""}`
          )}
        />
      ))}
    </div>
  );
};

export default CurvedLayoutImages;
