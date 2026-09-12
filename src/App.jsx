import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation / Header */}
      <header className="navbar">
        <div className="logo">cw-dev.de</div>
        <nav>
          <a href="#projects">Projekte</a>
          <a href="#skills">Tech Stack</a>
        </nav>
      </header>

      {/* Hauptinhalt */}
      <main>
        <Hero />

        {/* Projekt-Sektion */}
        <section id="projects" className="projects-section">
          <h2>Meine Projekte</h2>
          <div className="project-grid">
            
            {/* Projekt 1: Portfolio */}
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>Diese Website – gebauet mit React, Vite und optimiert für GitHub Pages unter eigener Custom Domain.</p>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">Git</span>
            </div>

            {/* Projekt 2: Demnächst dein Fitness Tracker */}
            <div className="project-card coming-soon">
              <h3>Fitness Tracker</h3>
              <p>Demnächst hier zu finden unter <code>fit.cw-dev.de</code>: Ein Tool zum Aufzeichnen von Trainingsgewichten und Wiederholungen.</p>
              <span className="tech-tag">In Entwicklung</span>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Christian Wegner. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default App;