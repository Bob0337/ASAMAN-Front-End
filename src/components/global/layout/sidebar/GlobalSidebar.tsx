"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  CalendarCheck2,
  IdCard,
  LayoutDashboard,
  LogOut,
  MessagesSquare,
  SquareActivity,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sidebarLinks = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "User Management",
    icon: UsersRound,
    href: "/user-management",
  },
  {
    title: "Activities & Events",
    icon: SquareActivity,
    href: "/activities",
  },
  {
    title: "Attendance Tracking",
    icon: CalendarCheck2,
    href: "/attendance",
  },
  // { title: "Payments", icon: "/assets/svgs/payments.svg", href: "/payments" },
  {
    title: "Reporting",
    icon: IdCard,
    href: "/reporting",
  },
  {
    title: "Communication",
    icon: MessagesSquare,
    href: "/communication",
  },
];

const GLobalSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="z-50">
      <SidebarHeader className="relative bg-background">
        <div className="relative flex h-[46px] justify-start">
          <Image src="/logo.svg" fill alt="Asaman Logo" className="!w-max" />
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="bg-background p-2 pt-4 text-muted-foreground">
        <SidebarMenu>
          {sidebarLinks.map(({ title, icon: Icon, href }, ind) => (
            <SidebarMenuItem className="" key={ind}>
              <SidebarMenuButton
                tooltip={title}
                className={cn(
                  "h-10 gap-4 transition-all",
                  href === pathname
                    ? "bg-primary text-white hover:bg-primary/90 hover:text-white"
                    : "",
                )}
                asChild
              >
                <Link href={href} prefetch>
                  <Icon
                    className="!size-5 group-data-[collapsible=icon]:!size-4"
                    {...(href === pathname ? { color: "white" } : {})}
                  />{" "}
                  {title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter className="bg-background">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="justify-center text-destructive hover:text-destructive/90">
              <LogOut className="rotate-180" /> Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default GLobalSidebar;
