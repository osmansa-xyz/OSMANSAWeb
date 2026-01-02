import { useState } from 'react';
import { Megaphone, BookOpen, Trophy, Package } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  icon: any;
  color: string;
  bgColor: string;
  Koordinator: string;
  members: string[];
  jobDescription: string[];
  workPrograms: { title: string; description: string }[];
}

const departments: Department[] = [
  {
    id: 'humed',
    name: 'Humas Multimedia',
    icon: Megaphone,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    Koordinator: 'Syauqi Raudhah Firdaus',
    members: ['Muhammad Alfikri', 'Chesha Kinah Ramadani'],
    jobDescription: [
      'Menyusun konten visual dan audio-visual berkualitas (foto, video, dan desain grafis) untuk mendokumentasikan serta mempublikasikan kegiatan.',
      'Merancang poster peringatan hari besar nasional maupun keagamaan, serta menyebarkan pengumuman penting, seperti informasi kegiatan, kehilangan barang, dan pemberitahuan resmi lainnya.',
      'Mengelola dan mengoptimalkan platform digital OSMANSA agar tetap aktif, edukatif, dan menjadi sarana informasi utama bagi seluruh siswa.'
    ],
    workPrograms: [
      {
        title: 'Bulan Bahasa',
        description: 'Comprehensive overhaul of digital presence including website redesign, social media strategy optimization, and implementation of content management systems to increase engagement by 200%'
      }
    ]
  },
  {
    id: 'kki',
    name: 'Keagamaan dan Kesenian Islami',
    icon: BookOpen,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    Koordinator: 'El Fahri Pradipta',
    members: ['Adella Hesti Mullansari', 'Anggun Rahmadani', 'Muhammad Faizul Haq', 'Carine Syahira Zahwa'],
    jobDescription: [
      'Mengatur jadwal dan teknis pelaksanaan ibadah rutin madrasah, termasuk koordinasi Shalat Dhuha, tadarus pagi, dan pembacaan hadist di masjid.',
      'Bertindak sebagai pemandu acara (Master of Ceremony) dalam berbagai kegiatan resmi.'
    ],
    workPrograms: [
      {
        title: 'Maulid Nabi',
        description: 'Week-long Islamic New Year celebration featuring Islamic competitions, motivational lectures by renowned scholars, Quranic recitation contests, and community service initiatives to welcome the new Hijri year'
      },
      {
        title: 'Isra Miraj',
        description: 'Structured Quran memorization program connecting students with qualified mentors, providing weekly guidance sessions, progress tracking, and creating a supportive environment for spiritual growth'
      },
    ]
  },
  {
    id: 'osaka',
    name: 'Olahraga Satuan Keamanan',
    icon: Trophy,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    Koordinator: 'Zlatan Rahcel Sudarsono',
    members: ['Muhammad Ahza Bayhaqi', 'Azza Fadillah Permata Juri', 'Muhammad Daffa Khairan'],
    jobDescription: [
      'Menjaga ketertiban dan keamanan di area sekolah secara rutin maupun saat kegiatan berlangsung.',
      'Memimpin pelaksanaan senam bersama pada agenda KJP Jumat Sehat untuk meningkatkan kebugaran seluruh warga madrasah.'
    ],
    workPrograms: [
      {
        title: 'Liga MAN',
        description: 'Annual multi-sport tournament featuring futsal, basketball, badminton, and table tennis competitions that foster school spirit, discover athletic talent, and promote healthy lifestyle among students'
      }
    ]
  },
  {
    id: 'perlemen',
    name: 'Perlengkapan dan Pembekalan',
    icon: Package,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    Koordinator: 'Leo Prabowo',
    members: ['Bunga Dzahirah', 'M. Raihan Almico Chandra Dinata', 'Alfaizah Luthfia Sutama'],
    jobDescription: [
      'Menyiapkan, mengatur, dan memastikan seluruh peralatan pendukung kegiatan tersedia dalam kondisi prima dan siap pakai.',
      'Bertanggung jawab atas pemutaran lagu kebangsaan Indonesia Raya setiap hari Senin dan Kamis pukul 10.00 WIB.',
      'Bertugas membacakan teks Pancasila melalui pengeras suara sekolah pada hari Selasa dan Jumat pukul 10.00 WIB.'
    ],
    workPrograms: [
      {
        title: 'MATSAMA',
        description: 'Implementation of QR-code based inventory tracking system, online equipment reservation platform, and digital database for all OSMANSA assets to improve transparency and accessibility'
      }
    ]
  }
];

export function Departments() {
  const [selectedDept, setSelectedDept] = useState<string>(departments[0].id);
  
  const currentDept = departments.find(d => d.id === selectedDept) || departments[0];
  const Icon = currentDept.icon;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Departments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized teams working together to serve the madrasah community
          </p>
        </div>

        {/* Department Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {departments.map((dept) => {
            const DeptIcon = dept.icon;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`
                  p-6 rounded-2xl text-left transition-all border-2
                  ${selectedDept === dept.id 
                    ? 'border-[#8FB935] bg-[#8FB935]/5 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
              >
                <DeptIcon className={`w-8 h-8 mb-3 ${selectedDept === dept.id ? 'text-[#8FB935]' : 'text-gray-400'}`} />
                <h4 className={`font-bold ${selectedDept === dept.id ? 'text-gray-900' : 'text-gray-600'}`}>
                  {dept.name}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Department Detail */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-100 overflow-hidden">
          {/* Department Header */}
          <div className={`bg-gradient-to-r ${currentDept.color} text-white p-10`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">{currentDept.name}</h3>
                <p className="text-white/90 mt-1">Bidang</p>
              </div>
            </div>
          </div>

          <div className="p-10">
            {/* Team Members */}
            <div className="mb-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Team Members</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Koordinator */}
                <div className="col-span-1 md:col-span-3 bg-gradient-to-br from-[#8FB935]/10 to-[#8FB935]/5 rounded-2xl p-6 border-2 border-[#8FB935]/30">
                  <div className="text-sm text-gray-600 mb-1">Koordinator Bidang</div>
                  <div className="font-bold text-xl text-gray-900">{currentDept.Koordinator}</div>
                </div>

                {/* Members */}
                {currentDept.members.map((member, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-5">
                    <div className="text-sm text-gray-600 mb-1">Anggota</div>
                    <div className="font-bold text-gray-900">{member}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Tugas</h4>
              <div className="space-y-4">
                {currentDept.jobDescription.map((desc, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div className="w-8 h-8 bg-[#8FB935] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Proker */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Program Kerja</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentDept.workPrograms.map((program, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#8FB935] hover:shadow-lg transition-all">
                    <div className={`w-12 h-12 bg-gradient-to-br ${currentDept.color} rounded-xl flex items-center justify-center mb-4`}>
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <h5 className="font-bold text-lg text-gray-900 mb-3">{program.title}</h5>
                    <p className="text-gray-600 leading-relaxed text-sm">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
