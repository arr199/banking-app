// OTHERS
import React from "react";
import { SignInForm } from "@/components/auth/signInForm";
import { getLoggedInUser } from "@/lib/actions/auth/appwrite";
import { redirect } from "next/navigation";

export default async function Page(): Promise<JSX.Element> {
  const user = await getLoggedInUser();

  console.log(user);
  if (!user) {
    return <SignInForm />;
  }

  redirect("/");
}
