import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import Image from "next/image";
import React, { useState } from "react";
import CustomPagination from "../../CustomPagination/CustomPagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TDate, TValue>({
  data,
  columns,
}: DataTableProps<TDate, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting: sorting,
      columnVisibility: columnVisibility,
    },
  });

  const selectedRows = table.getSelectedRowModel()?.rows?.length;

  return (
    <div className="flex h-full flex-col rounded-md">
      <div className="flex w-full flex-1 items-center justify-between bg-muted px-4 py-2 text-sm">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            id="select-all-topbar"
            onCheckedChange={(val) => table.toggleAllRowsSelected(Boolean(val))}
          />

          <Label htmlFor="select-all-topbar">Select All Rows</Label>

          <p className="ml-10">
            {selectedRows} {selectedRows <= 1 ? "Row" : "Rows"} Selected
          </p>
        </div>
        <div>
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => (
              <Checkbox
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={(val) => column.toggleVisibility(Boolean(val))}
              />
            ))}
        </div>
        <Button variant={"ghost"}>
          Archive{" "}
          <Image
            src="/icons/svg/archive.svg"
            width="20"
            height={20}
            alt="archive logo"
          />{" "}
        </Button>
      </div>

      <ScrollArea className="overflow-hidden rounded-md">
        <div className="flex-grow rounded-md border bg-background">
          <Table>
            <TableHeader className="bg-accent/50">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        style={
                          cell.column.getSize()
                            ? {
                                width: `${cell.column.getSize()}px`,
                              }
                            : {}
                        }
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="pagination mt-2 flex justify-center items-center">
        <CustomPagination
          currentPage={5}
          totalPages={20}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
}

export default DataTable;
