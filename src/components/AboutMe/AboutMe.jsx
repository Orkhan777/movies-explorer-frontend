import Container from "../Container/Container";
import "./AboutMe.css";
import pic from "../../image/foto_title.jpg";

const AboutMe = () => {
  return (
    <section id="student" className="aboutMe">
      <Container titleText={"Студент"}>
        <div className="aboutMe__container">
          <div className="aboutMe__bio">
            <h2 className="aboutMe__name">Виталий</h2>
            <p className="aboutMe__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutMe__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              href="https://github.com/Orkhan777"
              className="aboutMe__githab" target="blank"
            >
              Github
            </a>
          </div>
          <img src={pic} alt="фото студента" className="aboutMe__photo" />
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
