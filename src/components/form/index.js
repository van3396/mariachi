import React from "react";
import { form, callToAction, questionsConcerns } from "./index.module.css";
import cactus from "../../media/images/cactus.svg";

const Index = () => {
  return (
    <div className="container-fluid p-5" style={{ backgroundColor: "#E3E3E3" }}>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <img
                className="d-block mx-auto"
                width="400"
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
          <form className={form}>
            <input type="text" placeholder="Enter your name here" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone number" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
