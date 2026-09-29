const reasons = [
  { title: "Application-specific design", text: "Selection based on actual duty, fluid properties, fouling behaviour and operating constraints." },
  { title: "Performance-led approach", text: "Focus on heat-transfer efficiency, steam economy, pressure drop, uptime and cleaning access." },
  { title: "Flexible execution model", text: "Engineering-only, equipment supply, skid package, retrofit or complete project support." },
  { title: "Lifecycle value", text: "Solutions designed to reduce operating expenditure and simplify long-term maintenance." },
  // { title: "Direct technical access", text: "Engineering support available through design, execution and post-commissioning — not a call centre." },
  // { title: "Cross-industry experience", text: "Proven track record across sugar, distillery, chemical, pulp & paper and food processing environments." },
];

export default function Advantages() {
  return (
    <section className="section advantages" id="advantages">
      <div className="container advantage-layout">
        <div className="advantage-visual reveal">
          <div className="diagram">
            <div className="diagram-center">GIST<br />MANTRA</div>
            <div className="orbit orbit-1"><span>THERMAL DESIGN</span></div>
            <div className="orbit orbit-2"><span>PROCESS ENGINEERING</span></div>
            <div className="orbit orbit-3"><span>QUALITY CONTROL</span></div>
            <div className="orbit orbit-4"><span>PROJECT SUPPORT</span></div>
          </div>
        </div>
        <div className="advantage-copy reveal">
          <span className="eyebrow dark">THE GIST MANTRA ADVANTAGE</span>
          <h2>Engineering decisions backed by process understanding.</h2>
          <div className="advantage-list">
            {reasons.map((r) => (
              <div key={r.title} style={{ gridTemplateColumns: "1fr" }}>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


