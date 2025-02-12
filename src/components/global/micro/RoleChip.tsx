import { cn } from "@/lib/utils";
import { UserRoles } from "@/types/interfaces";
import { cva } from "class-variance-authority";
import React from "react";

const RoleChip = ({ role }: { role: string }) => {
  const roleType = (role: string) => {
    switch (role) {
      case UserRoles.SuperAdmin:
        return "bg-red-400";
      case UserRoles.Staff:
        return "bg-staff_bg";
      case UserRoles.CommunicationAdmin:
        return "bg-communication_manager_bg";
      case UserRoles.FinanceAdmin:
        return "bg-finance_bg";
      case UserRoles.ExternalProvider:
        return "bg-external_manager_bg";
      case UserRoles.Parent:
        return "bg-parent_bg";
      case UserRoles.Student:
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
