"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactSVG } from "react-svg"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarLinks = [
    { title: "Dashboard", icon: "/assets/svgs/dashboard.svg", href: "/dashboard" },
    { title: "User Management", icon: "/assets/svgs/user-management.svg", href: "/users" },
    { title: "Activities & Events", icon: "/assets/svgs/activities.svg", href: "/activities" },
    { title: "Attendance Tracking", icon: "/assets/svgs/attendance.svg", href: "/attendance" },
    { title: "Payments", icon: "/assets/svgs/payments.svg", href: "/payments" },
    { title: "Reporting", icon: "/assets/svgs/reporting.svg", href: "/reporting" },
    { title: "Communication", icon: "/assets/svgs/communication.svg", href: "/communication" },
];

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (value: boolean) => void; // Pass state setter to toggle sidebar
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
        const pathname = usePathname();

    return (
        <div className={cn("relative flex flex-col h-screen border-r pt-4 z-[10]", isCollapsed ? "w-[80px]" : "w-[240px]")}>
            {/* Sidebar Logo */}
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
                                "flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg group hover:bg-[#011892] hover:text-white",
                                pathname === link.href ? "bg-[#011892] text-white" : "text-slate-600",
                                isCollapsed && "justify-center",
                            )}
                        >
   <ReactSVG
    src={link.icon}
    className={cn(
        "h-5 w-5 transition-colors text-current",  // This will make the text color inherit from the parent
        pathname === link.href ? "text-white" : "text-black",  // Active color change
        "group-hover:text-white"  // Apply hover effect when hovering over the parent group
    )}
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

            {/* Sidebar Toggle Button */}
            <Button
                variant="ghost"
                size="icon"
                className="fixed top-16 bg-white z-[9999] border rounded-full shadow-lg flex items-center justify-center transition-all"
                onClick={() => setIsCollapsed(!isCollapsed)}
                style={{
                    top: "121px", 
                    left: isCollapsed ? "66px" : "218px", 
                }}
            >
                <ReactSVG
                    src="/assets/svgs/sidebar-arrow.svg"
                    className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")}
                />
            </Button>
        </div>
    );
}
