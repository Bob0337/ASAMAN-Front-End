import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

type Props = {
  value?: string;
  setValue?: (str: string) => void;
  onSearchClick?: () => void;
  className?: string;
};

const SearchInput = ({ value, setValue, onSearchClick, className }: Props) => {
  return (
    <div className={ "flex items-center gap-2 border border-input rounded-md overflow-hidden"}>
      <Input
        placeholder="Search"
        value={value ?? ""}
        onChange={(e) => setValue && setValue(e?.target?.value?.trim())}
        className={cn("h-8  border-0 focus-visible:ring-0 rounded-none", className)}
      />
      {onSearchClick && (
        <Button className="text-foreground/40 size-10" size={"icon"} variant={"ghost"} onClick={onSearchClick}>
          <Search className="!size-5" />
        </Button>
      )}
    </div>
  );
};

export default SearchInput;
