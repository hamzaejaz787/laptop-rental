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
        title="Our History"
        text="Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure Lorem"
      />
      <AboutCard
        icon={missionIcon}
        title="Our Mission"
        mleft={true}
        text="Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure Lorem"
      />
      <AboutCard
        icon={visionIcon}
        mleft3={true}
        title="Our Vision"
        text="Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure Lorem"
      />
    </div>
  );
};

export default AboutCards;
