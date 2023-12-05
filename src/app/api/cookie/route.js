import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  const cookieStore = cookies();
  const expireTime = 24 * 60 * 60;
  cookies().set("sctkn", data.token, {
    secure: true,
    maxAge: expireTime,
  });

  return NextResponse.json({ cookie: true });
}
