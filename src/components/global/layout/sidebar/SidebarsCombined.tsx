"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import GLobalSidebar from "./GlobalSidebar";
import NestedSidebar from "./FiltersSidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import {
  setFilterSidebar,
  setGlobalSidebar,
  toggleFilterSidebar,
  toggleGlobalSidebar,
} from "@/store/slices/sidebar.slice";
import { cn } from "@/lib/utils";
import { PanelRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

const SidebarsCombined = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { isGlobalSidebarOpen, isFilterSidebarOpen } = useSelector(
    (state: RootState) => state.sidebar,
  );

  return (
    <>
      <SidebarProvider
        open={isGlobalSidebarOpen}
        onOpenChange={(value) => dispatch(setGlobalSidebar(value))}
        className="relative h-full w-max"
      >
        <GLobalSidebar />
      </SidebarProvider>

      <div className="relative flex flex-grow overflow-x-hidden">
        <SidebarProvider
          open={isFilterSidebarOpen}
          className={`relative ${isFilterSidebarOpen ? "w-max" : "w-max"}`}
          onOpenChange={(value) => dispatch(setFilterSidebar(value))}
          style={
            {
              ["--sidebar-width-icon"]: "0px",
            } as unknown as React.CSSProperties
          }
        >
          <NestedSidebar
            style={
              {
                ["--sidebar-width-icon"]: "0px",
              } as unknown as React.CSSProperties
            }
          />
        </SidebarProvider>
        {children}
      </div>
    </>
  );
};

export const GlobalSidebarToggle = () => {
  const dispatch = useDispatch();

  return (
    <Button
      className="cursor-pointer"
      onClick={() => dispatch(toggleGlobalSidebar())}
    >
      Toggle
    </Button>
  );
};
export const FilterSidebarToggle = ({ className }: { className?: string }) => {
  const dispatch = useDispatch();

  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className={cn("cursor-pointer", className)}
      onClick={() => dispatch(toggleFilterSidebar())}
    >
      <PanelRight />
    </Button>
  );
};

export default SidebarsCombined;
