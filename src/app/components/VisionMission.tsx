import { Target, Eye, Heart } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Visi & Misi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by Islamic principles, driven by excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-gradient-to-br from-[#8FB935]/10 to-[#8FB935]/5 rounded-3xl p-10 border-2 border-[#8FB935]/20">
            <div className="w-16 h-16 bg-[#8FB935] rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Visi
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Mewujudkan siswa MAN 1 Kota Bengkulu yang aktif,
              kreatif, dan inovatif, serta menjadikan OSIM
              sebagai wadah pengembangan potensi dan bakat
              siswa, guna membentuk generasi yang berprestasi,
              berkarakter, dan berkontribusi positif bagi
              lingkungan sekolah.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border-2 border-gray-200">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Misi
            </h3>
            <div className="space-y-4">
              {[
                "Menanamkan nilai ketakwaan sebagai fondasi utama dalam setiap kegiatan OSIM, demi membentuk siswa yang tidak hanya cerdas, tapi juga berakhlak mulia.",
                "Menyelenggarakan kegiatan yang edukatif serta kreatif demi pengembangan bakat dan potensi siswa, sekaligus mendorong semangat berprestasi di lingkungan madrasah.",
                "Menjadikan OSIM sebagai wadah aspirasi siswa dan menjembatani komunikasi antara siswa dengan pihak sekolah, agar setiap suara dan pendapat siswa dapat ditampung dan dipertimbangkan secara adil.",
                "Meneruskan program kerja OSIM yang positif, dengan penyesuaian dan penyempurnaan guna memberikan dampak positif yang lebih luas bagi seluruh warga madrasah.",
                "Mewujudkan kepengurusan OSIM yang berdedikasi tinggi, sehingga seluruh anggota dapat menjadi teladan dalam bersikap, berorganisasi, dan berkontribusi di lingkungan madrasah.",
              ].map((mission, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-[#8FB935] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed flex-1">
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
