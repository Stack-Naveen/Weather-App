export default function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
