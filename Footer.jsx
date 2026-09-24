import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer pt-5 pb-3 mt-5">
      <div className="container-narrow">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img src={logo} alt="JKKNIU Chess Club logo" width="44" height="44" style={{ objectFit: "cover", borderRadius: "50%" }} />
              <span className="text-white font-serif fs-5">JKKNIU Chess Club</span>
            </div>
            <p className="small mb-0">
              The official chess club of Jatiya Kabi Kazi Nazrul Islam University, fostering
              strategic thinking, discipline and sportsmanship among students since its founding.
            </p>
          </div>
          <div className="col-6 col-md-2">
            <h6>Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/about">About</Link></li>
              <li className="mb-2"><Link to="/committee">Committee</Link></li>
              <li className="mb-2"><Link to="/membership">Membership</Link></li>
              <li className="mb-2"><Link to="/tournaments">Tournaments</Link></li>
              <li className="mb-2"><Link to="/events">Events</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6>Important Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/academy">Chess Academy</Link></li>
              <li className="mb-2"><Link to="/news">News & Announcements</Link></li>
              <li className="mb-2"><Link to="/achievements">Achievements</Link></li>
              <li className="mb-2"><Link to="/gallery">Gallery</Link></li>
              <li className="mb-2">
                <a href="https://jkkniu.edu.bd" target="_blank" rel="noreferrer">JKKNIU Official Site</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Contact</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><i className="bi bi-geo-alt me-2"></i>Trishal, Mymensingh, Bangladesh</li>
              <li className="mb-2"><i className="bi bi-envelope me-2"></i>chessclub@jkkniu.edu.bd</li>
              <li className="mb-2"><i className="bi bi-telephone me-2"></i>+880 1XXX-XXXXXX</li>
            </ul>
            <div className="mt-2">
              <a href="#" aria-label="Facebook" className="me-3"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram fs-5"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between text-center text-md-start">
          <span>© 2026 JKKNIU Chess Club. All Rights Reserved.</span>
          <span>Designed for JKKNIU Chess Club</span>
        </div>
      </div>
    </footer>
  );
}
