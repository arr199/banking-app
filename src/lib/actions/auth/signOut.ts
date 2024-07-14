"use server";
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { cookies } from "next/headers";
import { createSessionClient } from "./appwrite";

export async function SignOut() {
  try {
    const { account } = await createSessionClient();
    await account.deleteSession("current");
    cookies().delete("appwrite-session");
  } catch (err: any) {
    console.log("THROWING ERROR in SIGN OUT", err);
    throw new Error(err?.message as string);
  }
}
