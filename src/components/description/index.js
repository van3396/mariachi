import React from "react";
import { button, title, description } from "./index.module.css";
import langHook from '../../hooks/LangSwitcher/index'

const Index = () => {
  const [, , switcher] = langHook();
  return (
    <div className="container-fluid my-5 py-5">
      <div className="row">
        <div className="col-7">
          <iframe
            className="mx-auto d-block rounded"
            width="100%"
            height="540"
            src="https://www.youtube.com/embed/HEG9bd8e724"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`col-4 ${description}`}>
          <div className={`row ${title}`}>
            <div className="col-12">
              <h1>
                {switcher("VIOLINIST SERVICES", "SERVICIOS VIOLINISTAS")}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                {switcher(`The owner and founder of Mariachi Veracruzano, Juan Arauz hasbeen a professional violinist for over 35 years! He has played
                with the San Francisco Symphony and even got offered by Disney
                Pixar’s Coco to play for the original motion pictures
                soundtrack!`, `El propietario y fundador del Mariachi Veracruzano, Juan Arauz ha
                ¡He sido violinista profesional durante más de 35 años! El ha jugado
                con la Sinfónica de San Francisco e incluso fue ofrecido por Disney
                Coco de Pixar para jugar en las películas originales
                ¡banda sonora!`)}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                <span>
                  JUAN ARAUZ</span></p>
              <p>
                {switcher(`You can hire Juan for your next personal event, including:`,`Puede contratar a Juan para su próximo evento personal, que incluye:`)}
                </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                <span>Weddings</span><br />
                <span>Birthdays</span><br />
                <span>Quinceaneras</span><br />
                <span>Anniversaries</span><br />
                <span>Corporate parties</span><br />
                <span>Local events</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="col-auto m-0 mt-3 p-0">
                <a
                  className="d-block mx-auto"
                  href="tel:+1 786-286-5487"
                >
                  <button id={button}>{switcher("call to book now", "llama para reservar ahora")}</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
