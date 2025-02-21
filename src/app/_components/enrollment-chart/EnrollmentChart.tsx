"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useMemo } from "react";
import Tooltip from "@/components/global/micro/tooltip/Tooltip";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressBar from "@/components/global/micro/progress-bar/ProgressBar";

interface ClassItem {
  id: number;
  name: string;
  percentage: number;
  color: string;
  totalSlots: number;
  filledSlots: number;
  remainingSlots: number;
}

const CLASSES: ClassItem[] = [
  {
    id: 1,
    name: "Class1",
    percentage: 50,
    color: "#FF6384",
    totalSlots: 15,
    filledSlots: 10,
    remainingSlots: 5,
  },
  {
    id: 2,
    name: "Class2",
    percentage: 40,
    color: "#36A2EB",
    totalSlots: 15,
    filledSlots: 10,
    remainingSlots: 5,
  },
  {
    id: 3,
    name: "Class3",
    percentage: 10,
    color: "#FFCE56",
    totalSlots: 15,
    filledSlots: 10,
    remainingSlots: 5,
  },
];

const EnrollmentChart: FC = () => {
  const classData = useMemo(() => CLASSES, []);

  return (
    <div className="col-span-1 overflow-hidden rounded-lg bg-white p-0">
      <CardHeader className="mx-4 flex flex-row items-center justify-between border-b border-[#ECECEC] px-0 pb-6">
        <CardTitle className="text-base font-normal text-black">
          Enrollment
        </CardTitle>
        <Link href="/" className="text-blue-500 hover:underline">
          View All
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-6 max-h-[200px] overflow-y-auto">
          {classData.map((classItem) => (
            <div key={classItem.id} className="flex w-full gap-2">
              <Image
                src="/assets/svgs/enrollment-card.svg"
                width={48}
                height={48}
                alt="enrollment-card"
              />
              <div className="flex w-full flex-col gap-1 text-[16px]">
                <Tooltip
                  content={
                    <>
                      <div className="flex justify-between gap-10">
                        <p>Total Slots</p>
                        <p>{classItem.totalSlots}</p>
                      </div>
                      <div className="flex justify-between gap-10">
                        <p>Filled Slots</p>
                        <p>{classItem.filledSlots}</p>
                      </div>
                      <div className="flex justify-between gap-10">
                        <p>Remaining slots</p>
                        <p>{classItem.remainingSlots}</p>
                      </div>
                    </>
                  }
                  position="top"
                >
                  <div className="w-full">
                    <p>{classItem.name}</p>
                    <div className="flex items-center gap-2">
                      <ProgressBar
                        completed={classItem.percentage}
                        bgColor={classItem.color}
                        baseBgColor="#ccc9c9"
                      />
                      <p className="text-sm text-gray-600">{`${classItem.percentage}%`}</p>
                    </div>
                  </div>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default EnrollmentChart;
