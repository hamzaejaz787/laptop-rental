import AboutCard from "./AboutCard";
import historyIcon from "@/public/history.png";
import missionIcon from "@/public/mission.png";
import visionIcon from "@/public/vision.png";

const AboutCards = () => {
  return (
    <div
      className="flex flex-col mt-10 md:flex-row md:-mt-16 lg:flex-row lg:-mt-24 w-[80%] mb-20 m-auto rounded-md "
      //   style={{ marginTop: "-100px" }}
    >
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
