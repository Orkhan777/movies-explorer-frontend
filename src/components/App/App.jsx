import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import { useState } from "react";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Auth from "../Auth/Auth";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const location = useLocation();
  const headerLocation = ["/", "/movies", "/saved-movies", "/profile"];
  const footerLocation = ["/", "/movies", "/saved-movies"];
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenuActive = () => setMenuActive(!menuActive);
  const handleRegister = () => {
    setLoggedIn(true);
    navigate("/", { replace: true });
  };
  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/", { replace: true });
  };
  return (
    <div className="App">
      {menuActive && <BurgerMenu closeMenu={toggleMenuActive} />}
      {headerLocation.find((i) => i === location.pathname) && (
        <Header
          loggedIn={loggedIn}
          bgColor={"white"}
          menuActive={toggleMenuActive}
        />
      )}
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement loggedIn={loggedIn} element={Movies} />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                loggedIn={loggedIn}
                element={SavedMovies}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement loggedIn={loggedIn} element={Profile} />
            }
          />
          <Route
            path="/signup"
            element={
              <section>
                <Auth type="register" onSubmit={handleRegister} />
              </section>
            }
          />
          <Route
            path="/signin"
            element={
              <section>
                <Auth type="login" onSubmit={handleLogin} />
              </section>
            }
          />
          <Route
            path="*"
            element={
              <section>
                <PageNotFound />
              </section>
            }
          />
        </Routes>
      </main>
      {footerLocation.find((i) => i === location.pathname) && <Footer />}
    </div>
  );
};

export default App;
