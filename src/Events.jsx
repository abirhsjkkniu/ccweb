import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import SectionTitle from "../components/SectionTitle";
import EventCard from "../components/EventCard";
import FilterBar from "../components/FilterBar";
import { events, eventCategories } from "../data/events";

export default function Events() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? events : events.filter((e) => e.category === category)),
    [category]
  );

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small"><Link to="/">Home</Link> / Events</div>
      </div>
      <section className="section-dark board-pattern py-5 text-center">
        <div className="container-narrow">
          <div className="eyebrow">On Campus</div>
          <h1 className="text-white">Events</h1>
          <div className="rule rule-center" />
          <p className="text-white-50 mx-auto" style={{ maxWidth: 640 }}>
            Tournaments, training sessions, workshops, seminars, exhibitions and inter-department competitions.
          </p>
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle title="Browse by Category" />
          <FilterBar options={eventCategories} active={category} onChange={setCategory} />

          <div className="row g-4 mt-2">
            {filtered.length === 0 && (
              <p className="text-muted">No events found in this category yet. Please check back soon.</p>
            )}
            {filtered.map((e) => (
              <div className="col-md-6 col-lg-4" key={e.id}><EventCard event={e} /></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
