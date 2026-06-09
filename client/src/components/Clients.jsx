import cambiumLogo from "../assets/logos/cambium.png";
import lionbridgeLogo from "../assets/logos/lionbridge.png";
import AvalaraLogo from "../assets/logos/Avalara.png";
import pwcLogo from "../assets/logos/pwc.png";
import BrillioLogo from "../assets/logos/Brillio.png";
import InfosysLogo from "../assets/logos/Infosys.png";;


function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="section-head">
        <div className="eyebrow">CLIENTS WE HAVE WORKED WITH</div>
        <h2>Experience accross global consulting, technology, data, education, and localization teams.</h2>
        <p>
          A snapshot of organizations our delivery teams have supported through platform work, integrations, automation, and enterprise technology execution.
        </p>
      </div>

      <div className="client-track">
        <div className="client-logo-card">
          <img src={cambiumLogo} alt="Cambium Learning logo" />
        </div>
        <div className="client-logo-card">
          <img src={lionbridgeLogo} alt="Lionbridge logo" />
        </div>
        <div className="client-logo-card">
          <img src={AvalaraLogo} alt="Avalara logo" />
        </div>
        <div className="client-logo-card">
          <img src={pwcLogo} alt="PwC logo" />
        </div>

        <div className="client-logo-card">
          <img src={BrillioLogo} alt="Brillio logo" />
        </div>

        <div className="client-logo-card">
          <img src={InfosysLogo} alt="Infosys logo" />
        </div>

        <div className="client-logo-card">
          <img src={cambiumLogo} alt="Cambium Learning logo" />
        </div>
        <div className="client-logo-card">
          <img src={lionbridgeLogo} alt="Lionbridge logo" />
        </div>
        <div className="client-logo-card">
          <img src={AvalaraLogo} alt="Avalara logo" />
        </div>
        <div className="client-logo-card">
          <img src={pwcLogo} alt="PwC logo" />
        </div>

        <div className="client-logo-card">
          <img src={BrillioLogo} alt="Brillio logo" />
        </div>

        <div className="client-logo-card">
          <img src={InfosysLogo} alt="Infosys logo" />
        </div>
      </div>
    </section>
  );
}

export default Clients;