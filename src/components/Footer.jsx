import logo from "../assets/gist-mantra-logo.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <a href="#top" className="brand footer-brand">
            <img className="brand-logo footer-logo" src={logo} alt="Gist Mantra logo" />
          </a>
          <p>Advanced heat transfer, evaporation and process engineering solutions.</p>
        </div>
        <div>
          <h4>Solutions</h4>
          <a href="#solutions">Evaporators</a>
          <a href="#solutions">Heat Exchangers</a>
          <a href="#solutions">Reboilers</a>
          <a href="#solutions">Process Skids</a>
        </div>
        <div>
          <h4>Industries</h4>
          <a href="#industries">Sugar</a>
          <a href="#industries">Distillery</a>
          <a href="#industries">Paper</a>
          <a href="#industries">Chemical</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#advantages">Why Us</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Gist Mantra Private Limited. All rights reserved.</span>
        
        <span className="dev-credit">Developed by <b>JD Softteck</b></span>
      </div>
    </footer>
  );
}
