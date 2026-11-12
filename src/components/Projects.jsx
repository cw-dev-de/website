const Projects = () => {
  return (
    <section id="projects" className="section-bg">
      <div className="container">
        <h2>Meine Leistungen</h2>
        <div className="grid">
          <div className="card">
            <h3>Custom Web Apps</h3>
            <p>
              Entwicklung von interaktiven Single-Page-Applications (SPA) mit React. 
              Schnell, modern und exakt auf deine Anforderungen zugeschnitten.
            </p>
          </div>
          <div className="card">
            <h3>Backend & Schnittstellen</h3>
            <p>
              Saubere Datenverarbeitung und API-Integrationen (REST, OData). 
              Sichere und performante Architektur im Hintergrund.
            </p>
          </div>
          <div className="card">
            <h3>UI / UX Design</h3>
            <p>
              Von der ersten Wireframe-Skizze bis zum fertigen Interface. 
              Ich gestalte Webseiten, die gut aussehen und intuitiv bedienbar sind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;