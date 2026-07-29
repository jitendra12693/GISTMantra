import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo-wrap" onClick={closeMenu}>
        <img src={logo} alt="GIST Mantra Logo" className="logo-img" />
        <span className="logo-text">GIST <span className="logo-text-accent">Mantra</span></span>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Dark backdrop behind menu */}
      <div
        className={`menu-overlay ${menuOpen ? "visible" : ""}`}
        onClick={closeMenu}
      ></div>

      <ul className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
        <li className="mobile-only-brand">
          <img src={logo} alt="GIST Mantra" className="mobile-menu-logo" />
          <span>GIST Mantra</span>
        </li>
        <li><a href="#home" onClick={closeMenu}><span className="dot dot-blue"></span>Home</a></li>
        <li><a href="#about" onClick={closeMenu}><span className="dot dot-teal"></span>About</a></li>
        <li><a href="#capabilities" onClick={closeMenu}><span className="dot dot-orange"></span>Capabilities</a></li>
        <li><a href="#why-partner" onClick={closeMenu}><span className="dot dot-blue"></span>Why Us</a></li>
        <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}



