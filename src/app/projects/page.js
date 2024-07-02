import Navbar from "../../components/navbar.js";
import Background from "../../components/background";
import Project from "../../components/project";

export default function Projects() {
  return (
    <div className="bg-white" id="list1">
      <Navbar />
      <Background />
      <div className="mx-auto mb-10 lg:mt-20 items-center min-v-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        <Project
          href="/project-1" // Ubah sesuai dengan URL halaman pertama
          title="Aplikasi Penghitung PPH"
          description="Aplikasi Desktop berbasis Java untuk menghitung Pajak Penghasilan (PPH), dengan menggunakan metode PPh Pasal 21. Aplikasi ini dibuat guna memenuhi tugas akhir praktikum dasar komputer dan pemrograman."
        />
        <Project
          href="/project-2" // Ubah sesuai dengan URL halaman kedua
          title="Sedap (Semarang dalam Aplikasi)"
          description="Aplikasi mobile berbasis kotlin untuk panggilan darurat, seperti polisi, rumah sakit, dan pemadam kebakaran. Aplikasi ini dibuat guna memenuhi tugas akhir mata kuliah pemrograman perangkat bergerak."
        />
        <Project
          href="/project-3" // Ubah sesuai dengan URL halaman ketiga
          title="Personal Website"
          description="Website portofolio pribadi yang dibuat menggunakan Next.js dan Tailwind CSS. Website ini berisi informasi tentang diri saya, beberapa proyek yang pernah saya kerjakan, serta cara menghubungi saya."
        />
      </div>
    </div>
  );
}
