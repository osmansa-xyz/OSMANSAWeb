import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';

interface Event {
  startDate: string;
  endDate?: string;
  title: string;
  type: 'Keagamaan' | 'Hari Libur' | 'Olahraga' | 'Umum' | 'KJP';
}

const events: Event[] = [
  { startDate: '2025-08-17', title: 'HUT RI Ke-80', type: 'Hari Libur' },
  { startDate: '2025-08-19', title: 'Sertijab', type: 'Umum' },
  { startDate: '2025-12-08', endDate: '2025-12-18', title: 'Liga MAN', type: 'Olahraga' },
  { startDate: '2026-01-15', endDate: '2026-01-16', title: 'Peringatan Isra Miraj', type: 'Keagamaan' },
  { startDate: '2026-01-23', title: 'Jumat Kreatif', type: 'KJP'},
  { startDate: '2026-01-30', title: 'Jumat Kreatif', type: 'KJP'},
  { startDate: '2026-02-06', title: 'Jumat Kreatif', type: 'KJP'}, 
  { startDate: '2026-08-17', title: 'HUT RI Ke-81', type: 'Hari Libur' }
];

export function SmartCalendar() {
  const [viewDate, setViewDate] = useState(new Date());

  // Batasan Kalender
  const minDate = new Date(2025, 7, 1);
  const maxDate = new Date(2026, 7, 31);

  const month = viewDate.getMonth();
  const year = viewDate.getFullYear();
  const monthName = viewDate.toLocaleString('id-ID', { month: 'long', year: 'numeric' });

  // --- LOGIKA HELPER ---

  const isToday = (day: number) => {
    const now = new Date();
    return (
      day === now.getDate() &&
      month === now.getMonth() &&
      year === now.getFullYear()
    );
  };

  const isDateInEvent = (day: number) => {
    const checkDate = new Date(year, month, day);
    checkDate.setHours(0, 0, 0, 0);

    return events.some(event => {
      const start = new Date(event.startDate);
      start.setHours(0, 0, 0, 0);
      const end = event.endDate ? new Date(event.endDate) : start;
      end.setHours(0, 0, 0, 0);
      return checkDate >= start && checkDate <= end;
    });
  };

  const currentMonthEvents = events.filter(event => {
    const start = new Date(event.startDate);
    const end = event.endDate ? new Date(event.endDate) : start;
    const viewStart = new Date(year, month, 1);
    const viewEnd = new Date(year, month + 1, 0);
    return (start <= viewEnd && end >= viewStart);
  });

  // --- LOGIKA STRUKTUR KALENDER ---

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();
  const weeks: (number | null)[][] = [];
  let currentWeek: (number | null)[] = new Array(startDay).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  const nextMonth = () => {
    const next = new Date(year, month + 1, 1);
    if (next <= maxDate) setViewDate(next);
  };

  const prevMonth = () => {
    const prev = new Date(year, month - 1, 1);
    if (prev >= minDate) setViewDate(prev);
  };

  const now = new Date();
  const isPastMonth = viewDate < new Date(now.getFullYear(), now.getMonth(), 1);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FB935]/10 rounded-full mb-4">
            <CalendarIcon className="w-4 h-4 text-[#8FB935]" />
            <span className="text-sm text-[#8FB935] font-semibold">Jadwal OSMANSA</span>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Kalender Kegiatan</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* BAGIAN KALENDER UTAMA */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-[#8FB935] text-white px-8 py-7 flex items-center justify-between">
                <button onClick={prevMonth} disabled={viewDate <= minDate} className="p-2 hover:bg-white/20 rounded-xl transition-colors disabled:opacity-30">
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <h3 className="text-2xl font-black uppercase tracking-widest">{monthName}</h3>
                <button onClick={nextMonth} disabled={viewDate >= maxDate} className="p-2 hover:bg-white/20 rounded-xl transition-colors disabled:opacity-30">
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-7 gap-4 mb-6">
                  {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((d, index) => (
                    <div key={d} className={`text-center text-xs font-black uppercase tracking-tighter ${index === 0 ? 'text-red-500' : 'text-gray-400'}`}>
                      {d}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="grid grid-cols-7 gap-4">
                      {week.map((day, di) => {
                        const hasEv = day ? isDateInEvent(day) : false;
                        const isSunday = di === 0;
                        const itIsToday = day ? isToday(day) : false;

                        return (
                          <div key={di} className={`aspect-square flex flex-col items-center justify-center rounded-2xl transition-all border-2 relative
                            ${day ? 'cursor-pointer hover:scale-105 active:scale-95' : 'border-transparent'}
                            ${itIsToday 
                              ? 'border-blue-500 bg-white ring-4 ring-blue-50 shadow-inner' 
                              : hasEv ? 'bg-[#8FB935]/5 border-[#8FB935]/20' : 'border-gray-50 bg-gray-50/30'}
                          `}>
                            {day && (
                              <>
                                <span className={`text-lg font-bold ${hasEv ? 'text-[#8FB935]' : isSunday ? 'text-red-500' : 'text-gray-700'}`}>
                                  {day}
                                </span>
                                {hasEv && <div className="w-2 h-2 bg-[#8FB935] rounded-full mt-1"></div>}
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BAGIAN SIDEBAR EVENT */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sticky top-10">
              <div className="flex items-center gap-3 mb-8">
                {isPastMonth ? <Clock className="w-6 h-6 text-gray-400" /> : <CalendarIcon className="w-6 h-6 text-[#8FB935]" />}
                <h4 className="text-2xl font-black text-gray-900 tracking-tight">{isPastMonth ? 'Event Berlalu' : 'Daftar Event'}</h4>
              </div>
              
              <div className="space-y-5">
                {currentMonthEvents.length > 0 ? (
                  currentMonthEvents.map((event, i) => {
                    const eventDay = new Date(event.startDate).getDate();
                    const isEventToday = isToday(eventDay);

                    return (
                      <div key={i} className={`p-5 rounded-2xl border-2 transition-all ${isEventToday ? 'bg-blue-50 border-blue-200 shadow-md' : 'bg-gray-50 border-gray-100 hover:border-gray-200'}`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0 text-white shadow-lg ${isEventToday ? 'bg-blue-500' : isPastMonth ? 'bg-gray-400' : 'bg-[#8FB935]'}`}>
                            <span className="text-[10px] uppercase font-black">{new Date(event.startDate).toLocaleString('id-ID', { month: 'short' })}</span>
                            <span className="text-xl font-black leading-none">{eventDay}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <h5 className="font-extrabold text-gray-900 leading-tight truncate">{event.title}</h5>
                              {isEventToday && (
                                <span className="flex-shrink-0 text-[10px] bg-blue-600 text-white px-2 py-1 rounded-md font-black animate-pulse shadow-sm">HARI INI</span>
                              )}
                            </div>
                            <p className="text-[11px] text-gray-500 font-medium my-1">
                              {event.endDate 
                                ? `${new Date(event.startDate).getDate()} - ${new Date(event.endDate).getDate()} ${monthName}` 
                                : 'Satu Hari Penuh'}
                            </p>
                            <span className="inline-block text-[9px] px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-600 uppercase font-black tracking-wider">
                              {event.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12">
                    <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CalendarIcon className="w-8 h-8 text-gray-300" />
                    </div>
                    <p className="text-gray-400 font-medium italic">Tidak ada agenda bulan ini.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
