import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  {
    id: "01",
    title: "Football Matches",
    date: "12 Mar,2025",
  },
  {
    id: "02",
    title: "Table Tennis",
    date: "14 Mar,2025",
  },
  {
    id: "03",
    title: "Kungfu",
    date: "16 Mar,2025",
  },
  {
    id: "04",
    title: "Room Table Tennis",
    date: "18 Mar,2025",
  },
]

export function UpcomingActivities() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-base font-normal">Upcoming Activities</CardTitle>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View all
        </a>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4 bg-[#F0F7FF] p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1895AF] text-white font-medium">
              {activity.id}
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{activity.title}</p>
              <p className="text-sm text-muted-foreground">{activity.date}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

