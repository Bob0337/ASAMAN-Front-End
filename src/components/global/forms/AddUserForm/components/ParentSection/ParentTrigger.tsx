import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Link, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ParentTriggerProps {
  title: string;
  isLinking?: boolean;
  isLinked: boolean;
  onLinkToggle: (value: boolean) => void;
}

const ParentTrigger = ({
  title,
  isLinking,
  isLinked,
  onLinkToggle,
}: ParentTriggerProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      <span>{title}</span>
      {isLinking && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            onLinkToggle(!isLinked);
          }}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "gap-2 hover:bg-background/10",
            {
              "text-primary": isLinked,
            }
          )}
        >
          {isLinked ? (
            <>
              <UserPlus className="h-4 w-4" />
              Add Manually
            </>
          ) : (
            <>
              <Link className="h-4 w-4" />
              Link Parent
            </>
          )}
        </span>
      )}
    </div>
  );
};

export default ParentTrigger; 