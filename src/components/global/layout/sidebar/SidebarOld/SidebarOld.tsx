"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useCallback } from "react";
import "./SidebarOld.css"
const sidebarLinks = [
  {
    title: "Dashboard",
    icon: "/assets/svgs/dashboard.svg",
    href: "/dashboard",
  },
  {
    title: "User Management",
    icon: "/assets/svgs/user-management.svg",
    href: "/user-management",
  },
  {
    title: "Activities & Events",
    icon: "/assets/svgs/activities.svg",
    href: "/activities",
  },
  {
    title: "Attendance Tracking",
    icon: "/assets/svgs/attendance.svg",
    href: "/attendance",
  },
  { title: "Payments", icon: "/assets/svgs/payments.svg", href: "/payments" },
  {
    title: "Reporting",
    icon: "/assets/svgs/reporting.svg",
    href: "/reporting",
  },
  {
    title: "Communication",
    icon: "/assets/svgs/communication.svg",
    href: "/communication",
  },
];



export function Sidebar() {

  const [isCollapsed, setIsCollapsed] = useState(false);

  
  const pathname = usePathname();
  const router = useRouter();
  const handleNavigation = useCallback((href: string) => {
    router.push(href);
  }, [router]);
  return (
    <div
      className={cn(
        "relative z-[10] flex h-screen flex-col border-r pt-4",
        isCollapsed ? "w-[80px]" : "w-[240px]",
      )}
    >
      {/* Sidebar Logo */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-center">
          {!isCollapsed && (
            <img
              src="/logo.svg"
              alt="Asaman"
              className="h-[77.3px] w-[183px] cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Sidebar Links */}
      <ScrollArea className="flex-1 pt-4">
        <div className="space-y-2 px-2">
        {sidebarLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className={cn(  
                "sidebar-button group flex w-full items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-[#011892] hover:text-white",
                pathname === link.href
                  ? "active bg-[#011892] text-white"
                  : "text-[#000000]",
                isCollapsed && "justify-center",
              )}
            >
              <ReactSVG
                src={link.icon}
                beforeInjection={(svg) => {
                  svg.classList.add('sidebar-icon');
                  svg.setAttribute('style', 'width: 18px; height: 18px;');
                }}
                className="transition-colors"
              />
              {!isCollapsed && <span>{link.title}</span>}
            </button>
          ))}
        </div>
      </ScrollArea>
      {/* <ScrollArea className="flex-1 pt-4">
        <div className="space-y-2 px-2">
        {sidebarLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className={cn(  
                "group flex w-full items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-[#011892] hover:text-white",
                pathname === link.href
                  ? "bg-[#011892] text-white"
                  : "text-[#000000]",
                isCollapsed && "justify-center",
              )}
            >
              <ReactSVG
                src={link.icon}
                beforeInjection={(svg) => {
                  svg.setAttribute('style', 'width: 18px; height: 18px;');
                }}
                className={cn(
                  "transition-colors",
                  pathname === link.href ? "text-white" : "text-[#000000] group-hover:text-white",
                )}
              />
              {!isCollapsed && <span>{link.title}</span>}
            </button>
            ))}
        </div>
      </ScrollArea> */}

      {/* Logout Button */}
      <div className="mt-auto p-4">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-x-2",
            isCollapsed && "justify-center",
          )}
        >
          <ReactSVG src="/assets/svgs/logout.svg" className="h-5 w-5 " />
          {!isCollapsed && <span>Logout</span>}
        </Button>
      </div>

      {/* Sidebar Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-16 z-[9999] flex items-center justify-center rounded-full border bg-white shadow-lg transition-all"
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          top: "121px",
          left: isCollapsed ? "66px" : "218px",
        }}
      >
        <ReactSVG
          src="/assets/svgs/sidebar-arrow.svg"
          className={cn(
            "h-4 w-4 transition-transform",
            isCollapsed && "rotate-180",
          )}
        />
      </Button>
    </div>
  );
}
