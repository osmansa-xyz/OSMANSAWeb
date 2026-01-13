import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export function Contacts() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#8FB935]/5 via-white to-[#8FB935]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FB935]/10 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-[#8FB935]" />
            <span className="text-sm font-medium text-[#8FB935]">Hubungi Kami</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Kontak OSMANSA</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#8FB935] transition-all">
                <div className="w-12 h-12 bg-[#8FB935]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#8FB935]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Alamat</h4>
                  <p className="text-gray-600 leading-relaxed">
                    MAN 1 Kota Bengkulu<br />
                    Jl. Cimanuk, Padang Harapan, Kec. Gading Cempaka<br />
                    Bengkulu 38225
                  </p>
                </div>
              </div>

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
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
            
            <form 
              action="https://api.sheetmonkey.io/form/g9SBVdkyZmbVqctDtuFEd1" 
              method="POST"
              className="space-y-6"
            >
              {/* Redirect agar tidak blank setelah kirim */}
              <input type="hidden" name="x-sheetmonkey-redirect" value="https://osmansakotabengkulu.xyz/" />

              <div>
                <label htmlFor="name" className="block text-gray-900 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="nama_lengkap"
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#8FB935] focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="nama@email.com"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#8FB935] focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-900 mb-2">Subjek</label>
                <input
                  type="text"
                  id="subject"
                  name="subjek"
                  placeholder="Perihal pesan Anda"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#8FB935] focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 mb-2">Pesan</label>
                <textarea
                  id="message"
                  name="pesan"
                  required
                  rows={5}
                  placeholder="Tuliskan pesan Anda di sini..."
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#8FB935] focus:bg-white outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8FB935] text-white py-4 rounded-xl hover:bg-[#7DA82E] transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
