import Link from "next/link";
import { Button } from "./ui/button";

export default function Btn({ txt, link }: any) {
  return (
    <div>
      <Button
        asChild
        className="w-20  md:ml-0 md:w-40 h-6 md:h-12 font-Poppins border rounded-sm bg-primary-red text-[9px] md:text-[18px] "
      >
        <Link href={link}>{txt}</Link>
      </Button>
    </div>
  );
}
