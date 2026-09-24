import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import QuickActionCard from "../components/QuickActionCard";
import EventCard from "../components/EventCard";
import NewsCard from "../components/NewsCard";
import TournamentCard from "../components/TournamentCard";
import StatCard from "../components/StatCard";
import GalleryCard from "../components/GalleryCard";
import Modal from "../components/Modal";
import { useState } from "react";
import { events } from "../data/events";
import { news } from "../data/news";
import { tournaments } from "../data/tournaments";
import { clubStats } from "../data/achievements";
import { galleryImages } from "../data/gallery";

export default function Home() {
  const [lightbox, setLightbox] = useState(null);
  const upcomingTournament = tournaments.find((t) => t.status === "upcoming") || tournaments[0];
  const upcomingEvents = events.slice(0, 3);
  const latestNews = news.slice(0, 3);
  const previewImages = galleryImages.slice(0, 6);

  return (
    <>
      <Hero />

      {/* QUICK ACTIONS */}
      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle eyebrow="Get Involved" title="Quick Actions" align="center" />
          <div className="row g-4 mt-2">
            <div className="col-sm-6 col-lg-4"><QuickActionCard icon="bi-person-plus" title="Join the Club" text="Become an official member and start your competitive chess journey." to="/membership" /></div>
            <div className="col-sm-6 col-lg-4"><QuickActionCard icon="bi-trophy" title="Upcoming Tournaments" text="Browse and register for the club's tournament calendar." to="/tournaments" /></div>
            <div className="col-sm-6 col-lg-4"><QuickActionCard icon="bi-people" title="Executive Committee" text="Meet the students who lead and organize the club." to="/committee" /></div>
            <div className="col-sm-6 col-lg-4"><QuickActionCard icon="bi-calendar-event" title="Events" text="Workshops, seminars and exhibitions happening on campus." to="/events" /></div>
            <div className="col-sm-6 col-lg-4"><QuickActionCard icon="bi-mortarboard" title="Chess Academy" text="Learn openings, tactics and endgames at your own pace." to="/academy" /></div>
            <div className="col-sm-6 col-lg-4"><QuickActionCard icon="bi-envelope" title="Contact Us" text="Reach out with questions, ideas or partnership proposals." to="/contact" /></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-section section-tint">
        <div className="container-narrow row align-items-center g-5">
          <div className="col-lg-6">
            <SectionTitle eyebrow="Who We Are" title="About the Club" />
            <p className="text-muted">
              JKKNIU Chess Club is the official student organization dedicated to promoting chess
              and strategic thinking at Jatiya Kabi Kazi Nazrul Islam University. Beyond the game
              itself, we cultivate leadership, discipline, patience and teamwork among our members
              through regular training, friendly matches and competitive tournaments.
            </p>
            <p className="text-muted mb-4">
              Open to students of every department and skill level, the club has grown into one of
              the university's most active co-curricular communities.
            </p>
            <Link to="/about" className="btn-outline-navy btn">Read Our Story</Link>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=900&q=80"
              alt="Chess club members playing a match"
              className="img-fluid rounded"
              style={{ border: "1px solid rgba(11,21,38,0.1)" }}
            />
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-section section-alt">
        <div className="container-narrow">
          <div className="d-flex justify-content-between align-items-end flex-wrap">
            <SectionTitle eyebrow="What's On" title="Upcoming Events" />
            <Link to="/events" className="btn-outline-navy btn mb-4">View All Events</Link>
          </div>
          <div className="row g-4">
            {upcomingEvents.map((e) => (
              <div className="col-md-6 col-lg-4" key={e.id}><EventCard event={e} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TOURNAMENT */}
      <section className="py-section section-dark board-pattern">
        <div className="container-narrow">
          <SectionTitle eyebrow="Featured" title="Upcoming Tournament" light />
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-8">
              <div className="club-card h-100" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(201,161,90,0.3)" }}>
                <h3 className="text-white mb-3" style={{ fontSize: "1.5rem" }}>{upcomingTournament.name}</h3>
                <div className="row text-white-50 small g-3 mb-3">
                  <div className="col-6 col-md-3"><i className="bi bi-calendar3 me-2 text-white"></i>{new Date(upcomingTournament.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</div>
                  <div className="col-6 col-md-3"><i className="bi bi-hourglass-split me-2 text-white"></i>Reg. by {new Date(upcomingTournament.registrationDeadline).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}</div>
                  <div className="col-6 col-md-3"><i className="bi bi-people me-2 text-white"></i>{upcomingTournament.participants} players</div>
                  <div className="col-6 col-md-3"><i className="bi bi-diagram-3 me-2 text-white"></i>{upcomingTournament.format}</div>
                </div>
                <p className="text-white-50">{upcomingTournament.description}</p>
                <div className="d-flex gap-3">
                  <Link to="/membership" className="btn-gold btn">Register Now</Link>
                  <Link to={`/tournaments/${upcomingTournament.id}`} className="btn-outline-ivory btn">Details</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-3">
                {clubStats.slice(0, 4).map((s) => (
                  <div className="col-6" key={s.id}><StatCard number={s.number} label={s.label} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="py-section section-alt">
        <div className="container-narrow">
          <div className="d-flex justify-content-between align-items-end flex-wrap">
            <SectionTitle eyebrow="Stay Informed" title="Latest News" />
            <Link to="/news" className="btn-outline-navy btn mb-4">All News</Link>
          </div>
          <div className="row g-4">
            {latestNews.map((n) => (
              <div className="col-md-6 col-lg-4" key={n.id}><NewsCard item={n} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-section section-tint">
        <div className="container-narrow">
          <SectionTitle eyebrow="Milestones" title="Our Achievements" align="center" />
          <div className="row g-3 text-center mt-2">
            {clubStats.map((s) => (
              <div className="col-6 col-md-3" key={s.id}>
                <div className="club-card">
                  <div className="stat-number" style={{ color: "var(--navy)" }}>{s.number}</div>
                  <div className="text-muted small text-uppercase">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/achievements" className="btn-outline-navy btn">See All Achievements</Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle eyebrow="Moments" title="Gallery" align="center" />
          <div className="row g-3 mt-2">
            {previewImages.map((img) => (
              <div className="col-6 col-md-4" key={img.id}>
                <GalleryCard image={img} onClick={setLightbox} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/gallery" className="btn-outline-navy btn">View All Gallery</Link>
          </div>
        </div>
      </section>
      <Modal image={lightbox} onClose={() => setLightbox(null)} />

      {/* CTA */}
      <section className="py-section section-dark board-pattern text-center">
        <div className="container-narrow">
          <h2 className="text-white">Make Your Move</h2>
          <div className="rule rule-center" />
          <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: 560 }}>
            Whether you're a beginner learning how the knight moves or a rated player chasing your
            next title, there's a place for you at JKKNIU Chess Club. Every great game starts with
            a single move — make yours today.
          </p>
          <Link to="/membership" className="btn-gold btn btn-lg">Join JKKNIU Chess Club</Link>
        </div>
      </section>
    </>
  );
}
