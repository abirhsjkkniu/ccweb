import { useEffect } from "react";

export default function Modal({ image, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={image.caption}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close image viewer">
        <i className="bi bi-x-lg"></i>
      </button>
      <img src={image.src} alt={image.caption} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
