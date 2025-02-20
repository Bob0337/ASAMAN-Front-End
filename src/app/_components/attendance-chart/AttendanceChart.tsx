// "use client";

import Link from "next/link";
import { students } from "./students";
import Tooltip from "@/components/global/micro/tooltip/Tooltip";
import ProgressBar from "@/components/global/micro/progress-bar/ProgressBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MultiSegmentCircularProgressBar from "@/components/global/micro/multi-segment-circular-progress-bar/MultiSegmentCircularProgressBar";

const StudentProgress = ({
  name,
  percentage,
  color,
  totalStudents,
  presentStudents,
  absentStudent,
}: {
  name: string;
  percentage: number;
  color: string;
  totalStudents: number;
  presentStudents: number;
  absentStudent: number;
}) => (
  <div className="flex items-center space-x-4">
    <div className="w-full flex-col">
      <Tooltip
        content={
          <>
            <div className="flex justify-between gap-10">
              <p>Total Students</p>
              <p>{totalStudents}</p>
            </div>
            <div className="flex justify-between gap-10">
              <p>Present</p>
              <p>{presentStudents}</p>
            </div>
            <div className="flex justify-between gap-10">
              <p>Absent</p>
              <p>{absentStudent}</p>
            </div>
          </>
        }
        position="top"
      >
        <div className="w-full">
          <p className="text-[14px] font-medium text-[#282828]">{name}</p>
          <div className="flex items-center gap-2">
            <ProgressBar
              completed={percentage}
              bgColor={color}
              baseBgColor="#ccc9c9"
            />
            <p className="text-sm text-gray-600">{percentage}%</p>
          </div>
        </div>
      </Tooltip>
    </div>
  </div>
);

export function AttendanceChart() {
  return (
    <Card className="col-span-2 overflow-hidden bg-white p-0">
      <CardHeader className="mx-4 flex flex-row items-center justify-between space-y-0 border-b border-[#ECECEC] px-0 pb-6">
        <CardTitle className="text-base font-normal text-[#000000]">
          Attendance
        </CardTitle>
        <Link href="/" className="text-blue-500 hover:underline">
          View All
        </Link>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row">
          <MultiSegmentCircularProgressBar students={students} />

          <div className="my-4 w-full rounded-lg bg-[#F4F4F4] p-6 pl-4 md:w-[70%]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {students.map((student) => (
                <StudentProgress key={student.id} {...student} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
