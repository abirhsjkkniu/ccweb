export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="input-group">
      <span className="input-group-text bg-white"><i className="bi bi-search"></i></span>
      <input
        type="search"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={placeholder}
      />
    </div>
  );
}
