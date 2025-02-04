"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Class A", value: 4 },
  { name: "Class B", value: 2 },
  { name: "Class C", value: 3.5 },
  { name: "Class D", value: 2.8 },
  { name: "Class E", value: 4.8 },
]

export function AttendanceChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-base font-normal">Attendance</CardTitle>
        <div className="flex gap-2">
          <Select defaultValue="july">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="july">July</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="2024">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
      <ChartContainer className="h-[200px]" config={{}}>
      <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#011892" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#011892" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[0, 5]}
                ticks={[1, 2, 3, 4, 5]}
                tickFormatter={(value: any) => `Week ${value}`}
              />
              <ChartTooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#011892"
                strokeWidth={2}
                fill="url(#colorValue)"
                dot={{
                  stroke: "#011892",
                  strokeWidth: 2,
                  r: 4,
                  fill: "#fff",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

