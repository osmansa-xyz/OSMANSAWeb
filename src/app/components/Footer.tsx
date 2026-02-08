import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  // Tahun dinamis yang aman untuk SSR (Next.js)
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">OSMANSA</h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              OSIM MAN 1 Kota Bengkulu adalah wadah utama pengembangan kepemimpinan dan kreativitas siswa di lingkungan madrasah. Kami hadir untuk menjembatani aspirasi siswa.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/osmansa_1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#8FB935] rounded-lg flex items-center justify-center hover:bg-[#7DA82E] transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#8FB935] rounded-lg flex items-center justify-center hover:bg-[#7DA82E] transition-all hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#8FB935] rounded-lg flex items-center justify-center hover:bg-[#7DA82E] transition-all hover:-translate-y-1"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About OSMANSA", "Vision & Mission", "Departments", "Events Calendar"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-[#8FB935] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#8FB935]" />
                <span>Jl. Cimanuk, Padang Harapan, Kec. Gading Cemp., Kota Bengkulu, 38225</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-[#8FB935]" />
                <span>+62 821-xxxx-xxxx</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-[#8FB935]" />
                <span className="break-all">osmansakotabengkulu@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {year} OSMANSA - MAN 1 Kota Bengkulu. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-medium">
            <a href="#" className="text-gray-500 hover:text-[#8FB935] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#8FB935] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
