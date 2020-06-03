import { constants } from "./index";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});
export const MounseEnter = () => ({
  type: constants.MOUNSE_ENTER,
});
export const MounseLeave = () => ({
  type: constants.MOUNSE_LEAVE,
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5001/api/todolist.json")
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};

export const ChangePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
});
