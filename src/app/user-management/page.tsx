import React from "react";
import PageContentWrapper from "@/components/global/layout/PageContentWrapper";
import GlobalTable from "@/components/global/micro/Table/GlobalTable";
import TableFilters from "@/components/global/micro/TableFilters";
import { TableColumns, UsersData } from "./table_data/columns";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {};

const page = (props: Props) => {
  return (
    <PageContentWrapper className="flex flex-col gap-5">
      <TableFilters />
      <ScrollArea className="">
        <div className="max-h-[5000px]">
          <GlobalTable columns={TableColumns} data={UsersData} />
        </div>
      </ScrollArea>
      <div>Pagination</div>
    </PageContentWrapper>
  );
};

export default page;
