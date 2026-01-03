import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export function Contacts() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#8FB935]/5 via-white to-[#8FB935]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FB935]/10 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-[#8FB935]" />
            <span className="text-sm font-medium text-[#8FB935]">Hubungi Kami</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Kontak OSMANSA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Punya pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#8FB935] transition-all">
                  <div className="w-12 h-12 bg-[#8FB935]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#8FB935]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Alamat</h4>
                    <p className="text-gray-600 leading-relaxed">
                      MAN 1 Kota Bengkulu<br />
                      Jl. Cimanuk, Padang Harapan<br />
                      Kec. Gading Cempaka, Kota Bengkulu<br />
                      Bengkulu 38225
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#8FB935] transition-all">
                  <div className="w-12 h-12 bg-[#8FB935]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#8FB935]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                    <a href="mailto:osmansakotabengkulu@gmail.com" className="text-[#8FB935] hover:underline">
                      osmansakotabengkulu@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#8FB935] transition-all">
                  <div className="w-12 h-12 bg-[#8FB935]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#8FB935]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Telepon</h4>
                    <a href="tel:+628xxxxxxxx" className="text-gray-600 hover:text-[#8FB935]">
                      +62 8**-****-****
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-[#8FB935] to-[#7DA82E] rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Ikuti Media Sosial Kami</h4>
              <p className="text-white/90 mb-6">
                Dapatkan update terbaru dan konten menarik dari OSMANSA
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
            
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-900 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#8FB935] focus:bg-white outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="nama@email.com"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#8FB935] focus:bg-white outline-none transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-900 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Perihal pesan Anda"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#8FB935] focus:bg-white outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-900 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tuliskan pesan, saran, atau pertanyaan Anda di sini..."
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#8FB935] focus:bg-white outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#8FB935] text-white py-4 rounded-xl hover:bg-[#7DA82E] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Kirim Pesan
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              Kami akan merespons pesan Anda sesegera mungkin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
