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
  articleList: [
    {
      id: "12",
      title: "我摆地摊，最惨痛的教训",
      desc:
        "我摆地摊，最惨痛的教训 曾经，我摆过一次摊，在龙眼丰收的7月里，进了30斤新鲜龙眼，进货价3元一斤，打算以5元单价出售。 找了个人流量大的道路旁，铺开一张堑子，挑选一些...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/14282553-db93ef72e5393736.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
    },
    {
      id: "13",
      title: "我摆地摊，最惨痛的教训",
      desc:
        "我摆地摊，最惨痛的教训 曾经，我摆过一次摊，在龙眼丰收的7月里，进了30斤新鲜龙眼，进货价3元一斤，打算以5元单价出售。 找了个人流量大的道路旁，铺开一张堑子，挑选一些...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/14282553-db93ef72e5393736.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
    },
    {
      id: "14",
      title: "我摆地摊，最惨痛的教训",
      desc:
        "我摆地摊，最惨痛的教训 曾经，我摆过一次摊，在龙眼丰收的7月里，进了30斤新鲜龙眼，进货价3元一斤，打算以5元单价出售。 找了个人流量大的道路旁，铺开一张堑子，挑选一些...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/14282553-db93ef72e5393736.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
    },
    {
      id: "15",
      title: "我摆地摊，最惨痛的教训",
      desc:
        "我摆地摊，最惨痛的教训 曾经，我摆过一次摊，在龙眼丰收的7月里，进了30斤新鲜龙眼，进货价3元一斤，打算以5元单价出售。 找了个人流量大的道路旁，铺开一张堑子，挑选一些...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/14282553-db93ef72e5393736.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
    },
  ],
  RecommendList: [
    {
      id: 1,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
    },
    {
      id: 2,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    },
    {
      id: 3,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    },
    {
      id: 4,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png",
    },
  ],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
