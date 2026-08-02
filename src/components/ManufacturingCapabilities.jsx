const industries = [
  { num: "01", title: "Sugar & Refinery", desc: "Juice heating, syrup concentration, condensate recovery and refinery duties." },
  { num: "02", title: "Distillery & Ethanol", desc: "Reboilers, evaporators, condensers, heat integration and spent-wash concentration." },
  { num: "03", title: "Pulp & Paper", desc: "Black liquor evaporation, white-water heat recovery and energy optimisation." },
  { num: "04", title: "Chemical & Solvents", desc: "Special metallurgy and thermal systems for methanol, ethanol, acetone and other services." },
  { num: "05", title: "Food & Beverage", desc: "Hygienic heating, cooling, concentration and product-sensitive thermal processing." },
  { num: "06", title: "Wastewater & ZLD", desc: "Evaporation, pre-concentration, condensate recovery and utility optimisation." },
];

export default function ManufacturingCapabilities() {
  return (
    <section id="industries">
      <div className="section-eyebrow" style={{ color: "var(--orange)" }}>Industries We Support</div>
      <h2 className="section-title">Built around your process realities.</h2>
      <p className="section-intro">Every industry has different fouling, corrosion, pressure, temperature, product-quality and cleaning requirements.</p>

      <div className="solutions-grid">
        {industries.map((ind) => (
          <div className="info-card numbered-card" key={ind.num} style={{ "--card-color": "var(--orange)" }}>
            <span className="card-number">{ind.num}</span>
            <h3>{ind.title}</h3>
            <p>{ind.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}