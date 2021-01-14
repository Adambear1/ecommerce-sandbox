import axios from "axios";
export default {
  getData: () => {
    return axios.get("https://jsonplaceholder.typicode.com/photos?_limit=30");
  },
  getPictures: (country) => {
    return axios.get(
      "https://api.unsplash.com/search/photos?client_id=3nUL1r0uSBvUgbUAwGNZEkIL_GLAcfsF95Z_RsnEDro&query=" +
        country
    );
  },
};
