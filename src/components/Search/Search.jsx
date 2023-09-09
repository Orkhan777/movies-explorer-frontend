import "./Search.css";

const Search = () => {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <div className="search__input-container">
            <input
              type="text"
              className="search__input"
              placeholder="Фильм"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Фильм")}
            />
            <button  type="submit" className="search__button">Найти</button>
          </div>
          <div className="search__switch-container">
            <label htmlFor="checkbox-switch" className="search__switch">
              <input
                className="search__checkbox"
                type="checkbox"
                id="checkbox-switch"
                defaultChecked
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
      </form>
    </section>
  );
};

export default Search;