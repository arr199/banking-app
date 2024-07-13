"use client";
// COMPONENTS
import { CustomInput } from "./customInput";
import { Form } from "../ui/form";
import Image from "next/image";

// OTHERS
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  signUpSchema,
  type SignUpSchemaType,
} from "@/lib/zodSchemas/signUpSchema";
import { signUp } from "@/lib/actions/auth/signUp";
import { useState } from "react";
import { set } from "zod";
import { Loader } from "lucide-react";

export function SignUpForm(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: SignUpSchemaType): Promise<void> {
    setLoading(true);
    await signUp(data)
      .catch((error) => {
        setServerError(error.message as string);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="mt-2 w-full max-w-[550px] mx-auto p-4 border-1 border-black shadow-container rounded-md">
      <div className="flex items-center gap-2  ">
        <div className=" max-md:size-[40px] w-10 h-10 relative  ">
          <Image src={"/icons/logo.svg"} alt="logo" fill></Image>
        </div>
        <h2 className="text-3xl font-bold ">Horizon</h2>
        <span className="text-red-500">{serverError}</span>
      </div>
      <h1 className="text-2xl font-semibold mt-4">Sign Up</h1>
      <p className="text-muted-foreground text-sm">Please enter your details</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 mt-6  flex flex-col"
        >
          <div className="flex gap-2">
            <CustomInput
              name="firstName"
              label="First Name"
              control={form.control}
              placeHolder="Enter your first name"
            />
            <CustomInput
              name="lastName"
              label="Last Name"
              control={form.control}
              placeHolder="Enter your last name"
            />
          </div>
          <CustomInput
            name="address"
            label="Address"
            control={form.control}
            placeHolder="Enter your specific address"
          />
          <CustomInput
            name="city"
            label="City"
            control={form.control}
            placeHolder="Enter your city"
          />
          <div className="flex gap-2">
            <CustomInput
              name="state"
              label="State"
              control={form.control}
              placeHolder="Example: NY"
            />
            <CustomInput
              name="postalCode"
              label="Postal Code"
              control={form.control}
              placeHolder="Example: 11101"
            />
          </div>
          <div className="flex gap-2">
            <CustomInput
              name="dateOfBirth"
              label="Date of Birth"
              control={form.control}
              placeHolder="YYYY-MM-DD"
            />
            <CustomInput
              name="ssn"
              label="SSN"
              control={form.control}
              placeHolder="Example: 1234"
            />
          </div>
          <CustomInput
            name="email"
            label="Email"
            control={form.control}
            placeHolder="Enter your email"
          />
          <CustomInput
            name="password"
            label="Password"
            control={form.control}
            placeHolder="Enter your password"
          />

          <Button
            disabled={loading}
            type="submit"
            style={{ marginTop: "20px" }}
            className="w-full mt-8"
          >
            {loading ? (
              <div className="flex gap-2 items-center">
                <Loader className="animate-spin"></Loader> Creating Account{" "}
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
          <span>
            Already have an account?{" "}
            <Link
              className="font-bold text-blue-500 hover:underline underline-offset-4"
              href={"/sign-in"}
            >
              Sign In
            </Link>
          </span>
        </form>
      </Form>
    </div>
  );
}
