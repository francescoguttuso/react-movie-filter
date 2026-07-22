import { useState, useEffect } from "react";
import "./App.css";
import { films as initialFilms } from "./data/films";
import { NewFilm } from "./components/NewFilm";
import { FilmsList } from "./components/FilmsList";
import { FilmFilters } from "./components/FilmFilters";

function App() {
  const [films, setFilms] = useState(initialFilms);
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const generiDisponibili = [...new Set(films.map((film) => film.genre))];

  useEffect(() => {
    const risultatoFiltrato = films.filter((film) => {
      const matchGenere = selectedGenre === "" || film.genre === selectedGenre;
      const matchTitolo = film.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase().trim());

      return matchGenere && matchTitolo;
    });

    setFilteredFilms(risultatoFiltrato);
  }, [films, selectedGenre, searchTitle]);

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

      <FilmFilters
        searchTitle={searchTitle}
        onSearchChange={setSearchTitle}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        genres={generiDisponibili}
      />

      <FilmsList films={filteredFilms} onDeleteFilm={handleDeleteFilm} />

      <NewFilm onAddFilm={handleAddFilm} />
    </div>
  );
}

export default App;
