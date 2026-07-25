export default function Contact() {
  return (
    <section id="contact">
      <div className="section-eyebrow" style={{ color: "var(--orange)" }}>Get In Touch</div>
      <h2 className="section-title">Let's Build Industrial Excellence Together</h2>
      <p className="section-intro">
        Reach out to our team for EPC and consultancy enquiries.
      </p>

      <div className="contact-wrap">
        <div>
          <div className="contact-item">
            <div className="icon-box">@</div>
            <div>
              <h4>Email</h4>
              <p><a href="mailto:sales@gistmantra.com">sales@gistmantra.com</a></p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-box">☎</div>
            <div>
              <h4>Phone</h4>
              <p><a href="tel:+917387432869">+91 – 73874 32869</a></p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-box">⌂</div>
            <div>
              <h4>Office</h4>
              <p>Icon Tower, Office No. 702, Sr No. 114/5, 115/1, 114/6/3, Baner Road, Pune, Maharashtra – 411045</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input type="text" placeholder="Your name" />
          <label>Email</label>
          <input type="email" placeholder="you@company.com" />
          <label>Message</label>
          <textarea rows="4" placeholder="Tell us about your project"></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}