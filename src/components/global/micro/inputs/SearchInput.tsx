import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

type Props = {
  value?: string;
  setValue?: (str: string) => void;
  onSearchClick?: () => void;
};

const SearchInput = ({ value, setValue, onSearchClick }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Search"
        value={value ?? ""}
        onChange={(e) => setValue && setValue(e?.target?.value?.trim())}
        className="h-8"
      />
      {onSearchClick && (
        <Button className="size-8">
          <Search />
        </Button>
      )}
    </div>
  );
};

export default SearchInput;
