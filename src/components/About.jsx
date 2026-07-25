const pillars = [
  { color: "var(--blue)", title: "EPC Excellence", text: "End-to-end engineering, procurement, and construction services for industrial projects." },
  { color: "var(--teal)", title: "Consultancy Expertise", text: "Specialized consulting services with 30+ years combined team experience." },
  { color: "var(--orange)", title: "Global Reach", text: "Connecting with procurement agencies worldwide for quality industrial solutions." },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-eyebrow" style={{ color: "var(--orange)" }}>About Us</div>
      <h2 className="section-title">About GIST Mantra Private Limited</h2>
      <p className="section-intro">
        GIST Mantra brings together decades of collective expertise in EPC and
        industrial consultancy services across multiple sectors globally.
      </p>
      <div className="card-grid">
        {pillars.map((p) => (
          <div className="info-card" key={p.title} style={{ "--card-color": p.color }}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}