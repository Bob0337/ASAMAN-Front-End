import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className?: string;
  as?: React.ElementType;
};

const Heading = ({ title, className, as: Component = "h3" }: Props) => {
  return (
    <Component
      className={cn(
        "mt-8 scroll-m-20 text-xl font-bold tracking-tight",
        className,
      )}
    >
      {title}
    </Component>
  );
};

export default Heading;
