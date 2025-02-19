import { CommonUserRoles } from "@/types/interfaces";

export type FormValues = {
  role: CommonUserRoles | undefined;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image?: string;
  children: {
    firstName: string;
    lastName: string;
    email: string;
    grade: string;
    homeRoom: string;
    dob: string;
    gender?: "boy" | "girl";
    image?: string;
  }[];
  parent1?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    image?: string;
  };
  parent2?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    image?: string;
  };
}; 