import { Navbar } from "@/components/global/layout/navbar/Navbar";
import { Sidebar } from "@/components/global/layout/sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex h-screen w-full flex-1 flex-col overflow-y-hidden bg-[#F5F5FA]">
        <Navbar />
        <main className="w-full flex-grow overflow-y-hidden">{children}</main>
      </div>
    </div>
  );
}
