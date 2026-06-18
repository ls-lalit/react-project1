import { useState } from "react";
import { Link } from "react-router-dom";
import vedlogo from "../assets/vedlogo.png";
function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
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

      <ul className="nav-links">
        <li><a href="/#services">Services</a></li>
        <li><a href="/#platforms">Platforms</a></li>
        <li><a href="/#whychoose">Why Us</a></li>
        <li><a href="/#process">Process</a></li>
        <li><a href="/#contact">Contact</a></li>

        <li><Link to="/blog">Blog</Link></li>
      </ul>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
      >
        {darkMode ? "☀️" : "◐"}
      </button>
    </header>
  );
}

export default Navbar;
