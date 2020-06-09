import React, { Component } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo } from "../styles";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { list } = this.props;
    const newList = list.toJS();
    console.log(newList);
    return (
      <div>
        {newList.map((item) => {
          return (
            <ListItem key={item.id}>
              <img className="pic" src={item.imgUrl} alt=""></img>
              <ListInfo>
                <h3 className="titel">{item.title}</h3>
                <p className="desc">{item.desc}</p>
              </ListInfo>
            </ListItem>
          );
        })}
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    list: state.getIn(["home", "articleList"]),
  };
};
export default connect(mapState)(List);
