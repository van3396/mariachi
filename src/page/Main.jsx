import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import InformationLinks from "../components/informationLinks";
import BookNow from "../components/bookNow"
import Introduction from "../components/introduction"

const Main = () => {
  return (
    <>
      <Header />
      <InformationLinks/>
      <BookNow />
      <Introduction />
      <Footer />
    </>
  );
};
export default Main;

