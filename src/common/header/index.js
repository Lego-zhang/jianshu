import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { ActionCreators as loginActionCreators } from "./../../page/Login/store";
import { Link } from "react-router-dom";
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
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      list,
      login,
      logout
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem className="right" onClick={logout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <span className="iconfont ">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={300} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => {
                  handleInputFocus(list);
                }}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span
              className={focused ? "focused iconfont zoom" : "iconfont zoom"}
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
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitel>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </span>
              换一批
            </SearchInfoSwitch>
            <SearchInfoList>{pageList}</SearchInfoList>
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
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"]),
  };
};
const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus(list) {
      console.log(list);
      list.size === 0 && dispath(actionCreators.getList());

      dispath(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispath(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispath(actionCreators.MounseEnter());
    },
    handleMouseLeave() {
      dispath(actionCreators.MounseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");

      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }

      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      // console.log(spin.style.transform);
      if (page < totalPage) {
        dispath(actionCreators.ChangePage(page + 1));
      } else {
        dispath(actionCreators.ChangePage(1));
      }
    },
    logout() {
      dispath(loginActionCreators.logout());
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
