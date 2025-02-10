"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";

const activities = [
  { name: "Activity 1", enrollment: "15 enrollment", progress: 32 },
  { name: "Activity 2", enrollment: "20 enrollment", progress: 43 },
  { name: "Activity 3", enrollment: "12 enrollment", progress: 67 },
  { name: "Class D", enrollment: "14 enrollment", progress: 56 },
];

export function ActivityEnrollment() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-base font-normal">
          Activity Enrollment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-2">
        <ScrollArea className="h-[300px] w-full rounded-lg border border-gray-200 bg-gray-50">
          {activities.map((activity) => (
            <div
              key={activity.name}
              className="mt-4 space-y-2 rounded-lg bg-[#F0F7FF] p-4"
            >
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium leading-none">{activity.name}</p>
                  <p className="text-muted-foreground">{activity.enrollment}</p>
                </div>
                <div className="relative flex h-14 w-14 items-center justify-center">
                  <svg className="h-14 w-14 -rotate-90 transform">
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      stroke="#eee"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      stroke="#2563eb"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${activity.progress * 1.51} 151`}
                    />
                  </svg>
                  <span className="absolute text-sm font-bold">
                    {activity.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
