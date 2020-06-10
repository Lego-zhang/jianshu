import React, { Component } from "react";
import { connect } from "react-redux";

import {actionCreators} from './store'
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
          <img alt="" className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4976/a0012dd0250a3003bca3731ffa6098e82201d024.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
          <Topic></Topic>
          <List></List>
        </HoemLefr>
        <HoemRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HoemRight>
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getData()
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getData(){
      dispatch(actionCreators.getHomeData())
    }
  }
}

export default connect(null,mapDispatchToProps)(Home);
