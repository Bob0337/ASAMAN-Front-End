"use client";
import React from "react";
import PageContentWrapper from "@/components/global/layout/PageContentWrapper";
// import { TableColumns, UsersData } from "./table_data/columnsOld";
import FilterSidebarLayout from "@/components/global/layout/sidebar/FilterSidebarLayout";
import DataTable from "@/components/global/micro/Table/CustomDataTable/DataTable";
import { data } from "./table_data/data";
import { Columns } from "./table_data/columns";

type Props = {};

const page = (props: Props) => {
  return (
    <FilterSidebarLayout
      content={<div className="truncate">User Management</div>}
    >
      <PageContentWrapper scroll={false} className="flex h-full flex-col gap-5">
        {/* <TableFilters>
          <SearchInput />
          <TableFilterDropdown
            label="User"
            values={["String 1", "String 2", "String 3"]}
            align="end"
          />
          <CustomSheet
            title="Add New User"
            description="Easily add and save new user details."
            trigger={
              <Button size="sm">
                Add User <Plus />
              </Button>
            }
          >
            <AddUserForm />
          </CustomSheet>
        </TableFilters> */}

        {/* <GlobalTable columns={TableColumns} data={UsersData} /> */}

        <DataTable data={data} columns={Columns} />
      </PageContentWrapper>
    </FilterSidebarLayout>
  );
};

export default page;
