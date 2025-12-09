import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ask Gemini",
      subtitle: "Full Stack AI Chat Application",
      description: "Multi-session AI chat app with persistent message history and glassmorphic UI design.",
      features: [
        "Multi-session AI chat with persistent message history",
        "Glassmorphic UI with sidebar and responsive design",
        "Integrated Gemini API with retry logic and error handling",
        "Backend REST APIs for storing/sending chat history",
        "Clean UX with smooth transitions"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
      liveLink: "https://gemini-project-1.onrender.com",
      githubLink: "https://github.com/Mehak1578/Gemini-project"
    },
    {
      id: 2,
      title: "CureLink",
      subtitle: "Healthcare Management Platform",
      description: "Platform for uploading, viewing, and analyzing medical reports with JWT authentication.",
      features: [
        "Upload, view, and analyze medical reports",
        "JWT authentication and protected routes",
        "Dashboards for patients and doctors",
        "Backend APIs for reports and AI categorization",
        "Fully responsive interface"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      liveLink: "https://project-curelink-1.onrender.com",
      githubLink: "https://github.com/Mehak1578/Project-CureLink"
    }
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
                <span key={idx} className="tech-badge">{tech}</span>
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
