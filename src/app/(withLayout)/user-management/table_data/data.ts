"use client";
import { AllUserRoles, CommonUserRoles, User } from "@/types/interfaces";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const UserRoles = Object.values(CommonUserRoles) as (keyof typeof AllUserRoles)[];


const activities = ["Hare and Hounds", "Checkers", "Camelot", "Othello"];

export const data: User[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  firstName: "Kevin",
  lastName: "White",
  email: `kevin.white${i}@gmail.com`,
  role: UserRoles[i % UserRoles.length], // Use UserRoles array instead of AllUserRoles
  status: i % 3 === 0 ? "pending" : i % 2 === 0 ? "inactive" : "active",
  activity: activities[i % activities.length],
}));
