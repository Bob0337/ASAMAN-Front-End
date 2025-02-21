"use client";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const statusVariants = cva(
  "w-[120px] rounded-lg px-2 text-sm h-8 font-medium transition-colors",
  {
    variants: {
      status: {
        active: "bg-blue-50 text-blue-400 hover:bg-blue-100",
        inactive: "bg-gray-50 text-gray-400 hover:bg-gray-100",
        pending: "bg-amber-50 text-amber-400 hover:bg-amber-100",
      },
    },
  },
);

export type Status = "active" | "inactive" | "pending";

interface StatusSelectProps {
  status: Status;
  onStatusChange?: (value: Status) => void;
}

export function StatusSelect({ status, onStatusChange }: StatusSelectProps) {
  return (
    <Select
      value={status}
      onValueChange={(value) => onStatusChange?.(value as Status)}
    >
      <SelectTrigger className={statusVariants({ status })}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="inactive">Inactive</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
      </SelectContent>
    </Select>
  );
}
