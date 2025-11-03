import { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../assets/CKLogo3.png';
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔹 This effect adds/removes the "menu-open" class on the body
  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
  }, [isOpen]);

  return (
    <nav className="navBar">
      <img className="logo" src={logo} alt="CK" />

      {/* Hamburger button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation links */}
      <ul className={`navLinks ${isOpen ? "open" : ""}`}>
        <li><a className="listItems" href="#home-section" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a className="listItems" href="#projects-section" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a className="listItems" href="#certificate-section" onClick={() => setIsOpen(false)}>Certificates</a></li>
        <li><a className="listItems" href="#skill-section" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a className="listItems" href="#contacts-section" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}
