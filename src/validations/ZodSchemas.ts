import { grades } from "@/data/data";
import { z } from "zod";

const baseSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  image: z.string().optional(),
});

const roleSchema = z.object({
  role: z.enum(["Staff", "Communication Admin", "Finance Admin", "External Provider", "Parent", "Student"]),
});

const childSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().optional(),
  grade: z.enum(grades as [string, ...string[]], { errorMap: () => ({ message: "Please select a valid grade" }) }),
  homeRoom: z.string().min(1, "Home Room is required"),
  dob: z.date(),
  gender: z.enum(["boy", "girl"]).optional(),
  image: z.string().optional(),
});

const staffSchema = roleSchema.merge(baseSchema);

const parentSchema = roleSchema.extend({
  parent1: baseSchema,
  parent2: baseSchema.partial().optional(),
  children: z.array(childSchema).min(1, "At least one child is required"),
});

const studentSchema = roleSchema.extend({
  children: z.array(childSchema).min(1, "At least one child is required"),
  parent1: baseSchema,
  parent2: baseSchema.partial().optional(),
});

export { baseSchema, staffSchema, parentSchema, studentSchema };
