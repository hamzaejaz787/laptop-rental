import Link from "next/link";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const ContactsOptions = () => {
  return (
    <div className="text-white gap-6 w-full flex flex-row flex-wrap justify-center items-center lg:flex-col px-8">
      <div className="flex flex-col justify-center items-center gap-1">
        <FaPhone size={22} />
        <p className="text-center text-sm">Lets Have a Call</p>
        <Link
          href="tel:+923331231234"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          +92 333 123 1234
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <IoMail size={22} />
        <p className="text-center text-sm">Send us an Email</p>
        <Link
          href="mailto:laptoprental@gmail.com"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          laptoprental@gmail.com
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <FaLocationDot size={22} />
        <p className="text-center text-sm">Visit Our Office</p>
        <Link
          target="_blank"
          href="https://maps.app.goo.gl/cFzM7gbaxUWUrE9D7"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          2508 Sydney, TX 78746 Australia
        </Link>
      </div>
    </div>
  );
};

export default ContactsOptions;
