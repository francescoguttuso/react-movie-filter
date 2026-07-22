import { useState } from "react";
import "./App.css";
import { films as initialFilms } from "./data/films";
import { NewFilm } from "./components/NewFilm";
import { FilmsList } from "./components/FilmsList";

function App() {
  const [films, setFilms] = useState(initialFilms);

  const handleDeleteFilm = (idDaEliminare) => {
    const listaAggiornata = films.filter((film) => film.id !== idDaEliminare);
    setFilms(listaAggiornata);
  };

  const handleAddFilm = (newFilmData) => {
    const newFilm = {
      id: Date.now(),
      title: newFilmData.title,
      genre: newFilmData.genre,
    };

    setFilms([...films, newFilm]);
  };

  return (
    <div className="app-container">
      <h2>🎬 LA MIA CINETECA</h2>

      <FilmsList films={films} onDeleteFilm={handleDeleteFilm} />

      <NewFilm onAddFilm={handleAddFilm} />
    </div>
  );
}

export default App;
