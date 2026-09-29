import { useEffect, useState } from "react";
import logo from "../assets/gist-mantra-logo.jpg";

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#industries", label: "Industries" },
  { href: "#advantages", label: "Why Us" },
  { href: "#about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
      <div className="container nav-wrap">
        <a href="#top" className="brand" aria-label="Gist Mantra home">
          <img className="brand-logo" src={logo} alt="Gist Mantra logo" />
        </a>

        <button
          className="menu-toggle"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`main-nav${open ? " open" : ""}`} aria-label="Primary navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={close}>Discuss a Project</a>
        </nav>
      </div>
    </header>
  );
}
