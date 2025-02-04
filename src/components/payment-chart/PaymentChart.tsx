"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Bar, Line, ComposedChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Activity 1", amount: 2000, avg: 3000 },
  { name: "Activity 2", amount: 3000, avg: 3000 },
  { name: "Activity 3", amount: 4000, avg: 3000 },
  { name: "Activity 4", amount: 2500, avg: 3000 },
  { name: "Activity 5", amount: 5000, avg: 3000 },
]

export function PaymentChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-base font-normal">Payment Statistic</CardTitle>
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
      <ComposedChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
      <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value: any) => `¥${value}`}
                domain={[0, 6000]}
                ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]}
              />
              <ChartTooltip />
              <Bar dataKey="amount" fill="#0EA5E9" radius={[4, 4, 0, 0]} barSize={40} />
              <Line type="monotone" dataKey="avg" stroke="#FFFFFF" strokeWidth={2} dot={false} name="Avg Payment" />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
          <span className="mr-2 h-2 w-2 rounded-full bg-[#0EA5E9]" />
          Avg no payment: ¥5500
        </div>
      </CardContent>
    </Card>
  )
}

