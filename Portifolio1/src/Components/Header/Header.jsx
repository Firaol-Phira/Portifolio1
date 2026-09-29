import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo1.png";
import ThemeToggle from "../LightBG/Light";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
        const menu = document.getElementById("mobileMenu");
        if (menu && menu.classList.contains("show")) {
          menu.classList.remove("show");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <header
      className={`navbar fixed-top custom-navbar ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container header container-fluid px-4 position-relative">
        {/* Logo */}
        <a href="#home" className="navbar-brand logo">
          <img src={logo} alt="Logo" />
        </a>

        {/* DESKTOP NAVIGATION */}
        <ul className="navbar-nav flex-row gap-4 ms-auto d-none d-md-flex align-items-center">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>

          {/* FIXED DESKTOP: Integrated cleanly as the final menu item */}
          <li className="nav-item d-flex align-items-center">
            <ThemeToggle />
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button
          className="navbar-toggler border-0 shadow-none d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className=" tdot navbar-toggler-icon"></span>
        </button>

        {/* MOBILE OPENED MENU */}
        <div className="collapse d-md-none mobile-menu" id="mobileMenu">
          <div className="mobile-menu-card">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              {/* FIXED MOBILE: Removed the conflicting <a> anchor tag wrap */}
              <li className="nav-item theme-toggle-mobile-item">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
