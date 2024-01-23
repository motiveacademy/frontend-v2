import { NextResponse } from "next/server";

const MIDTRANS_ENDPOINT = {
  sandbox: "https://app.sandbox.midtrans.com/snap/v1/transactions",
  production: "https://app.midtrans.com/snap/v1/transactions",
};

const SERVER_KEY_BASE64 = {
  sandbox: "U0ItTWlkLXNlcnZlci00TVZxczRZaTBwb0c0bUpjQm11VG1QWlY6",
  production: "TWlkLXNlcnZlci16UkxfU3JzaDlBUm9VMHlEVU5SLXJ5aWQ6",
};

const MIDTRANS_CLIENT = "Mid-client-8F45h7sEmqjiDRQQ";

export async function POST(req) {
  const data = await req.json();

  let parameter = {
    transaction_details: {
      order_id: data.orderID,
      gross_amount: data.amount,
    },
    item_details: [
      {
        id: data.id,
        price: data.amount,
        quantity: 1,
        name: data.name,
      },
    ],
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: data.cust.firstName,
      last_name: data.cust.lastName,
      email: data.cust.email,
    },
  };

  console.log(parameter)

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Basic ${SERVER_KEY_BASE64.production}`,
    },
    body: JSON.stringify(parameter),
  };

  const transaction = await fetch(MIDTRANS_ENDPOINT.production, options).catch(
    (err) => console.error(err)
  );
  const result = await transaction.json();

  return NextResponse.json({ ...result });
}

// export async function PUT(req) {
//   return NextResponse.json({ ...result });
// }
