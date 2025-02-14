export interface Column<T> {
  label: string;
  render: (row: T) => React.ReactNode;
  align?: "center" | "right";
}

export enum CommonUserRoles {
  Staff = "staff",
  CommunicationAdmin = "communicationAdmin",
  FinanceAdmin = "financeAdmin",
  ExternalProvider = "externalProvider",
  Parent = "parent",
  Student = "student",
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
