import CtaButton from "@/components/CtaButton";
const Cta = () => {
  return (
    <div
      style={{ backgroundImage: `url(/about-us-cta.png)` }}
      className="bg-no-repeat bg-cover w-full min-h-96 h-full p-8 content-center"
    >
      <div className="container 2xl:px-8 h-full flex w-full justify-between gap-8 md:gap-20 items-center flex-col md:flex-row">
        <h2 className="text-center md:text-left text-4xl md:max-w-lg text-white font-bold">
          We Offer Tech Products to Promote your event{" "}
        </h2>

        <CtaButton
          href="/technology-rental"
          text="Explore Products"
          className="py-5 md:mr-0"
        />
      </div>
    </div>
  );
};

export default Cta;
