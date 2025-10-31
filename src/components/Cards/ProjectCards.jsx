import './ProjectCards.css'
// import { ReactComponent as ProjectIcon } from '../../assets/in-progress-warning-svgrepo-com.svg';
import projectCardImage from '../../assets/in-progress-warning-svgrepo-com.svg'
import { BiImage } from "react-icons/bi";
import AnimatedSection from './../AnimatedSection'


function ProjectCards({ image = projectCardImage, name = "Project Name", description = "Project description goes here"}) {
  return (
    <AnimatedSection animation="slide-left">
      <div className="project-card">
        <BiImage className='image'/>
        <h2>{name}</h2>
        <p>{description}.</p>
      </div>  
    </AnimatedSection>
      
  )
}

export default ProjectCards
