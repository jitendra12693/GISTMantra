
const industryTags = ["Sugar", "Distillery", "Pulp & Paper", "Chemical", "Food & Beverage"];

export default function GlobalFocus() {
  return (
    <section id="industry-intro">
      <div className="section-eyebrow" style={{ color: "var(--teal)" }}>From Process Review to Performance</div>
      <h2 className="section-title">Sugar & Process Industry Solutions</h2>
      <p className="section-intro">Heat Transfer • Evaporation • Energy Recovery</p>

      <div className="card-grid grid-2col" style={{ marginBottom: "44px" }}>
        <div className="info-card" style={{ "--card-color": "var(--teal)" }}>
          <h3>Process Focus</h3>
          <p>Lower Steam & Water Use</p>
        </div>
        <div className="info-card" style={{ "--card-color": "var(--blue)" }}>
          <h3>Engineering</h3>
          <p>Application-Specific Design</p>
        </div>
      </div>

      <h3 style={{ fontFamily: "var(--font-display)", color: "var(--navy)", marginBottom: "18px" }}>
        Serving Process Industries
      </h3>
      <div className="industry-pills">
        {industryTags.map((tag) => (
          <span className="industry-pill" key={tag}>{tag}</span>
        ))}
      </div>
    </section>
  );
}