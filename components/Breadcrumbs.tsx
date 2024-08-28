import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbProps {
  category?: {
    href: string;
    title: string;
  };
  subcategory?: {
    href: string;
    title: string;
  };
  currentPage: string;
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({
  category,
  currentPage,
  subcategory,
  className,
}) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="hover:text-primary-red">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        {category && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={category.href}
                className="hover:text-primary-red"
              >
                {category.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
          </>
        )}
        {subcategory && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={subcategory.href}
                className="hover:text-primary-red"
              >
                {subcategory.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
