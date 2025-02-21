// This will be used for pages inside Navbar and Sidebar layout

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; scroll?: boolean };

const PageContentWrapper = ({ children, className, scroll = true }: Props) => {
  return (
    <main className={cn("h-full p-5", className)}>
      {scroll ? <ScrollArea>{children}</ScrollArea> : children}
    </main>
  );
};

export default PageContentWrapper;
