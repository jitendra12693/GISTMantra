const reasons = [
  {
    color: "var(--teal)",
    title: "Quality & Excellence",
    text: "Manufacturing high-quality equipment with stringent quality control processes. Proven EPC expertise with successful project delivery track record.",
  },
  {
    color: "var(--blue)",
    title: "Global Partnership",
    text: "Strong relationships with procurement agencies worldwide. Understanding of international standards and local requirements.",
  },
  {
    color: "var(--orange)",
    title: "Innovation & Support",
    text: "Comprehensive consultancy from design to commissioning. Ongoing technical support and project optimization.",
  },
];

export default function WhyPartner() {
  return (
    <section id="why-partner">
      <div className="section-eyebrow" style={{ color: "var(--teal)" }}>Our Promise</div>
      <h2 className="section-title">Why Partner with GIST Mantra?</h2>

      <div className="card-grid">
        {reasons.map((r) => (
          <div className="info-card" key={r.title} style={{ "--card-color": r.color }}>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}