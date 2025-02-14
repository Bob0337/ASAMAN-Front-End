"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Plus, SlidersHorizontal } from "lucide-react";
import React, { ReactElement, ReactNode, useState } from "react";
import TableFilterDropdown from "./dropdowns/TableFilterDropdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchInput from "./inputs/SearchInput";

type Props = { children?: ReactNode };

type TabsType = "filter" | "advance" | "";

const TableFilters = ({children}: Props) => {
  const [seletedTab, setSeletedTab] = useState<TabsType>("");

  return (
    <Tabs
      className="flex flex-col gap-2"
      onValueChange={(value) => setSeletedTab(value as TabsType)}
      value={seletedTab}
    >
      <div className="flex gap-2">
        <Button
          size={"sm"}
          onClick={() => setSeletedTab("filter")}
          variant={seletedTab === "filter" ? "default" : "outline"}
        >
          Filters <SlidersHorizontal />
        </Button>

        <Button
          size={"sm"}
          onClick={() => setSeletedTab("advance")}
          variant={seletedTab === "advance" ? "default" : "outline"}
        >
          Advance Filter <SlidersHorizontal />
        </Button>

        <div className="ml-auto flex gap-2">
          {children}
        </div>
      </div>
      <TabsContent value="filter" className="flex gap-2">
        <TableFilterDropdown
          label="Group"
          values={[
            "value1",
            "value2",
            "value3",
            "value4",
            "value5",
            "value6",
            "value7",
            "value8",
            "value9",
            "value10",
            "value11",
            "value12",
          ]}
          onChange={(values) => console.log("changed", values)}
        />
        <TableFilterDropdown
          label="Activity"
          values={[
            "value1",
            "value2",
            "value3",
            "value4",
            "value5",
            "value6",
            "value7",
            "value8",
            "value9",
            "value10",
            "value11",
            "value12",
          ]}
          onChange={(values) => console.log("changed", values)}
        />
        <TableFilterDropdown
          label="Staff"
          values={[
            "value1",
            "value2",
            "value3",
            "value4",
            "value5",
            "value6",
            "value7",
            "value8",
            "value9",
            "value10",
            "value11",
            "value12",
          ]}
          onChange={(values) => console.log("changed", values)}
        />
        <TableFilterDropdown
          label="Grade"
          values={[
            "value1",
            "value2",
            "value3",
            "value4",
            "value5",
            "value6",
            "value7",
            "value8",
            "value9",
            "value10",
            "value11",
            "value12",
          ]}
          onChange={(values) => console.log("changed", values)}
        />
        <TableFilterDropdown
          label="Home Room"
          values={[
            "value1",
            "value2",
            "value3",
            "value4",
            "value5",
            "value6",
            "value7",
            "value8",
            "value9",
            "value10",
            "value11",
            "value12",
          ]}
          onChange={(values) => console.log("changed", values)}
        />
      </TabsContent>
      <TabsContent value="advance">Advance</TabsContent>
    </Tabs>
  );
};

export default TableFilters;
