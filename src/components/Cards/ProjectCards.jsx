import './ProjectCards.css'
import projectCardImage from '../../assets/in-progress-warning-svgrepo-com.svg'

function ProjectCards({ image = projectCardImage, name = "Project Name", description = "Project description goes here"}) {
  return (
    <div className="project-card">
      <img src={image} alt="project preview" className="image" />
      <h2>{name}</h2>
      <p>{description}.</p>
    </div>
  )
}

export default ProjectCards
