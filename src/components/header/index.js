import React, { useState } from "react";
import style from "./index.module.css";
import headerGfx from "../../media/images/header.svg"
import ytLogo from "../../media/images/youtubelogo.svg"

const Header = () => {
  const [lang, setLang] = useState("en");
  const onLangChange = (lang) => () => setLang(lang);
  console.log(lang);


  return (
    <header>
      <nav id={style.nav} className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={headerGfx} className=" mx-5 my-1" alt="logo" height='45em' />
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
          <ul className="navbar-nav ml-auto">
            <li
              className={`nav-item`}
              onClick={onLangChange("es")}
            >
              <span
                className={`nav-link ${
                  lang === "en" ? style.langOptions : style.chosenLang
                }`}
              >
                English
              </span>
            </li>
            <li
              className={`nav-item`}
              onClick={onLangChange("en")}
            >
              <span
                className={`nav-link ${
                  lang === "es" ? style.langOptions : style.chosenLang
                }`}
              >
                Espa&ntilde;ol
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/channel/UCDJ8qtBDbQADa7k4zaFNK0w/videos">
                <img src={ytLogo} alt="Youtube" height='45em' className='d-block mx-5' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
