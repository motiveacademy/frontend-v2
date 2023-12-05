import { NextResponse } from "next/server";
import { RAJA_ONGKIR_API } from "@commons/utils/ongkir";

export const RAJA_ONGKIR_API_KEY = "09c0b395c667885fe25ecd6e2b14d5a2";

export async function GET(req) {
  const res = await fetch(
    `${RAJA_ONGKIR_API}/city/?key=${RAJA_ONGKIR_API_KEY}`,
    {
      next: {
        revalidate: 180,
      },
    }
  ).catch((err) => console.error(err));
  const data = await res.json();

  return NextResponse.json({ cities: data.rajaongkir?.results });
}

export async function POST(req) {
  const reqData = await req.json();

  const originCity = 256;
  const weight = 504

  const requestOptions = {
    method: "POST",
    headers: {
      Key: RAJA_ONGKIR_API_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      origin: originCity,
      destination: reqData.city,
      weight: weight,
      courier: reqData.courier,
    }).toString(),
  };

  const res = await fetch(
    `${RAJA_ONGKIR_API}/cost`,
    requestOptions
  ).catch((err) => console.error(err));

  const data = await res.json();

  return NextResponse.json({ result: data.rajaongkir?.results });
}
