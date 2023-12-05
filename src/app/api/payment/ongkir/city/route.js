import { NextResponse } from "next/server";
import { RAJA_ONGKIR_API } from "@commons/utils/ongkir";
import { RAJA_ONGKIR_API_KEY } from "../route";

export async function POST(req) {
  const reqData = await req.json();

  const res = await fetch(
    `${RAJA_ONGKIR_API}/city/?key=${RAJA_ONGKIR_API_KEY}&id=${reqData.cityID}`,
    {
      next: {
        revalidate: 180,
      },
    }
  ).catch((err) => console.error(err));
  const data = await res.json();

  return NextResponse.json({ city: data.rajaongkir?.results });
}
