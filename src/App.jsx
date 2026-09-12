import Hero from './components/Hero';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-wrapper">
      {/* Navigation mit Glass-Effekt */}
      <nav className="glass-nav">
        <div className="nav-container">
          <a href="#home" className="nav-brand">cw-dev.de</a>
          <div className="nav-links">
            <a href="#about">Skills</a>
            <a href="#projects">Projekte</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        {/* Tech Stack Sektion */}
        <section id="about" className="section-container">
          <h2 className="section-title">Tech Stack & Tools</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend & Web</h3>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Vite</span>
                <span className="tag">JavaScript</span>
                <span className="tag">HTML / CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend & Enterprise</h3>
              <div className="tags">
                <span className="tag">SAP ABAP</span>
                <span className="tag">Core Data Services (CDS)</span>
                <span className="tag">Datenbankstrukturen</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>DevOps & Architektur</h3>
              <div className="tags">
                <span className="tag">Git / GitHub Actions</span>
                <span className="tag">Linux</span>
                <span className="tag">Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projekt Sektion */}
        <section id="projects" className="section-container">
          <h2 className="section-title">Aktuelle Projekte</h2>
          <div className="projects-grid">
            
            <article className="project-card">
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>Persönliche Entwickler-Präsenz. Hochperformant gebaut mit React und Vite, automatisiert deployed via GitHub Actions auf einer Custom Domain.</p>
                <div className="project-tech">
                  <span>React</span><span>Vite</span><span>CI/CD</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-status">In Entwicklung</div>
              <div className="project-content">
                <h3>Fitness & Workout Tracker</h3>
                <p>Eine Web-App zur präzisen Erfassung von Trainingsgewichten, Volumina und Wiederholungen (geplant unter <code>fit.cw-dev.de</code>).</p>
                <div className="project-tech">
                  <span>React State</span><span>Docker</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-status">Konzept</div>
              <div className="project-content">
                <h3>Automotive Lifestyle Brand</h3>
                <p>Konzeption und Autodesk-Modellierung für ein eigenständiges Premium-Produkt im Fahrzeug-Zubehör-Segment.</p>
                <div className="project-tech">
                  <span>Autodesk</span><span>Prototyping</span>
                </div>
              </div>
            </article>

          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Christian Wegner. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  );
}