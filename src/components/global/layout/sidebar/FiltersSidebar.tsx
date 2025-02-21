"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const NestedSidebar = ({ style }: { style: React.CSSProperties }) => {
  const content = useSelector(
    (state: RootState) => state.sidebar.filterSidebarContent,
  );

  return (
    <Sidebar
      style={style}
      className="relative h-full"
      wrapperClassName="h-auto "
      collapsible="icon"
    >
      <SidebarContent className="!left-0 !top-0">
        <div className="w-full relative">{content}</div>
      </SidebarContent>
    </Sidebar>
  );
};

export default NestedSidebar;
