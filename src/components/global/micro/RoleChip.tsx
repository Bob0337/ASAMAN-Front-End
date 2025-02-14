import { cn } from "@/lib/utils";
import { AllUserRoles } from "@/types/interfaces";
import { cva } from "class-variance-authority";
import React from "react";

const RoleChip = ({ role }: { role: string }) => {
  const roleType = (role: string) => {
    switch (role) {
      case AllUserRoles.SuperAdmin:
        return "bg-red-400";
      case AllUserRoles.Staff:
        return "bg-staff_bg";
      case AllUserRoles.CommunicationAdmin:
        return "bg-communication_manager_bg";
      case AllUserRoles.FinanceAdmin:
        return "bg-finance_bg";
      case AllUserRoles.ExternalProvider:
        return "bg-external_manager_bg";
      case AllUserRoles.Parent:
        return "bg-parent_bg";
      case AllUserRoles.Student:
        return "bg-student_bg";
    }
  };
  return (
    <span
      className={cn(
        `rounded-full bg-purple-400 px-2 py-1 text-xs text-white`,
        roleType(role),
      )}
    >
      {role.slice(0,1).toUpperCase() + role.slice(1)}
    </span>
  );
};

export default RoleChip;
