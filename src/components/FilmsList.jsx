import "./FilmsList.css";

export const FilmsList = (props) => {
  if (props.films.length === 0) {
    return (
      <p className="empty-message">
        Nessun film presente nella tua lista. Aggiungine uno dal form!
      </p>
    );
  }

  return (
    <ul className="films-list">
      {props.films.map((film) => (
        <li key={film.id} className="film-item">
          <div className="film-info">
            <span className="film-title">{film.title}</span>
            <span className="film-genre">genere: {film.genre}</span>
          </div>

          <button
            className="delete-btn"
            onClick={() => props.onDeleteFilm(film.id)}
          >
            Elimina
          </button>
        </li>
      ))}
    </ul>
  );
};
