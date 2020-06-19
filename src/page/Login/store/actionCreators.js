import axios from "axios";
import { fromJS } from "immutable";
import { CHANGE_LOGIN ,CHANGE_LOGOUT} from "./constants";

const changLogin = (data) => ({
  type: CHANGE_LOGIN,
  data: true,
});
const changLogout = (data) => ({
  type: CHANGE_LOGOUT,
  data: false,
});

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`http://localhost:9091/api/login.json`).then((res) => {
      if (res.data.data) {
        dispatch(changLogin());
      } else {
        alert("登录失败");
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(changLogout(false));
  };
};
