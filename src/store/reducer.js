import { combineReducers } from "redux-immutable";
import { Reducer as HeaderReducer } from "./../common/header/store";
import { Reducer as HomeReducer } from "./../page/Home/store";
import { Reducer as DetailReducer } from "./../page/Detail/store";
import { Reducer as LoginReducer } from "./../page/Login/store";
const reducer = combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer,
  login: LoginReducer,
});

export default reducer;
