"use client"
import React from "react";
import PageContentWrapper from "@/components/global/layout/PageContentWrapper";
import GlobalTable from "@/components/global/micro/Table/GlobalTable";
import TableFilters from "@/components/global/micro/TableFilters";
import { TableColumns, UsersData } from "./table_data/columns";

type Props = {};

const page = (props: Props) => {
  return (
    <PageContentWrapper className="flex flex-col h-full gap-5">
      <TableFilters />

      <GlobalTable columns={TableColumns} data={UsersData} />
    </PageContentWrapper>
  );
};

export default page;
