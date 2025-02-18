import { grades } from "@/data/data";
import { DynamicFormFieldType } from "@/types/interfaces";

const commonFields: DynamicFormFieldType[] = [
  { name: "firstName", type: "text", label: "First Name" },
  { name: "lastName", type: "text", label: "Last Name" },
  { name: "email", type: "text", label: "Email" },
  { name: "image", type: "image", label: "Upload Photo" },
];

const phoneField: DynamicFormFieldType = {
  name: "phone",
  type: "text",
  label: "Phone Number",
};

export const childFields = [
  { name: "firstName", type: "text", label: "First Name" },
  { name: "lastName", type: "text", label: "Last Name" },
  { name: "email", type: "text", label: "Email" },
  {
    name: "grade",
    type: "select",
    label: "Grade",
    options: grades,
    placeholder: "Select Grade",
  },
  {
    name: "homeRoom",
    type: "select",
    label: "Home Room",
    options: [],
    placeholder: "Select Home Room",
  },
  {
    name: "dob",
    type: "date",
    label: "Date of Birth",
  },
  {
    name: "gender",
    type: "select",
    label: "Gender",
    options: ["boy", "girl"],
    placeholder: "Select Gender",
  },
  { 
    name: "image", 
    type: "image", 
    label: "Upload Photo",
  },
];

export const studentFields = [
  ...commonFields,
  {
    name: "grade",
    type: "select",
    label: "Grade",
    options: grades,
    placeholder: "Select Grade",
  },
  {
    name: "dob",
    type: "date",
    label: "Date of Birth",
  },
  {
    name: "gender",
    type: "select",
    label: "Gender",
    options: ["boy", "girl"],
    placeholder: "Selece Gender",
  },
];

export const parent1Fields: DynamicFormFieldType[] = [
  { name: "parent1.firstName", type: "text", label: "First Name" },
  { name: "parent1.lastName", type: "text", label: "Last Name" },
  { name: "parent1.email", type: "text", label: "Email" },
  { name: "parent1.phone", type: "text", label: "Phone Number" },
  { name: "parent1.image", type: "image", label: "Upload Photo" },
];
export const parent2Fields: DynamicFormFieldType[] = [
  { name: "parent2.firstName", type: "text", label: "First Name" },
  { name: "parent2.lastName", type: "text", label: "Last Name" },
  { name: "parent2.email", type: "text", label: "Email" },
  { name: "parent2.phone", type: "text", label: "Phone Number" },
  { name: "parent2.image", type: "image", label: "Upload Photo" },
];

export const nonStudentFields = [...commonFields, phoneField];
