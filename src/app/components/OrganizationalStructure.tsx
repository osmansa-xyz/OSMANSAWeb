import { Users } from 'lucide-react';

export function OrganizationalStructure() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FB935]/10 rounded-full mb-4">
            <Users className="w-4 h-4 text-[#8FB935]" />
            <span className="text-sm text-[#8FB935]">Leadership Structure</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Organizational Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A clear hierarchy ensuring effective governance and coordination
          </p>
        </div>

        {/* Organizational Chart */}
        <div className="flex flex-col items-center space-y-8">
          {/* Principal */}
          <div className="relative">
            <div className="bg-gradient-to-r from-[#8FB935] to-[#7DA82E] text-white rounded-2xl px-8 py-6 shadow-lg min-w-[280px] text-center">
              <div className="text-sm mb-2 opacity-90">Madrasah Leadership</div>
              <h4 className="font-bold text-xl">Principal</h4>
              <p className="text-sm mt-2 opacity-90">Strategic Oversight</p>
            </div>
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-12 bg-gray-300 top-full"></div>
          </div>

          {/* Vice Principal */}
          <div className="relative">
            <div className="bg-white border-2 border-[#8FB935] rounded-2xl px-8 py-6 shadow-lg min-w-[280px] text-center">
              <div className="text-sm mb-2 text-gray-600">Academic Leadership</div>
              <h4 className="font-bold text-xl text-gray-900">Vice Principal</h4>
              <p className="text-sm mt-2 text-gray-600">Student Affairs</p>
            </div>
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-12 bg-gray-300 top-full"></div>
          </div>

          {/* Advisors */}
          <div className="relative">
            <div className="bg-white border-2 border-gray-300 rounded-2xl px-8 py-6 shadow-lg min-w-[280px] text-center">
              <div className="text-sm mb-2 text-gray-600">Guidance & Mentorship</div>
              <h4 className="font-bold text-xl text-gray-900">OSMANSA Advisors</h4>
              <p className="text-sm mt-2 text-gray-600">Strategic Counsel</p>
            </div>
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-12 bg-gray-300 top-full"></div>
          </div>

          {/* Core Executives */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl px-8 py-6 shadow-lg min-w-[320px] text-center">
              <div className="text-sm mb-2 opacity-90">Executive Leadership</div>
              <h4 className="font-bold text-xl">Core Executive Board</h4>
              <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="opacity-75">Chairperson</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="opacity-75">Vice Chair</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="opacity-75">Secretary</div>
                </div>
              </div>
            </div>
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-12 bg-gray-300 top-full"></div>
          </div>

          {/* Department Heads (Sekbid) */}
          <div className="relative w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Coordination lines */}
              <div className="hidden lg:block absolute top-0 left-0 right-0 h-0 border-t-2 border-dashed border-gray-300 -translate-y-12"></div>
              
              {[
                { name: 'Public Relations & Multimedia', color: 'from-blue-500 to-blue-600' },
                { name: 'Religious Affairs', color: 'from-purple-500 to-purple-600' },
                { name: 'Sports & Health', color: 'from-orange-500 to-orange-600' },
                { name: 'Equipment & Logistics', color: 'from-green-500 to-green-600' }
              ].map((dept, index) => (
                <div key={index} className="relative">
                  {/* Vertical line to connect to coordination line */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 h-12 bg-gray-300 -top-12"></div>
                  
                  <div className={`bg-gradient-to-br ${dept.color} text-white rounded-xl px-6 py-5 shadow-lg text-center`}>
                    <div className="text-xs mb-2 opacity-90">Department Head</div>
                    <h5 className="font-bold text-sm leading-tight">{dept.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 bg-gray-300"></div>
              <span>Authority Line</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 border-t-2 border-dashed border-gray-300"></div>
              <span>Coordination Line</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
