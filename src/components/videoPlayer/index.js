import React from "react";
import { guitarPic, mainContainer, parentDiv } from "./index.module.css";
import guitar from "../../media/images/guitar.svg";

const VideoPlayer = () => {
  return (
    <div className={`${parentDiv}`}>
      <div className={` ${mainContainer} container-fluid my-4 py-4`}>
        <div className="row">
          <div className="col-8 py-4">
            <iframe
              className="mx-auto d-block rounded"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/LN3RuFdgcNc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-4">
            <div className={`${guitarPic}`}>
              <img className="img-fluid d-block" src={guitar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
