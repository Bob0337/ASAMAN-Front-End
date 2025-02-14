import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
  staffSchema,
  parentSchema,
  studentSchema,
} from "@/validations/ZodSchemas";
import React, { useState, useEffect } from "react";
import { ControllerRenderProps, FieldValues, useForm, useFieldArray } from "react-hook-form";
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
  childFields,
} from "./AddUserFormFields";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

type FormValues = {
  role: CommonUserRoles | undefined;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  children: {
    firstName: string;
    lastName: string;
    email: string;
    grade: string;
    dob: string;
    gender?: "boy" | "girl";
  }[];
};

const AddUserForm = ({
  className,
  onSuccess,
}: {
  className?: string;
  onSuccess?: () => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSchema, setCurrentSchema] = useState<typeof staffSchema | typeof parentSchema | typeof studentSchema>(staffSchema);

  const form = useForm<FormValues>({
    defaultValues: {
      role: undefined as CommonUserRoles | undefined,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      children: [],
    },
    resolver: zodResolver(currentSchema),
    mode: "onChange"
  });

  const role = form.watch("role") as CommonUserRoles | undefined;
  
  useEffect(() => {
    if (role) {
      const schema = role === CommonUserRoles.Student
        ? studentSchema
        : role === CommonUserRoles.Parent
          ? parentSchema
          : staffSchema;
      setCurrentSchema(schema);
      form.reset(form.getValues());
    }
  }, [role, form]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "children",
  });

  useEffect(() => {
    if ((role === CommonUserRoles.Student || role === CommonUserRoles.Parent) && fields.length === 0) {
      append({
        firstName: "",
        lastName: "",
        email: "",
        grade: "",
        dob: "",
        gender: undefined
      });
    }
  }, [role, fields.length, append]);

  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (name === "role") {
        form.reset({
          ...form.getValues(),
          role: value.role,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const handleSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      console.log(values);
      // TODO: Add your API call here

      onSuccess?.();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderChildrenFields = () => (
    <div className="flex flex-col gap-4 w-full">
      {fields.map((field, index) => (
        <Accordion type="single" collapsible defaultValue={`child-${index}`} key={field.id} className="w-full">
          <AccordionItem value={`child-${index}`} className="border-0 w-full">
              <AccordionTrigger className="flex-grow w-full flex justify-between">
                <span className="flex items-center gap-2 w-full">
                  <span>
                    Child
                  </span>
                  <span>
                    {index + 1}
                  </span>
                </span>

                {fields.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    onClick={() => remove(index)}
                    className=""
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </AccordionTrigger>
            <AccordionContent className="px-1 w-full">
              <div className="flex flex-col gap-4 w-full">
                {childFields.map((childField, fieldIndex) => (
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
                          values={childField.options as string[]}
                          defaultValue={""}
                          {...(childField.placeholder
                            ? { placeholder: childField.placeholder }
                            : {})}
                          onValueSelect={field.onChange}
                          value={field.value}
                          className="w-full"
                        />
                      ) : (
                        <DatePicker
                          date={field.value}
                          setDate={field.onChange}
                        />
                      )
                    }
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => append({
          firstName: "",
          lastName: "",
          email: "",
          grade: "",
          dob: "",
          gender: undefined
        })}
      >
        Add Another Child <Plus className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("flex flex-col gap-4 p-1", className)}
      >
        <CustomFormField
          name="role"
          control={form.control}
          label="Role"
          render={({ field }: { field: ControllerRenderProps<FieldValues, any> }) => (
            <CustomSelect
              values={Object.values(CommonUserRoles)}
              placeholder="Select Role"
              onValueSelect={field.onChange}
              defaultValue=""
              value={field.value}
              className="w-full"
            />
          )}
        />

        <FieldsRenderer
          fields={nonStudentFields}
          control={form.control}
        />

        {role === CommonUserRoles.Student ? (
          <div className="flex flex-col gap-4">
            {renderChildrenFields()}
            <Separator />
          </div>
        ) : role === CommonUserRoles.Parent ? (
          <div className="flex flex-col gap-4 w-full">
            <Accordion type="single" collapsible defaultValue="parent-1" className="w-full">
              <AccordionItem value="parent-1" className="border-0 w-full">
                <AccordionTrigger>Parent / Guardian 1 *</AccordionTrigger>
                <AccordionContent className="px-1 w-full">
                  <FieldsRenderer control={form.control} fields={parent1Fields} />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="parent-2" className="border-0 w-full">
                <AccordionTrigger>Parent / Guardian 2</AccordionTrigger>
                <AccordionContent className="px-1 w-full">
                  <FieldsRenderer control={form.control} fields={parent2Fields} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Separator className="w-full" />
            {renderChildrenFields()}
          </div>
        ) : null}

        {role === CommonUserRoles.Student && (
          <div className="flex flex-col gap-4 w-full">
            <Accordion type="single" collapsible defaultValue="parent-1" className="w-full">
              <AccordionItem value="parent-1" className="border-0 w-full">
                <AccordionTrigger>Parent / Guardian 1 *</AccordionTrigger>
                <AccordionContent className="px-1 w-full">
                  <FieldsRenderer control={form.control} fields={parent1Fields} />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="parent-2" className="border-0 w-full">
                <AccordionTrigger>Parent / Guardian 2</AccordionTrigger>
                <AccordionContent className="px-1 w-full">
                  <FieldsRenderer control={form.control} fields={parent2Fields} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create User"}
        </Button>
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
  return <div className="flex flex-col gap-4 w-full">
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
          render={({ field }: { field: ControllerRenderProps<FieldValues, any> }) =>
            type === "text" ? (
              <Input placeholder={label?.toLowerCase()} {...field} className="w-full" />
            ) : type === "select" ? (
              <CustomSelect
                values={options as string[]}
                defaultValue={""}
                {...(placeholder ? { placeholder } : {})}
                onValueSelect={field.onChange}
                value={field.value}
                className="w-full"
              />
            ) : (
              <DatePicker
                date={field.value}
                setDate={field.onChange}
              />
            )
          }
        />
      ),
    )}
  </div>
};

export default AddUserForm;
