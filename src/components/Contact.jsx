export default function Contact() {
  return (
    <section className="cta-section" id="contact">
      <div className="container cta-layout">
        <div className="cta-copy reveal">
          <span className="eyebrow">LET’S IMPROVE YOUR PROCESS</span>
          <h2>Have a heat-transfer or evaporation challenge?</h2>
          <p>
            Share your operating data, existing equipment details or performance target.
            Our team will review the requirement and propose the next engineering step.
          </p>
          <div className="contact-points">
            <a href="mailto:sales@gistmantra.com">sales@gistmantra.com</a>
            <a href="tel:+917387432869">+91 73874 32869</a>
            <span>
              Icon Tower, Office No. 702, Sr No. 114/5, 115/1, 114/6/3,
              Baner Road, Pune, Maharashtra – 411045
            </span>
          </div>
        </div>

        <div
          className="reveal"
          style={{
            background: "#fff",
            borderRadius: "19px",
            overflow: "hidden",
            boxShadow: "0 30px 70px rgba(0,0,0,.22)",
            minHeight: "420px",
            display: "flex",
          }}
        >
          <iframe
            title="Gist Mantra Location"
            src="https://www.google.com/maps?q=Baner+Road,+Pune,+Maharashtra+411045&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: "420px", flex: 1 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}




