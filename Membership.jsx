import { Link } from "react-router-dom";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const initialForm = {
  fullName: "", studentId: "", department: "", session: "", phone: "", email: "",
  involvement: "", experience: "", message: "",
};

export default function Membership() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.studentId.trim()) errs.studentId = "Student ID is required.";
    if (!form.department.trim()) errs.department = "Department is required.";
    if (!form.session.trim()) errs.session = "Session is required.";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) errs.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!form.involvement) errs.involvement = "Please select an area of involvement.";
    if (!form.experience) errs.experience = "Please select your chess experience.";
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
        <div className="container-narrow small"><Link to="/">Home</Link> / Membership</div>
      </div>
      <section className="section-dark board-pattern py-5 text-center">
        <div className="container-narrow">
          <div className="eyebrow">Become a Member</div>
          <h1 className="text-white">Membership</h1>
          <div className="rule rule-center" />
          <p className="text-white-50 mx-auto" style={{ maxWidth: 640 }}>
            Membership is open to all currently enrolled JKKNIU students, regardless of department or chess experience.
          </p>
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow row g-5">
          <div className="col-lg-6">
            <SectionTitle eyebrow="Benefits" title="Why Become a Member?" />
            <ul className="text-muted mb-4">
              <li className="mb-2">Free access to weekly training sessions and coaching.</li>
              <li className="mb-2">Priority registration for club tournaments and events.</li>
              <li className="mb-2">Use of club chess sets, boards and digital clocks.</li>
              <li className="mb-2">Opportunity to represent JKKNIU at inter-university competitions.</li>
              <li className="mb-2">A certificate of membership and participation records.</li>
            </ul>

            <SectionTitle eyebrow="Requirements" title="Eligibility" />
            <p className="text-muted mb-4">
              Open to all currently enrolled undergraduate and postgraduate students of JKKNIU.
              No prior chess rating or experience is required — beginners are welcome.
            </p>

            <SectionTitle eyebrow="How It Works" title="Membership Process" />
            <ol className="text-muted mb-4">
              <li className="mb-2">Submit the online application form.</li>
              <li className="mb-2">Attend a brief orientation session (schedule sent via email).</li>
              <li className="mb-2">Pay the nominal semester membership fee.</li>
              <li className="mb-2">Receive confirmation and your member ID.</li>
            </ol>

            <div className="club-card">
              <h5 style={{ fontSize: "1rem" }}><i className="bi bi-info-circle me-2"></i>Membership Guidelines</h5>
              <p className="small text-muted mb-0">
                Members are expected to maintain sportsmanship, attend sessions regularly where
                possible, and follow standard chess etiquette during club matches and tournaments.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="club-card club-form">
              <h4 className="mb-1" style={{ fontSize: "1.3rem" }}>Online Membership Application</h4>
              <p className="small text-muted mb-4">Fields marked * are required.</p>

              {submitted && (
                <div className="alert alert-success" role="alert">
                  <i className="bi bi-check-circle me-2"></i>
                  Thank you! Your application has been received. We'll contact you via email soon.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="fullName">Full Name *</label>
                  <input id="fullName" name="fullName" className="form-control" value={form.fullName} onChange={handleChange} />
                  {errors.fullName && <div className="text-danger small mt-1">{errors.fullName}</div>}
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <label htmlFor="studentId">Student ID *</label>
                    <input id="studentId" name="studentId" className="form-control" value={form.studentId} onChange={handleChange} />
                    {errors.studentId && <div className="text-danger small mt-1">{errors.studentId}</div>}
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="session">Session *</label>
                    <input id="session" name="session" placeholder="e.g. 2023-24" className="form-control" value={form.session} onChange={handleChange} />
                    {errors.session && <div className="text-danger small mt-1">{errors.session}</div>}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="department">Department *</label>
                  <input id="department" name="department" className="form-control" value={form.department} onChange={handleChange} />
                  {errors.department && <div className="text-danger small mt-1">{errors.department}</div>}
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <label htmlFor="phone">Phone *</label>
                    <input id="phone" name="phone" className="form-control" value={form.phone} onChange={handleChange} />
                    {errors.phone && <div className="text-danger small mt-1">{errors.phone}</div>}
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" className="form-control" value={form.email} onChange={handleChange} />
                    {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="involvement">Preferred Area of Involvement *</label>
                  <select id="involvement" name="involvement" className="form-select" value={form.involvement} onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option>Competitive Play</option>
                    <option>Event Organizing</option>
                    <option>Coaching / Training</option>
                    <option>Media & Communications</option>
                  </select>
                  {errors.involvement && <div className="text-danger small mt-1">{errors.involvement}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="experience">Chess Experience *</label>
                  <select id="experience" name="experience" className="form-select" value={form.experience} onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced / Rated Player</option>
                  </select>
                  {errors.experience && <div className="text-danger small mt-1">{errors.experience}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="3" className="form-control" value={form.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn-gold btn w-100">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
