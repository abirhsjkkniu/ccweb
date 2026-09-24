import { Link } from "react-router-dom";

const statusClass = { upcoming: "status-upcoming", ongoing: "status-ongoing", completed: "status-completed" };

export default function TournamentCard({ tournament }) {
  const d = new Date(tournament.date);
  const dateStr = d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const dl = new Date(tournament.registrationDeadline).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  return (
    <div className="club-card">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <span className={`status-pill ${statusClass[tournament.status]}`}>{tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}</span>
        <span className="small text-muted">{tournament.format}</span>
      </div>
      <h5 className="mb-2" style={{ fontSize: "1.1rem" }}>{tournament.name}</h5>
      <ul className="list-unstyled small text-muted mb-3">
        <li className="mb-1"><i className="bi bi-calendar3 me-2"></i>{dateStr}</li>
        <li className="mb-1"><i className="bi bi-hourglass-split me-2"></i>Registration by {dl}</li>
        <li className="mb-1"><i className="bi bi-people me-2"></i>{tournament.participants}/{tournament.maxParticipants} participants</li>
      </ul>
      <div className="d-flex gap-2">
        <Link to={`/tournaments/${tournament.id}`} className="btn btn-outline-navy btn-sm">Details</Link>
        {tournament.status === "upcoming" && (
          <Link to="/membership" className="btn-gold btn btn-sm">Register</Link>
        )}
      </div>
    </div>
  );
}
