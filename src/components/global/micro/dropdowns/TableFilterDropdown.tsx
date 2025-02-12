"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";
import SearchInput from "../inputs/SearchInput";

type Checked = DropdownMenuCheckboxItemProps["checked"];

function TableFilterDropdown({
  label,
  values: initValues,
  onChange,
  align = "start",
}: {
  label: string;
  values: string[];
  onChange?: (selected: string[]) => void;
  align?: "center" | "start" | "end";
}) {
  const [listValues, setListValues] = React.useState(initValues);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  function handleCheckedChange(str: string, checked: Checked) {
    if (checked) {
      setSelected((prev) => [...new Set([...prev, str])]);
    } else {
      setSelected((prev) => prev.filter((item) => item !== str));
    }
  }

  function handleSearch(value: string) {
    setValue(value);
    setListValues(() =>
      initValues.filter((str) =>
        str.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size={"sm"}
          variant={selected.length > 0 ? "default" : "outline"}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-between"
        >
          <span className="inline-block max-w-16 flex-grow truncate">
            {selected?.length > 0 ? selected.join(", ") : label}
          </span>

          <span className="flex-1">
            <ChevronDown
              className={`transition ${isOpen ? "rotate-180" : "rotate-0"}`}
            />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="flex w-56 flex-col gap-2"
        onClick={(e) => {
          if ((e.target as HTMLElement)?.tagName !== "BUTTON") setIsOpen(true);
        }}
        align={align}
      >
        <SearchInput value={value} setValue={handleSearch} />
        <ScrollArea className="h-52 overflow-hidden">
          {listValues.map((str, ind) => (
            <DropdownMenuCheckboxItem
              checked={selected.includes(str)}
              onCheckedChange={(value) => handleCheckedChange(str, value)}
              key={ind}
            >
              {str}
            </DropdownMenuCheckboxItem>
          ))}
        </ScrollArea>

        <Button
          className="w-full"
          size={"sm"}
          onClick={() => {
            onChange && onChange(selected);
            setIsOpen(false);
          }}
        >
          Apply
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default TableFilterDropdown;
