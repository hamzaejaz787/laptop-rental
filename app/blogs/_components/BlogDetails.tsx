import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogDetails = ({ title, text, btnlink }: any) => {
  return (
    <div>
      <h2 className="text-3xl w-full text-start text-black font-bold mb-1 mt-2">
        {title}
      </h2>
      <p className="text-sm mb-3 text-black text-start w-full font-sans">
        {text}
      </p>
      <Link href={btnlink}>
        <p className="text-sm flex font-semibold gap-2 items-center">
          Read More
          <span>
            <FaLongArrowAltRight className="text-[#D61837]" />
          </span>
        </p>
      </Link>
    </div>
  );
};

export default BlogDetails;
