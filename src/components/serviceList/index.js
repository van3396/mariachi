import React from "react";
import {row1, row2} from "./index.module.css";
import serviceHeader from "../../media/images/serviceHeader.svg";
import serviceIcon1 from "../../media/images/serviceIcon1.svg";

const ServiceList = () => {
  return (
    <div id='second' className="container-fluid mt-5 my-5 py-5">
      <div className="row">
        <div className="col-4 mx-auto p-0">
          <img className="img-fluid" src={serviceHeader} alt="" />
        </div>
      </div>
      <div className={`${row1} row text-center justify-content-center mt-4 text-muted`}>
        <div className="col-2 p-0">
          <p>30 min sessions</p>
        </div>
        <div className="col-2 p-0">
          <p>1 hr sessions</p>
        </div>
        <div className="col-2 p-0">
          <p>1 hr ++ sessions</p>
        </div>
      </div>
      <div className={`${row2} row mt-5 justify-content-center text-center`}>
        <div className="col-1 mx-5">
          <div className="row">
            <div className="col-12">
              <img className="img-fluid" src={serviceIcon1} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <p>Weddings</p>
            </div>
          </div>
        </div>
        <div className="col-1 mx-5">
          <div className="row">
            <div className="col-12">
              <img className="img-fluid" src={serviceIcon1} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <p>Birthdays</p>
            </div>
          </div>
        </div>
        <div className="col-1 mx-5">
          <div className="row">
            <div className="col-12">
              <img className="img-fluid" src={serviceIcon1} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <p>Corporate parties</p>
            </div>
          </div>
        </div>
        <div className="col-1 mx-5">
          <div className="row">
            <div className="col-12">
              <img className="img-fluid" src={serviceIcon1} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <p>Quinceaneras</p>
            </div>
          </div>
        </div>
        <div className="col-1 mx-5">
          <div className="row">
            <div className="col-12">
              <img className="img-fluid" src={serviceIcon1} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <p>Anniversaries</p>
            </div>
          </div>
        </div>
        <div className="col-1 mx-5">
          <div className="row">
            <div className="col-12">
              <img className="img-fluid" src={serviceIcon1} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <p>local events</p>
            </div>
          </div>
        </div>
     </div>
    </div>
  );
};

export default ServiceList;
