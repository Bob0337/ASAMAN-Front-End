"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";

interface TableRowSelectorProps
  extends Omit<
    React.ComponentProps<typeof Select>,
    "defaultValue" | "onChange"
  > {
  onValueSelect: (value: string) => void;
  defaultValue?: string;
  values: string[];
  placeholder?: string;
  className?: string;
}

const CustomSelect = ({
  onValueSelect,
  defaultValue = "10",
  values,
  placeholder = "select",
  className,
  ...props
}: TableRowSelectorProps) => {
  return (
    <Select
      onValueChange={onValueSelect}
      defaultValue={defaultValue}
      {...props}
    >
      <SelectTrigger className={cn("", className)}>
        {props.value ? props.value : <SelectValue placeholder={placeholder} />}
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
