import './Header.css';
import profilePic from '../assets/profilePic.png';
import hoveredPic from '../assets/profilePicHovered.png';
import { useState } from "react";
import resume from '../Certificates/CALVIN KYLE F. NOCON RESUME.pdf'

 export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
        <section id='home-section' className='header-section'>
            <div className='header-container'>
              <header className='header-title'>
                <h1>Hi, I am Calvin Kyle F. Nocon</h1>
                <h2>Computer Engineer | Aspiring Web Developer</h2>
                <div className='header-buttons-container'>
                  <a href={resume} target="_blank" rel="noopener noreferrer"><button href="" className='myResume'>Save my Resume</button></a>
                </div>
              </header>
              <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img 
                src={isHovered ?  hoveredPic : profilePic}
                className='profilePic'
                alt="my-picture" />
              </div>
            </div>
        </section>
    </>
  )
}