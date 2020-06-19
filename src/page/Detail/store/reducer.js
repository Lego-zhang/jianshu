import { fromJS } from "immutable";
import { CHANGE_DETAIL } from "./constants";
const defaultState = fromJS({
  title: "",
  content: "",
});

const chanegeDetail = (state, action) => {
  console.log(action.data)
  return state.merge({
    title: action.data.title,
    content: action.data.content,
  });
};

// const toggleTopShow = (state, action) => {
//   return state.set("showScroll", action.show);
// };

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DETAIL:
      return chanegeDetail(state, action);
    default:
      return state;
  }
};
