// COMPONENTS
import { SignUpForm } from "@/components/auth/signUpForm";

// OTHERS
import React from "react";
import { getLoggedInUser } from "@/lib/actions/auth/appwrite";
import { redirect } from "next/navigation";

export default async function Page(): Promise<JSX.Element> {
  const user = await getLoggedInUser();
  if (!user) {
    return (
      <div className=" flex justify-between h-full lg:h-screen lg:overflow-hidden ">
        <SignUpForm />
        <div className=" max-lg:hidden bg-blue-50 flex items-center justify-end w-[50%]">
          <img className="pl-10" alt="home page" src="/icons/auth-image.svg" />
        </div>
      </div>
    );
  }

  redirect("/");
}
