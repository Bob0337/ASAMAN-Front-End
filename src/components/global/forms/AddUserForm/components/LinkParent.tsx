import SearchInput from "@/components/global/micro/inputs/SearchInput";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit2, UserX } from "lucide-react";
import React, { useState } from "react";

type Parent = {
  name: string;
  email: string;
};

const parents = [
  { name: "John Doe", email: "john.doe@example.com" },
  { name: "Jane Doe", email: "jane.doe@example.com" },
  { name: "Bob Smith", email: "bob.smith@example.com" },
];

const LinkParent = () => {
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null);

  const handleLinkParent = (parent: Parent) => {
    setSelectedParent(parent);
  };

  const handleUnlinkParent = () => {
    setSelectedParent(null);
  };

  if (selectedParent) {
    return (
      <div className="rounded-lg border p-4">
        <div className="flex items-center justify-between rounded-lg border bg-muted/30 p-4">
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium">{selectedParent.name}</div>
            <div className="text-xs text-muted-foreground">
              {selectedParent.email}
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setSelectedParent(null)}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-destructive hover:text-destructive"
              onClick={handleUnlinkParent}
            >
              <UserX className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border p-4">
      <SearchInput onSearchClick={() => {}} />
      <div className="mt-4 rounded-lg border">
        <div className="bg-foreground/5 p-4 text-xs text-foreground/70">
          Parent
        </div>
        <div className="relative h-48 overflow-y-hidden">
          <ScrollArea className="h-full">
            {parents.map((parent) => (
              <div
                key={parent.email}
                className="flex cursor-pointer justify-between border-b p-4 hover:bg-foreground/5"
              >
                <div className="flex flex-col gap-1">
                  <div className="text-sm">{parent.name}</div>
                  <div className="text-xs text-foreground/50">
                    {parent.email}
                  </div>
                </div>
                <Button
                  variant={"ghostLinkBtn"}
                  onClick={() => handleLinkParent(parent)}
                >
                  Link Parent
                </Button>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default LinkParent;
