import ctabg from "../public/ctabg.png";

const CTA = ({ title, text, btn }: any) => {
  return (
    <div
      style={{ backgroundImage: `url(${ctabg.src})` }}
      className="flex flex-col mt-10 md:mt-14 lg:mt-20 bg-no-repeat bg-center bg-cover w-full h-96 justify-center items-center"
    >
      <div className="w-[100%] flex flex-col justify-center items-center">
        <h2 className="text-4xl w-[60%] text-white font-bold mb-3 text-center">
          {title}
        </h2>
        <p className="text-sm mb-3 text-white text-center w-[80%] font-sans">
          {text}
        </p>
        <button className="py-2 px-4 rounded-sm bg-primary-red text-white">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default CTA;
