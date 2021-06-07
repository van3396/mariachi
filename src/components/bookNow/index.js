import React from "react";
import style from "./index.module.css";

const BookNow = () => {
  return (
    <div className="container-fluid">
      <div className={`${style.main} row border`}>
        <div className="col-7">
          <p>
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium
          </p>
        
        </div>
        <div className="col-5 d-flex">
          <a className="d-inline align-self-center mx-auto" href="tel:+1-999-999-9999">
            <button >call to book now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
