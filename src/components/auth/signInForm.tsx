"use client";
// COMPONENTS
import { CustomInput } from "./customInput";
import { Form } from "../ui/form";
import Image from "next/image";
import { Loader } from "lucide-react";

// OTHERS
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInSchema,
  type SignInSchemaType,
} from "@/lib/zodSchemas/signInSchema";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Link from "next/link";
import { signIn } from "@/lib/actions/auth/signIn";
import { useState } from "react";
import { toast } from "sonner";

export function SignInForm(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: SignInSchemaType): Promise<void> {
    setLoading(true);
    try {
      await signIn(data);
    } catch (err: any) {
      toast.error(err?.message as string, {
        position: "top-center",
        duration: 6000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-32  w-full max-w-[450px] mx-auto  p-8  shadow-container rounded-md h-fit ">
      <div className="flex items-center gap-2  ">
        <div className=" max-md:size-[40px] w-10 h-10 relative  ">
          <Image src={"/icons/logo.svg"} alt="logo" fill></Image>
        </div>
        <h2 className="text-3xl font-bold ">Horizon</h2>
      </div>
      <h1 className="text-2xl font-semibold mt-4">Sign in</h1>
      <p className="text-muted-foreground text-sm">Please enter your details</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 mt-6  flex flex-col gap-2 "
        >
          <CustomInput
            name="email"
            label="Email"
            control={form.control}
            placeHolder="example@.com"
          />
          <CustomInput
            name="password"
            label="Password"
            control={form.control}
            placeHolder="********"
            type="password"
          />
          <Button
            disabled={loading}
            type="submit"
            style={{ marginTop: "20px" }}
            className="w-full mt-8"
          >
            {loading ? (
              <div className="relative flex items-center gap-2">
                <Loader className="animate-spin"></Loader>
                Verifying
              </div>
            ) : (
              "Submit"
            )}
          </Button>
          <span>
            Don&apos;t have an account?{" "}
            <Link
              className="font-bold text-blue-500 hover:underline underline-offset-4"
              href={"/sign-up"}
            >
              Sign Up
            </Link>
          </span>
        </form>
      </Form>
    </div>
  );
}
