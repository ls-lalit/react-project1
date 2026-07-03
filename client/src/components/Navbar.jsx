import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import vedlogo from "../assets/vedlogo.png";
function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="topbar">
      <a href="#home" className="brand">
        <img
          src={vedlogo}
          alt="Vedendu IT Solutions"
          className="brand-logo"
        />
      </a>
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <nav className={`navbar-center ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li className="dropdown">
            <button className="dropdown-btn"
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "services" ? null : "services"
                )
              }
            >
              Services ▼
            </button>

            {openDropdown === "services" && (
              <ul className="dropdown-menu">
                <li><a href="/#services" onClick={() => setOpenDropdown(null)}>Salesforce Consulting</a></li>
                <li><a href="/#services" onClick={() => setOpenDropdown(null)}>SAP Integration</a></li>
                <li><a href="/#services" onClick={() => setOpenDropdown(null)}>Cloud Migration</a></li>
                <li><a href="/#services" onClick={() => setOpenDropdown(null)}>Custom Development</a></li>
              </ul>
            )}
          </li>

          <li className="dropdown">
            <button className="dropdown-btn"
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "platforms" ? null : "platforms"
                )
              }
            >
              Platforms ▼
            </button>

            {openDropdown === "platforms" && (
              <ul className="dropdown-menu">
                <li><a href="/#platforms" onClick={() => setOpenDropdown(null)}>Salesforce</a></li>
                <li><a href="/#platforms" onClick={() => setOpenDropdown(null)}>SAP</a></li>
                <li><a href="/#platforms" onClick={() => setOpenDropdown(null)}>Microsoft Azure</a></li>
                <li><a href="/#platforms" onClick={() => setOpenDropdown(null)}>AWS</a></li>
              </ul>
            )}
          </li>

          <li><a href="/#whychoose" onClick={closeMenu}>Why Us</a></li>

          <li className="dropdown">
            <button className="dropdown-btn"
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "resources" ? null : "resources"
                )
              }
            >
              Resources ▼
            </button>

            {openDropdown === "resources" && (
              <ul className="dropdown-menu">
                <li><a href="/blog" onClick={() => setOpenDropdown(null)}>Blog</a></li>
                <li><a href="/#resources" onClick={() => setOpenDropdown(null)}>Case Studies</a></li>
                <li><a href="/#resources" onClick={() => setOpenDropdown(null)}>Whitepapers</a></li>
                <li><a href="/#resources" onClick={() => setOpenDropdown(null)}>FAQs</a></li>
              </ul>
            )}
          </li>


          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><a href="/#about" onClick={closeMenu}>About Us</a></li>

          <li className="mobile-consult">
            <Link
              to="/contact"
              className="consult-btn"
              onClick={closeMenu}
            >
              Book a Free Consultation →
            </Link>
          </li>
        </ul>
      </nav>
      <div className="nav-right">

        <Link to="/contact" className="consult-btn">
          Book a Free Consultation →
        </Link>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "◐"}
        </button>

      </div>
    </header >
  );
}

export default Navbar;
