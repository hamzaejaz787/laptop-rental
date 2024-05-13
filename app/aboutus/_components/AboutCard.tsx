import Image from "next/image";
const AboutCard = ({ icon, mleft, mleft3, title, text }: any) => {
  return (
    <div
      className="flex p-5 flex-col bg-white rounded-md"
      style={{
        boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.75)",
        // marginLeft: mleft ? "-5px" : "0px",
        marginRight: "-7px",
        // paddingRight: mleft3 ? "5px" : "0px",
      }}
    >
      <Image src={icon} alt={title} className="w-12 h-12 object-contain mb-2" />
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default AboutCard;
