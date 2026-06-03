const processSteps = [
  {
    number: "1",
    title: "Discover",
    desc: "Understand goals, users, constraints, and the systems already in place.",
  },
  {
    number: "2",
    title: "Design",
    desc: "Create a clean solution blueprint with data, process, and UX decisions.",
  },
  {
    number: "3",
    title: "Build",
    desc: "Implement in focused iterations with demos, feedback, and quality checks.",
  },
  {
    number: "4",
    title: "Elevate",
    desc: "Launch, train, monitor, and keep improving the platform over time.",
  },
];

function Process() {
  return (
    <section id="process">
      <div className="section-head">
        <div className="eyebrow">DELIVERY PROCESS</div>
        <h2>A clear path from idea to working system.</h2>
      </div>

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <div className="process-card" key={index}>
            <strong>{step.number}</strong>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;