export default function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <div className="stat-label text-uppercase">{label}</div>
    </div>
  );
}
