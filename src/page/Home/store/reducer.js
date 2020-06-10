import { fromJS } from "immutable";
import { CHANGE_HOME_DATA } from "./constants";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  RecommendList: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      console.log(action.data);
      return state.merge({
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        RecommendList: fromJS(action.data.recommendList),
      });
    default:
      return state;
  }
};
