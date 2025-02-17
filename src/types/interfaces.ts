export interface Column<T> {
  label: string;
  render: (row: T) => React.ReactNode;
  align?: "center" | "right";
}

export enum CommonUserRoles {
  Staff = "Staff",
  CommunicationAdmin = "Communication Admin",
  FinanceAdmin = "Finance Admin",
  ExternalProvider = "External Provider",
  Parent = "Parent",
  Student = "Student",
}

export const AllUserRoles = {
  ...CommonUserRoles,
  SuperAdmin: "superAdmin",
};

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

export interface DynamicFormFieldType {
  name: string;
  type: string;
  label: string;
  options?: string[];
  placeholder?: string;
}
