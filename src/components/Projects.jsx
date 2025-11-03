import "./Projects.css";
import ProjectCards from "./Cards/ProjectCards.jsx";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  const projectList = [
    {
      name: "Project: A",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      name: "Project: B",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      name: "Project: C",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];

  return (
    <section id="projects-section" className="projects-container">
      <h1 className="projects-title">Projects</h1>

      
      <AnimatedSection animation="slide-left">
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <AnimatedSection key={index} animation="slide-right">
              <ProjectCards
                name={project.name}
                description={project.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
