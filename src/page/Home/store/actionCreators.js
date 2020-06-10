import axios from "axios";
import { CHANGE_HOME_DATA } from "./constants";
const changeHomeData = (data) => ({
  type: CHANGE_HOME_DATA,
  data,
});
export const getHomeData = () => {
  return (dispatch) => {
    axios.get("http://localhost:5001/api/home.json").then((res) => {
      dispatch(changeHomeData(res.data.data));
    });
  };
};
