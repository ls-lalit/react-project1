const services = [
   {
    icon: "☁️",
    title: "Salesforce Consulting",
    desc: "CRM strategy, Sales Cloud, Service Cloud, Experience Cloud, automation, dashboards, and user adoption.",
  },
  {
    icon: "◇",
    title: "Oracle Solutions",
    desc: "Oracle application support, data modernization, reporting, enterprise workflows, and operational reliability.",
  },
  {
    icon: "↔",
    title: "System Integration",
    desc: "Connect platforms, APIs, databases, and third-party apps so business data moves cleanly and securely.",
  },
  {
    icon: "⌁",
    title: "Automation",
    desc: "Replace repetitive manual tasks with guided processes, approvals, notifications, and measurable workflows.",
  },
  {
    icon: "▣",
    title: "Custom Development",
    desc: "Build focused web tools, platform extensions, portals, data utilities, and admin-friendly internal systems.",
  },
  {
    icon: "↗",
    title: "Analytics & Insight",
    desc: "Turn scattered operational data into executive dashboards, KPI tracking, and decision-ready reporting.",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="section-head">
        <div className="eyebrow">What We Build</div>
        <h2>Services that turn complex systems into practical business tools.</h2>
        <p>
          Click any service card to expand it. Each area is designed to support
          implementation, integration, migration, and long-term platform improvement.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;