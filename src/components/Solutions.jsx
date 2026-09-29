const solutions = [
  {
    featured: true, title: "Hybrid Plate Evaporators",
    desc: "Compact falling-film and circulation systems for high heat-transfer performance and reduced steam demand.",
    points: ["High U-value potential", "Low liquid hold-up", "Compact footprint"],
    icon: <><path d="M20 7h24v50H20z"/><path d="M24 15h16M24 23h16M24 31h16M24 39h16M24 47h16"/><path d="M9 20h11M44 44h11"/></>,
  },
  {
    title: "Plate Heat Exchangers",
    desc: "Gasketed and welded heat exchanger solutions for heating, cooling, heat recovery and utility duties.",
    cta: "Enquire now →",
    icon: <><path d="M10 18h44v28H10z"/><path d="M18 13v38M25 13v38M32 13v38M39 13v38M46 13v38"/><path d="M4 27h6M54 37h6"/></>,
  },
  {
    title: "Reboilers & Condensers",
    desc: "Thermosiphon, plate, shell-and-tube and special-duty designs for distillation and vapour condensation.",
    cta: "Enquire now →",
    icon: <><ellipse cx="32" cy="12" rx="15" ry="6"/><path d="M17 12v40M47 12v40"/><ellipse cx="32" cy="52" rx="15" ry="6"/><path d="M22 22h20M22 30h20M22 38h20M22 46h20"/></>,
  },
  {
    title: "Process Plants & Skids",
    desc: "Modular packages integrating equipment, pumps, piping, instruments, control philosophy and automation.",
    cta: "Enquire now →",
    icon: <><path d="M8 48h48M14 48V25h15v23M35 48V13h15v35"/><path d="M18 21h7M39 20h7M39 27h7M39 34h7"/></>,
  },
  {
    title: "Energy Recovery Studies",
    desc: "Process mapping and revamp concepts focused on steam economy, condensate recovery, water reuse and power savings.",
    cta: "Request a study →",
    icon: <><path d="M9 43c11-1 13-22 23-22s12 22 23 22"/><path d="M9 51h46"/><circle cx="32" cy="20" r="5"/><path d="M32 6v9"/></>,
  },
 
];

export default function Solutions() {
  return (
    <section className="section solutions" id="solutions">
      <div className="container">
        <div className="section-top reveal">
          <div>
            <span className="eyebrow dark">CORE SOLUTIONS</span>
            <h2>Advanced equipment for demanding processes.</h2>
          </div>
          <p>Engineered to improve heat recovery, product quality, operating stability and maintainability.</p>
        </div>

        <div className="solution-grid">
          {solutions.map((s) => (
            <article
              key={s.title}
              className={`solution-card${s.featured ? " featured" : ""}${s.wide ? " wide" : ""} reveal`}
            >
              <div className="card-icon"><svg viewBox="0 0 64 64">{s.icon}</svg></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {s.points && <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>}
              {s.cta && <a href="#contact">{s.cta}</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


