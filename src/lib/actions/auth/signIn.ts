"use server";

import { type SignInSchemaType } from "@/lib/zodSchemas/signInSchema";
import { createAdminClient } from "./appwrite";
import { cookies } from "next/headers";

export async function signIn(data: SignInSchemaType): Promise<void> {
  // TODO VALIDATIONS
  try {
    const { account ,  } = await createAdminClient();
    const session = await account.createEmailPasswordSession(
      data.email,
      data.password
    );

    console.log(session);
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return JSON.parse(JSON.stringify(session));
  } catch (error: any) {
    console.log("THROWING ERROR in SIGN IN", error);
    throw new Error(error?.message as string);
  }
}
