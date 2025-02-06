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
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h2 className="text-3xl font-bold">{value}</h2>
            <a
              href={link.href}
              className="text-sm text-blue-600 hover:underline"
            >
              {link.text}
            </a>
          </div>
          <div className="h-12 w-12">
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
