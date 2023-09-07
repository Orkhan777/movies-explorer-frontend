import { useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";
import allMovies from "../../utils/movies-data";
import savedMovies from "../../utils/saved-movies";

const MoviesCardList = () => {
  const location = useLocation();
  let movies = [];
  if (location.pathname === "/movies") {
    movies = allMovies;
  } else {
    movies = savedMovies;
  }
  const [count, setCount] = useState(12);
  const addMovies = () => setCount(count + 12);
  return (
    <section className="card__list">
      <div className="card__list-container">
        {movies.length === 0 ? (
          <Preloader />
        ) : (
          movies
            .slice(0, count)
            .map((data, i) => <MoviesCard movie={data} key={i} />)
        )}
      </div>
      {count < movies.length && (
        <div className="card__list-btn__container">
          <button className="card__list-button" onClick={addMovies}>
            Ещё
          </button>
        </div>
      )}
    </section>
  );
};

export default MoviesCardList;
