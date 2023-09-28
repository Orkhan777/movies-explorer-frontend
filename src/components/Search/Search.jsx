import { useState } from 'react';
import './Search.css';
import { useLocation } from 'react-router-dom';

const Search = ({ handleSearch, searchQuery, shortFilmsActive, handleShortFilms }) => {
  const location = useLocation()
  const [inputValue, setInputValue] = useState(searchQuery === null ? '' : searchQuery);
  const handleChange = (e) => setInputValue(e.target.value);
  const [error, setError] = useState("");
  const handleShort = () => {
    handleShortFilms()
  }

  const searchSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/saved-movies") {
      handleSearch(inputValue, shortFilmsActive);
    }
    if (inputValue.trim() === "") {
      setError("Нужно ввести ключевое слово");
    } else {
      setError("");
      handleSearch(inputValue, shortFilmsActive);
    }
  };

  return (
    <section className="search">
      <div className="search__form">
        <div className="search__container">
          <form
            className="search__input-container"
            onSubmit={searchSubmit}
            noValidate
          >
            <input
              type="text"
              className="search__input"
              placeholder="Фильм"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Фильм")}
              onChange={handleChange}
              value={inputValue}
            />
            <button type="submit" className="search__button">
              Найти
            </button>
          </form>
          <div className="search__switch-container">
            <label htmlFor="checkbox-switch" className="search__switch">
              <input
                className="search__checkbox"
                type="checkbox"
                id="checkbox-switch"
                checked={shortFilmsActive}
                onChange={handleShort}
              />
              <span className="search__slider" />
            </label>
            <label htmlFor="checkbox-switch" className="search__switchName">
              Короткометражки
            </label>
          </div>
        </div>
        <div className="search__switch-container search__switch-container_mobile">
          <label htmlFor="checkbox-mobile" className="search__switch">
            <input
              className="search__checkbox"
              type="checkbox"
              id="checkbox-mobile"
              defaultChecked
              required
            />
            <span className="search__slider" />
          </label>
          <label htmlFor="checkbox-mobile" className="search__switchName">
            Короткометражки
          </label>
        </div>
      </div>
      {error && (
        <div className="search__error-container">
          <div className="search__error">{error}</div>
        </div>
      )}
    </section>
  );
};

export default Search;