import "./FilmFilters.css";

export const FilmFilters = ({
  searchTitle,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  genres,
}) => {
  return (
    <div className="filters-container">
      <input
        type="text"
        placeholder="Cerca per titolo..."
        value={searchTitle}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        <option value="">Tutti i generi</option>
        {genres.map((genere) => (
          <option key={genere} value={genere}>
            {genere}
          </option>
        ))}
      </select>
    </div>
  );
};
