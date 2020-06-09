import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../styles";
class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { list } = this.props;
    const newList = list.toJS();
    console.log(newList);
    return (
      <TopicWrapper>
        {newList.map((item) => {
          return (
            <TopicItem key={item.id}>
              <img className="topic-pic" src={item.imgUrl}></img>
              {item.title}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.get("home").get("topicList"),
  };
};
export default connect(mapState, null)(Topic);
