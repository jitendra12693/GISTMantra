const steps = [
  { num: "01", title: "Understand", desc: "Process data, goals, constraints and current bottlenecks." },
  { num: "02", title: "Engineer", desc: "Thermal sizing, hydraulic checks, material selection and concept development." },
  { num: "03", title: "Deliver", desc: "Detailed engineering, manufacturing coordination, inspection and documentation." },
  { num: "04", title: "Support", desc: "Installation guidance, commissioning assistance and performance improvement." },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work">
      <div className="section-eyebrow" style={{ color: "var(--teal)" }}>How We Work</div>
      <h2 className="section-title">A disciplined path from data to performance.</h2>

      <div className="steps-row">
        {steps.map((s, i) => (
          <div className="step-box" key={s.num}>
            <div className="step-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            {i < steps.length - 1 && <div className="step-connector"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}