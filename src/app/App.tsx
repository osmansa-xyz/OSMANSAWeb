import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhatCanYouFind } from './components/WhatCanYouFind';
import { SmartCalendar } from './components/SmartCalendar';
import { VisionMission } from './components/VisionMission';
import { OrganizationalStructure } from './components/OrganizationalStructure';
import { Departments } from './components/Departments';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <WhatCanYouFind />
        <SmartCalendar />
        <VisionMission />
        <OrganizationalStructure />
        <Departments />
      </main>
      <Footer />
    </div>
  );
}
