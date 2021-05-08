import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wrapper from "./Wrapper";

import { IntlProvider, FormattedMessage } from "react-intl";
import English from "../languages/en-US.json";
import Spanish from "../languages/es.MX.json";

const local = navigator.language;

let lang;
if (local === "en-US") {
  lang = English;
} else {
  lang = Spanish;
}

function App(props) {
  return (
    <div className="App">
      <Header />
      <main>
        <Container> 
        <IntlProvider locale={local} messages={English}>
      <FormattedMessage
        id="app.content"
        defaultMessage="Learn React"
      >
      </FormattedMessage>
    </IntlProvider>
         </Container>
      </main>
      <Footer />
    </div>

  );
}

export default App;
