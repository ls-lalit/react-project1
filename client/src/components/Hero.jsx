function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="kicker">
          <span className="pulse"></span>
          SALEFORCE + ORACLE SPECIALISTS
        </div>

        <h1>
          Enterprise technology made <span>clear, connected, and scalable.</span>
        </h1>

        <p className="hero-copy">
          Vedendu IT Solution helps growing businesses modernize systems,automate workflows, and connect customer, finance, and operations data into one smarter digital backbone.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn primary">
            Start a Project
          </a>

          <a href="#services" className="btn">
            Explore Services
          </a>
        </div>
      </div>

      <div className="command-center">
        <div className="dashboard">
          <div className="dash-head">
            <div>
              <h3>Integration Command Center</h3>
              <p>Live architecture preview</p>
            </div>
            <div className="status">Systems Online</div>
          </div>

          <div className="orbit">
            <div className="ring one"></div>
            <div className="ring two"></div>

            <div className="core">
              Vedendu
              <br />
              Stack
            </div>

            <div className="node cloud">☁️</div>
            <div className="node diamond">◇</div>
            <div className="node gear">⚙️</div>
            <div className="node arrow">↗</div>
          </div>

          <div className="dash-footer">
            <div className="mini-stat">
              <strong>99%</strong>
              <span>Workflow clarity</span>
            </div>

            <div className="mini-stat">
              <strong>360</strong>
              <span>Customer view</span>
            </div>

            <div className="mini-stat">
              <strong>24/7</strong>
              <span>Cloud ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;