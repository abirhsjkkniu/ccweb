import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import AchievementCard from "../components/AchievementCard";
import { clubStats, clubAchievements, tournamentAchievements, individualAchievements } from "../data/achievements";

export default function Achievements() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small"><Link to="/">Home</Link> / Achievements</div>
      </div>
      <section className="section-dark board-pattern py-5">
        <div className="container-narrow text-center mb-4">
          <div className="eyebrow">Recognition</div>
          <h1 className="text-white">Achievements</h1>
          <div className="rule rule-center" />
        </div>
        <div className="container-narrow row g-0 text-center">
          {clubStats.map((s) => <div className="col-6 col-md-3" key={s.id}><StatCard number={s.number} label={s.label} /></div>)}
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle eyebrow="At the Club Level" title="Club Achievements" />
          <div className="row g-4">
            {clubAchievements.map((a) => (
              <div className="col-md-6 col-lg-4" key={a.id}>
                <AchievementCard title={a.title} description={a.description} year={a.year} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section section-tint">
        <div className="container-narrow">
          <SectionTitle eyebrow="On the Board" title="Tournament Achievements" />
          <div className="row g-3">
            {tournamentAchievements.map((t) => (
              <div className="col-md-4" key={t.id}>
                <div className="club-card d-flex align-items-center gap-3">
                  <i className="bi bi-trophy-fill fs-3" style={{ color: "var(--gold)" }}></i>
                  <div>
                    <h6 className="mb-1" style={{ fontSize: "0.95rem" }}>{t.title}</h6>
                    <p className="small text-muted mb-0">{t.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle eyebrow="Standout Players" title="Individual Member Achievements" />
          <div className="row g-4">
            {individualAchievements.map((m) => (
              <div className="col-md-4" key={m.id}>
                <div className="club-card member-card">
                  <img src={m.photo} alt={m.name} className="member-photo" style={{ width: 90, height: 90 }} />
                  <h6 className="mb-1">{m.name}</h6>
                  <p className="small text-muted mb-0">{m.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section section-tint">
        <div className="container-narrow text-center">
          <SectionTitle eyebrow="Recognized By" title="Awards & Recognition" align="center" />
          <p className="text-muted mx-auto" style={{ maxWidth: 620 }}>
            <em>[Placeholder]</em> JKKNIU Chess Club has been recognized by the university's Student
            Activities Office for outstanding organization and consistent representation of the
            university at inter-collegiate chess events.
          </p>
        </div>
      </section>
    </>
  );
}
