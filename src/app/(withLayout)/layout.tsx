import { Navbar } from "@/components/global/layout/navbar/Navbar";
import GLobalSidebar from "@/components/global/layout/sidebar/GlobalSidebar";
import NestedSidebar from "@/components/global/layout/sidebar/NestedSidebar";
import { Sidebar } from "@/components/global/layout/sidebar/SidebarOld/SidebarOld";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <SidebarProvider className="relative col-span-1 h-full w-max">
        <GLobalSidebar />
      </SidebarProvider>
      <SidebarProvider className="2 relative col-span-1 w-0">
        <NestedSidebar />
      </SidebarProvider>
      {/* <SidebarProvider style={{} as Record<string, string>}>
        <GLobalSidebar />
      </SidebarProvider> */}
      {/* <Sidebar /> */}

      {/* Main Content */}

      {/* <SidebarInset> */}
      <div className="flex h-screen w-full flex-1 flex-col overflow-y-hidden bg-[#F5F5FA]">
        <Navbar />
        <main className="w-full flex-grow overflow-y-hidden">{children}</main>
      </div>
      {/* </SidebarInset> */}
    </div>
  );
}
