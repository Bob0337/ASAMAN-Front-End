"use client";

import { Bell, ChevronDown } from "lucide-react";
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

  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center gap-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="assets/svgs/avatar.svg" />
          </Avatar>
          <h1 className="text-xl font-semibold">School Name</h1>
        </div>

        <div className="ml-auto flex items-center gap-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-9 items-center gap-2 px-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-5 w-5 overflow-hidden rounded-full">
                    <Image
                      src={
                        languages.find((l) => l.code === selectedLang)?.flag ||
                        languages[0].flag
                      }
                      alt="Language flag"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="text-sm">
                    {languages.find((l) => l.code === selectedLang)?.name ||
                      "English"}
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[180px] "
            >
              {languages.map((lang) => (
                <div key={lang.code} className="flex items-center gap-4 py-1 cursor-pointer"   onClick={() => setSelectedLang(lang.code)}>
                  {/* <Checkbox
                    checked={selectedLang === lang.code}
                    onCheckedChange={() => setSelectedLang(lang.code)}
                    className="ml-2"
                  /> */}
                  <div className="h-5 w-5 ml-2 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={lang.flag || "/placeholder.svg"}
                      alt={`${lang.name} flag`}
                      width={20}
                      height={20}
                    />
                  </div>
                  {lang.name}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon">
            <Image
              src="assets/svgs/sms.svg"
              alt="Messages"
              width={40}
              height={40}
            />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-auto rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="assets/svgs/profile.svg" alt="Admin" />
                </Avatar>
                <span className="ml-2 text-sm">Admin</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Admin</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admin@school.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
