import React from "react";
import Main from './page/Main';
import { injectContext } from './context/index';

function App(props) {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default injectContext(App);
