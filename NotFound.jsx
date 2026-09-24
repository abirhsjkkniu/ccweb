import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-section section-alt text-center" style={{ minHeight: "60vh" }}>
      <div className="container-narrow">
        <div className="eyebrow">404</div>
        <h1>Page Not Found</h1>
        <p className="text-muted mb-4">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-gold btn">Back to Home</Link>
      </div>
    </section>
  );
}
