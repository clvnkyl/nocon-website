import './Header.css';
import profilePic from '../assets/profilePic.png';
import hoveredPic from '../assets/profilePicHovered.png';
import { useState } from "react";

 export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
        <div id='home-section' className='headerContainer'>
            <header>
            <h1>Hi, I am Calvin Kyle F. Nocon</h1>
            <h2>Computer Engineer | Aspiring Web Developer</h2>
            <div className='headerButtons'>
                <button className='myResume'>Resume</button>
                <button className='myCertificates'>Certificates</button>
            </div>
            </header>
            <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <img 
              src={isHovered ?  hoveredPic : profilePic}
              className='profilePic'
              alt="my-picture" />
            </div>
        </div>
    </>
  )
}
