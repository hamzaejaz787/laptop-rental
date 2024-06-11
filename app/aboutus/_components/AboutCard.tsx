import Image from "next/image";
const AboutCard = ({ icon, title, text }: any) => {
  return (
    <div className="flex p-5 flex-col bg-white rounded-md shadow-3xl md:-mr-2">
      <Image src={icon} alt={title} className="w-12 h-12 object-contain mb-2" />
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default AboutCard;
