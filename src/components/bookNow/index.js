import React from "react";
import style from "./index.module.css";
import langHook from '../../hooks/LangSwitcher/index'

const BookNow = () => {
  const [,,switcher] = langHook();
  return (
    <div className="container-fluid">
      <div className={`${style.main} row`}>
        <div className="col-6 ">
          <p>
            {switcher(" Serving the greater South Florida area for over 20 years!",
            "¡Sirviendo el área metropolitana del sur de Florida durante más de 20 años!")}
          </p>
        
        </div>
        <div className="col-5 d-flex">
          <a className="d-inline align-self-center ml-auto" href="tel:+1 786-286-5487">
            <button >
              {switcher("call to book now", "llama para reservar ahora")}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
