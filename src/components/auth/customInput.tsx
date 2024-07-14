"use client";
// COMPONENTS
import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// OTHERS
import { type SignInSchemaType } from "@/lib/zodSchemas/signInSchema";
import { type SignUpSchemaType } from "@/lib/zodSchemas/signUpSchema";
import type { FieldPath } from "react-hook-form";

interface CustomInputProps {
  name: FieldPath<SignInSchemaType & SignUpSchemaType>;
  label: string;
  control: any;
  placeHolder: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

export function CustomInput({
  name,
  label,
  control,
  placeHolder,
  type,
}: CustomInputProps): JSX.Element {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-gray-600 font-semibold">{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeHolder} {...field} />
          </FormControl>
          <FormMessage className="text-[13px]" />
        </FormItem>
      )}
    />
  );
}
