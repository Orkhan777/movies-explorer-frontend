import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__context">
                <p className="footer__data">&#169; {new Date().getFullYear()}</p>
                <ul className="footer__links">
                    <li className="footer__item"><a href="https://practicum.yandex.ru/" rel="noreferrer" target="_blank" className="footer__link">Яндекс.Практикум</a></li>
                    <li className="footer__item"><a href="https://github.com/Orkhan777" rel="noreferrer" target="_blank" className="footer__link">Github</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;


// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer__container">
//         <h3 className="footer__name">
//           Учебный проект Яндекс.Практикум х BeatFilm.
//         </h3>
//         <div className="footer__links-container">
//           <p className="footer__copyright">© 2023</p>
//           <nav className="footer__links">
//             <a
//               href="https://practicum.yandex.ru/"
//               className="footer__link"
//               target="blank"
//             >
//               Яндекс.Практикум
//             </a>
//             <a
//               href="https://github.com/Orkhan777"
//               className="footer__link"
//               target="blank"
//             >
//               Github
//             </a>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
