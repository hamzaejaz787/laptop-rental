// import vid from "@/public/testvideo.mp4";
const Video = () => {
  return (
    <div className="w-[80%] m-auto mt-10 md:mt-14 lg:mt-20">
      <h2 className="text-4xl mb-3 font-bold text-center">
        Looking For IT Equipment Rental <br></br> Services For Your Event
      </h2>
      <p className="text-sm text-center mb-8">
        We at Laptop Rentals understand whether you&lsquo;re hosting a
        conference, <br></br>a conference you&lsquo;re hosting a conference.
      </p>
      <div className="w-full flex justify-center">
        {/* <iframe
          className="rounded-lg"
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/fHi-XeXPQhE?si=nDwkoyDlGdYBkCvy"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
        ></iframe> */}
        <video
          className="w-full h-full rounded-3xl object-cover"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/testvideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
