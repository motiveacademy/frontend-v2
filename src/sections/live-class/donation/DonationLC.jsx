"use client"

import DefaultButton from "@/commons/components/button";

const DonationLC = () => {
  return (
    <section className="text-primary-green max-w-[25vw] px-8 space-y-4">
      <p className="font-bold text-lg">
        Apakah Live Class ini memberikan value untukmu?
      </p>
      <p>
        Kamu dapat membantu mengembangkan live class serta platform Motive
        Academy menjadi lebih baik lagi dengan memberikan donasi.
      </p>
      <div className="space-y-2">
        <p className="font-bold">Jumlah Donasi</p>
        <div className="space-y-1 font-bold">
          <div className="w-full p-2 rounded border border-primary-green flex justify-center hover:bg-primary-green hover:cursor-pointer hover:text-white">
            <p>Rp5.000</p>
          </div>
          <div className="w-full p-2 rounded border border-primary-green flex justify-center hover:bg-primary-green hover:cursor-pointer hover:text-white">
            <p>Rp10.000</p>
          </div>
          <div className="w-full p-2 rounded border border-primary-green flex justify-center hover:bg-primary-green hover:cursor-pointer hover:text-white">
            <p>Rp20.000</p>
          </div>
          <div className="w-full p-2 rounded border border-primary-green flex justify-center hover:bg-primary-green hover:cursor-pointer hover:text-white">
            <p>Rp50.000</p>
          </div>
          <input
            type="number"
            className="w-full p-2 rounded border border-primary-green text-center placeholder:font-normal"
            placeholder="Masukkan jumlah lainnya"
          />
        </div>
        <DefaultButton onClick={() => {}}>Submit</DefaultButton>
      </div>
    </section>
  );
};

export default DonationLC;
