import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
  staffSchema,
  parentSchema,
  studentSchema,
} from "@/validations/ZodSchemas";
import React, { useState } from "react";
import { ControllerRenderProps, FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CommonUserRoles, DynamicFormFieldType } from "@/types/interfaces";
import CustomSelect from "../../micro/CustomSelect";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import CustomFormField from "../micro/CustomFormField";
import { DatePicker } from "../../micro/inputs/DatePicker";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  nonStudentFields,
  parent1Fields,
  parent2Fields,
  studentFields,
} from "./AddUserFormFields";
import { Button } from "@/components/ui/button";



const AddUserForm = ({ className }: { className?: string }) => {
  const [role, setRole] = useState<CommonUserRoles>(CommonUserRoles.Staff);

  const schema =
    role === "student"
      ? studentSchema
      : role === "parent"
        ? parentSchema
        : staffSchema;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("flex flex-col gap-2 p-1", className)}
      >
        <FormField
          name="role"
          render={() => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <CustomSelect
                values={Object.values(CommonUserRoles)}
                defaultValue={CommonUserRoles.Staff}
                onValueSelect={(val) => setRole(val as CommonUserRoles)}
                value={role}
              />
            </FormItem>
          )}
        />
        <FieldsRenderer
          fields={role === "student" ? studentFields : nonStudentFields}
          control={form.control}
        />

        <Separator className="my-5" />

        {role === "student" && (
          <Accordion type="single" collapsible defaultValue="parent-1">
            <AccordionItem value="parent-1" className="border-0">
              <AccordionTrigger>Parent / Guardian 1 *</AccordionTrigger>
              <AccordionContent className="px-1">
                <FieldsRenderer control={form.control} fields={parent1Fields} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="parent-2" className="border-0">
              <AccordionTrigger>Parent / Guardian 2</AccordionTrigger>
              <AccordionContent className="px-1">
                <FieldsRenderer control={form.control} fields={parent2Fields} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

const FieldsRenderer = ({
  fields,
  control,
}: {
  fields: DynamicFormFieldType[];
  control: any;
}) => {
  return fields?.map(
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
          field: ControllerRenderProps<FieldValues>;
        }) =>
          type === "text" ? (
            <Input placeholder={label?.toLowerCase()} {...field} />
          ) : type === "select" ? (
            <CustomSelect
              values={options as string[]}
              defaultValue={""}
              {...(placeholder ? { placeholder } : {})}
              onValueSelect={field.onChange}
            />
          ) : (
            <DatePicker date={field.value} setDate={field.onChange} />
          )
        }
      />
    ),
  );
};

export default AddUserForm;
