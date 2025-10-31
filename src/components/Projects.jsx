import './Projects.css'
import ProjectCards from './Cards/ProjectCards.jsx'

export default function Projects() {
  return (
    <>
      <div id='projects-section' className="projectsContainer">
        <h1>Projects</h1>
          <div className="projectsGrid">
            <ProjectCards name="Project: A" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>

            <ProjectCards name="Project: B" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>
            
            <ProjectCards name="Project: C" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>

          </div>
      </div>
    </>
  )
}

