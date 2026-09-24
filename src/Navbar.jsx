import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/committee", label: "Executive Committee" },
  { to: "/membership", label: "Membership" },
  { to: "/tournaments", label: "Tournaments" },
  { to: "/events", label: "Events" },
  { to: "/academy", label: "Chess Academy" },
  { to: "/news", label: "News & Announcements" },
  { to: "/achievements", label: "Achievements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg site-navbar sticky-top py-2">
      <div className="container-narrow d-flex align-items-center">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 me-4" onClick={() => setOpen(false)}>
          <img src={logo} alt="JKKNIU Chess Club logo" width="42" height="42" style={{ objectFit: "cover", borderRadius: "50%" }} />
          <span className="navbar-brand-text">
            JKKNIU Chess Club
            <small>Jatiya Kabi Kazi Nazrul Islam University</small>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((l) => (
              <li className="nav-item" key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
