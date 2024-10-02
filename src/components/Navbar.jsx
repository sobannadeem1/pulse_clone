import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Importing Link and useLocation from React Router
import "../styles/Navbar.css"; // Importing external CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Function to check if the current window width is for mobile or desktop
  const checkMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsOpen(false); // Close the mobile menu if on desktop mode
    }
  };

  // Check the screen size on initial load and whenever the window is resized
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen); // Toggle the menu only if it's in mobile mode
    }
  };

  return (
    <nav
      className={`navbar ${location.pathname !== "/" ? "navbar-scroll" : ""}`}
    >
      <div className="navbar-container">
        {/* Navbar logo */}
        <div className="navbar-logo">
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            <img src="https://pulseapp.com/img/pulse-logo.svg" alt="logo" />
          </Link>
        </div>

        {/* Navbar links */}
        <div className={`navbar-links ${isOpen && isMobile ? "open" : ""}`}>
          {isMobile && (
            <span className="close-icon" onClick={toggleMenu}>
              &times;
            </span>
          )}
          <Link
            to="/features"
            onClick={() => setIsOpen(false)}
            style={{ fontWeight: "bolder" }}
          >
            Features
          </Link>
          <Link
            to="/customer"
            onClick={() => setIsOpen(false)}
            style={{ fontWeight: "bolder" }}
          >
            Customer Stories
          </Link>
          <Link
            to="/pricing"
            onClick={() => setIsOpen(false)}
            style={{ fontWeight: "bolder" }}
          >
            Pricing
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            style={{ fontWeight: "bolder" }}
          >
            Blog
          </Link>
          <Link
            to="/signup"
            className="signup-btn"
            onClick={() => setIsOpen(false)}
          >
            Signup
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        {isMobile && (
          <div className="navbar-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
