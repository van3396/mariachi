import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import English from "../languages/en-US.json";
import Spanish from "../languages/es.MX.json";

const Context = React.createContext();
const local = navigator.language;

let lang;
if (local === "en-US") {
  lang = English;
} else {
  lang = Spanish;
}

const Wrapper = (props) => {
  const [locale, , setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  const selectLang = (e) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "es-MX") {
      setMessages(Spanish);
    } else {
      setMessages(English);
    }
  };
  return (
    <Context.Provider value={{locale, selectLang}}>
      <IntlProvider messages={"es-MX"} locale={locale}>
        <h1>this is just a test</h1>
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
