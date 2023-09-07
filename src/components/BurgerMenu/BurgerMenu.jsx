import ProfileButton from "../ProfileButton/ProfileButton";
import "./BurgerMenu.css";
import { Link, useLocation } from "react-router-dom";

const BurgerMenu = ({ closeMenu }) => {
  const location = useLocation();
  const hundleCloseMenu = () => closeMenu();
  return (
    <div className="menu" onClick={hundleCloseMenu}>
      <div className="menu__container" onClick={(e) => e.stopPropagation()}>
        <button className="menu__close-button" onClick={hundleCloseMenu} />
        <div className="menu__content">
          <nav className="menu__nav-container">
            <Link
              to="/"
              className={`menu__nav-link ${
                location.pathname === "/" && "menu__nav-link_active"
              }`}
              onClick={hundleCloseMenu}
            >
              Главная
            </Link>
            <Link
              to="/movies"
              className={`menu__nav-link ${
                location.pathname === "/movies" && "menu__nav-link_active"
              }`}
              onClick={hundleCloseMenu}
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={`menu__nav-link ${
                location.pathname === "/saved-movies" && "menu__nav-link_active"
              }`}
              onClick={hundleCloseMenu}
            >
              Сохраненные фильмы
            </Link>
          </nav>
          <div className="menu__button-container" onClick={hundleCloseMenu}>
            <ProfileButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
