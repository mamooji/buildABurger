import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-react-f0056.firebaseio.com/",
});

export default instance;
