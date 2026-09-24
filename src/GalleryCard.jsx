export default function GalleryCard({ image, onClick }) {
  return (
    <div
      className="gallery-thumb"
      onClick={() => onClick(image)}
      role="button"
      tabIndex={0}
      aria-label={`View photo: ${image.caption}`}
      onKeyDown={(e) => { if (e.key === "Enter") onClick(image); }}
    >
      <img src={image.src} alt={image.caption} loading="lazy" />
      <div className="g-caption">{image.caption}</div>
    </div>
  );
}
