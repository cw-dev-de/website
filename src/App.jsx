import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-logo">CW.DEV</div>
          <div className="nav-links">
            <a href="#projects">Leistungen</a>
            <a href="#skills">Tech Stack</a>
            <a href="#contact">Kontakt</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>

      <Contact />
    </>
  );
}

export default App;