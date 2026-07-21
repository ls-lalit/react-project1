import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ChevronDown } from "lucide-react";
import vedlogo from "../assets/image.png";
function Navbar() {
  //const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleTheme = () => {
  //   document.body.classList.toggle("dark");
  //   setDarkMode(!darkMode);
  // };
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
            <a href="/#services" className="dropdown-btn" onClick={closeMenu}>
              Services
              <ChevronDown size={16} />
            </a>

            <ul className="dropdown-menu">
              <li><a href="/#services" onClick={closeMenu}>Salesforce Consulting</a></li>
              <li><a href="/#services" onClick={closeMenu}>SAP Integration</a></li>
              <li><a href="/#services" onClick={closeMenu}>Cloud Migration</a></li>
              <li><a href="/#services" onClick={closeMenu}>Custom Development</a></li>

            </ul>
          </li>

          <li><a href="/#whychoose" onClick={closeMenu}>Why Us</a></li>

          <li className="dropdown">
            <button type="button" className="dropdown-btn">
              Resources
              <ChevronDown size={16} />
            </button>

            <ul className="dropdown-menu">
              <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
              <li><a href="/#Resources" onClick={closeMenu}>Case Studies</a></li>
              <li><a href="/#Resources" onClick={closeMenu}>Whitepapers</a></li>
              <li><a href="/#Resources" onClick={closeMenu}>FAQs</a></li>
            </ul>

          </li>

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

        {/* <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "◐"}
        </button> */}

      </div>
    </header >
  );
}

export default Navbar;
