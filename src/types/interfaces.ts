export interface Column<T> {
  label: string;
  render: (row: T) => React.ReactNode;
  align?: "center" | "right";
}

export enum CommonUserRoles {
  Staff = "Staff",
  CommunicationAdmin = "Communication",
  FinanceAdmin = "Finance",
  ExternalProvider = "External Provider",
  Parent = "Parent",
  Student = "Student",
}

export const AllUserRoles = {
  SuperAdmin : "superAdmin",
  ...CommonUserRoles,
};

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  role: keyof typeof AllUserRoles;
  status: "active" | "inactive" | "pending";
  activity?: string;
}

export interface DynamicFormFieldType {
  name: string;
  type: string;
  label: string;
  options?: string[];
  placeholder?: string;
}
