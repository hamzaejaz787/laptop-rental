import React from "react";
import Banner from "@/components/Banner";
import ResourcesSidebar from "../_components/ResourcesSidebar";
import ResourceDetails from "./components/ResourceDetails";

function SingleBlogPage() {
  return (
    <div>
      <Banner title="Single Blog Page" text="" />

      <div className="flex items-start justify-between flex-col lg:flex-row gap-8 p-8 py-12 container">
        <ResourceDetails />
        <ResourcesSidebar />
      </div>

      <div className="container p-8 text-center space-y-4">
        <h2 className="text-4xl font-bold">Popular Blogs</h2>
        <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor
          dictum lectus at ultricies. elit. In porttitor{" "}
        </p>
      </div>
    </div>
  );
}

export default SingleBlogPage;
