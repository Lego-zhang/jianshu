import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
} from "./style";

const Header = (props) => {
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
          <CSSTransition in={props.focused} timeout={300} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe662;
          </span>
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
};
const mapStateToProps = (state) => {
  return {
    focused: state.focused,
  };
};
const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus",
      };
      dispath(action);
    },
    handleInputBlur() {
      const action = {
        type: "search_blur",
      };
      dispath(action);
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
