const tags = ["Thermal Design", "Process Engineering", "Quality Control", "Project Support"];

export default function BrandStatement() {
  return (
    <section className="brand-statement">
      <h2>GIST <span>MANTRA</span></h2>
      <div className="brand-tags">
        {tags.map((t) => <span className="brand-tag" key={t}>{t}</span>)}
      </div>
    </section>
  );
}