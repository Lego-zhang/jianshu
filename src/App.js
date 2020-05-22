import React from "react";

import { Globalstyle } from "./style";
import Header from "./common/header/index";
function App() {
  return (
    <div data-test="app">
      <Globalstyle></Globalstyle>
      <Header></Header>
    </div>
  );
}

export default App;
