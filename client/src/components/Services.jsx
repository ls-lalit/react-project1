const services = [
   {
    icon: "☁️",
    title: "Salesforce Consulting",
    desc: "CRM strategy, Sales Cloud, Service Cloud, Experience Cloud, automation, dashboards, and user adoption.",
  },
  {
    icon: "🔴",
    title: "Oracle Solutions",
    desc: "Oracle application support, data modernization, reporting, enterprise workflows, and operational reliability.",
  },
  {
    icon: "🔗",
    title: "System Integration",
    desc: "Connect platforms, APIs, databases, and third-party apps so business data moves cleanly and securely.",
  },
  {
    icon: "⚙️",
    title: "Automation",
    desc: "Replace repetitive manual tasks with guided processes, approvals, notifications, and measurable workflows.",
  },
  {
    icon: "</>",
    title: "Custom Development",
    desc: "Build focused web tools, platform extensions, portals, data utilities, and admin-friendly internal systems.",
  },
  {
    icon: "📊",
    title: "Analytics & Insight",
    desc: "Turn scattered operational data into executive dashboards, KPI tracking, and decision-ready reporting.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-head">
        <p className="services-eyebrow">OUR SERVICES</p>
        <h2>Solutions Built Around Your Business Outcomes</h2>
        <p>Strategy-led. Technology-enabled. Results-driven.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <a href="#contact" className="learn-more">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;