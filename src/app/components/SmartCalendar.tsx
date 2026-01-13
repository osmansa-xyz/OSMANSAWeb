import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';

interface Event {
  date: string; // Format: YYYY-MM-DD agar mudah dibandingkan
  title: string;
  type: 'religious' | 'holiday' | 'sports' | 'general';
}

const events: Event[] = [
  { date: '2025-08-17', title: 'HUT RI Ke-80', type: 'holiday' },
  { date: '2025-08-19', title: 'Sertijab', type: 'general'},
  { date: '2025-12-08', title: 'Liga MAN', type: 'sports'},
  { date: '2025-12-09', title: 'Liga MAN', type: 'sports'},
  { date: '2025-12-10', title: 'Liga MAN', type: 'sports'},
  { date: '2025-12-11', title: 'Liga MAN', type: 'sports'},
  { date: '2025-12-12', title: 'Liga MAN', type: 'sports'},
  { date: '2025-12-13', title: 'Liga MAN', type: 'sports'},
  { date: '2025-12-15', title: 'Liga MAN', type: 'sports'},
  { date: '2025-12-16', title: 'Liga MAN', type: 'sports'},
  { date: '2025-12-17', title: 'Liga MAN', type: 'sports'},
  { date: '2025-12-18', title: 'Liga MAN', type: 'sports'},
  { date: '2026-01-15', title: 'Peringatan Isra Miraj', type: 'religious' },
  { date: '2026-01-16', title: 'Libur Isra Miraj', type: 'holiday' },
  { date: '2026-08-17', title: 'HUT RI Ke-81', type: 'general' },
];

export function SmartCalendar() {
  // Set default view ke bulan sekarang
  const [viewDate, setViewDate] = useState(new Date());

  const minDate = new Date(2025, 7, 1); // Agustus 2025
  const maxDate = new Date(2026, 7, 31); // Agustus 2026

  // Mendapatkan info bulan yang sedang dilihat
  const month = viewDate.getMonth();
  const year = viewDate.getFullYear();
  const monthName = viewDate.toLocaleString('id-ID', { month: 'long', year: 'numeric' });

  // Logika pembuatan grid kalender
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

  // Navigasi
  const nextMonth = () => {
    const next = new Date(year, month + 1, 1);
    if (next <= maxDate) setViewDate(next);
  };

  const prevMonth = () => {
    const prev = new Date(year, month - 1, 1);
    if (prev >= minDate) setViewDate(prev);
  };

  // Filter Event berdasarkan bulan yang tampil & status waktu
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isPastMonth = viewDate < new Date(today.getFullYear(), today.getMonth(), 1);
  
  const currentMonthEvents = events.filter(e => {
    const eventDate = new Date(e.date);
    return eventDate.getMonth() === month && eventDate.getFullYear() === year;
  });

  const hasEvent = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.some(e => e.date === dateStr);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FB935]/10 rounded-full mb-4">
            <CalendarIcon className="w-4 h-4 text-[#8FB935]" />
            <span className="text-sm text-[#8FB935]">OSMANSA Schedule</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Smart Calendar</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden">
              <div className="bg-[#8FB935] text-white px-8 py-6 flex items-center justify-between">
                <button 
                  onClick={prevMonth}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-30"
                  disabled={viewDate <= minDate}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-bold uppercase tracking-wide">{monthName}</h3>
                <button 
                  onClick={nextMonth}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-30"
                  disabled={viewDate >= maxDate}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(day => (
                    <div key={day} className="text-center text-xs font-bold text-gray-400 py-2 uppercase">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="grid grid-cols-7 gap-2">
                      {week.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`aspect-square flex flex-col items-center justify-center rounded-xl transition-all border
                            ${day ? 'hover:bg-gray-50 cursor-pointer' : 'border-transparent'}
                            ${day && hasEvent(day) ? 'bg-[#8FB935]/5 border-[#8FB935]/30' : 'border-gray-50'}
                          `}
                        >
                          {day && (
                            <>
                              <span className={`font-medium ${hasEvent(day) ? 'text-[#8FB935]' : 'text-gray-700'}`}>{day}</span>
                              {hasEvent(day) && <div className="w-1.5 h-1.5 bg-[#8FB935] rounded-full mt-1"></div>}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-6">
                {isPastMonth ? <Clock className="w-5 h-5 text-gray-400" /> : <CalendarIcon className="w-5 h-5 text-[#8FB935]" />}
                <h4 className="text-xl font-bold text-gray-900">
                  {isPastMonth ? 'Past Events' : 'Upcoming Events'}
                </h4>
              </div>
              
              <div className="space-y-4">
                {currentMonthEvents.length > 0 ? (
                  currentMonthEvents.map((event, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#8FB935]/30 transition-all">
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center flex-shrink-0 text-white ${isPastMonth ? 'bg-gray-400' : 'bg-[#8FB935]'}`}>
                          <span className="text-[10px] uppercase font-bold">{viewDate.toLocaleString('default', { month: 'short' })}</span>
                          <span className="font-bold leading-none">{new Date(event.date).getDate()}</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 leading-tight mb-1">{event.title}</h5>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-500 uppercase font-semibold">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400 italic text-sm">
                    Tidak ada event di bulan ini.
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
