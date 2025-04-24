import { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Left side - Logo and name */}
          <div className="header-left">
            <Link to="/" className="logo-container">
              <div className="logo">WanderLust Trails</div>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <span className="menu-icon"></span>
          </button>

          {/* Right side - Auth buttons */}
          <div className="header-right">
            <Link to="/register">
              <button className="primary-button">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="text-button-login">Login</button>
            </Link>
            <button className="text-button">Sign Out</button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>
            About Us
          </Link>
          <Link to="/services" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Services
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Contact Us
          </Link>

          {/* Mobile Auth Buttons */}
          <div className="mobile-auth-buttons">
            <Link to="/register" onClick={toggleMobileMenu}>
              <button className="primary-button-h mobile-auth-button">Sign Up</button>
            </Link>
            <Link to="/login" onClick={toggleMobileMenu}>
              <button className="text-button-login mobile-auth-button">Login</button>
            </Link>
            <button className="text-button mobile-auth-button">Sign Out</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
