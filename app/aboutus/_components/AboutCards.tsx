import historyIcon from "@/public/history.png";
import missionIcon from "@/public/mission.png";
import visionIcon from "@/public/vision.png";
import Image from "next/image";

const AboutCard = ({ icon, title, text }: any) => {
  return (
    <div className="flex p-5 flex-col bg-white rounded-md shadow-3xl md:-mr-2">
      <Image src={icon} alt={title} className="w-12 h-12 object-contain mb-2" />
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-sm md:max-w-sm">{text}</p>
    </div>
  );
};

const AboutCards = () => {
  return (
    <div className="container p-8 flex flex-col gap-8 md:gap-0 mt-0 md:flex-row md:-mt-16 lg:flex-row lg:-mt-24 mx-auto justify-center rounded-md ">
      <AboutCard
        icon={historyIcon}
        title="Company History"
        text="Laptop Rental delivers cutting-edge technology globally, venturing boldly to unconventional locations. With a decade of experience, we prioritise enduring client relationships, offering unmatched IT rental services and logistics."
      />
      <AboutCard
        icon={missionIcon}
        title="Our Mission"
        mleft={true}
        text="Dedicated to our clients, we strive to simplify challenges related to location, environment, and technology, providing impactful event solutions that inspire and captivate."
      />
      <AboutCard
        icon={visionIcon}
        mleft3={true}
        title="Our Vision"
        text="Our vision is to be the global leader in transformative event technology, setting new standards of excellence. We aspire to seamlessly blend innovation, client satisfaction, and operational precision for unparalleled event experiences worldwide."
      />
    </div>
  );
};

export default AboutCards;
