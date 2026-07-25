import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo-wrap">
        <img src={logo} alt="GIST Mantra Logo" className="logo-img" />
        <span className="logo-text">GIST <span className="logo-text-accent">Mantra</span></span>
      </a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#capabilities">Capabilities</a></li>
        <li><a href="#why-partner">Why Us</a></li>
        <li><a href="#contact" className="nav-cta">Contact</a></li>
      </ul>
    </nav>
  );
}