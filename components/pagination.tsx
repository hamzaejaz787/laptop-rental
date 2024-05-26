import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationDemoProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

export function PaginationDemo({ currentPage, totalPages, handlePageChange }: PaginationDemoProps) {
  const handlePrevious = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const itemStyle = {
    display: "inline-block",
    margin: "0 5px",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 10px",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: "#f56565", // Tailwind red-500 color
    color: "#fff",
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem style={itemStyle}>
          <PaginationPrevious
            href="#"
            onClick={handlePrevious}
            isDisabled={currentPage === 1}
            style={{ ...linkStyle, opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
          >
            <FaChevronLeft />
          </PaginationPrevious>
        </PaginationItem>
        {[...Array(totalPages).keys()].map((page) => (
          <PaginationItem key={page} style={itemStyle}>
            <PaginationLink
              href="#"
              isActive={currentPage === page + 1}
              onClick={() => handlePageChange(page + 1)}
              style={currentPage === page + 1 ? activeLinkStyle : linkStyle}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem style={itemStyle}>
          <PaginationNext
            href="#"
            onClick={handleNext}
            isDisabled={currentPage === totalPages}
            style={{ ...linkStyle, opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
          >
            <FaChevronRight />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
