import { Link, useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { tournaments, leaderboard } from "../data/tournaments";

export default function TournamentDetails() {
  const { id } = useParams();
  const tournament = tournaments.find((t) => t.id === id);

  if (!tournament) {
    return (
      <section className="py-section section-alt text-center">
        <div className="container-narrow">
          <h2>Tournament Not Found</h2>
          <p className="text-muted">The tournament you're looking for doesn't exist or has been removed.</p>
          <Link to="/tournaments" className="btn-gold btn">Back to Tournaments</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small">
          <Link to="/">Home</Link> / <Link to="/tournaments">Tournaments</Link> / {tournament.name}
        </div>
      </div>

      <section className="section-dark board-pattern py-5">
        <div className="container-narrow">
          <div className="eyebrow">{tournament.format}</div>
          <h1 className="text-white mb-2">{tournament.name}</h1>
          <p className="text-white-50">{tournament.description}</p>
          <div className="d-flex gap-3 mt-3">
            {tournament.status === "upcoming" && <Link to="/membership" className="btn-gold btn">Register Now</Link>}
            <Link to="/tournaments" className="btn-outline-ivory btn">Back to List</Link>
          </div>
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <div className="row g-4 mb-5">
            <div className="col-6 col-md-3">
              <div className="club-card text-center"><i className="bi bi-calendar3 fs-3" style={{ color: "var(--gold)" }}></i>
                <p className="small text-muted mb-0 mt-2">{new Date(tournament.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</p></div>
            </div>
            <div className="col-6 col-md-3">
              <div className="club-card text-center"><i className="bi bi-geo-alt fs-3" style={{ color: "var(--gold)" }}></i>
                <p className="small text-muted mb-0 mt-2">{tournament.venue}</p></div>
            </div>
            <div className="col-6 col-md-3">
              <div className="club-card text-center"><i className="bi bi-people fs-3" style={{ color: "var(--gold)" }}></i>
                <p className="small text-muted mb-0 mt-2">{tournament.participants}/{tournament.maxParticipants} Participants</p></div>
            </div>
            <div className="col-6 col-md-3">
              <div className="club-card text-center"><i className="bi bi-flag fs-3" style={{ color: "var(--gold)" }}></i>
                <p className="small text-muted mb-0 mt-2 text-capitalize">{tournament.status}</p></div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <SectionTitle title="Rules" />
              <ul className="text-muted">
                {tournament.rules.map((r, i) => <li className="mb-2" key={i}>{r}</li>)}
              </ul>
            </div>
            <div className="col-lg-6">
              <SectionTitle title="Schedule" />
              <ul className="list-unstyled">
                {tournament.schedule.map((s, i) => (
                  <li key={i} className="d-flex justify-content-between border-bottom py-2 small">
                    <span>{s.round}</span><span className="text-muted">{s.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5">
            <SectionTitle eyebrow="Results" title="Standings & Leaderboard" />
            <p className="small text-muted"><em>[Sample leaderboard — pairings and live results are updated by the Organizing Secretary during the event.]</em></p>
            <div className="table-responsive">
              <table className="table table-club align-middle">
                <thead>
                  <tr>
                    <th>Rank</th><th>Player</th><th>Department</th><th>Games</th><th>Wins</th><th>Draws</th><th>Losses</th><th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((r) => (
                    <tr key={r.rank}>
                      <td>{r.rank}</td><td>{r.player}</td><td>{r.department}</td>
                      <td>{r.games}</td><td>{r.wins}</td><td>{r.draws}</td><td>{r.losses}</td><td><strong>{r.points}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
