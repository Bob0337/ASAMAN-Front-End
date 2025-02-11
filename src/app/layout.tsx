"use client";

import { Sidebar } from "@/components/global/layout/sidebar/Sidebar";
import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import { Navbar } from "@/components/global/layout/navbar/Navbar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type React from "react";
import Dashboard from "@/app/_components/Dashboard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html lang="en" className={cn(poppins.variable, jost.variable)}>
      <body className={cn(poppins.className)}>
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

          {/* Main Content */}
          <div className="flex h-screen w-full flex-1 flex-col overflow-y-hidden bg-[#F5F5FA]">
            <Navbar />
            <main className="w-full overflow-y-hidden flex-grow">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
