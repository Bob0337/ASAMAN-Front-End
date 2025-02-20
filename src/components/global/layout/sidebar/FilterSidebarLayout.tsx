"use client";
import {
  setFilterSidebar,
  setFilterSidebarContent,
} from "@/store/slices/sidebar.slice";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

type Props = {
  content: React.ReactNode;
  children?: React.ReactNode;
};

const FilterSidebarLayout = ({ content = null, children = null }: Props) => {
  const dispath = useDispatch();

  const pathname = usePathname();

  console.log(pathname);

  useEffect(() => {
    dispath(setFilterSidebarContent(content));

    return () => {
      dispath(setFilterSidebarContent(null));
      dispath(setFilterSidebar(false));
    };
  }, [content, dispath, pathname]);

  useEffect(() => {
    dispath(setFilterSidebar(false));
  }, [pathname, dispath]);

  return children;
};

export default FilterSidebarLayout;
