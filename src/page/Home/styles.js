import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HoemLefr = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 240px;
  }
`;

export const HoemRight = styled.div`
  width: 240px;
  height: 300px;
  float: right;
  margin: 0 auto;
  background: red;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  margin-bottom: 18px;
  margin-left: 18px;
  padding-right: 10px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
