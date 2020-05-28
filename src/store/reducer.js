import { combineReducers } from "redux-immutable";
import { Reducer as headerReducer} from "./../common/header/store";

const reducer = combineReducers({
  header: headerReducer,
});

export default reducer;
