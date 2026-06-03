import { useState } from "react";

function Platforms() {
  const [activePlatform, setActivePlatform] = useState("salesforce");

  return (
    <section id="platforms" className="platforms">
      <div className="section-head">
        <div className="eyebrow">Platform Expertise</div>
        <h2>Choose the platform view.</h2>
        <p>
          The tabs below make the page feel active while keeping it fully
          static and GitHub Pages friendly.
        </p>
      </div>

      <div className="platform-layout">
        <div className="platform-tabs">
          <button
            className={`platform-tab ${
              activePlatform === "salesforce" ? "active" : ""
            }`}
            onClick={() => setActivePlatform("salesforce")}
          >
            Salesforce
            <span>CRM, automation, customer experience</span>
          </button>

          <button
            className={`platform-tab ${
              activePlatform === "oracle" ? "active" : ""
            }`}
            onClick={() => setActivePlatform("oracle")}
          >
            Oracle
            <span>ERP, data, enterprise operations</span>
          </button>

          <button
            className={`platform-tab ${
              activePlatform === "integration" ? "active" : ""
            }`}
            onClick={() => setActivePlatform("integration")}
          >
            Integration
            <span>APIs, sync, migration, reporting</span>
          </button>
        </div>

        <div>
          {activePlatform === "salesforce" && (
            <article className="platform-panel active">
              <h3>Salesforce delivery that users actually adopt.</h3>
              <p>
                From discovery to deployment, Vedendu designs Salesforce around
                real selling, service, and management workflows so the platform
                becomes easier to use, not heavier to maintain.
              </p>

              <ul className="feature-list">
                <li>Sales and Service Cloud setup</li>
                <li>Lightning pages and automation</li>
                <li>Apex and integration support</li>
                <li>Reports, dashboards, and adoption</li>
              </ul>
            </article>
          )}

          {activePlatform === "oracle" && (
            <article className="platform-panel active">
              <h3>Oracle systems with cleaner operations.</h3>
              <p>
                We help teams improve Oracle-backed processes, reporting, data
                quality, and connected workflows across finance, operations,
                and enterprise management.
              </p>

              <ul className="feature-list">
                <li>Oracle application support</li>
                <li>Data and reporting workflows</li>
                <li>Operational process improvement</li>
                <li>Secure enterprise practices</li>
              </ul>
            </article>
          )}

          {activePlatform === "integration" && (
            <article className="platform-panel active">
              <h3>One connected digital backbone.</h3>
              <p>
                Connect CRM, ERP, websites, databases, and analytics tools
                with reliable integration patterns that reduce duplicate work
                and improve business visibility.
              </p>

              <ul className="feature-list">
                <li>API-led architecture</li>
                <li>Data migration and cleansing</li>
                <li>Automation between systems</li>
                <li>Monitoring and documentation</li>
              </ul>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}

export default Platforms;