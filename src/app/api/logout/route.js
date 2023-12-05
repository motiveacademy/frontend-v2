import { NextResponse } from "next/server";
import { getAuth, signOut } from "firebase/auth";
import { cookies } from 'next/headers'

export async function GET(req) {
  cookies().set({
    name: 'AUTH',
    value: '',
    maxAge: 0,
    expires: new Date(),
    path: "/"
  })

  const auth = getAuth();
  await signOut(auth)

  const response =  NextResponse.json({status: "OK"})
  
 
  return response;
}