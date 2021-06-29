import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import InformationLinks from "../components/informationLinks";
import BookNow from "../components/bookNow"
import Introduction from "../components/introduction"
import VideoPlayer from "../components/videoPlayer";

const Main = () => {
  return (
    <>
      <Header />
      <InformationLinks/>
      <BookNow />
      <Introduction />
      <VideoPlayer />
      <Footer />
    </>
  );
};
export default Main;

