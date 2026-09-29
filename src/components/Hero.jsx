import HeroSlider from "./HeroSlider";

const strip = ["SUGAR", "DISTILLERY", "PULP & PAPER", "CHEMICAL", "FOOD & BEVERAGE"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-overlay"></div>
      <div className="container hero-layout">
        <div className="hero-copy reveal">
          <span className="eyebrow">PROCESS INTENSIFICATION • ENERGY RECOVERY • RELIABLE ENGINEERING</span>
          <h1>Smarter Process Equipment for <span>Efficient Industry.</span></h1>
          <p>
            Gist Mantra designs and delivers high-performance heat transfer, evaporation,
            condensation and process engineering solutions that reduce steam, water, power
            and lifecycle cost.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start a Technical Discussion</a>
            <a href="#solutions" className="btn btn-secondary">Explore Solutions</a>
          </div>
          <div className="hero-proof">
            <div><strong>Thermal</strong><span>Design Expertise</span></div>
            <div><strong>Custom</strong><span>Engineered Systems</span></div>
            <div><strong>Global</strong><span>Supply Capability</span></div>
          </div>
        </div>

        <div className="hero-visual reveal" aria-label="Aerial view of a sugar refinery">
          <div className="visual-card refinery-card">
            <HeroSlider />
          </div>
        </div>
      </div>

      <div className="container client-strip reveal">
        <span>Serving Process Industries</span>
        {strip.map((s) => <div key={s}>{s}</div>)}
      </div>
    </section>
  );
}



