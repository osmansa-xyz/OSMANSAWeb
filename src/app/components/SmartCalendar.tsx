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

  const minDate = new Date(2025, 7, 1);
  const maxDate = new Date(2026, 7, 31);

  const month = viewDate.getMonth();
  const year = viewDate.getFullYear();
  const monthName = viewDate.toLocaleString('id-ID', { month: 'long', year: 'numeric' });

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

  const today = new Date();
  const isPastMonth = viewDate < new Date(today.getFullYear(), today.getMonth(), 1);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FB935]/10 rounded-full mb-4">
            <CalendarIcon className="w-4 h-4 text-[#8FB935]" />
            <span className="text-sm text-[#8FB935]">Jadwal OSMANSA</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Kalender Kegiatan</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden">
              <div className="bg-[#8FB935] text-white px-8 py-6 flex items-center justify-between">
                <button onClick={prevMonth} disabled={viewDate <= minDate} className="p-2 hover:bg-white/20 rounded-lg disabled:opacity-30">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-bold uppercase tracking-wide">{monthName}</h3>
                <button onClick={nextMonth} disabled={viewDate >= maxDate} className="p-2 hover:bg-white/20 rounded-lg disabled:opacity-30">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((d, index) => (
                    <div key={d} className={`text-center text-xs font-bold uppercase ${index === 0 ? 'text-red-500' : 'text-gray-400'}`}>
                      {d}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="grid grid-cols-7 gap-2">
                      {week.map((day, di) => {
                        const hasEv = day ? isDateInEvent(day) : false;
                        const isSunday = di === 0;
                        return (
                          <div key={di} className={`aspect-square flex flex-col items-center justify-center rounded-xl transition-all border 
                            ${day ? 'hover:bg-gray-50 cursor-pointer' : 'border-transparent'}
                            ${hasEv ? 'bg-[#8FB935]/10 border-[#8FB935]/40' : 'border-gray-50'}`}>
                            {day && (
                              <>
                                <span className={`font-medium ${hasEv ? 'text-[#8FB935]' : isSunday ? 'text-red-600' : 'text-gray-700'}`}>
                                  {day}
                                </span>
                                {hasEv && <div className="w-1.5 h-1.5 bg-[#8FB935] rounded-full mt-1"></div>}
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

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-6">
                {isPastMonth ? <Clock className="w-5 h-5 text-gray-400" /> : <CalendarIcon className="w-5 h-5 text-[#8FB935]" />}
                <h4 className="text-xl font-bold text-gray-900">{isPastMonth ? 'Event Berlalu' : 'Event Mendatang'}</h4>
              </div>
              <div className="space-y-4">
                {currentMonthEvents.length > 0 ? (
                  currentMonthEvents.map((event, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center flex-shrink-0 text-white ${isPastMonth ? 'bg-gray-400' : 'bg-[#8FB935]'}`}>
                          <span className="text-[10px] uppercase font-bold">{new Date(event.startDate).toLocaleString('id-ID', { month: 'short' })}</span>
                          <span className="font-bold leading-none">{new Date(event.startDate).getDate()}</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 leading-tight mb-1">{event.title}</h5>
                          <p className="text-[10px] text-gray-500 mb-1">
                            {event.endDate ? `${new Date(event.startDate).getDate()} - ${new Date(event.endDate).getDate()} ${monthName}` : 'Satu Hari'}
                          </p>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-500 uppercase font-semibold">{event.type}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400 italic text-sm">Tidak ada event bulan ini.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
