"use client";

import { Bell, Check, ChevronDown } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

import Image from "next/image";
import { useState } from "react";
import {
  FilterSidebarToggle,
  GlobalSidebarToggle,
} from "../sidebar/SidebarsCombined";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const languages = [
  {
    code: "fr",
    name: "French",
    flag: "assets/svgs/french-flag.svg",
  },

  {
    code: "cn",
    name: "Chinese",
    flag: "assets/svgs/chinese-flag.svg",
  },
  {
    code: "en",
    name: "English",
    flag: "assets/svgs/uk-flag.svg",
  },
];

export function Navbar() {
  const [selectedLang, setSelectedLang] = useState("en");
  const filterSidebarContent = useSelector(
    (state: RootState) => state.sidebar.filterSidebarContent,
  );

  return (
    <div className="h-full max-h-[64px] flex-1 border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage src="assets/svgs/avatar.svg" />
          </Avatar>
          <h1 className="text-lg font-semibold">School Name</h1>
        </div>

        {filterSidebarContent && <FilterSidebarToggle className="ml-2" />}

        <div className="ml-auto flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex h-9 w-[120px] items-center gap-2 bg-accent px-2"
              >
                <div className="flex items-center gap-2">
                  {/* <div className="h-5 w-5 overflow-hidden rounded-full"> */}
                  <Image
                    src={
                      languages.find((l) => l.code === selectedLang)?.flag ||
                      languages[0].flag
                    }
                    alt="Language flag"
                    className="aspect-square rounded-full"
                    width={20}
                    height={20}
                  />
                  {/* </div> */}
                  <span className="text-sm">
                    {languages.find((l) => l.code === selectedLang)?.name}
                  </span>
                  <ChevronDown className="ml-auto h-4 w-4 pt-0.5 opacity-50" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[120px] min-w-min">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className={cn(
                    "flex cursor-pointer items-center py-1 text-sm",
                    selectedLang === lang.code
                      ? "bg-primary/5 text-primary"
                      : "",
                  )}
                  onClick={() => setSelectedLang(lang.code)}
                >
                  {/* <Checkbox
                    checked={selectedLang === lang.code}
                    onCheckedChange={() => setSelectedLang(lang.code)}
                    className="ml-2"
                  /> */}
                  <div className="ml-2 mr-2 h-5 w-5 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={lang.flag || "/placeholder.svg"}
                      alt={`${lang.name} flag`}
                      width={18}
                      height={18}
                    />
                  </div>
                  {lang.name}
                  {selectedLang === lang.code && (
                    <span className="ml-auto mr-2">
                      <Check size={12} />
                    </span>
                  )}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border-2 bg-accent"
          >
            <Image
              src="assets/svgs/sms.svg"
              alt="Messages"
              width={40}
              height={40}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border-2 bg-accent"
          >
            <Bell className="h-5 w-5" />
          </Button>

          <div className="ml-2 flex items-center gap-2">
            <Avatar>
              {/* <AvatarImage /> */}
              <AvatarImage src="assets/svgs/profile.svg" alt="Admin" />
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Admin</p>
              <p className="text-xs leading-none text-muted-foreground">
                admin@school.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
