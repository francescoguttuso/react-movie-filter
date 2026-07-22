import { useState } from "react";
import "./NewFilm.css";

export const NewFilm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
  });

  const handleFormChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <form
      className="new-film-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (formData.title.trim() !== "") {
          props.onAddFilm(formData);
          setFormData({ title: "", genre: "" });
        }
      }}
    >
      <div className="form-group">
        <label htmlFor="title">Inserisci il titolo del film:</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Inserisci titolo"
          value={formData.title}
          onChange={handleFormChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="genre">Inserisci il genere del film:</label>
        <input
          id="genre"
          type="text"
          name="genre"
          placeholder="Inserisci genere"
          value={formData.genre}
          onChange={handleFormChange}
        />
      </div>

      <button type="submit" className="submit-btn">
        Aggiungi alla mia lista di Film
      </button>
    </form>
  );
};
