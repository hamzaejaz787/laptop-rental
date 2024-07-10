import React from "react";

const LaptopVideo = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="relative max-w-sm w-full">
        {/* Laptop lid */}
        <div className="relative bg-white rounded-t-lg shadow-lg pt-[56.25%]">
          {/* Screen bezel */}
          <div className="absolute inset-2 bg-gray-100 rounded-lg"></div>

          {/* Screen */}
          <div className="absolute inset-3 bg-black rounded overflow-hidden">
            {/* Video */}
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/about-us-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative bg-white rounded-b-lg shadow-lg h-16">
          {/* Touchpad */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-8 bg-gray-100 rounded"></div>
        </div>

        {/* Laptop hinge */}
        <div className="absolute bottom-16 left-0 right-0 h-1 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default LaptopVideo;
