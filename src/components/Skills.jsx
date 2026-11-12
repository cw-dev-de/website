const Skills = () => {
  const technologies = [
    'React', 'JavaScript / TypeScript', 'HTML5 & CSS3', 
    'REST APIs', 'Git / GitHub', 'Node.js'
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Mein Tech Stack</h2>
        <p>Die Technologien, mit denen ich arbeite, um robuste Lösungen zu bauen:</p>
        <div className="stack-grid">
          {technologies.map(tech => (
            <div key={tech} className="tag">{tech}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;