"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactSVG } from "react-svg"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarLinks = [
    {
        title: "Dashboard",
        icon: "/assets/svgs/dashboard.svg",  
        href: "/dashboard",
    },
    {
        title: "User Management",
        icon: "/assets/svgs/user-management.svg", 
        href: "/users",
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
    {
        title: "Payments",
        icon: "/assets/svgs/payments.svg", 
        href: "/payments",
    },
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
interface SidebarProps {
    isCollapsed: boolean
  }
  
export function Sidebar({ isCollapsed }: SidebarProps) {
    const pathname = usePathname()
  
    return (
      <div
      className={cn("relative flex flex-col h-screen border-r pt-4 z-[10]", isCollapsed ? "w-[80px]" : "w-[240px]")}
      >
        {/* Logo Section */}
        <div className="px-4 py-2">
          <div className="flex items-center justify-center">
            {!isCollapsed && <img src="/logo.svg" alt="Asaman" className="w-[183px] h-[77.3px]" />}
          </div>
        </div>
  
        {/* Sidebar Links */}
        <ScrollArea className="flex-1 pt-4">
  <div className="space-y-2 px-2">
    {sidebarLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "flex items-center gap-x-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-[#011892] hover:text-white", // Ensure hover text color is white
          pathname === link.href ? "bg-[#011892] text-white" : "text-slate-600", // Apply selected styles
          isCollapsed && "justify-center"
        )}
      >
        <ReactSVG
          src={link.icon}
          className="h-5 w-5"
        //   style={{
        //     fill: pathname === link.href || pathname === link.href ? 'white' : 'currentColor',
        //     stroke: pathname === link.href ? 'white' : 'currentColor', // Ensure stroke color is consistent
        //   }}
        />
        {!isCollapsed && <span>{link.title}</span>}
      </Link>
    ))}
  </div>
</ScrollArea>



  
        {/* Logout Button */}
        <div className="mt-auto p-4">
          <Button variant="ghost" className={cn("w-full justify-start gap-x-2", isCollapsed && "justify-center")}>
            <ReactSVG src="/assets/svgs/logout.svg" className="h-5 w-5" />
            {!isCollapsed && <span>Logout</span>}
          </Button>
        </div>
      </div>
    )
  }
