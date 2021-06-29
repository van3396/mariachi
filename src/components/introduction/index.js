import React from "react";
import { title, sample } from "./index.module.css";
import samplePic from "../../media/images/introduction-placeholder.png";

const index = () => {
  return (
    <div className="container-fluid">
      <div className="row py-5">
        <div className="col-6 p-1">
          <img className="img-fluid" src={samplePic} alt="" />
        </div>
        <div className={`col-6 ${sample}`}>
          <div className="rows ">
            <h2 className={`${title}`}>Title</h2>
          </div>
          <div className="rows">
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur m
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
