import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Control,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { Input } from "../ui/input";

export type FormInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = {
  label?: string;
  control: Control<TFieldValues>;
  description?: string;
} & Omit<ControllerProps<TFieldValues, TName>, "render"> & {
    render?: ControllerProps<TFieldValues, TName>["render"];
  } & React.ComponentProps<"input">;

const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  name,
  control,
  description,

  rules,
  shouldUnregister,
  defaultValue,
  disabled,

  type,

  ...restProps
}: FormInputProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ fieldState }) => (
        <FormItem>
          <FormLabel>{label ?? name}</FormLabel>

          <FormControl>
            {type === "password" ? (
              <Input.Password
                isError={fieldState.error != undefined}
                {...restProps}
              />
            ) : (
              <Input isError={fieldState.error != undefined} {...restProps} />
            )}
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
