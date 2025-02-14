import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title: string;
  description?: string;
};

const CustomSheet = ({ children, trigger, title, description }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="flex w-full !max-w-[686px] flex-col pr-0">
        <SheetHeader>
          <SheetTitle>{title} </SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        <ScrollArea className="flex-grow pr-6">{children}</ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
