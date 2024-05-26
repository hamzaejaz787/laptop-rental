"use client"
import Banner from "@/components/Banner";
import React, { useState } from "react";
import blog1 from "@/public/blog1.png";
import BlogImage from "./_components/BlogImage";
import Subdescription from "./_components/Subdescription";
import BlogDetails from "./_components/BlogDetails";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { PaginationDemo } from "@/components/pagination";

const blogsData = [
  {
    image: blog1,
    btn: "Event Planning",
    name: "Name",
    text: "Three Minute Read",
    date: "Jan 11, 2024",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus."
  },
  {
    image: blog1,
    btn: "Event Planning",
    name: "Name",
    text: "Three Minute Read",
    date: "Jan 11, 2024",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus."
  },
  {
    image: blog1,
    btn: "Event Planning",
    name: "Name",
    text: "Three Minute Read",
    date: "Jan 11, 2024",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus."
  },
  {
    image: blog1,
    btn: "Event Planning",
    name: "Name",
    text: "Three Minute Read",
    date: "Jan 11, 2024",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus."
  },
  {
    image: blog1,
    btn: "Event Planning",
    name: "Name",
    text: "Three Minute Read",
    date: "Jan 11, 2025",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus."
  },
  {
    image: blog1,
    btn: "Event Planning",
    name: "Name",
    text: "Three Minute Read",
    date: "Jan 11, 2024",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus."
  },
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogsData.length / itemsPerPage);

  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Banner
        title="NEWS & BLOGS"
        text="We at Laptop Rentals understand whether you're hosting whether you're hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />
      <div className="w-[80%] m-auto mt-10 md:mt-14 lg:mt-20 lg:flex ">
        <div className="flex flex-col">
          {currentBlogs.map((blog, index) => (
            <div key={index} className="w-[70%] mb-6">
              <BlogImage image={blog.image} btn={blog.btn} />
              <Subdescription name={blog.name} text={blog.text} date={blog.date} />
              <BlogDetails title={blog.title} text={blog.description} btnlink="#" />
            </div>
          ))}
        </div>
      </div>
      <PaginationDemo currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
    </div>
  );
};

export default Blogs;
