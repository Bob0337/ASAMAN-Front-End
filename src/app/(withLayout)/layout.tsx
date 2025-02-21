import { Navbar } from "@/components/global/layout/navbar/Navbar";
import GLobalSidebar from "@/components/global/layout/sidebar/GlobalSidebar";
import NestedSidebar from "@/components/global/layout/sidebar/FiltersSidebar";
import { Sidebar } from "@/components/global/layout/sidebar/SidebarOld/SidebarOld";
import SidebarsCombined from "@/components/global/layout/sidebar/SidebarsCombined";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <SidebarsCombined>
        {/* <SidebarInset> */}
        <div className="flex h-screen w-full flex-1 flex-col overflow-y-hidden bg-[#F5F5FA] transition-all">
          <Navbar />
          <main className="w-full flex-grow overflow-y-hidden">{children}</main>
        </div>
      </SidebarsCombined>
      {/* </SidebarInset> */}
    </div>
  );
}
