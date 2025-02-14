import { grades } from "@/data/data";
import { z } from "zod";

const baseSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

const staffSchema = baseSchema;

const parentSchema = z.object({
  parent1: baseSchema,
  parent2: baseSchema.partial().optional(),
  children: z
    .array(
      z.object({
        firstName: z.string().min(2, "First name is required"),
        lastName: z.string().min(2, "Last name is required"),
        email: z.string().email("Invalid email address"),
        dob: z
          .string()
          .refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
        homeRoom: z.enum(grades as [string, ...string[]]),
        gender: z.enum(["male", "female"]),
      }),
    )
    .min(1, "At least one child is required"),
});

const studentSchema = baseSchema.extend({
  dob: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
  grade: z.enum(grades as [string, ...string[]]),
  gender: z.enum(["male", "female"]),
  parent1: baseSchema,
  parent2: baseSchema.partial().optional(),
});

export { baseSchema, staffSchema, parentSchema, studentSchema };
