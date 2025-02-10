import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
const documents = [
  {
    title: "Class A 1st semester result",
    date: "04 May, 09:20AM",
  },
  {
    title: "Kelvin college application",
    date: "01 Aug, 04:20PM",
  },
  {
    title: "Class E attendance sheet",
    date: "01 Oct, 08:20AM",
  },
];

export function DocumentsList() {
  return (
    <Card>
      <CardHeader className="mx-2 flex flex-row items-center justify-between space-y-0 border-b-2 border-[#ECECEC] pb-4">
        <CardTitle className="text-base font-normal">Documents</CardTitle>
        <a
          href="#"
          className="text-sm font-semibold text-[#0052B4] hover:underline"
        >
          View all
        </a>
      </CardHeader>
      <CardContent className="space-y-4 p-2">
        {documents.map((doc) => (
          <div
            key={doc.title}
            className="mx-2 flex items-center gap-4 border-b-2 py-[18px] last:border-b-0"
          >
            <div className="rounded-lg">
              <Image src="/assets/svgs/file-docs.svg" alt="File" width={36} height={36} />
              {/* <FileText className="h-4 w-4" /> */}
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{doc.title}</p>
              <p className="text-sm text-muted-foreground">{doc.date}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
