import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import ProfileButton from "../ProfileButton/ProfileButton";
import Logo from "../Logo/Logo";

const Header = ({ loggedIn, menuActive }) => {
  const location = useLocation();
  const hundleMenuActive = () => menuActive();
  return (
    <header
      className={`header ${
        location.pathname === "/" ? "header_place_main" : ""
      }`}
    >
      <div className="header__container">
        <div className="header__box">
          <Logo />
          {!loggedIn ? (
            <nav className="header__right-container">
              <Link to="/signup" className="header__reg">
                Регистрация
              </Link>
              <Link to="/signin" className="header__log">
                Войти
              </Link>
            </nav>
          ) : (
            <>
              <div className="header__right-container">
                <nav className="header__nav-container">
                  <Link
                    to="/movies"
                    className={`header__nav-link ${
                      location.pathname === "/movies" && "header__nav-link_bold"
                    }`}
                  >
                    Фильмы
                  </Link>
                  <Link
                    to="/saved-movies"
                    className={`header__nav-link ${
                      location.pathname === "/saved-movies" &&
                      "header__navLink_bold"
                    }`}
                  >
                    Сохраненные фильмы
                  </Link>
                </nav>
                <div className="header__button-container">
                  <ProfileButton />
                </div>
                <button
                  className="header__burger-logo"
                  onClick={hundleMenuActive}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
