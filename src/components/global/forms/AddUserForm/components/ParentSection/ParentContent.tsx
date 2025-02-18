import React from "react";
import FieldsRenderer from "../FieldsRenderer";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../../types";
import { parent1Fields, parent2Fields } from "../../AddUserFormFields";

interface ParentContentProps {
  form: UseFormReturn<FormValues>;
  isLinking?: boolean;
  isLinked: boolean;
  linkParentComponent?: React.ReactNode;
  fields: typeof parent1Fields | typeof parent2Fields;
}

const ParentContent = ({
  form,
  isLinking,
  isLinked,
  linkParentComponent,
  fields,
}: ParentContentProps) => {
  if (!isLinking) return <FieldsRenderer control={form.control} fields={fields} />;

  return isLinked ? linkParentComponent : <FieldsRenderer control={form.control} fields={fields} />;
};

export default ParentContent; 