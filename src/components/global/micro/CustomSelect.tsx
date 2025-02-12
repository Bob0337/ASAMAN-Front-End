"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface TableRowSelectorProps {
    onValueSelect: (value: string) => void;
  defaultValue?: string;
  values: string[];
}

const CustomSelect = ({
  onValueSelect,
  defaultValue = "10",
  values,
}: TableRowSelectorProps) => {
  return (
    <Select onValueChange={onValueSelect}  defaultValue={defaultValue}>
      <SelectTrigger className="w-max min-w-[70px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {values?.map((value) => (
            <SelectItem key={value} value={value.toString()}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
