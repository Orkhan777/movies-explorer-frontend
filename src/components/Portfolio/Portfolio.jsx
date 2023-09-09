import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://github.com/Orkhan777/how-to-learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="portfolio__link portfolio__link_border"
              href="https://orkhan777.github.io/russian-travel/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="portfolio__link"
              href="https://orkhan777.github.io/mesto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
