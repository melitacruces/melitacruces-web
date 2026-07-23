import { Header, Footer } from '@/layout';
import { Hero, About, Education, Skills, Projects, Experience } from '@/sections';
import { useSectionScrollSync } from '@/hooks/useSectionScrollSync';

export default function App() {
  useSectionScrollSync();

  return (
    <div className="font-sans antialiased text-foreground bg-background min-h-screen">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 w-full relative overflow-x-hidden">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
        </main>

        <Footer />
      </div>
    </div>
  );
}
