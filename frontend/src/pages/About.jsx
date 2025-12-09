import { useState } from 'react';
import './About.css';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const skillCategories = [
    { category: 'Frontend', skills: ['React.js', 'Tailwind CSS'] },
    { category: 'Backend', skills: ['Node.js', 'Express.js'] },
    { category: 'Database', skills: ['MongoDB', 'Mongoose'] },
    { category: 'Tools', skills: ['Git', 'GitHub', 'Postman'] },
    { category: 'Other Skills', skills: ['REST APIs', 'Authentication', 'Responsive Design'] }
  ];

  return (
    <div className="about-container fade-in">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Mehak</h1>
            <h2 className="hero-title">Full Stack Developer | AI & Web Technologies Enthusiast</h2>
            <p className="hero-intro">
              A highly motivated and detail-oriented BCA student passionate about building scalable web applications 
              and AI-driven solutions. Skilled in building responsive UIs, secure backend systems, REST APIs, and 
              working with databases.
            </p>
            <a href="/resume.pdf" download className="btn-download">
              Download Resume
            </a>
          </div>
          
          <div className="hero-image-container">
            <div className={`hero-image-wrapper ${imageLoaded ? 'loaded' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500&h=500&fit=crop"
                alt="Mehak Profile"
                className="hero-image"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
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
                  <span key={idx} className="skill-item">{skill}</span>
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
