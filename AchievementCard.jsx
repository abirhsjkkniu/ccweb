export default function AchievementCard({ title, description, year }) {
  return (
    <div className="club-card">
      <div className="icon-wrap"><i className="bi bi-trophy"></i></div>
      <div className="d-flex justify-content-between align-items-start">
        <h5 className="mb-1" style={{ fontSize: "1.05rem" }}>{title}</h5>
        {year && <span className="small text-muted">{year}</span>}
      </div>
      {description && <p className="small text-muted mb-0">{description}</p>}
    </div>
  );
}
