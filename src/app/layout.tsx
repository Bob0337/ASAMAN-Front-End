import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import { cn } from "@/lib/utils";
import type React from "react";

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
  return (
    <html lang="en" className={cn(poppins.variable, jost.variable)}>
      <body className={cn(poppins.className)}>{children}</body>
    </html>
  );
}
