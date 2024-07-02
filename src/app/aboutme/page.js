import Navbar from "../../components/navbar";
import Background from "../../components/background";
import ExperienceCard from "../../components/about";

export default function Home() {
  return (
    <div className="bg-white" id="list4">
      <Navbar />
      <Background />
      <div className="mx-4 sm:mx-2">
        <h1 className="text-3xl font-bold items-center justify-center bg-white px-6 md:px-60">
          Experiences
        </h1>
        <div className="flex items-center py-10 bg-white px-8 md:px-64">
          <div className="space-y-6 border-l-2 border-dashed">
            <ExperienceCard
              title="Bakti BCA Scholarship"
              description="Bakti BCA Scholarship adalah beasiswa yang diberikan oleh PT. Bank Central Asia Tbk. kepada mahasiswa berprestasi. Beasiswa ini diberikan kepada mahasiswa yang memiliki prestasi akademik dan non-akademik yang baik. Beasiswa ini juga memberikan kesempatan dan wadah bagi mahasiswa untuk mengembangkan diri dan berkontribusi kepada masyarakat."
              position="Universitas Diponegoro"
              year="2024"
            />
            <ExperienceCard
              title="BEM FT Universitas Diponegoro"
              description="Bertugas sebagai staff media dan informasi di BEM FT Universitas Diponegoro dalam mempublikasikan informasi kegiatan dan program kerja BEM FT Undip. Bertanggung jawab dalam membuat desain grafis, video, dan konten media sosial. Menjadi project manager dalam pembuatan program kerja Cahritahu."
              position="Media and Information Staff"
              year="2023"
            />
            <ExperienceCard
              title="HIMASKOM Universitas Diponegoro"
              description="Bertugas pada bidang pengembangan sumber daya mahasiswa (PSDM) di HIMASKOM Universitas Diponegoro dalam mengembangkan sumber daya mahasiswa. Bertanggung jawab dalam mengembangkan sumber daya mahasiswa melalui pelatihan dan alur kaderisasi yang ada. Menjadi Kepala divisi kaderisasi"
              position="Pengembangan Sumber Daya Mahasiswa"
              year="2023 - Now"
            />
            <ExperienceCard
              title="BEM FT Universitas Diponegoro"
              description="Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante."
              position="Staff Kantor Media dan Informasi"
              year="2023"
            />
            <ExperienceCard
              title="Pemira FT Universitas Diponegoro 2022"
              description="Bertugas sebagai staff divisi acara dalam Pemilihan Raya BEM FT Universitas Diponegoro 2022. Bertanggung jawab dalam mengatur acara dan kegiatan yang dilaksanakan dalam pemira."
              position="Divisi Acara"
              year="2022"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-2 pt-10">
        <h1 className="text-3xl font-bold items-center justify-center bg-white px-6 md:px-60">
          Educations
        </h1>
        <div className="flex items-center py-10 bg-white px-8 md:px-64">
          <div className="space-y-6 border-l-2 border-dashed">
            <ExperienceCard
              title="Universitas Diponegoro"
              description="Teknik Komputer adalah salah satu program studi di Fakultas Teknik Universitas Diponegoro yang berfokus pada pengembangan teknologi informasi dan komunikasi. Program studi ini memberikan pengetahuan dan keterampilan dalam bidang teknologi informasi dan komunikasi, seperti pemrograman, jaringan komputer, dan keamanan informasi."
              position="Teknik Komputer"
              year="2022 - Now"
            />
            <ExperienceCard
              title="SMA Negeri 1 Rembang"
              description="SMA Negeri 1 Rembang adalah salah satu sekolah menengah atas di Kabupaten Rembang, Jawa Tengah. Sekolah ini memiliki program studi IPA yang berfokus pada mata pelajaran Matematika dan Ilmu Pengetahuan Alam. Program studi ini memberikan pengetahuan dan keterampilan dalam bidang Matematika, Fisika, Kimia, dan Biologi."
              position="Matematika dan Ilmu Pengetahuan Alam"
              year="2019 - 2022"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-2 pt-10">
        <h1 className="text-3xl font-bold items-center justify-center bg-white px-6 md:px-60">
          Certificates
        </h1>
        <div className="flex items-center py-10 bg-white px-8 md:px-64">
          <div className="space-y-6 border-l-2 border-dashed">
            <ExperienceCard
              title="Database Foundations"
              description="Oracle Academy Database Foundations mengajarkan dasar-dasar database, termasuk konsep dasar database, desain database, bahasa SQL, dan pemrograman database. Sertifikasi ini memberikan pengetahuan dan keterampilan dalam mengelola database menggunakan Oracle Database."
              position="Oracle Academy"
              year="2024"
            />
            <ExperienceCard
              title="Database Design"
              description="Oracle Academy Database Design mengajarkan desain database, termasuk pemodelan data, normalisasi database, dan desain basis data atau ERD. Sertifikasi ini memberikan pengetahuan dan keterampilan dalam merancang database yang efisien dan efektif."
              position="Oracle Academy"
              year="2024"
            />
            <ExperienceCard
              title="CCNA: Introduction to Networks"
              description="Cisco Networking Academy CCNA: Introduction to Networks adalah kursus online yang mengajarkan dasar-dasar jaringan komputer, termasuk konsep jaringan, perangkat jaringan, dan protokol jaringan. Sertifikasi ini memberikan pengetahuan dan keterampilan dalam mengelola jaringan komputer."
              position="Cisco Networking Academy"
              year="2024"
            />
            <ExperienceCard
              title="Introduction to Internet of Things"
              description="Cisco Networking Academy Introduction to Internet of Things adalah kursus online yang mengajarkan konsep dasar Internet of Things (IoT), termasuk konsep IoT, perangkat IoT, dan aplikasi IoT. Sertifikasi ini memberikan pengetahuan dan keterampilan dalam mengembangkan aplikasi IoT."
              year="2024"
            />
            <ExperienceCard
              title="IT Essentials"
              description="Cisco Networking Academy CCNA: Introduction to Networks adalah kursus online yang mengajarkan dasar-dasar jaringan komputer, termasuk konsep jaringan, perangkat jaringan, dan protokol jaringan. Sertifikasi ini memberikan pengetahuan dan keterampilan dalam mengelola jaringan komputer."
              position="Cisco Networking Academy"
              year="2023"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-2 pt-10">
        <h1 className="text-3xl font-bold items-center justify-center bg-white px-6 md:px-60">
          Skills
        </h1>
        <div className="flex items-center py-10 bg-white px-8 md:px-64">
          <div className="space-y-6 border-l-2 border-dashed">
            <ExperienceCard
              title="Project Management"
              description=""
              position="Project Management adalah kemampuan untuk merencanakan, mengorganisir, dan mengelola proyek dari awal hingga akhir. Kemampuan ini meliputi perencanaan proyek, pengelolaan sumber daya, dan pengendalian proyek. Project Management juga melibatkan kemampuan komunikasi, negosiasi, dan kepemimpinan."
              year=""
            />
            <ExperienceCard
              title="UI/UX Design"
              description=""
              position="UI/UX Design adalah proses merancang antarmuka pengguna (UI) dan pengalaman pengguna (UX) untuk produk digital, seperti aplikasi dan situs web. UI/UX Design melibatkan pemahaman tentang kebutuhan pengguna, analisis pengguna, desain antarmuka, dan pengujian pengguna."
              year=""
            />
            <ExperienceCard
              title="Frontend Development"
              description=""
              position="Frontend Development adalah pengembangan aplikasi web yang berfokus pada antarmuka pengguna (UI) dan pengalaman pengguna (UX). Frontend Development melibatkan pengembangan kode HTML, CSS, dan JavaScript untuk membuat antarmuka pengguna yang interaktif dan responsif."
              year=""
            />
            <ExperienceCard
              title="Mobile Apps Development"
              description=""
              position="Mobile Apps Development adalah pengembangan aplikasi mobile untuk platform Android dan iOS. Mobile Apps Development melibatkan pengembangan kode Java, Kotlin untuk membuat aplikasi mobile yang berfungsi dan responsif."
              year=""
            />
            <ExperienceCard
              title="Design and Editing"
              description=""
              position="Design and Editing adalah kemampuan untuk membuat desain grafis dan mengedit foto dan video. Kemampuan ini meliputi penggunaan perangkat lunak desain grafis, seperti Adobe Photoshop, Adobe Illustrator, dan Adobe Premiere Pro."
              year=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
