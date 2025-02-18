import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import CustomAccordion from "@/components/global/micro/CustomAccordion";
import { parent1Fields, parent2Fields } from "../../AddUserFormFields";
import { FormValues } from "../../types";
import ParentTrigger from "./ParentTrigger";
import ParentContent from "./ParentContent";

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

  const parentAccordionItems = [
    {
      value: "parent-1",
      trigger: (
        <ParentTrigger
          title="Parent / Guardian 1 *"
          isLinking={isLinking}
          isLinked={parent1IsLinked}
          onLinkToggle={setParent1IsLinked}
        />
      ),
      content: (
        <ParentContent
          form={form}
          isLinking={isLinking}
          isLinked={parent1IsLinked}
          linkParentComponent={linkParentComponent}
          fields={parent1Fields}
        />
      ),
    },
    {
      value: "parent-2",
      trigger: (
        <ParentTrigger
          title="Parent / Guardian 2"
          isLinking={isLinking}
          isLinked={parent2IsLinked}
          onLinkToggle={setParent2IsLinked}
        />
      ),
      content: (
        <ParentContent
          form={form}
          isLinking={isLinking}
          isLinked={parent2IsLinked}
          linkParentComponent={linkParentComponent}
          fields={parent2Fields}
        />
      ),
    },
  ];

  return (
    <CustomAccordion items={parentAccordionItems} defaultValue="parent-1" />
  );
};

export default ParentSection; 