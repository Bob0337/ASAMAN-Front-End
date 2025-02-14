import RoleChip from "@/components/global/micro/RoleChip";
import { Button } from "@/components/ui/button";
import { User, AllUserRoles, type Column } from "@/types/interfaces";
import { Eye, Pencil, Trash2 } from "lucide-react";

export const UsersData: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: AllUserRoles.SuperAdmin,
    status: "active",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: AllUserRoles.Staff,
    status: "active",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    role: AllUserRoles.CommunicationAdmin,
    status: "inactive",
  },
  {
    id: 4,
    firstName: "Maria",
    lastName: "Rodriguez",
    email: "maria.rodriguez@example.com",
    role: AllUserRoles.FinanceAdmin,
    status: "active",
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Lee",
    email: "david.lee@example.com",
    role: AllUserRoles.ExternalProvider,
    status: "active",
  },
  {
    id: 6,
    firstName: "Emily",
    lastName: "Chen",
    email: "emily.chen@example.com",
    role: AllUserRoles.Parent,
    status: "active",
  },
  {
    id: 7,
    firstName: "Kevin",
    lastName: "White",
    email: "kevin.white@example.com",
    role: AllUserRoles.Student,
    status: "inactive",
  },
  {
    id: 8,
    firstName: "Sarah",
    lastName: "Taylor",
    email: "sarah.taylor@example.com",
    role: AllUserRoles.Staff,
    status: "active",
  },
  {
    id: 9,
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    role: AllUserRoles.CommunicationAdmin,
    status: "active",
  },
  {
    id: 10,
    firstName: "Laura",
    lastName: "Davis",
    email: "laura.davis@example.com",
    role: AllUserRoles.FinanceAdmin,
    status: "active",
  },
];

export const TableColumns: Column<User>[] = [
  {
    label: "#",
    render: (row: User) => row.id + ".",
  },
  {
    label: "First Name",
    render: (row: User) => row.firstName,
  },
  {
    label: "Last Name",
    render: (row: User) => row.lastName,
  },
  {
    label: "Email",
    render: (row: User) => row.email,
  },
  {
    label: "Role",
    render: (row: User) => <RoleChip role={row.role} />,
  },
  {
    label: "Actions",
    render: (row: User) => (
      <div className="flex gap-2">
        <Button size={"icon"} className="size-8" variant={"ghost"}>
          <Pencil size={12} />
        </Button>
        <Button size={"icon"} className="size-8" variant={"ghost"}>
          <Eye size={12} />
        </Button>
        <Button size={"icon"} className="size-8" variant={"ghost"}>
          <Trash2 size={12} />
        </Button>
      </div>
    ),
    align: "right",
  },
];
