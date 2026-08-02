const reasons = [
  { num: "01", title: "Application-specific design", text: "Selection based on actual duty, fluid properties, fouling behaviour and operating constraints." },
  { num: "02", title: "Performance-led approach", text: "Focus on heat-transfer efficiency, steam economy, pressure drop, uptime and cleaning access." },
  { num: "03", title: "Flexible execution model", text: "Engineering-only, equipment supply, skid package, retrofit or complete project support." },
  { num: "04", title: "Lifecycle value", text: "Solutions designed to reduce operating expenditure and simplify long-term maintenance." },
  { num: "05", title: "Direct technical access", text: "Engineering support available through design, execution and post-commissioning — not a call centre." },
  { num: "06", title: "Cross-industry experience", text: "Proven track record across sugar, distillery, chemical, pulp & paper and food processing environments." },
];

export default function WhyPartner() {
  return (
    <section id="advantages">
      <div className="section-eyebrow" style={{ color: "var(--blue)" }}>The Gist Mantra Advantage</div>
      <h2 className="section-title">Engineering decisions backed by process understanding.</h2>

      <div className="card-grid">
        {reasons.map((r) => (
          <div className="info-card numbered-card" key={r.num} style={{ "--card-color": "var(--blue)" }}>
            <span className="card-number">{r.num}</span>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}