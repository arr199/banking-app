"use client";
// COMPONENTS
import { Input } from "../ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// OTHERS
import { SignInSchemaType } from "@/lib/zodSchemas/signInSchema";
import { Control, FieldPath } from "react-hook-form";

interface CustomInputProps {
  name: FieldPath<SignInSchemaType>;
  label: string;
  control: Control<SignInSchemaType>;
  placeHolder: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

export function CustomInput({ name, label, control, placeHolder, type }: CustomInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-black">{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeHolder} {...field} />
          </FormControl>
          <FormMessage className="text-[13px]" />
        </FormItem>
      )}
    />
  );
}
