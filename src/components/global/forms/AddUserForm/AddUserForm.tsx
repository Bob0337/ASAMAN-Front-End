"use client";
import { Form } from "@/components/ui/form";
import {
  staffSchema,
  parentSchema,
  studentSchema,
} from "@/validations/ZodSchemas";
import React, { useState, useEffect } from "react";
import { ControllerRenderProps, FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommonUserRoles } from "@/types/interfaces";
import CustomSelect from "../../micro/CustomSelect";
import { cn } from "@/lib/utils";
import CustomFormField from "../micro/CustomFormField";
import { Separator } from "@/components/ui/separator";
import { nonStudentFields } from "./AddUserFormFields";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChildrenSection from "./components/ChildrenSection";
import ParentSection from "./components/ParentSection";
import FieldsRenderer from "./components/FieldsRenderer";
import { FormValues } from "./types";
import LinkParent from "./components/LinkParent";

const defaultValues = {
  role: undefined as CommonUserRoles | undefined,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  image: "",
  parent1: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    image: "",
  },
  parent2: undefined,
  children: [],
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

  const resetForm = (newRole?: CommonUserRoles) => {
    const shouldAddChild = newRole === CommonUserRoles.Student || newRole === CommonUserRoles.Parent;
    form.reset({
      role: newRole ?? role,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      image: "",
      parent1: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        image: "",
      },
      parent2: undefined,
      children: shouldAddChild
        ? [
            {
              firstName: "",
              lastName: "",
              email: "",
              grade: "",
              homeRoom: "",
              dob: "",
              gender: undefined,
              image: "",
            },
          ]
        : [],
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
      resetForm(role);
    }
  }, [role]);

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
          <div className="p-1 flex flex-col gap-2">
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
                <ChildrenSection form={form} />
                <Separator />
                <ParentSection
                  form={form}
                  isLinking
                  linkParentComponent={<LinkParent />}
                />
              </div>
            ) : role === CommonUserRoles.Parent ? (
              <div className="mt-2 flex w-full flex-col gap-4">
                <ParentSection form={form} />
                <Separator className="w-full" />
                <ChildrenSection form={form} />
              </div>
            ) : null}
          </div>
        </ScrollArea>

        <div className="flex justify-center gap-3 pl-1 pr-7">
          <Button
            type="reset"
            className="min-w-48"
            variant={"outline"}
            disabled={isSubmitting}
            onClick={() => resetForm()}
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

export default AddUserForm;
