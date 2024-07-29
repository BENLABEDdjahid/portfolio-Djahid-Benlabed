import "./HomePage.css";

export default function Home() {
  return (
    <div className="home-page">
      <img className="profile-pic" src="/pictures/profile.jpg" alt="Profile" />
      <div className="intro">Bienvenue sur mon Portfolio</div>
      <p>Je suis Djahid Benlabed, Développeur Web spécialisé. Voici un aperçu professionnel de mes compétences et projets</p>
      <div className="skills-container">
        <h2>Compétences</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="skills-container">
        <h2>Frameworks</h2>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Express</li>
          <li>Redux</li>
        </ul>
      </div>
    </div>
  );
}
