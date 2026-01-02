import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#8FB935]/10 via-white to-[#8FB935]/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#8FB935]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#8FB935]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Logo/Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#8FB935] rounded-full mb-8 shadow-sm">
          <div className="w-2 h-2 bg-[#8FB935] rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">MAN 1 Kota Bengkulu</span>
        </div>

        {/* Main Title */}
        <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
          OSMANSA
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Moving Together, Serving the Madrasah.
        </p>

        {/* CTA */}
        <button className="group inline-flex items-center gap-3 bg-[#8FB935] text-white px-8 py-4 rounded-full hover:bg-[#7DA82E] transition-all shadow-lg hover:shadow-xl hover:scale-105">
          <span>Explore Our Programs</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
