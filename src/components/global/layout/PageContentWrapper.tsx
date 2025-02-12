// This will be used for pages inside Navbar and Sidebar layout

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

const PageContentWrapper = ({ children, className }: Props) => {
  return <main className={cn("h-full p-5", className)}>{children}</main>;
};

export default PageContentWrapper;
