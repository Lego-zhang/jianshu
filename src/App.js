// 库
import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter, Route } from "react-router-dom";
// 样式
import { Globalstyle } from "./style";
import { IconFont } from "./statics/iconfont/iconfont";
// 页面组件
import Header from "./common/header/index";
import Home from "./page/Home";

function App() {
  return (
    <Provider store={store}>
      <Globalstyle></Globalstyle>
      <IconFont></IconFont>
      <Header></Header>
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detall" exact render={() => <div>detall</div>}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
