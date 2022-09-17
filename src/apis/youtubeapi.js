import axios from "axios";
const KEY = "AIzaSyDXMwFyn2Smzt322Mn6zrTr8SNgQFeaA0U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});