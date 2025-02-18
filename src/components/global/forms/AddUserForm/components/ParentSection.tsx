import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import CustomAccordion from "@/components/global/micro/CustomAccordion";
import { parent1Fields, parent2Fields } from "../AddUserFormFields";
import FieldsRenderer from "./FieldsRenderer";
import { FormValues } from "../types";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ParentSectionProps {
  form: UseFormReturn<FormValues>;
  isLinking?: boolean;
  linkParentComponent?: React.ReactNode;
}

const ParentSection = ({
  form,
  isLinking,
  linkParentComponent,
}: ParentSectionProps) => {
  const [parent1IsLinked, setParent1IsLinked] = useState(false);
  const [parent2IsLinked, setParent2IsLinked] = useState(false);

  const renderParentContent = (
    isLinked: boolean,
    fields: typeof parent1Fields | typeof parent2Fields
  ) => {
    if (!isLinking) return <FieldsRenderer control={form.control} fields={fields} />;

    return isLinked ? linkParentComponent : <FieldsRenderer control={form.control} fields={fields} />;
  };

  const renderTriggerContent = (
    title: string,
    isLinked: boolean,
    setIsLinked: (value: boolean) => void
  ) => (
    <div className="flex w-full items-center justify-between">
      <span>{title}</span>
      {isLinking && (
        <span

          onClick={(e) => {
            e.stopPropagation();
            setIsLinked(!isLinked);
          }}
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-2 hover:bg-background/10", {
            "text-primary": isLinked,
          })}
        >
          {isLinked ? (
            <>
              <UserPlus className="h-4 w-4" />
              Add Manually
            </>
          ) : (
            <>
              <Link className="h-4 w-4" />
              Link Parent
            </>
          )}
        </span>
      )}
    </div>
  );

  const parentAccordionItems = [
    {
      value: "parent-1",
      trigger: renderTriggerContent(
        "Parent / Guardian 1 *",
        parent1IsLinked,
        setParent1IsLinked
      ),
      content: renderParentContent(parent1IsLinked, parent1Fields),
    },
    {
      value: "parent-2",
      trigger: renderTriggerContent(
        "Parent / Guardian 2",
        parent2IsLinked,
        setParent2IsLinked
      ),
      content: renderParentContent(parent2IsLinked, parent2Fields),
    },
  ];

  return (
    <CustomAccordion items={parentAccordionItems} defaultValue="parent-1" />
  );
};

export default ParentSection;
