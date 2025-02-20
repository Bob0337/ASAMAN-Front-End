import "./globals.css";
import { Poppins, Jost, Urbanist } from "next/font/google";
import { cn } from "@/lib/utils";
import type React from "react";
import ReduxStoreProvider from "@/store/ReduxStoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(poppins.variable, jost.variable, urbanist.variable)}
    >
      <body className={cn(urbanist.className)}>
        <ReduxStoreProvider>{children}</ReduxStoreProvider>
      </body>
    </html>
  );
}
