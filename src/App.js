import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { Globalstyle } from "./style";
import { IconFont } from "./statics/iconfont/iconfont";
import Header from "./common/header/index";
function App() {
  return (
    <Provider store={store}>
      <Globalstyle></Globalstyle>
      <IconFont></IconFont>
      <Header></Header>
    </Provider>
  );
}

export default App;
