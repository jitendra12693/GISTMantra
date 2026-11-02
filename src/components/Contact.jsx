
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

            {/* Contact Numbers */}
            <div className="contact-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L9.06 10.9a16 16 0 0 0 4.04 4.04l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92Z" />
              </svg>

              <div>
                <strong>Contact Numbers</strong>
                <a href="tel:+917387432869">+91 73874 32869</a>
                <a href="tel:+918317035548">+91 83170 35548</a>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="contact-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>

              <div>
                <strong>Email Addresses</strong>
                <a href="mailto:sales@gistmantra.com">
                  sales@gistmantra.com
                </a>
                <a href="mailto:info@gistmantra.com">
                  info@gistmantra.com
                </a>
                <a href="mailto:rohan.shukla@gistmantra.com">
                  rohan.shukla@gistmantra.com
                </a>
              </div>
            </div>

            {/* Office Location */}
            <div className="contact-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              <div>
                <strong>Office Location</strong>

                <p className="office-address">
                  Work Flo Icon Tower<br />
                  Office No. 702, Sr No. 114/5, 115/1, 114/6/3,<br />
                  Baner Gaon, Haveli,<br />
                  Pune 411045, Maharashtra
                </p>

                <a
                  className="office-map-link"
                  href="https://maps.app.goo.gl/zKrQAUa4NxjUx5Gy6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Google Maps */}
        <div className="contact-map">
          <iframe
            title="GIST Mantra Office Location"
            src="https://www.google.com/maps?q=18.5653077,73.7741569&z=17&output=embed"
            width="100%"
            height="520"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}
