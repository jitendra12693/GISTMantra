const stats = [
  { num: "30+", label: "Years Experience" },
  { num: "06", label: "Industry Sectors" },
  { num: "100%", label: "Quality Assurance" },
];

const cards = [
  {
    color: "var(--teal)",
    title: "High-Quality Equipment",
    intro: "Manufacturing and supply premium equipment, valves, instruments, and electrical components.",
    points: ["Precision-engineered machinery for industrial applications", "Reliable valves and instrumentation systems", "Advanced electrical and automation solutions"],
  },
  {
    color: "var(--blue)",
    title: "EPC Services",
    intro: "Complete engineering, procurement, and construction services for turnkey industrial projects.",
    points: ["Project management and engineering design", "Equipment procurement and supply chain", "Installation and commissioning services"],
  },
  {
    color: "var(--orange)",
    title: "Consultancy Expertise",
    intro: "Specialized consulting services with proven track record in industrial project development.",
    points: ["Process optimization and technical consulting", "Feasibility studies and project planning", "Ongoing technical support and training"],
  },
];

export default function ManufacturingCapabilities() {
  return (
    <section id="manufacturing">
      <div className="section-eyebrow" style={{ color: "var(--blue)" }}>What Sets Us Apart</div>
      <h2 className="section-title">Our Manufacturing & Supply Capabilities</h2>

      <div className="stats-bar">
        {stats.map((s) => (
          <div className="stat-box" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="card-grid">
        {cards.map((c) => (
          <div className="info-card" key={c.title} style={{ "--card-color": c.color }}>
            <h3>{c.title}</h3>
            <p style={{ marginBottom: "12px" }}>{c.intro}</p>
            <ul style={{ paddingLeft: "18px", color: "var(--text-muted)", fontSize: "0.92rem" }}>
              {c.points.map((pt) => (
                <li key={pt} style={{ marginBottom: "8px" }}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}