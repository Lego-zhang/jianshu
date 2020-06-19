import { fromJS } from "immutable";
import { CHANGE_LOGIN, CHANGE_LOGOUT } from "./constants";
const defaultState = fromJS({
  login: false,
});

const changeLogin = (state, action) => {
  return state.set("login", action.data);
};
const changeLogout = (state, action) => {
  return state.set("login", action.data);
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return changeLogin(state, action);
    case CHANGE_LOGOUT:
      return changeLogout(state, action);
    default:
      return state;
  }
};
