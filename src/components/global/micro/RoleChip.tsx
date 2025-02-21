import { AllUserRoles } from "@/types/interfaces";
import { cva, type VariantProps } from "class-variance-authority";
// import { CommonUserRoles, AllUserRoles } from "@/lib/roles";

const roleVariants = cva(
  "inline-flex items-center rounded-lg px-2 py-1 text-sm font-medium ring-1 ring-inset",
  {
    variants: {
      variant: {
        [AllUserRoles.Staff]: "bg-blue-50 text-blue-400 ring-blue-200/50",
        [AllUserRoles.CommunicationAdmin]:
          "bg-purple-50 text-purple-400 ring-purple-200/50",
        [AllUserRoles.FinanceAdmin]:
          "bg-emerald-50 text-emerald-400 ring-emerald-200/50",
        [AllUserRoles.ExternalProvider]:
          "bg-pink-50 text-pink-400 ring-pink-200/50",
        [AllUserRoles.Parent]: "bg-cyan-50 text-cyan-400 ring-cyan-200/50",
        [AllUserRoles.Student]: "bg-blue-50 text-blue-400 ring-blue-200/50",
        [AllUserRoles.SuperAdmin]:
          "bg-amber-50 text-amber-400 ring-amber-200/50",
      },
    },
  },
);

interface RoleChipProps extends VariantProps<typeof roleVariants> {
  role: keyof typeof AllUserRoles;
}


export function RoleChip({ role }: RoleChipProps) {
  return <span className={roleVariants({ variant: role })}>{role}</span>;
}
