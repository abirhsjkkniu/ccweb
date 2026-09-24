export default function SectionTitle({ eyebrow, title, subtitle, align = "left", light = false }) {
  const isCenter = align === "center";
  return (
    <div className={`mb-4 ${isCenter ? "text-center" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className={light ? "text-white mb-0" : "mb-0"} style={{ fontSize: "2rem" }}>{title}</h2>
      <div className={`rule ${isCenter ? "rule-center" : ""}`} />
      {subtitle && (
        <p className={`${light ? "text-white-50" : "text-muted"} mb-0`} style={{ maxWidth: 640, margin: isCenter ? "0 auto" : 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
