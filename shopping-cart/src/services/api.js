import axios from "axios";

const api = axios.create({
  baseURL: "https://shielded-wildwood-82973.herokuapp.com/"
});

export default api;
