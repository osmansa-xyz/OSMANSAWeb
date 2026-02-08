import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">OSMANSA</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              OSIM MAN 1 Kota Bengkulu adalah wadah utama pengembangan kepemimpinan dan kreativitas siswa di lingkungan madrasah. Kami hadir untuk menjembatani aspirasi siswa dan mewujudkan berbagai program kerja yang inovatif serta edukatif.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#8FB935] rounded-lg flex items-center justify-center hover:bg-[#7DA82E] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/osmansa_1"
                target="_blank"                           // membuka di tab baru
                rel="noopener noreferrer"                // keamanan
                className="w-10 h-10 bg-[#8FB935] rounded-lg flex items-center justify-center hover:bg-[#7DA82E] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#8FB935] rounded-lg flex items-center justify-center hover:bg-[#7DA82E] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8FB935] transition-colors"
                >
                  About OSMANSA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8FB935] transition-colors"
                >
                  Vision & Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8FB935] transition-colors"
                >
                  Departments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8FB935] transition-colors"
                >
                  Events Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8FB935] transition-colors"
                >
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-[#8FB935]" />
                <span>
                  MAN 1 Kota Bengkulu
                  <br />
                  Jl. Cimanuk, Padang Harapan, Kec. Gading Cemp., Kota Bengkulu, Bengkulu 38225
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#8FB935]" />
                <span>+62 8**-****-****</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#8FB935]" />
                <span>osmansakotabengkulu@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 OSMANSA - MAN 1 Kota Bengkulu. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-[#8FB935] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#8FB935] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
