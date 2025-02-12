"use client";
import React, { JSX, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Column } from "@/types/interfaces";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CustomPagination from "../CustomPagination/CustomPagination";
import CustomSelect from "../CustomSelect";
import TableSkelton from "../Skeltons/TableSkelton";

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
}

const GlobalTable = <T,>({
  columns,
  data,
  isLoading = false,
}: DataTableProps<T>): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="flex flex-1 flex-col gap-5 overflow-hidden">
      <ScrollArea className="">
        <div className="max-h-[5000px]">
          <div className="rounded-md bg-background p-2">
            {isLoading ? (
              <TableSkelton />
            ) : (
              <Table className="text-muted-foreground">
                <TableHeader>
                  <TableRow className="rounded-xl !border-b-0">
                    {columns.map((column, index) => (
                      <TableHead
                        key={index}
                        className={cn(
                          `bg-foreground/5 font-semibold text-foreground first:rounded-l-lg last:rounded-r-lg ${column?.align ? `text-${column?.align}` : ""}`,
                        )}
                      >
                        {column.label}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.length > 0 ? (
                    data.map((row, rowIndex) => (
                      <TableRow key={rowIndex}>
                        {columns.map((column, colIndex) => (
                          <TableCell
                            key={colIndex}
                            className={cn(
                              `${column?.align ? `text-${column?.align}` : ""}`,
                            )}
                          >
                            {column.render(row)}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="text-center"
                      >
                        No data available
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
        <ScrollBar />
      </ScrollArea>
      <div className="flex w-full flex-1 justify-between py-1">
        <div className="flex items-center gap-2">
          Rows:
          <CustomSelect
            values={[10, 25, 50, 75, 100, 200].map(String)}
            defaultValue="10"
            onValueSelect={() => {}}
          />
        </div>

        <CustomPagination
          currentPage={currentPage}
          totalPages={68}
          siblingCount={1}
          onPageChange={(newPage) => setCurrentPage(newPage)}
        />
      </div>
    </div>
  );
};

export default GlobalTable;
