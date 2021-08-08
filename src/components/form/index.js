import React from "react";
import { callToAction, questionsConcerns } from "./index.module.css";
import cactus from "../../media/images/cactus.svg";
import ContactForm from "./ContactForm";
import langHook from '../../hooks/LangSwitcher/index'

const Index = () => {
  const [,,switcher] = langHook();
  return (
    <div id='third' className="container-fluid p-5" style={{ backgroundColor: "#E3E3E3" }}>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <img
                className="d-block mx-auto"
                src={cactus}
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-9 mx-auto text-center mt-3">
              <h1 id={callToAction}>{switcher(`We are ready to celebrate with you!`,`¡Estamos listos para celebrar contigo!`)}</h1>
            </div>
          </div>
        </div>
        <div className="col-4 mx-auto">
          <p id={questionsConcerns}>
          {switcher(`Contact us with any question or concerns.`,`Contáctenos con cualquier pregunta o inquietud.`)}</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
