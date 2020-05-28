import { combineReducers } from "redux";
import { Reducer as headerReducer} from "./../common/header/store";

const reducer = combineReducers({
  header: headerReducer,
});

export default reducer;
