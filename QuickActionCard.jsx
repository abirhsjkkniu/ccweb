import { Link } from "react-router-dom";

export default function QuickActionCard({ icon, title, text, to }) {
  return (
    <Link to={to} className="club-card d-block text-decoration-none text-dark h-100">
      <div className="icon-wrap"><i className={`bi ${icon}`}></i></div>
      <h5 style={{ fontSize: "1.05rem" }}>{title}</h5>
      <p className="small text-muted mb-2">{text}</p>
      <span className="small" style={{ color: "var(--gold)" }}>Learn more <i className="bi bi-arrow-right"></i></span>
    </Link>
  );
}
