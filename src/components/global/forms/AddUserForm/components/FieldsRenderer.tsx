import React from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { DynamicFormFieldType } from "@/types/interfaces";
import CustomFormField from "../../micro/CustomFormField";
import { Input } from "@/components/ui/input";
import CustomSelect from "@/components/global/micro/CustomSelect";
import { DatePicker } from "@/components/global/micro/inputs/DatePicker";
import ImageUploadDropzone from "@/components/global/micro/inputs/ImageUploadDropzone";

interface FieldsRendererProps {
  fields: DynamicFormFieldType[];
  control: any;
}

const FieldsRenderer = ({ fields, control }: FieldsRendererProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {fields?.map(
        (
          { name, label, type, options, placeholder }: DynamicFormFieldType,
          ind: number,
        ) => (
          <CustomFormField
            name={name}
            control={control}
            label={label}
            key={ind}
            render={({
              field,
            }: {
              field: ControllerRenderProps<FieldValues, any>;
            }) =>
              type === "text" ? (
                <Input
                  placeholder={label?.toLowerCase()}
                  {...field}
                  className="w-full"
                />
              ) : type === "select" ? (
                <CustomSelect
                  values={options as string[]}
                  defaultValue={""}
                  {...(placeholder ? { placeholder } : {})}
                  onValueSelect={field.onChange}
                  value={field.value}
                  className="w-full"
                />
              ) : type === "date" ? (
                <DatePicker date={field.value} setDate={field.onChange} />
              ) : type === "image" ? (
                <ImageUploadDropzone
                  value={field.value as string}
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
        ),
      )}
    </div>
  );
};

export default FieldsRenderer;
