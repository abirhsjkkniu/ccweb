import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small"><Link to="/">Home</Link> / About</div>
      </div>
      <section className="section-dark board-pattern py-5 text-center">
        <div className="container-narrow">
          <div className="eyebrow">Our Story</div>
          <h1 className="text-white">About JKKNIU Chess Club</h1>
          <div className="rule rule-center" />
          <p className="text-white-50 mx-auto" style={{ maxWidth: 680 }}>
            A student-led community devoted to the game of chess and the mindset it builds —
            patience, foresight, and the courage to make bold, calculated decisions.
          </p>
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow row g-5">
          <div className="col-lg-6">
            <SectionTitle eyebrow="Background" title="History" />
            <p className="text-muted">
              <em>[Placeholder — replace with verified club history.]</em> JKKNIU Chess Club was
              founded by a small group of passionate students who wanted a formal platform for
              chess on campus. What began as informal matches in dormitory common rooms grew into
              a recognized university club, now organizing tournaments, training sessions and
              representing JKKNIU at national inter-university events.
            </p>
          </div>
          <div className="col-lg-6">
            <SectionTitle eyebrow="Looking Ahead" title="Vision" />
            <p className="text-muted">
              To make JKKNIU a recognized center of competitive chess excellence in Bangladesh,
              where every student has the opportunity to learn, compete, and grow through the
              game of chess.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section section-tint">
        <div className="container-narrow row g-5">
          <div className="col-lg-6">
            <SectionTitle eyebrow="Our Purpose" title="Mission" />
            <ul className="text-muted">
              <li className="mb-2">Promote chess as a tool for intellectual development among JKKNIU students.</li>
              <li className="mb-2">Organize regular tournaments, workshops and training sessions.</li>
              <li className="mb-2">Represent the university at divisional and national chess competitions.</li>
              <li className="mb-2">Build a disciplined, inclusive and supportive chess community.</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <SectionTitle eyebrow="What We Aim For" title="Objectives" />
            <ul className="text-muted">
              <li className="mb-2">Increase student participation in chess across all departments.</li>
              <li className="mb-2">Provide structured coaching for beginners through advanced players.</li>
              <li className="mb-2">Cultivate leadership and event-management skills among members.</li>
              <li className="mb-2">Strengthen ties with other university chess clubs nationwide.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle eyebrow="What We Do" title="Activities" align="center" />
          <div className="row g-4 mt-2 text-center">
            {[
              { icon: "bi-easel", title: "Weekly Training", text: "Structured sessions on openings, tactics and endgames." },
              { icon: "bi-trophy", title: "Tournaments", text: "Internal and inter-university competitive events." },
              { icon: "bi-mic", title: "Workshops & Seminars", text: "Guest sessions led by experienced players and coaches." },
              { icon: "bi-people", title: "Community Building", text: "Social events that bring members together beyond the board." },
            ].map((a) => (
              <div className="col-sm-6 col-lg-3" key={a.title}>
                <div className="club-card">
                  <div className="icon-wrap mx-auto"><i className={`bi ${a.icon}`}></i></div>
                  <h5 style={{ fontSize: "1rem" }}>{a.title}</h5>
                  <p className="small text-muted mb-0">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section section-dark board-pattern">
        <div className="container-narrow">
          <SectionTitle eyebrow="Consider This" title="Why Join the Club?" light align="center" />
          <div className="row g-4 mt-2">
            {[
              "Learn from experienced players and structured coaching.",
              "Compete in university, divisional and national tournaments.",
              "Develop strategic thinking, patience and decision-making skills.",
              "Build friendships within a passionate, welcoming community.",
              "Gain leadership experience by helping organize club events.",
              "Access club equipment, resources and training materials.",
            ].map((reason, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-circle-fill" style={{ color: "var(--gold)" }}></i>
                  <p className="text-white-50 mb-0 small">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
