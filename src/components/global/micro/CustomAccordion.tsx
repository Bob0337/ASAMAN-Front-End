import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface CustomAccordionProps {
  items: {
    value: string;
    trigger: React.ReactNode | string;
    content: React.ReactNode;
    onDelete?: () => void;
  }[];
  defaultValue?: string;
  className?: string;
  type?: "single" | "multiple";
  collapsible?: boolean;
}

const CustomAccordion = ({
  items,
  defaultValue,
  className,
  type = "single",
  collapsible = true,
}: CustomAccordionProps) => {
  return (
    <Accordion
      type={type as "single"}
      collapsible={collapsible}
      defaultValue={defaultValue}
      className={cn("w-full", className)}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="w-full border-0 mt-2"
        >
          <AccordionTrigger className="flex h-12 w-full flex-grow justify-between rounded-lg bg-foreground/5 px-4 text-sm font-semibold">
            {item.trigger}
            {item.onDelete && (
              <span
                role="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (item.onDelete) {
                    item.onDelete();
                  }
                }}
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
              >
                <Trash2 className="h-4 w-4" />
              </span>
            )}
          </AccordionTrigger>
          <AccordionContent className="mt-2 w-full px-1">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion; 