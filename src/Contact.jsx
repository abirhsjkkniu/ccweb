import { Link } from "react-router-dom";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!form.subject.trim()) errs.subject = "Subject is required.";
    if (!form.message.trim()) errs.message = "Message cannot be empty.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small"><Link to="/">Home</Link> / Contact</div>
      </div>
      <section className="section-dark board-pattern py-5 text-center">
        <div className="container-narrow">
          <div className="eyebrow">Get in Touch</div>
          <h1 className="text-white">Contact Us</h1>
          <div className="rule rule-center" />
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow row g-5">
          <div className="col-lg-5">
            <SectionTitle title="JKKNIU Chess Club" />
            <ul className="list-unstyled text-muted">
              <li className="mb-3"><i className="bi bi-building me-2" style={{ color: "var(--gold)" }}></i>Jatiya Kabi Kazi Nazrul Islam University</li>
              <li className="mb-3"><i className="bi bi-geo-alt me-2" style={{ color: "var(--gold)" }}></i>Trishal, Mymensingh, Bangladesh</li>
              <li className="mb-3"><i className="bi bi-envelope me-2" style={{ color: "var(--gold)" }}></i>chessclub@jkkniu.edu.bd <span className="small">(placeholder)</span></li>
              <li className="mb-3"><i className="bi bi-telephone me-2" style={{ color: "var(--gold)" }}></i>+880 1XXX-XXXXXX <span className="small">(placeholder)</span></li>
              <li className="mb-3"><i className="bi bi-facebook me-2" style={{ color: "var(--gold)" }}></i>facebook.com/jkkniuchessclub <span className="small">(placeholder)</span></li>
              <li className="mb-3"><i className="bi bi-instagram me-2" style={{ color: "var(--gold)" }}></i>instagram.com/jkkniuchessclub <span className="small">(placeholder)</span></li>
            </ul>

            <div className="ratio ratio-4x3 mt-4 rounded overflow-hidden" style={{ border: "1px solid rgba(11,21,38,0.1)" }}>
              <iframe
                title="JKKNIU Location Map"
                src="https://www.google.com/maps?q=Jatiya+Kabi+Kazi+Nazrul+Islam+University&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="club-card club-form">
              <h4 className="mb-3" style={{ fontSize: "1.3rem" }}>Send a Message</h4>
              {submitted && (
                <div className="alert alert-success" role="alert">
                  <i className="bi bi-check-circle me-2"></i>Your message has been sent. We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name">Name *</label>
                    <input id="name" className="form-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    {errors.name && <div className="text-danger small mt-1">{errors.name}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email">Email *</label>
                    <input id="email" type="email" className="form-control" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject">Subject *</label>
                  <input id="subject" className="form-control" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                  {errors.subject && <div className="text-danger small mt-1">{errors.subject}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" rows="5" className="form-control" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
                  {errors.message && <div className="text-danger small mt-1">{errors.message}</div>}
                </div>
                <button type="submit" className="btn-gold btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
