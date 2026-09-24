export default function FilterBar({ options, active, onChange }) {
  return (
    <div className="d-flex flex-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`filter-btn ${active === opt ? "active" : ""}`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
