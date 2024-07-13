// COMPONENTS
import Image from "next/image";

// OTHERS
import React from "react";
import { SignInForm } from "@/components/auth/signInForm";

export default function Page(): JSX.Element {
  return (
    <div className="grid justify-center min-h-screen w-full">
      <div className="mt-32 w-[350px] mx-auto  p-4">
        <div className="flex items-center gap-2  ">
          <div className=" max-md:size-[40px] w-10 h-10 relative  ">
            <Image src={"/icons/logo.svg"} alt="logo" fill></Image>
          </div>
          <h2 className="text-2xl font-bold ">Horizon</h2>
        </div>
        <h1 className="text-2xl font-semibold mt-4">Sign in</h1>
        <p className="text-muted-foreground text-sm">Please enter your details</p>
        <SignInForm />
      </div>
    </div>
  );
}
