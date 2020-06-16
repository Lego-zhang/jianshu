import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../styles";
class Recommend extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { list } = this.props;
    const newList = list.toJS();

    return (
      <RecommendWrapper>
        {newList.map((item) => {
          return (
            <RecommendItem key={item.id} imgUrl={item.imgUrl}></RecommendItem>
          );
        })}
      </RecommendWrapper>
    );
  }
}
const mapState = (state) => {
  return {
    list: state.getIn(["home", "RecommendList"]),
  };
};
export default connect(mapState, null)(Recommend);
