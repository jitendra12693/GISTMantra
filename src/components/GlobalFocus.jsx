const markets = [
  {
    color: "var(--teal)",
    title: "African Market Focus",
    points: ["Strong relationships with procurement agencies across Africa", "Experience in sugar, power, and chemical industries", "Understanding of local requirements and standards"],
  },
  {
    color: "var(--orange)",
    title: "Indonesia & Global Reach",
    points: ["Established connections in Southeast Asian markets", "Worldwide procurement and supply capabilities", "Efficient logistics and delivery networks"],
  },
];

export default function GlobalFocus() {
  return (
    <section id="global-focus" className="about-section">
      <div className="section-eyebrow" style={{ color: "var(--orange)" }}>Our Reach</div>
      <h2 className="section-title">Our Global Focus & Target Markets</h2>

      <div className="card-grid grid-2col">
        {markets.map((m) => (
          <div className="info-card" key={m.title} style={{ "--card-color": m.color }}>
            <h3>{m.title}</h3>
            <ul style={{ paddingLeft: "18px", fontSize: "0.92rem" }}>
              {m.points.map((pt) => (
                <li key={pt} style={{ marginBottom: "8px" }}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}