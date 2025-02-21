"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "./data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, Eye, MoreHorizontal, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { User } from "@/types/interfaces";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusSelect } from "@/components/global/micro/dropdowns/StatusSelector";
import { RoleChip } from "@/components/global/micro/RoleChip";
import Image from "next/image";

export const Columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <span className="flex items-center gap-2">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected()
            //   ||          (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          
        />
        ID
      </span>
    ),
    cell: ({ row }) => (
      <span className="flex items-center gap-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="rounded-md border border-foreground/40 bg-white data-[state=checked]:bg-primary"
        />
        {String(row.original.id).padStart(2, "0")}
      </span>
    ),
    enableSorting: false,
    enableHiding: false,
    maxSize: 100,
  },
  //   {
  //     accessorKey: "id",
  //     header: "ID",
  //   },
  {
    accessorKey: "user",
    header: () => <span className="min-w-[1000px]">User</span>,
    cell: ({ row }) => {
      return (
        <span className="flex items-center gap-1">
          <span>
            <Avatar>
              <AvatarImage src="/assets/svgs/avatar.svg" />
              <AvatarFallback>IM</AvatarFallback>
            </Avatar>
          </span>
          <span className="flex flex-col">
            <span>
              {" "}
              {row.original.firstName} {row.original.lastName}{" "}
            </span>
            <span className="text-muted-foreground">{row.original.email}</span>
          </span>
        </span>
      );
    },
    minSize: 300,
  },
  {
    accessorKey: "activity",
    header: "Activity",
    cell: ({ row }) => {
      return <div>{row.original.activity}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <StatusSelect status={row.original.status} />;
      return <div>{row.original.status}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      return <RoleChip role={row.original.role} />;
    },
    enableSorting: true,
  },
  //   {
  //     accessorKey: "email",
  //     header: ({ column }) => {
  //       return (
  //         <Button
  //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //           className="w-full justify-between"
  //         >
  //           Email <ArrowUpDown />
  //         </Button>
  //       );
  //     },
  //   },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      return (
        <span className="flex items-center gap-2">
          <Button variant={"secondary"} size={"icon"} className="size-8 p-0">
            <Eye className="size-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"secondary"}
                size={"icon"}
                className="h-8 w-8 p-0"
              >
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-muted">
              <DropdownMenuItem className="cursor-pointer hover:bg-accent">
                <Image
                  src={"/icons/svg/pencil.svg"}
                  width={20}
                  height={20}
                  alt="pencil logo"
                />{" "}
                Edit User
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-accent">
                <Image
                  src={"/icons/svg/archive.svg"}
                  width={20}
                  height={20}
                  alt="pencil logo"
                />{" "}
                Archive
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
      );
    },
  },
];
