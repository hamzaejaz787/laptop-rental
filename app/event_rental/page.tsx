import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Event_page() {
    return (
        <div>
            <div className="relative">

                <img src="/event_rental_bg.png" alt="" className="w-full object-cover pt-16 md:h-[400px] lg:h-[500px]" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="font-[800] text-white text-[40px] font-Barlow md:text-3xl lg:text-5xl">EVENT RENTALS</p>
                    <div className="flex text-white items-center font-Poppins text-[14px] line-clamp-2 text-center align-middle pt-3 pb-3 pr-72 pl-72 ">
                        We at Laptop Rentals understand whether you're hosting whether you're hosting We at Laptop Rentals understand at Laptop Rentals understand
                    </div>
                    <Button className='font-Poppins border border-none bg-[#D61837]'>Request a quote</Button>
                </div>
            </div>

            <div className="flex pt-20 pl-20 ">
        <div>
          <Image src="/imageframe.png" alt="" width={1280} height={1280} />
        </div>
        <div className="flex flex-col pl-10 pt-5 pr-20 gap-2">
          <p className="font-[800] font-Barlow text-[34px]">DELL E5440 LATITUDE</p>
          <p className="line-clamp-2 text-gray text-[15px] font-Poppins font-#595959">
            We at Laptop Rentals understand whether you are hosting a
            conference, trade show, or business event, having access to a
            conference, trade.
          </p>
          
          
        </div>
      </div>
        </div>
    )
}