// COMPONENTS
import { SignUpForm } from "@/components/auth/signUpForm";

// OTHERS
import React from "react";
import { getLoggedInUser } from "@/lib/actions/auth/appwrite";
import { redirect } from "next/navigation";

export default async function Page(): Promise<JSX.Element> {
  const user = await getLoggedInUser();
  if (!user) {
    return <SignUpForm />;
  }

  redirect("/");
}
