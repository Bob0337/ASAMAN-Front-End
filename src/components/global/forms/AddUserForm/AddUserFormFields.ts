import { grades } from "@/data/data";
import { DynamicFormFieldType } from "@/types/interfaces";

const commonFields: DynamicFormFieldType[] = [
  { name: "firstName", type: "text", label: "First Name" },
  { name: "lastName", type: "text", label: "Last Name" },
  { name: "email", type: "text", label: "Email" },
];

const phoneField: DynamicFormFieldType = {
  name: "phone",
  type: "text",
  label: "Phone Number",
};

export const studentFields = [
  ...commonFields,
  {
    name: "homeRoom",
    type: "select",
    label: "Home Room",
    options: grades,
    placeholder: "Selece Grade",
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
    options: ["male", "female"],
    placeholder: "Selece Gender",
  },
];

export const parent1Fields: DynamicFormFieldType[] = [
  { name: "parent1.firstName", type: "text", label: "First Name" },
  { name: "parent1.lastName", type: "text", label: "Last Name" },
  { name: "parent1.email", type: "text", label: "Email" },
  {
    name: "parent1.phone",
    type: "text",
    label: "Phone Number",
  },
];
export const parent2Fields: DynamicFormFieldType[] = [
  { name: "parent2.firstName", type: "text", label: "First Name" },
  { name: "parent2.lastName", type: "text", label: "Last Name" },
  { name: "parent2.email", type: "text", label: "Email" },
  {
    name: "parent2.phone",
    type: "text",
    label: "Phone Number",
  },
];

export const nonStudentFields = [...commonFields, phoneField];
