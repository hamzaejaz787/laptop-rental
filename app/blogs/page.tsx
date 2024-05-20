import Banner from "@/components/Banner";
import React from "react";
import blog1 from "@/public/blog1.png";
import BlogImage from "./_components/BlogImage";
import Subdescription from "./_components/Subdescription";
import BlogDetails from "./_components/BlogDetails";

const Blogs = () => {
  return (
    <div>
      <Banner
        title="NEWS & BLOGS"
        text="We at Laptop Rentals understand whether you're hosting whether you're hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />
      <div className="w-[80%] m-auto mt-10 md:mt-14 lg=:mt-20 lg:flex ">
        <div className="flex flex-col">
          <div className="w-[70%] ">
            <BlogImage image={blog1} btn="Event Planning" />
            <Subdescription
              name="Name"
              text="Three Minute Read"
              date="Jan 11, 2024"
            />
            <BlogDetails
              title="Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus."
              btnlink="#"
            />
          </div>
          <div className="w-[70%] ">
            <BlogImage image={blog1} btn="Event Planning" />
            <Subdescription
              name="Name"
              text="Three Minute Read"
              date="Jan 11, 2024"
            />
            <BlogDetails
              title="Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus."
              btnlink="#"
            />
          </div>
          <div className="w-[70%] ">
            <BlogImage image={blog1} btn="Event Planning" />
            <Subdescription
              name="Name"
              text="Three Minute Read"
              date="Jan 11, 2024"
            />
            <BlogDetails
              title="Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus."
              btnlink="#"
            />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Blogs;
