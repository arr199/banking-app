"use client";
// COMPONENTS
import { CustomInput } from "./customInput";
import { Form } from "../ui/form";

// OTHERS
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInSchemaType } from "@/lib/zodSchemas/signInSchema";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

export function SignInForm(): JSX.Element {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(): any {
    console.log("Submiting");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 mt-6  flex flex-col gap-2 ">
        <CustomInput name="email" label="Email" control={form.control} placeHolder="example@.com" />
        <CustomInput name="password" label="Password" control={form.control} placeHolder="********" type="password" />
        <Button type="submit" style={{ marginTop: "20px" }} className="w-full mt-8">
          Submit
        </Button>
      </form>
    </Form>
  );
}
