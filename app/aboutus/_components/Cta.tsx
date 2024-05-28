import Image from "next/image";
import banner_bg from "@/public/contactus_bg.png";
const Cta = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner_bg.src})` }}
      className="flex flex-col mt-10 md:mt-14 lg:mt-20 bg-no-repeat bg-center w-full h-96"
    >
      <div className=" w-[100%] h-full flex  justify-center gap-32 items-center">
        <h2 className="md:text-4xl text-2xl w-[40%] text-white font-bold">
          We Offer Tech Products to Promote your event{" "}
        </h2>
        <button className="py-2 px-4 rounded-sm bg-[#D61837] text-white">
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default Cta;
