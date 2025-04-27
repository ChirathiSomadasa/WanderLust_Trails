import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import "./Footer.css";

function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">WanderLust Trails</h2>
            <p className="footer-tagline">Discover the world, one adventure at a time</p>
            <div className="footer-social">
              <Link to="https://facebook.com" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link to="https://instagram.com" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link to="https://twitter.com" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <Link to="https://youtube.com" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3 className="footer-links-title">Destinations</h3>
              <ul className="footer-links-list">
                <li>
                  <Link to="/destinations/asia">Asia</Link>
                </li>
                <li>
                  <Link to="/destinations/europe">Europe</Link>
                </li>
                <li>
                  <Link to="/destinations/africa">Africa</Link>
                </li>
                <li>
                  <Link to="/destinations/americas">Americas</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-links-title">Experiences</h3>
              <ul className="footer-links-list">
                <li>
                  <Link to="/experiences/adventure">Adventure</Link>
                </li>
                <li>
                  <Link to="/experiences/cultural">Cultural</Link>
                </li>
                <li>
                  <Link to="/experiences/wildlife">Wildlife</Link>
                </li>
                <li>
                  <Link to="/experiences/beach">Beach</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-links-title">Company</h3>
              <ul className="footer-links-list">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>               
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3 className="footer-newsletter-title">Travel Updates</h3>
            <p className="footer-newsletter-text">
              Subscribe to our newsletter for travel tips, exclusive deals, and destination inspiration.
            </p>
            <form className="footer-newsletter-form">
              <input type="email" placeholder="Your email address" className="footer-newsletter-input" required />
              <button type="submit" className="footer-newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <MapPin size={18} />
            <span>No. 456, Galle Road, Colombo 03,Sri Lanka</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>+94 112426901</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>info@wanderlusttrails.com</span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="footer-copyright">&copy; {currentYear} WanderLust Trails. All rights reserved.</p>
            <div className="footer-legal-links">
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
