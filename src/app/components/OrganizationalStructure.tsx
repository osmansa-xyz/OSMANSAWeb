import { Users } from 'lucide-react';

export function OrganizationalStructure() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FB935]/10 rounded-full mb-4">
            <Users className="w-4 h-4 text-[#8FB935]" />
            <span className="text-sm font-medium text-[#8FB935]">Struktur Kepemimpinan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Struktur Organisasi</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Alur koordinasi yang sistematis dan terstruktur
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Top Hierarchy (Principal to Advisor) */}
          <div className="flex flex-col items-center w-full">
            {[
              { role: "Kepala Madrasah", name: "Hendri Kuswiran, M.Pd.", theme: "bg-gradient-to-r from-[#8FB935] to-[#7DA82E] text-white" },
              { role: "Waka Kesiswaan", name: "Soewanto Jaya, S.Pd.", theme: "bg-white border-2 border-[#8FB935] text-gray-900" },
              { role: "Pembina OSMANSA", name: "Yutia Gustari, S.Sn.", theme: "bg-white border-2 border-gray-300 text-gray-900" },
              { role: "Ketua", name: "Hamzah Fansyuri", theme: "bg-gray-900 text-white"}
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center w-full max-w-[280px] mb-12">
                <div className={`${item.theme} relative z-10 rounded-xl px-6 py-4 md:py-6 shadow-lg text-center w-full`}>
                  <div className="text-[10px] md:text-xs mb-1 opacity-90 uppercase tracking-tighter">{item.role}</div>
                  <h4 className="font-bold text-sm md:text-lg">{item.name}</h4>
                </div>
                {/* Garis vertikal penghubung antar atasan */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-300"></div>
              </div>
            ))}
          </div>

          {/* SECONDARY EXECUTIVES (Sekretaris, Wakil, Bendahara) */}
          <div className="relative w-full max-w-5xl mb-20 md:mb-32">
            {/* Garis Horizontal Penghubung (Hanya muncul di Desktop) */}
            <div className="hidden lg:block absolute top-0 left-[15%] right-[15%] h-0.5 bg-gray-400"></div>
            
            <div className="grid grid-cols-3 gap-2 md:gap-10 lg:pt-12">
              {[
                { role: "Sekretaris", name: "Faiza Adzka Afdhalia" },
                { role: "Wakil Ketua", name: "Muhammad Azzam Kurniawan", isCenter: true },
                { role: "Bendahara", name: "Diah Melati Lubis" }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center">
                 
                  {/* Garis Vertikal ke atas hanya untuk menyambung ke garis horizontal desktop */}
                  <div className="hidden lg:block absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-400"></div>
                  
                  <div className="bg-white border-2 border-gray-800 rounded-xl p-2 md:p-6 shadow-md text-center w-full min-h-[80px] md:min-h-[100px] flex flex-col justify-center z-10 relative">
                    <div className="text-[8px] md:text-xs text-gray-500 mb-1 uppercase font-semibold tracking-tighter">{item.role}</div>
                    <h4 className="font-bold text-[9px] md:text-base text-gray-900 leading-tight">{item.name}</h4>
                  </div>

                  {item.isCenter && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 md:h-20 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* DEPARTMENTS (SEKBID) */}
          <div className="relative w-full max-w-full">
            {/* Garis Horizontal pembagi Sekbid (Hanya Desktop) */}
            <div className="hidden lg:block absolute -top-12 left-[11%] right-[11%] h-0.5 bg-gray-300"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-0">
              {[
                { name: 'Humas Multimedia', color: 'from-blue-500 to-blue-600' },
                { name: 'Keagamaan dan Kesenian Islami', color: 'from-purple-500 to-purple-600' },
                { name: 'Olahraga Satuan Keamanan', color: 'from-orange-500 to-orange-600' },
                { name: 'Perlengkapan dan Pembekalan', color: 'from-green-500 to-green-600' }
              ].map((dept, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Garis vertikal penyambung Sekbid (Hanya Desktop) */}
                  {/* h-12 dan -top-12 memastikan garis menyentuh garis horizontal tepat di atasnya */}
                  <div className="hidden lg:block absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-300"></div>

                  {/* Kotak Bidang */}
                  <div className={`w-full rounded-xl px-4 py-6 md:px-6 md:py-8 bg-gradient-to-br ${dept.color} text-white text-center shadow-lg transform transition-transform hover:-translate-y-1 h-full min-h-[100px] flex flex-col justify-center`}>
                    <div className="text-[8px] md:text-[10px] uppercase font-bold opacity-75 mb-1">Bidang</div>
                    <h5 className="font-bold text-[11px] md:text-[13px] tracking-wide "> {dept.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
