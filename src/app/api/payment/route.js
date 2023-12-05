import { NextResponse } from "next/server";
import { db } from "@commons/auth/config";
import { setDoc, doc } from "firebase/firestore";

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

  const cartRef = doc(
    db,
    "transaction",
    MIDTRANS_CLIENT,
    data.custID,
    data.orderID
  );
  const cartData = data.cartData;

  setDoc(cartRef, cartData, data.orderID).catch((error) => {
    console.log(error);
  });
  return NextResponse.json({ status: "OK" });
}

export async function PUT(req) {
  const data = await req.json();

  let parameter = {
    transaction_details: {
      order_id: data.orderID,
      gross_amount: data.price,
    },
    item_details: [
      {
        id: data.productID,
        price: data.price,
        quantity: 1,
        name: data.productName,
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

  const dbRef = doc(
    db,
    "transaction",
    MIDTRANS_CLIENT,
    data.cust.id,
    data.orderID
  );

  const cartData = {
    status: "Pending",
    snapToken: result.token,
  };

  setDoc(dbRef, cartData, { merge: true }).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ ...result });
}

