"use server";

import { redirect } from "next/navigation";

export async function hardRedirect(path) {
  redirect(path);
}
