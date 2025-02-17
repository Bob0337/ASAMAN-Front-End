"use client";
import { Form } from "@/components/ui/form";
import {
  staffSchema,
  parentSchema,
  studentSchema,
} from "@/validations/ZodSchemas";
import React, { useState, useEffect, useMemo } from "react";
import {
  ControllerRenderProps,
  FieldValues,
  useForm,
  useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  childFields,
} from "./AddUserFormFields";
import { Button, buttonVariants } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { homeRoomsByGrade } from "@/data/data";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    homeRoom: string;
    dob: string;
    gender?: "boy" | "girl";
  }[];
  parent1?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  parent2?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
};

const defaultValues = {
  role: undefined as CommonUserRoles | undefined,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  parent1: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  parent2: undefined,
  children: [
    {
      firstName: "",
      lastName: "",
      email: "",
      grade: "",
      homeRoom: "",
      dob: "",
      gender: undefined as "boy" | "girl" | undefined,
    },
  ],
};

const AddUserForm = ({
  className,
  onSuccess,
}: {
  className?: string;
  onSuccess?: () => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSchema, setCurrentSchema] = useState<
    typeof staffSchema | typeof parentSchema | typeof studentSchema
  >(staffSchema);

  const form = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(currentSchema),
    mode: "onChange",
  });

  const role = form.watch("role") as CommonUserRoles | undefined;

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "children",
  });

  const resetForm = () => {
    form.reset({
      role,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      parent1: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      parent2: undefined,
      children: [],
    });
  };

  useEffect(() => {
    if (role) {
      const schema =
        role === CommonUserRoles.Student
          ? studentSchema
          : role === CommonUserRoles.Parent
            ? parentSchema
            : staffSchema;
      setCurrentSchema(schema);

      resetForm();
      if (role === CommonUserRoles.Student || role === CommonUserRoles.Parent) {
        append({
          firstName: "",
          lastName: "",
          email: "",
          grade: "",
          homeRoom: "",
          dob: "",
          gender: undefined,
        });
      }
    }
  }, [role, form, append]);

  const getHomeRoomOptions = useMemo(() => {
    return (grade: string) => {
      return grade ? homeRoomsByGrade[grade] || [] : [];
    };
  }, []);

  const handleSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      console.log(data);
      onSuccess?.();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderChildrenFields = () => (
    <div className="flex w-full flex-col gap-4">
      {fields.map((field, index) => {
        const currentGrade = form.watch(`children.${index}.grade`);

        return (
          <Accordion
            type="single"
            collapsible
            defaultValue={`child-${index}`}
            key={`child-${index}`}
            className="w-full"
          >
            <AccordionItem value={`child-${index}`} className="w-full border-0 mt-2">
              <AccordionTrigger className="flex h-12 w-full flex-grow justify-between rounded-lg bg-foreground/5 px-4 text-sm font-semibold">
                <span className="flex w-full items-center gap-2">
                  <span>Student</span>
                  <span>{index + 1}</span>
                </span>

                {fields.length > 1 && (
                  <span
                    role="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      remove(index);
                    }}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                    )}
                  >
                    <Trash2 className="h-4 w-4" />
                  </span>
                )}
              </AccordionTrigger>
              <AccordionContent className="mt-2 w-full px-1">
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
                                  form.setValue(
                                    `children.${index}.homeRoom`,
                                    "",
                                  );
                                }
                              }}
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
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}

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
          })
        }
      >
        <Plus className="size-6" />
        Add sibling
      </Button>
    </div>
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn(
          "flex h-full flex-col gap-4 overflow-y-hidden",
          className,
        )}
      >
        <ScrollArea className="flex h-max flex-grow flex-col gap-4 pr-6">
          <div className="p-1">
            <CustomFormField
              name="role"
              control={form.control}
              label="Role"
              render={({
                field,
              }: {
                field: ControllerRenderProps<FieldValues, any>;
              }) => (
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

            {role !== CommonUserRoles.Student &&
              role !== CommonUserRoles.Parent && (
                <FieldsRenderer
                  fields={nonStudentFields}
                  control={form.control}
                />
              )}

            {role === CommonUserRoles.Student ? (
              <div className="flex flex-col gap-4">
                {renderChildrenFields()}
                <Separator />
              </div>
            ) : role === CommonUserRoles.Parent ? (
              <div className="mt-2 flex w-full flex-col gap-4">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="parent-1"
                  className="w-full"
                >
                  <AccordionItem value="parent-1" className="w-full border-0">
                    <AccordionTrigger className="flex h-12 w-full flex-grow justify-between rounded-lg bg-foreground/5 px-4 text-sm font-semibold">
                      {" "}
                      Parent / Guardian 1 *
                    </AccordionTrigger>
                    <AccordionContent className="mt-2 w-full px-1">
                      <FieldsRenderer
                        control={form.control}
                        fields={parent1Fields}
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="parent-2" className="w-full border-0">
                    <AccordionTrigger className="mt-2 flex h-12 w-full flex-grow justify-between rounded-lg bg-foreground/5 px-4 text-sm font-semibold">
                      Parent / Guardian 2
                    </AccordionTrigger>
                    <AccordionContent className="w-full px-1">
                      <FieldsRenderer
                        control={form.control}
                        fields={parent2Fields}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Separator className="w-full" />
                {renderChildrenFields()}
              </div>
            ) : null}

            {role === CommonUserRoles.Student && (
              <div className="flex w-full flex-col gap-4">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="parent-1"
                  className="w-full"
                >
                  <AccordionItem value="parent-1" className="w-full border-0">
                    <AccordionTrigger>Parent / Guardian 1 *</AccordionTrigger>
                    <AccordionContent className="w-full px-1">
                      <FieldsRenderer
                        control={form.control}
                        fields={parent1Fields}
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="parent-2" className="w-full border-0">
                    <AccordionTrigger>Parent / Guardian 2</AccordionTrigger>
                    <AccordionContent className="w-full px-1">
                      <FieldsRenderer
                        control={form.control}
                        fields={parent2Fields}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex justify-center gap-3 pl-1 pr-7">
          <Button
            type="reset"
            className="min-w-48"
            variant={"outline"}
            disabled={isSubmitting}
            onClick={resetForm}
          >
            Cancel
          </Button>
          <Button type="submit" className="min-w-48" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Save Info"}
          </Button>
        </div>
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
              ) : (
                <DatePicker date={field.value} setDate={field.onChange} />
              )
            }
          />
        ),
      )}
    </div>
  );
};

export default AddUserForm;
