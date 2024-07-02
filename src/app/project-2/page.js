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
          Sedap (Semarang dalam Aplikasi)
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
          <div class="p-4 mx-auto items-center justify-center">
            <Image src="/assets/sedap.jpg" width="250" height="250" alt="no" />
          </div>
          <div class=" mx-2 md:mx-10 mt-2 md:mt-10 p-4 font-semibold text-xl md:text-2xl leading-10  text-center  md:text-justify">
            Aplikasi mobile berbasis kotlin untuk panggilan darurat, seperti
            ambulance rumah sakit, laporan bencana alam, dan pemadam kebakaran.
            Aplikasi ini dibuat guna memenuhi tugas akhir mata kuliah
            pemrograman perangkat bergerak. Aplikasi ini memiliki fitur untuk
            menampilkan lokasi terdekat dari panggilan darurat yang dipilih,
            serta menampilkan informasi kontak dari panggilan darurat tersebut.
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-200 mx-8  rounded-md">
        <h1 className="text-2xl px-4 py-2 font-semibold">asdafaf</h1>
      </div> */}
    </div>
  );
}
