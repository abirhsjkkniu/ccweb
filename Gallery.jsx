import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import SectionTitle from "../components/SectionTitle";
import GalleryCard from "../components/GalleryCard";
import Modal from "../components/Modal";
import FilterBar from "../components/FilterBar";
import { galleryImages, galleryCategories } from "../data/gallery";

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(
    () => (category === "All" ? galleryImages : galleryImages.filter((g) => g.category === category)),
    [category]
  );

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-narrow small"><Link to="/">Home</Link> / Gallery</div>
      </div>
      <section className="section-dark board-pattern py-5 text-center">
        <div className="container-narrow">
          <div className="eyebrow">Captured Moments</div>
          <h1 className="text-white">Gallery</h1>
          <div className="rule rule-center" />
        </div>
      </section>

      <section className="py-section section-alt">
        <div className="container-narrow">
          <SectionTitle title="Browse by Category" />
          <FilterBar options={galleryCategories} active={category} onChange={setCategory} />
          <div className="row g-3 mt-2">
            {filtered.map((img) => (
              <div className="col-6 col-md-4" key={img.id}>
                <GalleryCard image={img} onClick={setLightbox} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal image={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}
