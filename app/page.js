export default function Home() {
  return (
    <>
      <section id="about">
        <h2>About Me</h2>
        <p>
          I&apos;m a B.Tech student at Gayatri Vidya Parishad College of Engineering,
          passionate about solving real-world problems using code. I&apos;ve developed a
          water delivery app and specialize in Java, SQL, DSA, Python, and C.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          {['Java', 'SQL', 'DSA', 'Python', 'C'].map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div>
          <h3>💧 Water Delivery App</h3>
          <p>A real-time app for managing water delivery orders with tracking and payment integration.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>📧 Email: <a href="mailto:chinnuchandan11@gmail.com">chinnuchandan11@gmail.com</a></p>
        <p>🌐 GitHub: <a href="https://github.com/your-username">github.com/your-username</a></p>
        <p>💼 LinkedIn: <a href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a></p>
      </section>
    </>
  );
}
