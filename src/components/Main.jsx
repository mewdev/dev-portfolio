import Hero from '../components/sections/Hero';
import Work from '../components/sections/Work';
import Techstack from '../components/sections/Techstack';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export default function Main() {
  return (
    <main>
      <div className="App">
        <Hero />
        <Work />
        <Techstack />
        <About />
        <Contact />
      </div>
    </main>
  );
}
