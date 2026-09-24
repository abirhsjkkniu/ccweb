import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import MemberCard from "../components/MemberCard";
import { executiveCommittee, executiveMembers, formerCommittees } from "../data/members";

export default function Committee() {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small"><Link to="/">Home</Link> / Executive Committee</div>
      </div>
      <section className="section-dark board-pattern py-5 text-center">
        <div className="container-narrow">
          <div className="eyebrow">2026-27 Session</div>
          <h1 className="text-white">Executive Committee</h1>
          <div className="rule rule-center" />
          <p className="text-white-50 mx-auto" style={{ maxWidth: 640 }}>
            The students who plan, organize and lead JKKNIU Chess Club's activities throughout the year.
          </p>
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle eyebrow="Leadership" title="Core Committee" />
          <div className="row g-4">
            {executiveCommittee.map((m) => (
              <div className="col-sm-6 col-lg-4" key={m.id}><MemberCard member={m} /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section section-tint">
        <div className="container-narrow">
          <SectionTitle eyebrow="Supporting the Committee" title="Executive Members" />
          <div className="row g-4">
            {executiveMembers.map((m) => (
              <div className="col-sm-6 col-lg-3" key={m.id}><MemberCard member={m} /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle eyebrow="Legacy" title="Former Executive Committees" />
          <div className="table-responsive">
            <table className="table table-club align-middle">
              <thead>
                <tr><th>Session</th><th>President</th><th>General Secretary</th></tr>
              </thead>
              <tbody>
                {formerCommittees.map((c) => (
                  <tr key={c.year}>
                    <td>{c.year}</td>
                    <td>{c.president}</td>
                    <td>{c.generalSecretary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="small text-muted"><em>[Placeholder data — replace with verified historical committee records.]</em></p>
        </div>
      </section>
    </>
  );
}
