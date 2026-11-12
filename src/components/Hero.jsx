const Hero = () => {
  return (
    <section id="hero" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container">
        <h1>Webentwicklung.<br />Clean Code. Echtes Design.</h1>
        <p style={{ maxWidth: '600px' }}>
          Ich entwickle performante, skalierbare Webanwendungen und nutzerzentrierte Interfaces. 
          Kein Baukasten-System, sondern maßgeschneiderter Code, der genau das macht, was er soll.
        </p>
        <a href="#contact" className="btn-primary">Projekt anfragen</a>
      </div>
    </section>
  );
};

export default Hero;