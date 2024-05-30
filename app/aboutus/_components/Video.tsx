// import vid from "@/public/testvideo.mp4";
const Video = () => {
  return (
    <div className="w-[80%] m-auto mt-10 md:mt-14 lg:mt-20">
      <h2 className="text-4xl mb-3 font-bold text-center">
        Looking For IT Equipment Rental Services For Your Event
      </h2>
      <p className="text-sm text-center mb-8">
        We at Laptop Rentals understand whether you&lsquo;re hosting a
        conference, <br></br>a conference you&lsquo;re hosting a conference.
      </p>
      <div className="w-full flex justify-center">
        <video
          className="w-full h-full rounded-3xl object-cover"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/about-us-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
