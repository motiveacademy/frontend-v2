"use client"

import DefaultButton from "@/commons/components/button"

const BookSection = () => {
  return <section className="text-primary-green space-y-6 p-16">
    <div className="space-y-2">
      <h2 className="text-2xl text-primary-green font-bold">
        <span>Build{" "}</span>
        <span className="bg-primary-yellow py-0.5 pl-2 pr-8">a Better Life</span>
      </h2>
      <h3 className="text-lg">with Our Productivity Books</h3>
    </div>

    <div className="space-y-8">
      <div className="w-fit flex gap-x-8 p-4 rounded shadow">
        <img src="/product/book-planner.png" alt="Motive Book Planner" className="max-w-sm rounded" />
        <div className="space-y-4 text-primary-green py-2">
          <p className="text-xl font-bold">Productivity Book Planner</p>
          <p className="max-w-prose leading-7">Motive Productivity Book Planner hadir khusus untukmu yang ingin membangun kehidupan yang produktif. Dalam buku ini, kamu dapat mengatur jadwal mingguan dan bulananmu, membangun habitmu dengan Habit Tracker, menentukan prioritas dengan Matriks Prioritas, dan masih banyak lagi! Dapatkan Book Planner ini dengan klik tombol &quot;Pesan Book Planner&quot; di bawah ini! </p>
          <DefaultButton isLink={true} href={""}>Pesan Book Planner</DefaultButton>
        </div>
      </div>

      <div className="w-fit flex gap-x-8 p-4 rounded shadow">
        <img src="/product/guidebook.png" alt="Guidebook Motive" className="max-w-sm" />
        <div className="space-y-4 text-primary-green py-2">
          <p className="text-xl font-bold">Guidebook: Menjadi Pemuda Muslim Seutuhnya</p>
          <p className="max-w-prose leading-7">Menjadi pemuda muslim seutuhnya merupakan keinginan kita semua. Melalui Guidebook ini, kamu akan mendapatkan 30 tips seputar langkah-langkah untuk meraih keberkahan hidup sekaligus memaksimalkan produktivitasmu. Oleh karena itu, unduh Guidebook ini sekarang juga!</p>
          <DefaultButton isLink={true} href={""}>Dapatkan Guidebook</DefaultButton>
        </div>
      </div>
    </div>
  </section>
}

export default BookSection