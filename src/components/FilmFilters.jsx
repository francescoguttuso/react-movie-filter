import "./FilmFilters.css";


export const FilmFilters = (props) => {

  const genresList = props.genres || [];

  return (
    <div className="filters-container">
      <input
        className="filter-input"
        type="text"
        placeholder="Cerca per titolo..."
        value={props.searchTitle}
        onChange={(e) => props.onSearchChange(e.target.value)}
      />

      <select
        className="filter-select"
        value={props.selectedGenre}
        onChange={(e) => props.onGenreChange(e.target.value)}
      >
        <option value="">Tutti i generi</option>

        {genresList.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};
