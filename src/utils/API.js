import axios from "axios";
export default {
  getData: () => {
    return axios.get("https://jsonplaceholder.typicode.com/photos?_limit=30");
  },
};
