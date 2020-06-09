import { combineReducers } from "redux-immutable";
import { Reducer as headerReducer } from "./../common/header/store";
import { Reducer as homeReducer } from "./../page/Home/store";
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
});

export default reducer;
