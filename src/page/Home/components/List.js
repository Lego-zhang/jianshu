import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../styles";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    const newList = list.toJS();

    return (
      <div>
        {newList.map((item, index) => {
          return (
            <Link key={index} to={"/detail?id=" + item.id}>
              <ListItem>
                <img className="pic" src={item.imgUrl} alt=""></img>
                <ListInfo>
                  <h3 className="titel">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                  {page}
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore
          onClick={() => {
            getMoreList(page);
          }}
        >
          加载跟多
        </LoadMore>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"]),
  };
};
const mapDispatch = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page + 1));
    },
  };
};
export default connect(mapState, mapDispatch)(List);
