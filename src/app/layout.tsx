"use client";

import { Sidebar } from "@/components/sidebar/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type React from "react";
import Dashboard from "@/pages/dashboard/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Dashboard children={undefined}/>
      </body>
    </html>
  );
}
