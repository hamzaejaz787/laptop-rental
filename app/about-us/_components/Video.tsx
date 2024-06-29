// import vid from "@/public/testvideo.mp4";
const Video = () => {
  return (
    <section className="container p-8 md:py-10 md:px-20 space-y-6">
      <h2 className="text-4xl font-bold text-center">
        Looking For IT Equipment Rental Services For Your Event
      </h2>
      <p className="text-center max-w-5xl mx-auto">
        Our global enterprise specialises in providing top-of-the-line IT rental
        services, featuring the latest technology, extensive iPad inventories,
        and unmatched logistics. We go beyond mere logistical prowess – our
        dedicated team ensures seamless software integration, accommodating
        everything from standard apps to bespoke software. The Laptop Rental
        Difference lies in our commitment to a distinctive attitude and
        heightened support, available 24/7 for assistance or consultation.{" "}
      </p>
      <div className="w-full flex justify-center mt-10">
        <video
          className="w-full h-full max-h-[550px] rounded-3xl object-cover"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/about-us-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Video;
