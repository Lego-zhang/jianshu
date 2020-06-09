import React, { Component } from "react";

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

import { HomeWrapper, HoemLefr, HoemRight } from "./styles";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HomeWrapper>
        <HoemLefr>
          <img className="banner-img" src=""></img>
          <List></List>
          <Topic></Topic>
        </HoemLefr>
        <HoemRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HoemRight>
      </HomeWrapper>
    );
  }
}
export default Home;
