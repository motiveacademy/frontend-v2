"use client";

import Link from "next/link";
import DefaultButton from "@/commons/components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";

const redirectURL = "https://app.midtrans.com/snap/v3/redirection/";

const CartSection = ({ cart }) => {
  const inCart = cart.filter((item) => item.status === "In Cart");
  const outCart = [];

  return (
    <section className="text-primary-green space-y-8">
      <h1 className="text-2xl font-bold">
        <span className="mr-2">
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        | Shopping Cart
      </h1>

      {inCart.length > 0 ? (
        <div className="space-y-4">
          <h2 className="font-bold text-xl pb-2 border-b">
            Waiting for Checkout
          </h2>
          <table className="w-max table-auto border border-slate-200 shadow rounded-lg shadow text-left">
            <thead className="bg-primary-green text-primary-white">
              <tr>
                <th className="py-6"></th>
                <th>Status</th>
                <th>Produk</th>
                <th>Total</th>
                <th>Pembayaran</th>
              </tr>
            </thead>
            <tbody className="">
              {inCart.map((item) => (
                <tr key={item.orderID} className="">
                  <td className="border-y border-slate-200 py-8 px-8 text-xl hover:text-secondary-green hover:cursor-pointer">
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                  <td className="border-y border-slate-200 py-8 pr-8">
                    <p className="">{item.status}</p>
                  </td>
                  <td className="border-y border-slate-200 py-8 pr-8">
                    {item.name}
                  </td>
                  <td className="border-y border-slate-200 py-8 pr-8">
                    Rp{item.amount}
                  </td>
                  <td className="border-y border-slate-200 py-8 pr-8">
                    <DefaultButton isLink={true} href={`${redirectURL}${item.snapToken}`}>Checkout</DefaultButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-lg">
          Belum ada produk di keranjang kamu. Cek{" "}
          <Link href="/course" className="underline font-bold">
            Online Course
          </Link>{" "}
          dan{" "}
          <Link href="/live-class" className="underline font-bold">
            Live Class
          </Link>{" "}
          kami sekarang!
        </p>
      )}

      {outCart.length > 0 ? (
        <div className="space-y-4">
          <h2 className="font-bold text-xl pb-2 border-b">
            Transaction History
          </h2>

          <table className="w-max table-auto border border-slate-200 shadow rounded-lg shadow text-left">
            <thead className="bg-primary-green text-primary-white">
              <tr>
                <th className="py-6"></th>
                <th>Status</th>
                <th>Produk</th>
                <th>Total</th>
                <th>Pembayaran</th>
              </tr>
            </thead>
            <tbody className="">
              {outCart.map((item) => (
                <tr key={item.orderID} className="">
                  <td className="border-y border-slate-200 py-8 px-8 text-xl hover:text-secondary-green hover:cursor-pointer">
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                  <td className="border-y border-slate-200 py-8 pr-8">
                    <p className="">{item.status}</p>
                  </td>
                  <td className="border-y border-slate-200 py-8 pr-8">
                    {item.itemDetail.name}
                  </td>
                  <td className="border-y border-slate-200 py-8 pr-8">
                    Rp{item.amount}
                  </td>
                  <td className="border-y border-slate-200 py-8 pr-8">
                    <DefaultButton onClick={() => {}}>Checkout</DefaultButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p></p>
      )}
    </section>
  );
};

export default CartSection;
