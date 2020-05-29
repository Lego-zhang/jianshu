import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitel,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span
              className={this.props.focused ? "focused iconfont" : "iconfont"}
            >
              &#xe662;
            </span>
            {this.getListArea()}
          </SearchWrapper>

          <Addition>
            <Button className="writting">
              <span className="iconfont">&#xe724;</span>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
  getListArea() {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitel>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
            <SearchInfoList>
              {this.props.list.map((item, index) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
              })}
            </SearchInfoList>
          </SearchInfoTitel>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
  };
};
const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus() {
      dispath(actionCreators.getList());
      dispath(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispath(actionCreators.searchBlur());
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
