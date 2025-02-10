"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bar,
  Line,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";
import { Tooltip } from "recharts";

const data = [
  { name: "Activity 1", amount: 2000, avg: 1000 },
  { name: "Activity 2", amount: 2800, avg: 2500 },
  { name: "Activity 3", amount: 4000, avg: 3000 },
  { name: "Activity 4", amount: 2500, avg: 3200 },
  { name: "Activity 5", amount: 5000, avg: 3500 },
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

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1900 + 11 }, (_, i) =>
  (1900 + i).toString(),
).reverse();

export function PaymentChart() {
  const [selectedMonth, setSelectedMonth] = useState("july");
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());

  return (
    <Card className="overflow-hidden bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
        <CardTitle className="text-base font-normal">
          Payment Statistic
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
      <div className="flex items-center justify-end gap-2 p-2 text-sm text-gray-500">
        <div className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
        <span>Avg no payment: ¥5500</span>
      </div>
      <CardContent className="pb-6">
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 10, right: 20, bottom: 20, left: -30 }}
            >
              <XAxis
                dataKey="name"
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                //  interval={0}
              />
              <YAxis
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `¥${value}`}
                domain={[0, 6000]}
                ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]}
              />
              <Bar
                dataKey="amount"
                fill="#0EA5E9"
                radius={[4, 4, 0, 0]}
                barSize={40}
              />
              <Line
                type="monotone"
                dataKey="avg"
                stroke="#FFFFFF"
                strokeWidth={2}
                dot={{
                  stroke: "#FFFFFF",
                  strokeWidth: 2,
                  r: 4,
                  fill: "#0EA5E9",
                }}
              />
              <Tooltip
                cursor={false}
                content={({ payload }) => {
                  if (payload && payload.length) {
                    const { name, amount, avg } = payload[0].payload;
                    return (
                      <div
                        style={{
                          backgroundColor: "#F3F4F6",
                          padding: "10px",
                          borderRadius: "4px",
                        }}
                      >
                        <strong>{name}</strong>
                        <br />
                        <span>Amount: ¥{amount}</span>
                        <br />
                        <span>Avg Payment: ¥{avg}</span>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
