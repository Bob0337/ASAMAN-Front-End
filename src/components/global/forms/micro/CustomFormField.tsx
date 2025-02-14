import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";

const CustomFormField = ({
  name,
  control,
  label,
  render,
}: {
  name: string;
  control: any;
  label: string;
  render: any;
}) => {
  return (
    <FormField
      name={name}
      control={control}
      render={(props: {
        field: ControllerRenderProps<FieldValues, string>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<FieldValues>;
      }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{render(props)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
