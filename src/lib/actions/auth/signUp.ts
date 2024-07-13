"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "./appwrite";
import { cookies } from "next/headers";
import { type SignUpSchemaType } from "@/lib/zodSchemas/signUpSchema";

export async function signUp(data: SignUpSchemaType): Promise<any> {
  console.log(data);
  // TODO VALIDATIONS

  try {
    const name = data.firstName + " " + data.lastName;
    const { account } = await createAdminClient();

    const newUser = await account.create(
      ID.unique(),
      data.email,
      data.password,
      name
    );
    const session = await account.createEmailPasswordSession(
      data.email,
      data.password
    );

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    console.log("New user", newUser);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error: any) {
    console.log("ERRROR SIGN UP", error);
    throw new Error(error?.message as string);
  }
}
