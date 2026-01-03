import { useState } from 'react';
import { Calendar, Tag, Eye, ArrowRight, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  views: number;
  isFeatured?: boolean;
}

const categories = ['Semua', 'Kegiatan', 'Prestasi', 'Pengumuman', 'Keagamaan', 'Olahraga'];

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: 'Pelantikan Pengurus OSMANSA Periode 2025/2026 Berlangsung Khidmat',
    excerpt: 'Acara pelantikan pengurus OSMANSA periode 2025/2026 telah dilaksanakan dengan sukses pada 15 Desember 2025. Kepala Madrasah memberikan amanat kepada pengurus baru untuk menjalankan tugas dengan penuh tanggung jawab dan dedikasi.',
    category: 'Kegiatan',
    date: '15 Desember 2025',
    image: 'https://images.unsplash.com/photo-1665665160518-097a89d5383e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNlcmVtb255JTIwc2Nob29sfGVufDF8fHx8MTc2NzQxODk5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    views: 1245,
    isFeatured: true
  },
  {
    id: 2,
    title: 'Siswa MAN 1 Raih Juara 1 Kompetisi Kaligrafi Tingkat Provinsi',
    excerpt: 'Muhammad Faizul Haq, siswa kelas XI IPA 2, berhasil meraih juara pertama dalam Kompetisi Kaligrafi Islami tingkat Provinsi Bengkulu yang diselenggarakan pada 8 Desember 2025. Prestasi membanggakan ini menjadi bukti komitmen madrasah dalam mengembangkan seni Islam.',
    category: 'Prestasi',
    date: '10 Desember 2025',
    image: 'https://images.unsplash.com/photo-1650853650256-63915aea553e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwY2FsbGlncmFwaHklMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3Njc0MTg5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 987,
    isFeatured: true
  },
  {
    id: 3,
    title: 'Liga MAN 2025: Turnamen Futsal Antar Kelas Resmi Dibuka',
    excerpt: 'Bidang Olahraga dan Satuan Keamanan OSMANSA menggelar Liga MAN 2025, turnamen futsal antar kelas yang diikuti oleh seluruh siswa. Pembukaan turnamen berlangsung meriah dengan partisipasi 24 tim dari berbagai kelas.',
    category: 'Olahraga',
    date: '5 Desember 2025',
    image: 'https://images.unsplash.com/photo-1761644310400-fe763d140148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0b3VybmFtZW50fGVufDF8fHx8MTc2NzQxODk5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    views: 1532
  }
];

export function News() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const filteredNews = selectedCategory === 'Semua' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredNews = newsArticles.filter(article => article.isFeatured);
  const regularNews = filteredNews.filter(article => !article.isFeatured);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FB935]/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-[#8FB935]" />
            <span className="text-sm font-medium text-[#8FB935]">Berita & Informasi Terkini</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Pusat Berita OSMANSA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparansi informasi, dokumentasi kegiatan, dan update prestasi siswa MAN 1 Kota Bengkulu
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2.5 rounded-full transition-all
                ${selectedCategory === category
                  ? 'bg-[#8FB935] text-white shadow-lg shadow-[#8FB935]/30'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#8FB935]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured News */}
        {selectedCategory === 'Semua' && featuredNews.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[#8FB935] rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">Berita Utama</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredNews.map((article, index) => (
                <div
                  key={article.id}
                  className={`
                    group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-100
                    hover:border-[#8FB935] hover:shadow-2xl transition-all duration-300 cursor-pointer
                    ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                  `}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${index === 0 ? 'h-80' : 'h-56'}`}>
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8FB935] text-white rounded-full text-sm">
                        <Tag className="w-3.5 h-3.5" />
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-4 h-4" />
                        {article.views.toLocaleString()}
                      </span>
                    </div>
                    
                    <h4 className={`font-bold text-gray-900 mb-3 group-hover:text-[#8FB935] transition-colors ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {article.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <button className="inline-flex items-center gap-2 text-[#8FB935] font-medium group-hover:gap-3 transition-all">
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular News Grid */}
        <div>
          {selectedCategory !== 'Semua' && (
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[#8FB935] rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'Semua' ? 'Semua Berita' : `Berita ${selectedCategory}`}
              </h3>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#8FB935] hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#8FB935] text-white rounded-full text-xs">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {article.views.toLocaleString()}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#8FB935] transition-colors">
                    {article.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-[#8FB935] text-sm font-medium group-hover:gap-3 transition-all">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tidak Ada Berita</h3>
            <p className="text-gray-600">Belum ada berita untuk kategori ini saat ini.</p>
          </div>
        )}

        {/* Archive Link */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#8FB935] text-[#8FB935] rounded-full hover:bg-[#8FB935] hover:text-white transition-all shadow-sm hover:shadow-lg">
            <span>Lihat Arsip Berita Lengkap</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
