import "./Skills.css";

function Skills() {
  const skillCategories = {
    "Programming Languages": [ "C#","Java","Visual Basic","JavaScript","HTML","CSS"],

    "Hardware & Tools": ["Arduino","AutoCAD","Computer Troubleshooting","Video Editing"],

    "Database & Software": ["SQL","Database Management","Software Proficiency"],

    "Soft Skills": ["Organization","Time Management","Independence","Collaboration","Attention to Detail","Analytical Thinking","Problem Solving","Teamwork"]
  };

  return (
    <section id="skill-section" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
