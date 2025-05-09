function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      className="form-control mb-4"
      placeholder="Buscar país por nombre..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;