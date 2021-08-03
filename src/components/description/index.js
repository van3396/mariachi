import React from "react";
import {button} from "./index.module.css";

const Index = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <iframe
            className="mx-auto d-block rounded"
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ZluYZedSMjQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <h1>VIOLINIST SERVICES</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                The owner and founder of Mariachi Veracruzano, Juan Arauz has
                been a professional violinist for over 35 years! He has played
                with the San Francisco Symphony and even got offered by Disney
                Pixar’s Coco to play for the original motion pictures
                soundtrack!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>JUAN ARAUZ</p>
              <p>You can hire Juan for your next personal event, including:</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                Weddings <br />
                Birthdays <br />
                Quinceaneras <br />
                Anniversaries <br />
                Corporate parties <br />
                Local events
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="col-5 d-flex">
                <a
                  className="d-inline align-self-center mx-auto"
                  href="tel:+1-999-999-9999"
                >
                  <button id={button}>call to book now</button>
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
