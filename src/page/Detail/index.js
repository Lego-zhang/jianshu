import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DetailWrapper, Header, Content } from "./style";
import { ActionCreators } from "./store";
class Detail extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, content } = this.props;

    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetail(this.props.location.search);
  }
}
const mapState = (state) => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"]),
  };
};
const mapDispatch = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(ActionCreators.getDetail(id));
    },
  };
};

export default connect(mapState, mapDispatch)(Detail);
