"use client";
import React from "react";
import PageContentWrapper from "@/components/global/layout/PageContentWrapper";
import GlobalTable from "@/components/global/micro/Table/GlobalTable";
import TableFilters from "@/components/global/micro/TableFilters";
import { TableColumns, UsersData } from "./table_data/columns";
import SearchInput from "@/components/global/micro/inputs/SearchInput";
import TableFilterDropdown from "@/components/global/micro/dropdowns/TableFilterDropdown";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomSheet from "@/components/global/micro/modals/CustomSheet";
import AddUserForm from "@/components/global/forms/AddUserForm/AddUserForm";
import FilterSidebarLayout from "@/components/global/layout/sidebar/FilterSidebarLayout";

type Props = {};

const page = (props: Props) => {
  return (
    <FilterSidebarLayout
      content={<div className="truncate">
        User Management</div>}
    >
      <PageContentWrapper className="flex h-full flex-col gap-5">
        <TableFilters>
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
        </TableFilters>

        <GlobalTable columns={TableColumns} data={UsersData} />
      </PageContentWrapper>
    </FilterSidebarLayout>
  );
};


export default page;
