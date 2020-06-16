import { fromJS } from "immutable";
import { CHANGE_HOME_DATA, ADD_HOME_lIST, TOGGLE_TOP_SHOW } from "./constants";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  RecommendList: [],
  articlePage: 1,
  showScroll: true,
});
const changeHoemData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.data.topicList),
    articleList: fromJS(action.data.articleList),
    RecommendList: fromJS(action.data.recommendList),
  });
};

const addHomeList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    articlePage: action.nextPage,
  });
};
const toggleTopShow = (state, action) => {
  return state.set("showScroll", action.show);
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return changeHoemData(state, action);
    case ADD_HOME_lIST:
      return addHomeList(state, action);

    case TOGGLE_TOP_SHOW:
      return toggleTopShow(state, action);
    default:
      return state;
  }
};
