import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card
      className={cn(
        "rounded-[16px] shadow-[0_4px_6px_rgba(124,139,157,0.09)] hover:shadow-md",
        className,
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="h-12 w-12 flex-shrink-0 rounded-full p-[10px] shadow-[0px_4px_37px_0px_rgba(124,139,157,0.16)]">
            <Image
              src={icon || "/placeholder.svg"}
              alt={title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="w-full">
            <p className="whitespace-nowrap text-[16px] text-sm font-medium text-[#757575]">
              {title}
            </p>
            <h2 className="block text-[32px] font-semibold text-[#000]">
              {value}
            </h2>
            <a
              href={link.href}
              className="text-[16px] text-[#3B82F6] hover:underline"
            >
              {link.text}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
