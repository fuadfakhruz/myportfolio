import Navbar from "../../components/navbar";
import Background from "../../components/background";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      <Background />

      <div className="bg-gray-200 pb-10 md:pb-64  mx-8 -mt-4 rounded-md mb-8 md:mb-0">
        <h1 className="text-2xl p-4 mx-4 font-bold mb-4 md:mb-8 text-center md:text-left pt-8">
          Aplikasi Penghitung Pajak Penghasilan (PPH)
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
          <div class="p-4">
            <Image src="/assets/pph.png" width="700" height="700" alt="no" />
          </div>
          <div class=" mx-2 md:mx-10 mt-2 md:mt-10 p-4 font-semibold text-xl md:text-2xl leading-10  text-center  md:text-justify">
            Aplikasi desktop berbasis Java untuk menghitung Pajak Penghasilan
            (PPH), dengan menggunakan metode PPh Pasal 21. Aplikasi ini dibuat
            guna memenuhi tugas akhir praktikum dasar komputer dan pemrograman.
            Aplikasi ini memiliki fitur untuk menyesuaikan perhitungan sesuai
            jumlah penghasilan dan apakah sudah memiliki NPWP atau belum.
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-200 mx-8  rounded-md">
        <h1 className="text-2xl px-4 py-2 font-semibold">asdafaf</h1>
      </div> */}
    </div>
  );
}
