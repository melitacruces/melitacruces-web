import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import GlobalCursor from '@/components/GlobalCursor';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';

export default function App() {
  return (
    <div className="font-sans antialiased text-foreground bg-background min-h-screen">
      <GlobalCursor />
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
