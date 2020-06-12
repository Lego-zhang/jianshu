import { fromJS } from "immutable";
import { CHANGE_HOME_DATA, ADD_HOME_lIST, TOGGLE_TOP_SHOW } from "./constants";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  RecommendList: [],
  articlePage: 1,
  showScroll: true,
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
      return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.page,
      });

    case TOGGLE_TOP_SHOW:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
