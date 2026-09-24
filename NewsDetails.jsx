import { Link, useParams } from "react-router-dom";
import { news } from "../data/news";

export default function NewsDetails() {
  const { id } = useParams();
  const item = news.find((n) => n.id === id);

  if (!item) {
    return (
      <section className="py-section section-alt text-center">
        <div className="container-narrow">
          <h2>Article Not Found</h2>
          <Link to="/news" className="btn-gold btn">Back to News</Link>
        </div>
      </section>
    );
  }

  const dateStr = new Date(item.date).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small">
          <Link to="/">Home</Link> / <Link to="/news">News</Link> / {item.title}
        </div>
      </div>
      <article className="py-section section-alt">
        <div className="container-narrow" style={{ maxWidth: 780 }}>
          <span className="tag-pill">{item.category}</span>
          <h1 className="mt-3 mb-2" style={{ fontSize: "2rem" }}>{item.title}</h1>
          <p className="text-muted small mb-4"><i className="bi bi-calendar3 me-1"></i>{dateStr}</p>
          <img src={item.image} alt={item.title} className="img-fluid rounded mb-4" />
          <p className="text-muted" style={{ lineHeight: 1.8 }}>{item.content}</p>
          <Link to="/news" className="btn-outline-navy btn mt-3">Back to News</Link>
        </div>
      </article>
    </>
  );
}
