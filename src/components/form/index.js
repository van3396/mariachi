import React from "react";
import { callToAction, questionsConcerns } from "./index.module.css";
import cactus from "../../media/images/cactus.svg";
import ContactForm from "./ContactForm";

const Index = () => {
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
              <h1 id={callToAction}>We are ready to celebrate with you!</h1>
            </div>
          </div>
        </div>
        <div className="col-4 mx-auto">
          <p id={questionsConcerns}>Contact us with any question or concerns.</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
