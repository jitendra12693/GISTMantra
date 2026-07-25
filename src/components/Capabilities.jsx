// NOTE: Baaki 4 slides ka content milne ke baad is list mein aur industries add kar dena
const industries = [
  {
    color: "var(--teal)",
    title: "Sugar & Sugar Refinery",
    points: ["Complete sugar refinery design and engineering", "High-quality processing equipment and machinery", "EPC services for sugar industry projects"],
  },
  {
    color: "var(--orange)",
    title: "Bioethanol & Distillery",
    points: ["Advanced bioethanol production equipment", "Complete distillery setup and machinery", "Sustainable energy solutions"],
  },
  {
    color: "var(--blue)",
    title: "Chemical & Power Plant",
    points: ["Chemical processing equipment and systems", "Power generation machinery and components", "Industrial electrical and instrumentation solutions"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="section-eyebrow" style={{ color: "var(--teal)" }}>What We Do</div>
      <h2 className="section-title">Our Core Industries & Capabilities</h2>
      <p className="section-intro">
        Purpose-built EPC and consultancy solutions across our core industrial sectors.
      </p>
      <div className="card-grid">
        {industries.map((ind) => (
          <div className="info-card" key={ind.title} style={{ "--card-color": ind.color }}>
            <h3>{ind.title}</h3>
            <ul style={{ paddingLeft: "18px", color: "var(--text-muted)", fontSize: "0.92rem" }}>
              {ind.points.map((pt) => (
                <li key={pt} style={{ marginBottom: "8px" }}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}