"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Provider {
  name: string;
  date: string;
}

const PROVIDERS_LIST: Provider[] = [
  { name: "Kristin Watson", date: "04 May, 9:20AM" },
  { name: "Jenny Wilson", date: "01 Aug, 4:20AM" },
  { name: "Kathrin Murphy", date: "04 May, 9:20AM" },
];

const ExternalProviderChart: FC = () => {
  const providers = useMemo(() => PROVIDERS_LIST, []);

  return (
    <Card className="col-span-1 overflow-hidden bg-white">
      <CardHeader className="mx-4 flex flex-row items-center justify-between border-b border-[#ECECEC] pb-6">
        <CardTitle className="text-base font-normal text-black">
          External Provider
        </CardTitle>
        <Link href="/" className="text-blue-500 hover:underline">
          View All
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-6 max-h-[250px] overflow-y-auto">
          {providers.map(({ name, date }, index) => (
            <div key={index} className="flex w-full gap-2">
              <Image
                src="/assets/svgs/avatar.svg"
                width={48}
                height={48}
                alt="provider-avatar"
              />
              <div className="flex flex-col">
                <p className="text-[16px] font-normal">{name}</p>
                <p className="text-[14px] text-gray-500">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExternalProviderChart;
