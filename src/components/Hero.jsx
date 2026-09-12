function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">Anwendungsentwickler in Ausbildung</span>
        <h1>Hi, ich bin <span className="highlight">Christian</span></h1>
        <p>
          Willkommen auf meinem persönlichen Tech-Hub. Hier dokumentiere ich meinen Weg 
          durch die Softwareentwicklung, moderne Web-Architekturen und Linux-Systeme.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">Projekte ansehen</a>
          <a href="https://github.com/cw-dev-de" target="_blank" rel="noreferrer" className="btn secondary">GitHub Profil</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;