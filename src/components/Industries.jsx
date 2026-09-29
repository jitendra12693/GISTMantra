const industries = [
  { title: "Sugar & Refinery", desc: "Juice heating, syrup concentration, condensate recovery and refinery duties." },
  { title: "Distillery & Ethanol", desc: "Reboilers, evaporators, condensers, heat integration and spent-wash concentration." },
  { title: "Pulp & Paper", desc: "Black liquor evaporation, white-water heat recovery and energy optimisation." },
  { title: "Chemical & Solvents", desc: "Special metallurgy and thermal systems for methanol, ethanol, acetone and other services." },
  { title: "Food & Beverage", desc: "Hygienic heating, cooling, concentration and product-sensitive thermal processing." },
  { title: "Wastewater & ZLD", desc: "Evaporation, pre-concentration, condensate recovery and utility optimisation." },
];

export default function Industries() {
  return (
    <section className="section industries" id="industries">
      <div className="container">
        <div className="section-heading centered reveal">
          <span className="eyebrow">INDUSTRIES WE SUPPORT</span>
          <h2>Built around your process realities.</h2>
          <p>Every industry has different fouling, corrosion, pressure, temperature, product-quality and cleaning requirements.</p>
        </div>

        <div className="industry-grid">
          {industries.map((ind) => (
            <div className="industry-card reveal" key={ind.title}>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}