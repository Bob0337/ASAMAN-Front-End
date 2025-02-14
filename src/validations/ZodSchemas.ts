import { grades } from "@/data/data";
import { z } from "zod";

// Allows formats like:
// +1 (123) 456-7890
// +44 7911 123456
// +91 98765 43210
// Spaces, hyphens, and parentheses are allowed
const phoneRegex = /^\+[1-9]{1}[0-9]{0,2}[-\s]?\(?([0-9]{3})\)?[-\s]?([0-9]{3})[-\s]?([0-9]{4})$/;

const baseSchema = z.object({
  role: z.enum(["staff", "communicationAdmin", "financeAdmin", "externalProvider", "parent", "student"]),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

// Staff and admin roles require firstName and email
const staffSchema = baseSchema;

const parentSchema = z.object({
  parent1: baseSchema,
  parent2: baseSchema.partial().optional(),
  children: z.array(z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().optional(),
    email: z.string().optional(),
    grade: z.enum(grades as [string, ...string[]], { errorMap: () => ({ message: "Please select a valid grade" }) }),
    dob: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
    gender: z.enum(["boy", "girl"]).optional(),
  })).min(1, "At least one child is required"),
});

const studentSchema = baseSchema.extend({
  children: z.array(z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().optional(),
    email: z.string().optional(),
    grade: z.enum(grades as [string, ...string[]], { errorMap: () => ({ message: "Please select a valid grade" }) }),
    dob: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
    gender: z.enum(["boy", "girl"]).optional(),
  })).min(1, "At least one child is required"),
  parent1: baseSchema,
  parent2: baseSchema.partial().optional(),
});

export { baseSchema, staffSchema, parentSchema, studentSchema };
