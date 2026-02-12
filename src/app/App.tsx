import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { VisionMission } from './components/VisionMission';
import { OrganizationalStructure } from './components/OrganizationalStructure';
import { Departments } from './components/Departments';
import { Contacts} from './components/Contacts';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <VisionMission />
        <OrganizationalStructure />
        <Departments />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
