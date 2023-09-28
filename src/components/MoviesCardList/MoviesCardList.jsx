import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import { useResize } from "../../utils/hooks/useResize";
import { mainApi } from "../../utils/MainApi";
import {
  CARDS_480,
  CARDS_768,
  CARDS_1280,
  ADD_CARD_480,
  ADD_CARD_768,
  ADD_CARD_1280,
  SCREEN_768,
  SCREEN_480,
} from "../../utils/constants";

const MoviesCardList = ({ movies, loading, setHideCard }) => {
  const location = useLocation();
  const [currentScreen] = useResize();
  const [count, setCount] = useState(CARDS_1280);
  const [myMovies, setMyMovies] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const addMovies = () => {
    if (currentScreen <= SCREEN_480) {
      setCount(count + ADD_CARD_480);
    } else if (currentScreen <= SCREEN_768) {
      setCount(count + ADD_CARD_768);
    } else {
      setCount(count + ADD_CARD_1280);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/movies") {
      setCount(movies.length);
    } else if (currentScreen <= SCREEN_480) {
      setCount(CARDS_480);
    } else if (currentScreen <= SCREEN_768) {
      setCount(CARDS_768);
    } else {
      setCount(CARDS_1280);
    }
  }, [currentScreen, location.pathname, movies.length]);

  useEffect(() => {
    mainApi
      .getMyMovies()
      .then((res) => {
        setMyMovies(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (movies !== undefined && movies.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, [movies]);

  return (
    <section className="cardList">
      <div className="cardList__container">
        {loading ? (
          <Preloader />
        ) : noResults ? (
          <h1 className="cardList__title">Ничего не найдено</h1>
        ) : movies.length === 0 ? (
          <h1 className="cardList__title">
            Введите название фильма, чтобы начать поиск
          </h1>
        ) : (
          movies
            .slice(0, count)
            .map((data) => (
              <MoviesCard
                movie={data}
                myMovies={myMovies}
                setHideCard={setHideCard}
                key={data.id ? data.id : data._id}
              />
            ))
        )}
      </div>
      {count < movies.length && (
        <div className="cardList__btnContainer">
          <button className="cardList__button" onClick={addMovies}>
            Ещё
          </button>
        </div>
      )}
    </section>
  );
};

export default MoviesCardList;