import "./ProjectPage.css";
import Link from "next/link";

function page() {
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      image: "/pictures/project1.jpg", // Update with the correct image path
    },
    {
      id: 2,
      title: "Projet 2",
      image: "/pictures/project2.jpg", // Update with the correct image path
    },
  ];

  return (
    <div className="ProjectPage">
      <h1 className="text">Mes Projets</h1>
      <div className="project-container">
        {projects.map((project, i) => (
          <Link href={`/projets/${project.id}`} className="project-link" key={i}>
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
