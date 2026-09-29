const steps = [
  { title: "Understand", desc: "Process data, goals, constraints and current bottlenecks." },
  { title: "Engineer", desc: "Thermal sizing, hydraulic checks, material selection and concept development." },
  { title: "Deliver", desc: "Detailed engineering, manufacturing coordination, inspection and documentation." },
  { title: "Support", desc: "Installation guidance, commissioning assistance and performance improvement." },
];

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section-top reveal">
          <div>
            <span className="eyebrow dark">HOW WE WORK</span>
            <h2>A disciplined path from data to performance.</h2>
          </div>
        </div>
        <div className="process-line">
          {steps.map((s) => (
            <div className="process-step reveal" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}