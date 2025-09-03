import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle logic
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} data-testid="navbar">
      <div className="navbar-content">
        <a href="#home" className="logo" data-testid="link-logo">
          BusinessPro
        </a>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleNavClick(e, "#home")}>Home</a></li>
          <li><a href="#features" onClick={(e) => handleNavClick(e, "#features")}>Features</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")}>About</a></li>
          <li><a href="#testimonials" onClick={(e) => handleNavClick(e, "#testimonials")}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Contact</a></li>
        </ul>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
