import axios from "axios";
import { fromJS } from "immutable";
import { CHANGE_HOME_DATA, ADD_HOME_lIST } from "./constants";
const changeHomeData = (data) => ({
  type: CHANGE_HOME_DATA,
  data,
});
const addHomeList = (list, page) => ({
  type: ADD_HOME_lIST,
  list: fromJS(list),
  nextPage: page,
});
export const getHomeData = () => {
  return (dispatch) => {
    axios.get("http://localhost:5001/api/home.json").then((res) => {
      dispatch(changeHomeData(res.data.data));
    });
  };
};
export const getMoreList = (page) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5001/api/homeList.json?page=${page}`)
      .then((res) => {
        dispatch(addHomeList(res.data.data, page));
      });
  };
};
