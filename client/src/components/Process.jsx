const processSteps = [
  {
    number: "01",
    icon: "⌕",
    title: "Discover",
    desc: "Understand goals, users, constraints, and the systems already in place.",
  },
  {
    number: "02",
    icon: "✎",
    title: "Design",
    desc: "Create a clean solution blueprint with data, process, and UX decisions.",
  },
  {
    number: "03",
    icon: "</>",
    title: "Build",
    desc: "Implement in focused iterations with demos, feedback, and quality checks.",
  },
  {
    number: "04",
    icon: "▥",
    title: "Elevate",
    desc: "Launch, train, monitor, and keep improving the platform over time.",
  },
];

function Process() {
  return (
        <section className="process-section" id="process">
      <div className="process-head">
        <p className="process-eyebrow">OUR APPROACH</p>
        <h2>A Proven Path from Strategy to Success</h2>
      </div>

      <div className="process-timeline">
        {processSteps.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="process-number">{step.number}</div>

            {index !== processSteps.length - 1 && (
              <div className="process-arrow">→</div>
            )}

            <div className="process-icon">{step.icon}</div>

            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;