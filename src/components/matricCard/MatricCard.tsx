import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: string;
  link: {
    text: string;
    href: string;
  };
  className?: string;
}

export function MetricCard({
  title,
  value,
  icon,
  link,
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("transition-shadow hover:shadow-md", className)}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-3 w-full ">
            <p className="text-sm text-[#000000] font-medium  whitespace-nowrap">{title}</p>
            <h2 className="text-[26px] text-[#011892] font-semibold block">{value}</h2>
            <a
              href={link.href}
              className="text-sm text-[#1895AF] hover:underline"
            >
              {link.text}
            </a>
          </div>
          <div className="h-12 w-12 flex-shrink-0">
          <Image
              src={icon || "/placeholder.svg"}
              alt={title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
