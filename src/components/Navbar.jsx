import './Navbar.css'
import logo from '../assets/CKLogo3.png'

export default function Navbar() {
  return (
    <nav className="navBar">
      <img className='logo' src={logo} alt="CK" />
      <ul className="navLinks">
        <li><a className="listItems" href="#home-section">Home</a></li>
        <li><a className="listItems" href="#projects-section">Projects</a></li>
        <li><a className="listItems" href="#certificate-section">Certificates</a></li>
        <li><a className="listItems" href="#skill-section">Skills</a></li>
        <li><a className="listItems" href="#contacts-section">Contact</a></li>
      </ul>
    </nav>
  )
}
