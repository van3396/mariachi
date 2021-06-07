import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import InformationLinks from "../components/informationLinks";
import BookNow from "../components/bookNow"

const Main = () => {
  return (
    <>
      <Header />
      <InformationLinks/>
      <BookNow />
      <Footer />
    </>
  );
};
export default Main;

