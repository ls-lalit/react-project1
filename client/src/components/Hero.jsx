import newvedlogo from "../assets/newvedlogo.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="kicker">
          <span className="pulse"></span>
          SALESFORCE • ORACLE • INTEGRATION EXPERTS
        </div>

        <h1>
          Enterprise technology made <span>clear, connected, and scalable.</span>
        </h1>

        <p className="hero-copy">
          Vedendu IT Solution helps growing businesses modernize systems,automate workflows, and connect customer, finance, and operations data into one smarter digital backbone.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="btn primary">
            Book a Free Consultation →
          </Link>

          <a href="#services" className="btn outline">
            Explore Services
          </a>
        </div>
        <div className="hero-features">
          <div>☑ <span>15+ Years Experience</span></div>
          <div>♙ <span>Certified Experts</span></div>
          <div>↻ <span>Agile Delivery</span></div>
          <div>◇ <span>Client-Focused</span></div>
        </div>
      </div>
      <div className="hero-graphic-wrap">
        <div className="hero-graphic">
          <div className="graphic-ring ring-one"></div>
          <div className="graphic-ring ring-two"></div>
          <div className="graphic-ring ring-three"></div>

          <div className="connection line-top"></div>
          <div className="connection line-left"></div>
          <div className="connection line-right"></div>
          <div className="connection line-bottom-left"></div>
          <div className="connection line-bottom-right"></div>

          <div className="graphic-core">
            <img src={newvedlogo} alt="Vedendu IT Solutions" />
          </div>

          <div className="graphic-card salesforce">
            ☁️
            <div>
              <strong>Salesforce</strong>
              <span>CRM</span>
            </div>
          </div>

          <div className="graphic-card oracle">
            🔴
            <div>
              <strong>Oracle</strong>
              <span>Applications</span>
            </div>
          </div>

          <div className="graphic-card integration">
            🔗
            <div>
              <strong>Integration</strong>
              <span>APIs & Middleware</span>
            </div>
          </div>

          <div className="graphic-card automation">
            ⚙️
            <div>
              <strong>Automation</strong>
              <span>Workflows</span>
            </div>
          </div>

          <div className="graphic-card analytics">
            📊
            <div>
              <strong>Analytics</strong>
              <span>Insights</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;