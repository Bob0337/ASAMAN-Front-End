import React, { JSX } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableColumns } from "@/app/(withLayout)/user-management/table_data/columns";
import { Column } from "@/types/interfaces";
import { cn } from "@/lib/utils";

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

const GlobalTable = <T,>({ columns, data }: DataTableProps<T>): JSX.Element => {
  return (
    <div className="rounded-md bg-background p-2">
      <Table>
        <TableHeader>
          <TableRow className="rounded-xl !border-b-0">
            {columns.map((column, index) => (
              <TableHead
                key={index}
                className={cn(`bg-foreground/5 font-semibold text-foreground first:rounded-l-lg last:rounded-r-lg ${column?.align ? `text-${column?.align}` : ""}`)}
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
              <TableCell colSpan={columns.length} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default GlobalTable;
