import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { actionCreators } from "./store";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

import { HomeWrapper, HoemLefr, HoemRight, BackTop } from "./styles";
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScrollTop = this.handleScrollTop.bind(this);
    // this.bindEvents = this.bindEvents.bind(this);
  }
  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HoemLefr>
          <img
            alt=""
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4976/a0012dd0250a3003bca3731ffa6098e82201d024.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          ></img>
          <Topic></Topic>
          <List></List>
        </HoemLefr>
        <HoemRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HoemRight>
        {showScroll ? (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
  componentDidMount() {
    this.props.getData();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData() {
      dispatch(actionCreators.getHomeData());
    },
    changeScrollTopShow(e) {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    },
  };
};
const mapState = (state) => {
  return {
    showScroll: state.getIn(["home", "showScroll"]),
  };
};

export default connect(mapState, mapDispatchToProps)(Home);
