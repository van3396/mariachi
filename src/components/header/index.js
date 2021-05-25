import React, { useState } from "react";
import style from "./index.module.css";

const Header = () => {
  const [lang, setLang] = useState("en");
  const onLangChange = (lang) => () => setLang(lang);
  console.log(lang);

  const ytLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2b4AzEL5ltvxPV_DbclqmJhSdtTQgiXmQ_fk-GDlZwsSAhfuhp1hIHoJziYAA-1YRZY&usqp=CAU";

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        Mariachi Veracruzano
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                lang === "en" ? style.langOptions : style.chosenLang
              }`}
              onClick={onLangChange("es")}
            >
              English
            </li>
            <li
              className={`nav-item ${
                lang === "es" ? style.langOptions : style.chosenLang
              }`}
              onClick={onLangChange("en")}
            >
              <span>

              Espa&ntilde;ol
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.youtube.com">
                yt logo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
