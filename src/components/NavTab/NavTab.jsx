import "./NavTab.css";

const NavTab = () => {
  return (
    <section className="navigation">
      <nav className="navigation__tab-links">
        <a href="#about" className="navigation__tab-link">
          О проекте
        </a>
        <a href="#techs" className="navigation__tab-link">
          Технологии
        </a>
        <a href="#student" className="navigation__tab-link">
          Студент
        </a>
      </nav>
    </section>
  );
};

export default NavTab;
