import capgemini from "../assets/logos/capgemini.png";
import dhl from "../assets/logos/dhl.png";
import collabera from "../assets/logos/collabera.png";
import sekura from "../assets/logos/sekura.png";
import hyundai from "../assets/logos/hyundai.png";
import medplus from "../assets/logos/medplus.png";

function TrustedLogos() {
  return (
    <section className="trusted">
      <p className="trusted-title">TRUSTED BY GROWING ENTERPRISES</p>

      <div className="trusted-logos">
        <img src={capgemini} alt="Capgemini" />
        <img src={dhl} alt="DHL" />
        <img src={collabera} alt="Collabera" />
        <img src={sekura} alt="Sekura" />
        <img src={hyundai} alt="Hyundai" />
        <img src={medplus} alt="MedPlus" />
      </div>
    </section>
  );
}

export default TrustedLogos;