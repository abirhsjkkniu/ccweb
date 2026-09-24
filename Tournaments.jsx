import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import TournamentCard from "../components/TournamentCard";
import { tournaments } from "../data/tournaments";

function Group({ title, status }) {
  const list = tournaments.filter((t) => t.status === status);
  if (list.length === 0) {
    return (
      <div className="mb-5">
        <SectionTitle title={title} />
        <p className="text-muted small">No {status} tournaments at the moment.</p>
      </div>
    );
  }
  return (
    <div className="mb-5">
      <SectionTitle title={title} />
      <div className="row g-4">
        {list.map((t) => <div className="col-md-6 col-lg-4" key={t.id}><TournamentCard tournament={t} /></div>)}
      </div>
    </div>
  );
}

export default function Tournaments() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small"><Link to="/">Home</Link> / Tournaments</div>
      </div>
      <section className="section-dark board-pattern py-5 text-center">
        <div className="container-narrow">
          <div className="eyebrow">Compete</div>
          <h1 className="text-white">Tournaments</h1>
          <div className="rule rule-center" />
          <p className="text-white-50 mx-auto" style={{ maxWidth: 640 }}>
            Browse upcoming, ongoing and completed tournaments organized by JKKNIU Chess Club.
          </p>
        </div>
      </section>
      <section className="py-section section-alt">
        <div className="container-narrow">
          <Group title="Upcoming Tournaments" status="upcoming" />
          <Group title="Ongoing Tournaments" status="ongoing" />
          <Group title="Completed Tournaments" status="completed" />
        </div>
      </section>
    </>
  );
}
