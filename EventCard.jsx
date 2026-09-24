import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  const d = new Date(event.date);
  const dateStr = d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  return (
    <div className="info-card">
      <div className="card-img" style={{ backgroundImage: `url(${event.image})` }} role="img" aria-label={event.name} />
      <div className="card-body-custom">
        <span className="tag-pill mb-2 d-inline-block">{event.category}</span>
        <h5 className="mb-1" style={{ fontSize: "1.05rem" }}>{event.name}</h5>
        <p className="small text-muted mb-1"><i className="bi bi-calendar3 me-1"></i>{dateStr} &nbsp; <i className="bi bi-clock ms-1 me-1"></i>{event.time}</p>
        <p className="small text-muted mb-2"><i className="bi bi-geo-alt me-1"></i>{event.venue}</p>
        <p className="small mb-3">{event.description}</p>
        <Link to={`/events`} className="btn btn-outline-navy btn-sm">View Details</Link>
      </div>
    </div>
  );
}
