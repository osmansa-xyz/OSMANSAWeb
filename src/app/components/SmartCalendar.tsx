import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface Event {
  date: number;
  title: string;
  type: 'religious' | 'holiday' | 'sports' | 'general';
}

const events: Event[] = [
  { date: 15, title: 'Peringatan Isra Miraj', type: 'religious' },
  { date: 16, title: 'Isra Miraj', type: 'holiday' }
];

export function SmartCalendar() {
  const [currentMonth] = useState(0); // 0 = January 2026
  
  const monthName = 'January 2026';
  const daysInMonth = 31;
  const startDay = 4; // January 1, 2026 starts on Thursday (0=Sunday)
  
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
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  const hasEvent = (day: number) => events.some(e => e.date === day);
  const getEventForDay = (day: number) => events.find(e => e.date === day);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FB935]/10 rounded-full mb-4">
            <CalendarIcon className="w-4 h-4 text-[#8FB935]" />
            <span className="text-sm text-[#8FB935]">Stay Organized</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Smart Calendar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track all OSMANSA events and activities in one place
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Widget */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-[#8FB935] text-white px-8 py-6">
                <div className="flex items-center justify-between">
                  <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <h3 className="text-2xl font-bold">{monthName}</h3>
                  <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="p-8">
                {/* Weekday Headers */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="space-y-2">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="grid grid-cols-7 gap-2">
                      {week.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`
                            aspect-square flex flex-col items-center justify-center rounded-xl transition-all
                            ${day ? 'hover:bg-gray-50 cursor-pointer' : ''}
                            ${hasEvent(day || 0) ? 'bg-[#8FB935]/5 border-2 border-[#8FB935]/30' : 'border border-gray-100'}
                          `}
                        >
                          {day && (
                            <>
                              <span className="text-gray-900">{day}</span>
                              {hasEvent(day) && (
                                <div className="w-2 h-2 bg-[#8FB935] rounded-full mt-1"></div>
                              )}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-6 px-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#8FB935] rounded-full"></div>
                <span className="text-sm text-gray-600">Event Scheduled</span>
              </div>
            </div>
          </div>

          {/* Agenda List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 p-6 sticky top-6">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h4>
              
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-[#8FB935]/5 transition-colors border border-gray-100 hover:border-[#8FB935]/30 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-[#8FB935] text-white rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xs">JAN</span>
                        <span className="font-bold">{event.date}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-gray-900 mb-1">{event.title}</h5>
                        <span className={`
                          inline-block text-xs px-2 py-1 rounded-full
                          ${event.type === 'religious' ? 'bg-purple-100 text-purple-700' : ''}
                          ${event.type === 'holiday' ? 'bg-blue-100 text-blue-700' : ''}
                          ${event.type === 'sports' ? 'bg-orange-100 text-orange-700' : ''}
                          ${event.type === 'general' ? 'bg-gray-200 text-gray-700' : ''}
                        `}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
