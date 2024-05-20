import React from "react";
import Image from "next/image";
import Link from "next/link";
const BlogImage = ({ image, btn }: any) => {
  return (
    <div className="relative mt-10 md:mt-14 lg:mt-20 flex justify-center items-center">
      <Image
        src={image}
        alt="aboutus_banner"
        className="w-full h-96 relative"
      />
      <div className="absolute left-11 top-12 flex flex-col ">
        {btn && (
          <Link href={"#"}>
            <button className="py-2 px-4 rounded-sm bg-[#D61837] text-white">
              {btn}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogImage;
