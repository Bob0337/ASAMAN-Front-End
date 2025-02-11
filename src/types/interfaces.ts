export interface Column<T> {
  label: string;
  render: (row: T) => React.ReactNode;
  align?: "center" | "right";
}
export enum UserRoles {
    SuperAdmin = "superAdmin",
    Staff = "staff",
    CommunicationAdmin = "communicationAdmin",
    FinanceAdmin = "financeAdmin",
    ExternalProvider = "externalProvider",
    Parent = "parent",
    Student = "student",
  }
  
  export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    status: "active" | "inactive";
  }


