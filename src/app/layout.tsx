"use client"

import { Sidebar } from "@/components/sidebar/Sidebar"
import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar/Navbar"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ReactSVG } from "react-svg"
import { cn } from "@/lib/utils"
import type React from "react" 

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar isCollapsed={isCollapsed} />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1 overflow-y-auto relative z-[1]">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-16 left-[-14px] h-[30px] w-[30px] bg-white z-[9999] border rounded-full shadow-lg flex items-center justify-center"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <ReactSVG
                  src="/assets/svgs/sidebar-arrow.svg"
                  className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")}
                />
              </Button>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

