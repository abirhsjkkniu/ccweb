import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import SectionTitle from "../components/SectionTitle";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { news, newsCategories } from "../data/news";

export default function News() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return news.filter((n) => {
      const matchesCategory = category === "All" || n.category === category;
      const matchesQuery = n.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small"><Link to="/">Home</Link> / News & Announcements</div>
      </div>
      <section className="section-dark board-pattern py-5 text-center">
        <div className="container-narrow">
          <div className="eyebrow">Stay Updated</div>
          <h1 className="text-white">News & Announcements</h1>
          <div className="rule rule-center" />
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <div className="row g-3 align-items-center mb-4">
            <div className="col-md-5">
              <SearchBar value={query} onChange={setQuery} placeholder="Search news..." />
            </div>
            <div className="col-md-7">
              <FilterBar options={newsCategories} active={category} onChange={setCategory} />
            </div>
          </div>

          <div className="row g-4">
            {filtered.length === 0 && <p className="text-muted">No news articles match your search.</p>}
            {filtered.map((n) => (
              <div className="col-md-6 col-lg-4" key={n.id}><NewsCard item={n} /></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
