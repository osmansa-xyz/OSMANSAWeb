import { Calendar, Megaphone, Briefcase, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Work Programs',
    description: 'Discover our strategic initiatives designed to empower students and strengthen the madrasah community. Each program is carefully crafted to align with Islamic values while fostering leadership and innovation.'
  },
  {
    icon: Calendar,
    title: 'Smart Calendar',
    description: 'Never miss an important event with our interactive calendar system. Stay updated on upcoming activities, religious celebrations, and organizational meetings all in one convenient place.'
  },
  {
    icon: Megaphone,
    title: 'News Engine',
    description: 'Get real-time updates on campus happenings, student achievements, and organizational announcements. Our news engine keeps you connected to what matters most in our madrasah community.'
  },
  {
    icon: MessageCircle,
    title: 'Feedback Portal',
    description: 'Your voice matters to us. Share your ideas, suggestions, and concerns through our dedicated feedback system, ensuring every student has a platform to contribute to OSMANSA\'s growth.'
  }
];

export function WhatCanYouFind() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What Can You Find Here?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From event schedules to spaces for your ideas, everything you need to know about OSMANSA is right here. Let's explore!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-[#8FB935] hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#8FB935]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#8FB935] transition-colors">
                  <Icon className="w-7 h-7 text-[#8FB935] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
