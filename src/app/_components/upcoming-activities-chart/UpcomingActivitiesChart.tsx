"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Activity {
  name: string;
  date: string;
}

const UPCOMING_ACTIVITIES: Activity[] = [
  { name: "Swimming", date: "04 May, 9:20AM" },
  { name: "Robotics and Coding", date: "01 Aug, 4:20AM" },
  { name: "Drama & Theater", date: "04 May, 9:20AM" },
];

const UpcomingActivitiesChart: FC = () => {
  const activities = useMemo(() => UPCOMING_ACTIVITIES, []);

  return (
    <Card className="col-span-1 overflow-hidden rounded-lg bg-white">
      <CardHeader className="mx-4 flex flex-row items-center justify-between border-b border-[#ECECEC] pb-6">
        <CardTitle className="text-base font-normal text-black">
          Upcoming Activities
        </CardTitle>
        <Link href="/" className="text-blue-500 hover:underline">
          View All
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-6 max-h-[250px] overflow-y-auto">
          {activities.map(({ name, date }, index) => (
            <div key={index} className="flex w-full gap-2">
              <Image
                src="/assets/svgs/enrollment-card.svg"
                width={48}
                height={48}
                alt="activity-icon"
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

export default UpcomingActivitiesChart;
