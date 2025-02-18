import React, { useMemo, useEffect } from "react";
import { ControllerRenderProps, FieldValues, UseFormReturn, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CustomAccordion from "@/components/global/micro/CustomAccordion";
import { Input } from "@/components/ui/input";
import CustomSelect from "@/components/global/micro/CustomSelect";
import { DatePicker } from "@/components/global/micro/inputs/DatePicker";
import CustomFormField from "@/components/global/forms/micro/CustomFormField";
import { childFields } from "../AddUserFormFields";
import { homeRoomsByGrade } from "@/data/data";
import { FormValues } from "../types";
import ImageUploadDropzone from "@/components/global/micro/inputs/ImageUploadDropzone";

interface ChildrenSectionProps {
  form: UseFormReturn<FormValues>;
}

const ChildrenSection = ({ form }: ChildrenSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "children",
  });

  useEffect(() => {
    if (fields.length === 0) {
      append({
        firstName: "",
        lastName: "",
        email: "",
        grade: "",
        homeRoom: "",
        dob: "",
        gender: undefined,
        image: "",
      });
    }
  }, [fields.length, append]);

  const getHomeRoomOptions = useMemo(() => {
    return (grade: string) => {
      return grade ? homeRoomsByGrade[grade] || [] : [];
    };
  }, []);

  const childrenAccordionItems = fields.map((field, index) => {
    const currentGrade = form.watch(`children.${index}.grade`);

    return {
      value: `child-${index}`,
      trigger: (
        <span className="flex w-full items-center gap-2">
          <span>Student</span>
          <span>{index + 1}</span>
        </span>
      ),
      content: (
        <div className="flex w-full flex-col gap-4">
          {childFields.map((childField, fieldIndex) => {
            const options =
              childField.name === "homeRoom"
                ? getHomeRoomOptions(currentGrade)
                : childField.options;

            return (
              <CustomFormField
                key={fieldIndex}
                name={`children.${index}.${childField.name}`}
                control={form.control}
                label={childField.label}
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<FieldValues, any>;
                }) =>
                  childField.type === "text" ? (
                    <Input
                      placeholder={childField.label?.toLowerCase()}
                      {...field}
                      className="w-full"
                    />
                  ) : childField.type === "select" ? (
                    <CustomSelect
                      values={options as string[]}
                      defaultValue={""}
                      {...(childField.placeholder
                        ? { placeholder: childField.placeholder }
                        : {})}
                      onValueSelect={(value) => {
                        field.onChange(value);
                        if (childField.name === "grade") {
                          form.setValue(`children.${index}.homeRoom`, "");
                        }
                      }}
                      value={field.value}
                      className="w-full"
                    />
                  ) : childField.type === "date" ? (
                    <DatePicker
                      date={field.value}
                      setDate={field.onChange}
                    />
                  ) : childField.type === "image" ? (
                    <ImageUploadDropzone
                      value={field.value}
                      onChange={(files: File[]) => {
                        if (files?.[0]) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            field.onChange(reader.result as string);
                          };
                          reader.readAsDataURL(files[0]);
                        } else {
                          field.onChange("");
                        }
                      }}
                    />
                  ) : null
                }
              />
            );
          })}
        </div>
      ),
      onDelete: fields.length > 1 ? () => remove(index) : undefined,
    };
  });

  return (
    <div className="flex w-full flex-col gap-4">
      <CustomAccordion
        items={childrenAccordionItems}
        defaultValue={`child-0`}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="w-full text-primary"
        onClick={() =>
          append({
            firstName: "",
            lastName: "",
            email: "",
            grade: "",
            homeRoom: "",
            dob: "",
            gender: undefined,
            image: "",
          })
        }
      >
        <Plus className="size-6" />
        Add sibling
      </Button>
    </div>
  );
};

export default ChildrenSection; 