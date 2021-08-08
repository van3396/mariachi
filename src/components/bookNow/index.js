import React from "react";
import style from "./index.module.css";

const BookNow = () => {
  return (
    <div className="container-fluid">
      <div className={`${style.main} row`}>
        <div className="col-6 ">
          <p>
          Serving the greater South Florida area for over 20 years!
          </p>
        
        </div>
        <div className="col-5 d-flex">
          <a className="d-inline align-self-center ml-auto" href="tel:+1 786-286-5487">
            <button >call to book now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
