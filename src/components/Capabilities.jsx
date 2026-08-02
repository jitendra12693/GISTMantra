
const solutions = [
  { num: "01", title: "Hybrid Plate Evaporators", desc: "Compact falling-film and circulation systems for high heat-transfer performance and reduced steam demand.", points: ["High U-value potential", "Low liquid hold-up", "Compact footprint"], cta: null },
  { num: "02", title: "Plate Heat Exchangers", desc: "Gasketed and welded heat exchanger solutions for heating, cooling, heat recovery and utility duties.", points: [], cta: "Enquire now →" },
  { num: "03", title: "Reboilers & Condensers", desc: "Thermosiphon, plate, shell-and-tube and special-duty designs for distillation and vapour condensation.", points: [], cta: "Enquire now →" },
  { num: "04", title: "Process Plants & Skids", desc: "Modular packages integrating equipment, pumps, piping, instruments, control philosophy and automation.", points: [], cta: "Enquire now →" },
  { num: "05", title: "Energy Recovery Studies", desc: "Process mapping and revamp concepts focused on steam economy, condensate recovery, water reuse and power savings.", points: [], cta: "Request a study →" },
   { num: "06", title: "Retrofit & Plant Upgrades", desc: "Performance audits and revamp engineering for existing plate exchangers, evaporators and process lines to recover lost efficiency and extend equipment life.", points: ["Bottleneck diagnosis", "Capacity & efficiency upgrades"], cta: "Discuss a retrofit →" },
];

export default function Capabilities() {
  return (
    <section id="solutions">
      <div className="section-eyebrow" style={{ color: "var(--teal)" }}>Core Solutions</div>
      <h2 className="section-title">Advanced equipment for demanding processes.</h2>
      <p className="section-intro">Engineered to improve heat recovery, product quality, operating stability and maintainability.</p>

      <div className="solutions-grid">
        {solutions.map((s) => (
          <div className="info-card numbered-card" key={s.num} style={{ "--card-color": "var(--teal)" }}>
            <span className="card-number">{s.num}</span>
            <h3>{s.title}</h3>
            <p style={{ marginBottom: s.points.length ? "12px" : 0 }}>{s.desc}</p>
            {s.points.length > 0 && (
              <ul style={{ paddingLeft: "18px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                {s.points.map((pt) => <li key={pt} style={{ marginBottom: "6px" }}>{pt}</li>)}
              </ul>
            )}
            {s.cta && <a href="#contact" className="card-link">{s.cta}</a>}
          </div>
        ))}
      </div>
    </section>
  );
}