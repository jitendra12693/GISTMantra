export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Rotating windmill watermark */}
      <div className="turbine-watermark">
        <svg viewBox="0 0 300 500" xmlns="http://www.w3.org/2000/svg">
          <line x1="150" y1="500" x2="150" y2="180" stroke="var(--navy)" strokeWidth="6" />
          <g className="turbine-blades">
            <path d="M150,180 C140,120 145,70 150,20 C155,70 160,120 150,180 Z" fill="var(--navy)" />
            <path d="M150,180 C140,120 145,70 150,20 C155,70 160,120 150,180 Z" fill="var(--navy)" transform="rotate(120 150 180)" />
            <path d="M150,180 C140,120 145,70 150,20 C155,70 160,120 150,180 Z" fill="var(--navy)" transform="rotate(240 150 180)" />
          </g>
          <circle cx="150" cy="180" r="9" fill="var(--navy)" />
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">EPC & Consultancy Partner</div>
        <h1>Your Trusted EPC & Consultancy Partner for Industrial Excellence</h1>
        <p>
          GIST Mantra brings together decades of collective expertise in EPC
          and industrial consultancy services across multiple sectors globally.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Get in Touch</a>
          <a href="#about" className="btn-secondary">Learn More</a>
        </div>
      </div>

      {/* Redesigned EPC cycle diagram */}
      <svg className="epc-diagram" viewBox="-90 -20 580 440" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--blue)" />
          </marker>
          <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--orange)" />
          </marker>
          <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--teal)" />
          </marker>
        </defs>

        <path d="M200,60 A140,140 0 0 1 340,200" fill="none" stroke="var(--blue)" strokeWidth="16" strokeLinecap="round" markerEnd="url(#arrowBlue)" />
        <path d="M321.24,270 A140,140 0 0 1 130,321.24" fill="none" stroke="var(--orange)" strokeWidth="16" strokeLinecap="round" markerEnd="url(#arrowOrange)" />
        <path d="M78.76,270 A140,140 0 0 1 130,78.76" fill="none" stroke="var(--teal)" strokeWidth="16" strokeLinecap="round" markerEnd="url(#arrowGreen)" />

        <circle cx="200" cy="200" r="95" fill="white" stroke="var(--border)" strokeWidth="1" />
        <text x="200" y="196" textAnchor="middle" fontFamily="Space Grotesk" fontSize="30" fontWeight="700" fill="var(--navy)">EPC</text>
        <text x="200" y="220" textAnchor="middle" fontFamily="IBM Plex Sans" fontSize="12" fill="var(--text-muted)">Mantra Cycle</text>

        <circle cx="323.74" cy="76.26" r="4" fill="var(--blue)" />
        <text x="335" y="72" fontFamily="Space Grotesk" fontSize="14" fontWeight="600" fill="var(--navy)">Engineering</text>

        <circle cx="245.29" cy="369.04" r="4" fill="var(--orange)" />
        <text x="245.29" y="392" textAnchor="middle" fontFamily="Space Grotesk" fontSize="14" fontWeight="600" fill="var(--navy)">Procurement</text>

        <circle cx="30.96" cy="154.71" r="4" fill="var(--teal)" />
        <text x="16" y="150" textAnchor="end" fontFamily="Space Grotesk" fontSize="14" fontWeight="600" fill="var(--navy)">Construction</text>
      </svg>
    </section>
  );
}









// export default function Hero() {
//   return (
//     <section id="home" className="hero">
//       <div>
//         <div className="hero-eyebrow">EPC & Consultancy Partner</div>
//         <h1>Your Trusted EPC & Consultancy Partner for Industrial Excellence</h1>
//         <p>
//           GIST Mantra brings together decades of collective expertise in EPC
//           and industrial consultancy services across multiple sectors globally.
//         </p>
//         <div className="hero-buttons">
//           <a href="#contact" className="btn-primary">Get in Touch</a>
//           <a href="#about" className="btn-secondary">Learn More</a>
//         </div>
//       </div>

//       {/* Signature element: EPC cycle diagram, based on the brand's own logo mark */}
//       <svg className="epc-diagram" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="200" cy="200" r="150" fill="none" stroke="#DDD8CC" strokeWidth="1.5" />
//         <path d="M 200 50 A 150 150 0 0 1 340 165" fill="none" stroke="#2E6FA3" strokeWidth="26" strokeLinecap="round" />
//         <path d="M 340 165 A 150 150 0 0 1 275 335" fill="none" stroke="#E8722C" strokeWidth="26" strokeLinecap="round" />
//         <path d="M 275 335 A 150 150 0 0 1 60 235" fill="none" stroke="#1E7B5F" strokeWidth="26" strokeLinecap="round" />
//         <path d="M 60 235 A 150 150 0 0 1 200 50" fill="none" stroke="#0F2A3F" strokeWidth="26" strokeLinecap="round" />

//         <text x="270" y="100" fontFamily="Space Grotesk" fontSize="14" fontWeight="600" fill="#0F2A3F">Engineering</text>
//         <text x="290" y="260" fontFamily="Space Grotesk" fontSize="14" fontWeight="600" fill="#0F2A3F">Procurement</text>
//         <text x="70" y="300" fontFamily="Space Grotesk" fontSize="14" fontWeight="600" fill="#0F2A3F">Construction</text>

//         <text x="200" y="195" textAnchor="middle" fontFamily="Space Grotesk" fontSize="26" fontWeight="700" fill="#0F2A3F">EPC</text>
//         <text x="200" y="218" textAnchor="middle" fontFamily="IBM Plex Sans" fontSize="12" fill="#4A5A68">Mantra</text>
//       </svg>
//     </section>
//   );
// }