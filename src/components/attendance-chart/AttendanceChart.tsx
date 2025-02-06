"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";

const data = [
  { name: "Class A", value: 4 },
  { name: "Class B", value: 2 },
  { name: "Class C", value: 3.5 },
  { name: "Class D", value: 2.8 },
  { name: "Class E", value: 4.8 },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Generate years from 1900 to current year + 10
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1900 + 11 }, (_, i) =>
  (1900 + i).toString(),
).reverse();

export function AttendanceChart() {
  const [selectedMonth, setSelectedMonth] = useState("july");
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());

  return (
    <Card className="overflow-hidden bg-white p-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <CardTitle className="text-base font-normal text-[#000000]">
          Attendance
        </CardTitle>
        <div className="flex gap-2">
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="h-7 w-[66px] min-w-[66px]">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem
                  key={month.toLowerCase()}
                  value={month.toLowerCase()}
                >
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="h-7 w-[66px] min-w-[66px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent  className="p-4">
        <div className="h-[250px] w-full min-w-[270px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 20, bottom: 20, left: -30 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#0066FF" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="name"
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                interval={0}
              />
              <YAxis
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[0, 5]}
                ticks={[1, 2, 3, 4, 5]}
                dx={-10}
              />
              <ChartTooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#0066FF"
                strokeWidth={2}
                fill="url(#colorValue)"
                dot={{
                  stroke: "#0066FF",
                  strokeWidth: 2,
                  r: 4,
                  fill: "#fff",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
