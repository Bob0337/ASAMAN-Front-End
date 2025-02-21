import { Button, buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import React from "react";

type Props = {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
};

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
  siblingCount: number = 1,
): (number | string)[] => {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalPageNumbers) {
    return range(1, totalPages);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftEllipsis = leftSibling > 2;
  const shouldShowRightEllipsis = rightSibling < totalPages - 1;

  const firstPage = 1;
  const lastPage = totalPages;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = range(1, leftItemCount);
    return [...leftRange, "ellipsis", lastPage];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = range(totalPages - rightItemCount + 1, totalPages);
    return [firstPage, "ellipsis", ...rightRange];
  }

  if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const middleRange = range(leftSibling, rightSibling);
    return [firstPage, "ellipsis", ...middleRange, "ellipsis", lastPage];
  }

  return [];
};

const CustomPagination = ({
  currentPage,
  totalPages,
  siblingCount = 1,
  onPageChange,
}: Props) => {
  const pageNumbers = generatePageNumbers(
    currentPage,
    totalPages,
    siblingCount,
  );

  return (
    <Pagination className="m-0 w-max rounded-md bg-background px-2 py-1">
      <PaginationContent>
        <PaginationItem>
          <Button
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            aria-disabled={currentPage === 1}
            className={cn(
              "size-8",
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer",
            )}
            variant={"outline"}
            size="icon"
          >
            <ChevronLeft />
          </Button>
        </PaginationItem>

        {pageNumbers.map((page, index) =>
          page === "ellipsis" ? (
            <PaginationItem className="size-8" key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page as number);
                }}
                isActive={currentPage === page}
                className={cn(
                  currentPage === page
                    ? cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "hover:text-background",
                      )
                    : buttonVariants({ variant: "outline", size: "sm" }),
                  "cursor-pointer transition-none hover:transition-none",
                )}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
