import "./WorkExperience.css";
import AnimatedSection from "./AnimatedSection";

export default function WorkExperience() {
  const experienceList = [
    {
      position: "Data Analyst",
      company: "S.P Madrid Corporation",
      period: "2026 - Present",
      description: [
        "Collects, cleans, and interprets data to deliver actionable insights. Designs reports, dashboards, and visual data representations.",
        "Collaborates with internal stakeholders to define and meet data requirements. Ensures strict data accuracy, quality, and process compliance.",
        "Automates workflows and manages data extraction from relational databases.",
      ],
    },
    {
      position: "Data Processing Associate",
      company: "Appen Services Philippines",
      period: "Sept 2024 - July 2025",
      description: [
        "Text Annotator for AI and Machine Learning projects.",
        "Analyzes consumer statements to determine their intent.",
        "Categorizes consumer intentions according to the objective of their inquiry.",
      ],
    },
    {
      position: "Internship",
      company: "Hayakawa Electronics (Phils) Corp. (HEPC)",
      period: "Aug 2023 - Sept 2023",
      description: [
        "Assists with data input and document management with accuracy and discretion.",
        "Provide project details to the supervisor and line manager.",
        "Issue and Return Applicator Database.",
      ],
    },
  ];

  return (
    <section id="experience-section" className="experience-section">
      <div className="experience-container">
        <h1 className="experience-title">Work Experience</h1>

        <div className="experience-grid">
          {experienceList.map((job, index) => (
            <AnimatedSection
              key={index}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
            >
              <article className="experience-card">
                <div className="experience-header">
                  <h2 className="experience-position">{job.position}</h2>
                  <span className="experience-period">{job.period}</span>
                </div>

                <h3 className="experience-company">{job.company}</h3>

                <ul className="experience-description">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}