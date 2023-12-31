import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Main;
