import { fromJS } from "immutable";
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl: "123",
    },
    {
      id: 2,
      title: "社会洞察",
      imgUrl: "2222223",
    },
  ],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
