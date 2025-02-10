import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const staffMembers = [
  {
    id: "aa",
    name: "Adepoju Ademola",
    message: "Hello, Mr John. I am yet to get your class b res...",
    time: "10:25 am",
    initials: "AA",
  },
  {
    id: "bp",
    name: "Badiru Pomile",
    message: "Please schedule your class test.",
    time: "12:35 pm",
    initials: "BP",
  },
  {
    id: "t",
    name: "Emmanuel John",
    message: "Please resend last session statistic",
    time: "04:30 pm",
    initials: "T",
  },
];

export function StaffList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center mx-2 border-b-2 border-[#ECECEC] justify-between space-y-0 pb-4">
        <CardTitle className="text-base font-normal ">Staff</CardTitle>
        <a href="#" className="text-sm font-semibold text-[#0052B4] hover:underline">
          View all
        </a>
      </CardHeader>
      <CardContent className="space-y-4 p-2">
        {staffMembers.map((staff) => (
          <div key={staff.id} className="flex items-center gap-4 mx-2 border-b-2 last:border-b-0 ">
            <Avatar className="h-10 w-10 bg-blue-100">
              <AvatarFallback className="text-blue-700">
                {staff.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1 py-2 ">
              <p className="text-sm font-medium leading-none">{staff.name}</p>
              <p className="text-sm text-muted-foreground">{staff.message}</p>
            </div>
            <p className="text-sm text-muted-foreground">{staff.time}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
