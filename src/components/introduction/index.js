import React from "react";
import { title, sample } from "./index.module.css";
import samplePic from "../../media/images/isapro.jpeg";
import langHook from '../../hooks/LangSwitcher/index'

const index = () => {
  const [,,switcher] = langHook();
  return (
    <div id="first" className="container-fluid">
      <div className="row py-5 m-5">
        <div className="col-6 col-lg-6 col mx-auto">
          <img className="d-block mx-auto" width='100%' src={samplePic} alt="" />
        </div>
        <div className={`col-6 ${sample}`}>
          <div className="rows ">
            <div className='col-12'>
              
            <h2 className={`${title}`}>{switcher("We Are A Band of Professional Musicians",
            "Somos una banda de músicos profesionales")}</h2>
            </div>
          </div>
          <div className="rows">
            <div className='col-9'>
              
            <p>
              {switcher("We have played internationally in all realms of the industry, from the Latin Billboards and the Latin Grammys, as background musicians for Luis Miguel and even Disney's Epcot, to your own home. Every musician plays wholeheartedly and has a talent to offer beyond your expectations! We have been providing serenades and personal event services from Key West to Orlando, Naples, and everything in between for over 20 years. We can’t wait to become a part of your next special occasion!"
              , "Hemos tocado internacionalmente en todos los ámbitos de la industria, desde los Latin Billboards y los Latin Grammy, como músicos de fondo de Luis Miguel e incluso de Epcot de Disney, hasta tu propia casa. ¡Cada músico toca de todo corazón y tiene un talento que ofrecer más allá de sus expectativas! Hemos estado brindando serenatas y servicios de eventos personales desde Key West hasta Orlando, Naples y todo lo demás durante más de 20 años. ¡Estamos ansiosos por formar parte de su próxima ocasión especial!")}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
