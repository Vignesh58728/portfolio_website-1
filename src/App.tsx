import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Milestones } from './components/Milestones';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// BackgroundLines removed as it is unused
import { StarsBackground } from './components/ui/stars-background';
import { ShootingStars } from './components/ui/shooting-stars';
import { TechStack } from './components/TechStack';

import { Timeline } from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-black w-full flex flex-col relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="relative z-10 w-full">
        <Header />
        <main>
          <Hero />
          <TechStack />
          <About />
          <Milestones />
          <Timeline />
          <Resume />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
