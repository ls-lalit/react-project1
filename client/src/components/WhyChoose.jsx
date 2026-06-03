const reasons = [
  {
    number: "01",
    title: "Business-first",
    desc: "We map technology decisions to measurable workflows, not just system configuration",
  },
  {
    number: "02",
    title: "clean execution",
    desc: "Clear scope, simple archetecture, and handover-friendly documentation.",
  },
  {
    number: "03",
    title: "Scalable systems",
    desc: "Solutions that can grow across teams,departments, and data sources.",
  },
  {
    number: "04",
    title: "Long-term support",
    desc: "Optimization, training, and continuous improvement after launch.",
  },
];

function WhyChoose() {
  return (
    <section id="whychoose">
      <div className="section-head">
        <div className="eyebrow">Why VEDENDU</div>
        <h2>Practical consulting with a product-builder mindset.</h2>
      </div>

      <div className="why-grid">
        {reasons.map((reason, index) => (
          <div className="why-card" key={index}>
            <strong>{reason.number}</strong>
            <h3>{reason.title}</h3>
            <p>{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;