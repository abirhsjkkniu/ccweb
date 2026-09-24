import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { learningTopics, puzzles, resources } from "../data/academy";

export default function Academy() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small"><Link to="/">Home</Link> / Chess Academy</div>
      </div>
      <section className="section-dark board-pattern py-5 text-center">
        <div className="container-narrow">
          <div className="eyebrow">Learn & Improve</div>
          <h1 className="text-white">Chess Academy</h1>
          <div className="rule rule-center" />
          <p className="text-white-50 mx-auto" style={{ maxWidth: 640 }}>
            Free learning resources for club members, from your first move to advanced strategy.
          </p>
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle eyebrow="Curriculum" title="Learning Topics" />
          <div className="row g-4">
            {learningTopics.map((t) => (
              <div className="col-sm-6 col-lg-4" key={t.id}>
                <div className="club-card">
                  <div className="icon-wrap"><i className={`bi ${t.icon}`}></i></div>
                  <h5 style={{ fontSize: "1.05rem" }}>{t.title}</h5>
                  <p className="small text-muted mb-0">{t.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section section-tint">
        <div className="container-narrow">
          <SectionTitle eyebrow="Sharpen Your Mind" title="Chess Puzzles" />
          <div className="row g-4">
            {puzzles.map((p) => (
              <div className="col-sm-6 col-lg-3" key={p.id}>
                <div className="puzzle-card h-100">
                  <span className="tag-pill mb-2 d-inline-block">{p.level}</span>
                  <h6 className="mb-1">{p.theme}</h6>
                  <p className="small text-muted mb-3">{p.description}</p>
                  <div className="d-flex justify-content-center align-items-center bg-light rounded" style={{ height: 90, border: "1px dashed rgba(11,21,38,0.2)" }}>
                    <span className="small text-muted">Board Diagram Placeholder</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle eyebrow="Go Deeper" title="Recommended Resources" />
          <div className="row g-3">
            {resources.map((r) => (
              <div className="col-md-6" key={r.id}>
                <div className="d-flex align-items-start gap-3 club-card">
                  <i className="bi bi-book fs-4" style={{ color: "var(--gold)" }}></i>
                  <div>
                    <h6 className="mb-1">{r.title} <span className="small text-muted">({r.type})</span></h6>
                    <p className="small text-muted mb-0">{r.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
