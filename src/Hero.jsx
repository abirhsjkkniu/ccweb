import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <header className="hero board-pattern py-5">
      <div className="container-narrow py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-8">
            <img src={logo} alt="JKKNIU Chess Club emblem" className="hero-logo mb-4" />
            <div className="eyebrow">Jatiya Kabi Kazi Nazrul Islam University</div>
            <h1 className="mb-2">JKKNIU Chess Club</h1>
            <p className="lead mb-3">Think Strategically. Play Intelligently. Lead Boldly.</p>
            <p className="intro mb-4">
              We are the official chess community of JKKNIU — a space where students sharpen
              strategic thinking, build discipline, and compete at university, divisional and
              national levels while forming lifelong friendships over the sixty-four squares.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/membership" className="btn-gold btn">Join the Club</Link>
              <Link to="/tournaments" className="btn-outline-ivory btn">Explore Tournaments</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
