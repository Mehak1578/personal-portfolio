import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "World Countries Data",
      subtitle: "Data-Driven Web Application",
      description:
        "A browser-based, interactive web application built using HTML, CSS, and pure JavaScript. It allows users to explore and analyze world country data through search, sorting, and visual representation.",
      features: [
        "Real-time search by country name, capital, or language",
        "Displays country details including flag, capital, languages, and population",
        "Sorting functionality by name, capital, and population",
        "Clean and responsive card-based user interface",
        "Pure JavaScript DOM manipulation without external libraries",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "DOM"],
      liveLink: "https://web-countries-api-viewer.netlify.app/",
      githubLink: "https://github.com/Mehak1578/World-Countries-Data-Explorer",
    },
    {
      id: 2,
      title: "Sewa Bazaar",
      subtitle: "Full-Stack E-Commerce Platform",
      description:
        "A full-stack grocery e-commerce platform developed collaboratively to bring fresh groceries and daily essentials online. The project includes a responsive storefront, product management, admin functionality, delivery workflows, and backend integration.",
      features: [
        "Responsive e-commerce interface for browsing and ordering products",
        "Product and category management",
        "Admin functionality for managing platform operations",
        "Delivery and order management workflows",
        "Backend APIs and database integration",
      ],
      techStack: ["Next.js", "Node.js", "Express.js", "MySQL", "WebSocket"],
      liveLink: "https://sewabazaar.in/",
      githubLink: "https://github.com/kri650/sewa-bazaar.git",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">Recent work and side projects</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-description">{project.description}</p>

            <ul className="project-features">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
