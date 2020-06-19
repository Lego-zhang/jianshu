import axios from "axios";
import { fromJS } from "immutable";
import { CHANGE_DETAIL } from "./constants";

const change_detail = (data) => ({
  type: CHANGE_DETAIL,
  data,
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:9091/api/detail.json${id}`).then(
        (res)=>{
            dispatch(change_detail(res.data.data))
        }
    );
  };
};