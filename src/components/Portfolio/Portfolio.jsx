import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__title">Портфолио</h3>
        <Link
          className="portfolio__link"
          to="https://github.com/Orkhan777/how-to-learn"
          target="blank"
        >Статичный сайт</Link>
        <Link
          className="portfolio__link portfolio__link_border"
          to="https://orkhan777.github.io/russian-travel/index.html"
          target="blank"
        >Адаптивный сайт</Link>
        <Link
          className="portfolio__link"
          to="https://orkhan777.github.io/mesto/"
          target="blank"
        >Одностраничное приложение</Link>
      </div>
    </section>
  );
};

export default Portfolio;
