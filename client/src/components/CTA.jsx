function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <p>LET'S BUILD WHAT'S NEXT</p>

        <h2>Ready to Modernize, Integrate, and Scale Your Enterprise?</h2>

        <span>
          Talk to our experts and discover how we can help you achieve more
          with your technology.
        </span>
      </div>

      <div className="cta-list">
        <p>✓ Free 30-Minute Consultation</p>
        <p>✓ Solutions Tailored to Your Business</p>
        <p>✓ No Obligation. Just Expert Guidance.</p>
      </div>

      <Link to="/contact" className="cta-btn">
        Schedule Your Free Consultation →
      </Link>

      <div className="cta-icon">📅</div>
    </section>
  );
}

export default CTA;