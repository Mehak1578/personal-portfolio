import "./About.css";

const About = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    { category: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Database", skills: ["MongoDB", "Mongoose"] },
    {
      category: "Programming & DSA",
      skills: ["Python", "Data Structures & Algorithms"],
    },
    { category: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code"] },
    {
      category: "Other Skills",
      skills: [
        "Problem-Solving",
        "Responsive Design",
        "Communication",
        "Teamwork",
      ],
    },
  ];

  return (
    <div className="about-container fade-in">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Mehak</h1>
            <h2 className="hero-title">
              Full Stack Developer | Web Technologies Enthusiast
            </h2>
            <p className="hero-intro">
              BCA student and aspiring Full Stack Developer with hands-on
              experience building responsive web applications using modern web
              technologies. Passionate about learning, problem-solving, and
              creating real-world solutions.
            </p>
            <a
              href="https://drive.google.com/file/d/1g8VTe61JfuEwmFKH-tJB_p_V2ZIucEAe/view?usp=sharing"
              download
              className="btn-download"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="highlights-section">
        <div className="highlight-card">
          <div className="highlight-icon">🎓</div>
          <h3>BCA Student</h3>
          <p>Pursuing Bachelor's in Computer Applications</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">💻</div>
          <h3>Full Stack Dev</h3>
          <p>Building web apps with modern technologies</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">🚀</div>
          <h3>Quick Learner</h3>
          <p>Passionate about exploring new tech</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="skills-heading">Skills & Technologies</h2>
        <div className="skills-container">
          {skillCategories.map((item, index) => (
            <div
              key={index}
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="skill-card-title">{item.category}</h3>
              <div className="skill-list">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
