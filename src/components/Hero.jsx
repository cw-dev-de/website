export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="badge">Softwareentwickler (Azubi)</div>
        <h1 className="hero-title">
          Hi, ich bin <span className="text-gradient">Christian</span>.
        </h1>
        <p className="hero-subtitle">
          Angehender Fachinformatiker für Anwendungsentwicklung im zweiten Lehrjahr. 
          Mein Fokus liegt auf der Entwicklung effizienter Architekturen – von komplexen 
          Backend-Prozessen im SAP-Ökosystem bis hin zu modernen, reaktiven Web-Anwendungen.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">Projekte ansehen</a>
          <a 
            href="https://github.com/cw-dev-de" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
          >
            GitHub Profil
          </a>
        </div>
      </div>
    </section>
  );
}