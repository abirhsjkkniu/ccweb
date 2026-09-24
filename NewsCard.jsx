import { Link } from "react-router-dom";

export default function NewsCard({ item }) {
  const dateStr = new Date(item.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  return (
    <div className="info-card">
      <div className="card-img" style={{ backgroundImage: `url(${item.image})` }} role="img" aria-label={item.title} />
      <div className="card-body-custom">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="tag-pill">{item.category}</span>
          <span className="small text-muted">{dateStr}</span>
        </div>
        <h5 style={{ fontSize: "1.05rem" }}>{item.title}</h5>
        <p className="small text-muted mb-3">{item.excerpt}</p>
        <Link to={`/news/${item.id}`} className="btn btn-outline-navy btn-sm">Read More</Link>
      </div>
    </div>
  );
}
