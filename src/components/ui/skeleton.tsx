import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
    className={cn(
      "animate-shimmer bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent",
      className,
    )}
    style={{
      backgroundSize: "200% 100%",
      backgroundPositionX: "100%",
    }}
      {...props}
    />
  );
}

export { Skeleton };
