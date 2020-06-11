import { fromJS } from "immutable";
import { CHANGE_HOME_DATA, ADD_HOME_lIST } from "./constants";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  RecommendList: [],
  articlePage: 1,
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
    case ADD_HOME_lIST:
      // return state.set(
      //   "articleList",
      //   state.get("articleList").concat(action.list)
      // );
      console.log(action.page)
      return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.page,
      });
    default:
      return state;
  }
};
