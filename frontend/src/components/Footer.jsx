import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-section">
          <h3>Abbie's Coffee House</h3>
          <p>123 Brew Street</p>
          <p>Nairobi, Kenya</p>
          <p>+254 700 000 000</p>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon – Fri: 7am – 8pm</p>
          <p>Saturday: 8am – 9pm</p>
          <p>Sunday: 9am – 6pm</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Abbie's Coffee House. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer