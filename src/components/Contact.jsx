const Contact = () => {
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--surface-color)', padding: '6rem 0 3rem 0', textAlign: 'center' }}>
      <div className="container">
        <h2>Lass uns über dein Projekt sprechen.</h2>
        <p>Schreib mir eine E-Mail und wir klären die Details.</p>
        
        <div style={{ marginTop: '2rem' }}>
          <a href="mailto:kontakt@cw-dev.de" className="btn-primary">E-Mail schreiben</a>
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #2a2d35' }}>
          <a href="/impressum" style={{ color: 'var(--text-secondary)' }}>Impressum</a>
          <a href="/datenschutz" style={{ color: 'var(--text-secondary)', marginLeft: '1rem' }}>Datenschutz</a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;