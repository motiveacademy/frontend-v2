import { AES } from "crypto-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const encrypted = AES.encrypt(data.token, process.env.USER_KEY);
  const expireTime = 24 * 60 * 60;

  cookies().set("sctkn", encrypted, {
    secure: true,
    maxAge: expireTime,
  });

  return NextResponse.json({ cookie: true });
}
