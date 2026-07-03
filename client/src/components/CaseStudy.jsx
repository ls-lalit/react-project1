import warehouse from "../assets/warehouse.jpg"; // Add your image

function CaseStudy() {
  return (
    <section className="case-study">
      <div className="case-left">
        <p className="case-eyebrow">REAL IMPACT. REAL RESULTS.</p>

        <h2>Driving Transformation Across Industries</h2>

        <p>
          From streamlining operations to improving customer experiences,
          we deliver outcomes that matter.
        </p>

        <a href="#" className="case-link">
          View All Case Studies →
        </a>
      </div>

      <div className="case-image">
        <button className="case-arrow left">‹</button>

        <img src={warehouse} alt="Manufacturing" />

        <button className="case-arrow right">›</button>
      </div>

      <div className="case-card">
        <span className="case-tag">MANUFACTURING</span>

        <h3>Unified Salesforce & Oracle for a Manufacturing Leader</h3>

        <div className="case-stats">
          <div>
            <strong>40%</strong>
            <span>Faster Order Processing</span>
          </div>

          <div>
            <strong>25%</strong>
            <span>Improvement in Data Accuracy</span>
          </div>

          <div>
            <strong>30%</strong>
            <span>Reduction in Manual Effort</span>
          </div>
        </div>

        <a href="#" className="case-link">
          View Case Study →
        </a>
      </div>
    </section>
  );
}

export default CaseStudy;